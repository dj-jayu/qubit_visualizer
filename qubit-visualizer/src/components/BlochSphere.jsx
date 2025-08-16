// src/components/BlochSphere.jsx

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { amplitudesToBloch } from '../lib/utils';

// This helper is only used by BlochSphere, so it can stay here.
function makeLabelSprite(text, color = "#e5e7eb") {
  const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    ctx.font = "bold 180px Inter, Arial, sans-serif";
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
    sprite.scale.set(0.3, 0.3, 1);
    return sprite;
}

export default function BlochSphere({ alpha, beta, vectorColor = 0xfbbf24 }) {
    const mountRef = useRef(null);
    const vectorRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);

  // setup scene once
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(2.5, 1.5, 3.5);

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

    // axis labels: x,y,z
    const labels = new THREE.Group();
    const labelX = makeLabelSprite("x", "#f87171");
    const labelY = makeLabelSprite("y", "#34d399");
    const labelZ = makeLabelSprite("z", "#60a5fa");
    labelX.position.set(1.45, 0, 0);
    labelZ.position.set(0, 1.45, 0);
    labelY.position.set(0, 0, 1.45);
    labels.add(labelX, labelY, labelZ);
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

    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      controls.update();
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

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [vectorColor]);

    // update vector on amplitude change
    useEffect(() => {
      if (!vectorRef.current) return;
      const target = amplitudesToBloch(alpha, beta);
      // orient +Y to target
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), target);
      vectorRef.current.quaternion.copy(q);
    }, [alpha, beta]);

  return <div ref={mountRef} className="bloch-sphere-container w-full min-h-[380px] h-[45vh]" />;
}