// src/components/BlochSphere.jsx

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { amplitudesToBloch } from '../lib/utils';

const UP = new THREE.Vector3(0, 1, 0);

// Convert a Bloch-space vector {x, y, z} to the scene's coordinate system
// (Y-up, with the Bloch z-axis pointing up). Matches amplitudesToBloch.
function blochToScene({ x, y, z }) {
  return new THREE.Vector3(x, z, -y);
}

function makeLabelSprite(text, color = "#e5e7eb", fontSize = 180, scaleXY = 0.3) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.font = `bold ${fontSize}px Inter, Arial, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = 16;
  ctx.strokeStyle = "rgba(0,0,0,0.6)";
  ctx.fillStyle = color;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2 + 12;
  ctx.strokeText(text, cx, cy);
  ctx.fillText(text, cx, cy);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: tex, transparent: true })
  );
  sprite.scale.set(scaleXY, scaleXY, 1);
  return sprite;
}

// A unit circle (radius 1) lying in one of the scene's principal planes.
function makeCircle(plane, color, opacity, segments = 96) {
  const pts = [];
  for (let i = 0; i < segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    const c = Math.cos(a), s = Math.sin(a);
    if (plane === "xz") pts.push(new THREE.Vector3(c, 0, s));      // equator
    else if (plane === "xy") pts.push(new THREE.Vector3(c, s, 0)); // meridian
    else pts.push(new THREE.Vector3(0, c, s));                     // meridian
  }
  const geom = new THREE.BufferGeometry().setFromPoints(pts);
  const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
  return new THREE.LineLoop(geom, mat);
}

// A small curved arrow encircling `blochAxis`, pointing in the positive
// (right-hand-rule) rotation direction, plus a faint line along the axis.
// Built directly in scene space; positive t goes u→v with u×v = axis direction.
function makeSpinArrow(blochAxis, color = 0x67e8f9) {
  const d = blochToScene(blochAxis).normalize();
  const helper = Math.abs(d.x) > 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
  const u = new THREE.Vector3().crossVectors(helper, d).normalize();
  const v = new THREE.Vector3().crossVectors(d, u).normalize(); // u × v = d
  const center = d.clone().multiplyScalar(1.18);
  const R = 0.22;
  const segs = 48;
  const tEnd = Math.PI * 1.6; // leave a gap so the arrowhead reads clearly
  const pts = [];
  for (let i = 0; i <= segs; i++) {
    const t = tEnd * (i / segs);
    pts.push(center.clone().addScaledVector(u, R * Math.cos(t)).addScaledVector(v, R * Math.sin(t)));
  }

  const group = new THREE.Group();
  group.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.95 })
  ));

  // arrowhead at the arc end, aligned with the tangent (positive direction)
  const tangent = u.clone().multiplyScalar(-Math.sin(tEnd)).addScaledVector(v, Math.cos(tEnd)).normalize();
  const cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.05, 0.13, 12),
    new THREE.MeshBasicMaterial({ color })
  );
  cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent);
  cone.position.copy(pts[pts.length - 1]);
  group.add(cone);

  // faint full axis line for context
  group.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([d.clone().multiplyScalar(-1.3), d.clone().multiplyScalar(1.3)]),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.3 })
  ));
  return group;
}

export default function BlochSphere({ alpha, beta, vectorColor = 0xfbbf24, rotationAxis = null, onPickState, spinAxis = null }) {
  const mountRef = useRef(null);
  // Keep the latest onPickState in a ref so the click handler (created once in
  // the setup effect) always calls the current callback.
  const onPickRef = useRef(onPickState);
  useEffect(() => { onPickRef.current = onPickState; }, [onPickState]);
  const vectorRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const targetQuatRef = useRef(new THREE.Quaternion());
  const initializedRef = useRef(false);
  const axisRef = useRef(null);
  const spinRef = useRef(null);

  // setup scene once
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    initializedRef.current = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    // classic textbook view: z up, x toward the viewer-left, y to the right
    camera.position.set(2.8, 1.9, -2.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controlsRef.current = controls;

    // sphere wireframe
    const sph = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x4f46e5, wireframe: true, transparent: true, opacity: 0.2 })
    );
    scene.add(sph);

    // equator + two meridian great circles
    scene.add(makeCircle("xz", 0x6366f1, 0.4)); // equator
    scene.add(makeCircle("xy", 0x4f46e5, 0.15));
    scene.add(makeCircle("yz", 0x4f46e5, 0.15));

    // axes lines (±X, ±Y, ±Z)
    const positions = [
      -1.3, 0, 0, 1.3, 0, 0, // X
      0, -1.3, 0, 0, 1.3, 0, // Y (up)
      0, 0, -1.3, 0, 0, 1.3, // Z (forward)
    ];
    const colors = [
      1, 0.2, 0.2, 1, 0.2, 0.2, // red-ish X
      0.2, 1, 0.2, 0.2, 1, 0.2, // green-ish Z label maps later
      0.2, 0.2, 1, 0.2, 0.2, 1, // blue-ish Y
    ];
    const axesGeom = new THREE.BufferGeometry();
    axesGeom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    axesGeom.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    scene.add(new THREE.LineSegments(axesGeom, new THREE.LineBasicMaterial({ vertexColors: true })));

    // eigenstate labels at the six axis tips, colored to match their axes.
    // (z = |0⟩/|1⟩, x = |+⟩/|−⟩ red, y = |i⟩/|−i⟩ blue)
    const labels = new THREE.Group();
    const addKet = (text, color, x, y, z, key) => {
      const sprite = makeLabelSprite(text, color, 96, 0.5);
      sprite.position.set(x, y, z);
      sprite.userData.stateKey = key; // matches the preset keys in App
      labels.add(sprite);
    };
    addKet("|0⟩", "#e2e8f0", 0, 1.5, 0, "0");
    addKet("|1⟩", "#e2e8f0", 0, -1.5, 0, "1");
    addKet("|+⟩", "#f87171", 1.5, 0, 0, "+");
    addKet("|-⟩", "#f87171", -1.5, 0, 0, "-");
    addKet("|i⟩", "#60a5fa", 0, 0, -1.5, "i");
    addKet("|-i⟩", "#60a5fa", 0, 0, 1.5, "-i");
    scene.add(labels);

    // state vector (cylinder + cone)
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 1, 8),
      new THREE.MeshBasicMaterial({ color: vectorColor })
    );
    body.position.y = 0.5;
    const head = new THREE.Mesh(
      new THREE.ConeGeometry(0.06, 0.15, 8),
      new THREE.MeshBasicMaterial({ color: vectorColor })
    );
    head.position.y = 1;
    const stateVector = new THREE.Group();
    stateVector.add(body);
    stateVector.add(head);
    scene.add(stateVector);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    vectorRef.current = stateVector;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      controls.update();
      const vec = vectorRef.current;
      if (vec) {
        // Smoothly rotate the state vector toward its target orientation.
        if (reduceMotion) vec.quaternion.copy(targetQuatRef.current);
        else vec.quaternion.slerp(targetQuatRef.current, 0.25);
      }
      renderer.render(scene, camera);
    };
    animate();

    // responsive resize
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (!width || !height) continue;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    ro.observe(container);

    // --- clickable eigenstate labels (active only when onPickState is set) ---
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let downX = 0, downY = 0;
    const labelsAt = (clientX, clientY) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      return raycaster.intersectObjects(labels.children, false);
    };
    const onDomDown = (ev) => { downX = ev.clientX; downY = ev.clientY; };
    const onDomUp = (ev) => {
      if (!onPickRef.current) return;
      if (Math.hypot(ev.clientX - downX, ev.clientY - downY) > 6) return; // ignore drags
      const hits = labelsAt(ev.clientX, ev.clientY);
      if (hits.length) onPickRef.current(hits[0].object.userData.stateKey);
    };
    const onDomMove = (ev) => {
      if (!onPickRef.current || ev.buttons !== 0) return; // skip while orbiting
      renderer.domElement.style.cursor = labelsAt(ev.clientX, ev.clientY).length ? "pointer" : "default";
    };
    renderer.domElement.addEventListener("pointerdown", onDomDown);
    renderer.domElement.addEventListener("pointerup", onDomUp);
    renderer.domElement.addEventListener("pointermove", onDomMove);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onDomDown);
      renderer.domElement.removeEventListener("pointerup", onDomUp);
      renderer.domElement.removeEventListener("pointermove", onDomMove);
      controls.dispose();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); });
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [vectorColor]);

  // update target orientation on amplitude change (animated in the render loop)
  useEffect(() => {
    if (!vectorRef.current) return;
    const target = new THREE.Quaternion().setFromUnitVectors(UP, amplitudesToBloch(alpha, beta));
    targetQuatRef.current = target;
    // Snap (no animation) the first time, so we don't sweep in from |0⟩ on mount.
    if (!initializedRef.current) {
      vectorRef.current.quaternion.copy(target);
      initializedRef.current = true;
    }
  }, [alpha, beta]);

  // draw / update the rotation axis the current gate rotates around
  const axisX = rotationAxis?.x;
  const axisY = rotationAxis?.y;
  const axisZ = rotationAxis?.z;
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (axisRef.current) {
      scene.remove(axisRef.current);
      axisRef.current.geometry.dispose();
      axisRef.current.material.dispose();
      axisRef.current = null;
    }

    if (axisX == null || axisY == null || axisZ == null) return;

    const dir = blochToScene({ x: axisX, y: axisY, z: axisZ }).normalize().multiplyScalar(1.25);
    const geom = new THREE.BufferGeometry().setFromPoints([
      dir.clone().multiplyScalar(-1),
      dir.clone(),
    ]);
    const mat = new THREE.LineBasicMaterial({ color: 0xfafafa, transparent: true, opacity: 0.7 });
    const line = new THREE.Line(geom, mat);
    scene.add(line);
    axisRef.current = line;
  }, [axisX, axisY, axisZ]);

  // draw / update the curved "spin" arrow for axis-rotation gates
  const spinX = spinAxis?.x;
  const spinY = spinAxis?.y;
  const spinZ = spinAxis?.z;
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (spinRef.current) {
      scene.remove(spinRef.current);
      spinRef.current.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
      spinRef.current = null;
    }

    if (spinX == null || spinY == null || spinZ == null) return;

    const group = makeSpinArrow({ x: spinX, y: spinY, z: spinZ });
    scene.add(group);
    spinRef.current = group;
  }, [spinX, spinY, spinZ]);

  return <div ref={mountRef} className="bloch-sphere-container w-full flex-1 min-h-0" />;
}
