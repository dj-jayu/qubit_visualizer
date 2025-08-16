import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MathJax, MathJaxContext } from "better-react-mathjax";

/*
  React refactor of the "Interactive Qubit Gate Visualization" demo.
  - Single-file component (Vite-ready). Default export below.
  - Uses Tailwind utility classes for styling (works in ChatGPT preview).
  - 3D via three.js; LaTeX via better-react-mathjax.

  To run locally with Vite:
    npm create vite@latest qubit-visualizer -- --template react
    cd qubit-visualizer
    npm i three better-react-mathjax
    # (Optional) Tailwind via CDN: add <script src="https://cdn.tailwindcss.com"></script> in index.html
    npm run dev

  Notes:
  - All angle state is stored in radians. The UI can display in degrees via the unit toggle.
  - Bloch vector is oriented by quaternion aligning +Y to target vector (as in the original).
*/

// -------------------- Utilities --------------------
const PI = Math.PI;
const TAU = 2 * PI;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d) : "—");
const radToDeg = (r) => (r * 180) / PI;

function probText(a, b) {
  const p0 = (a.re * a.re + a.im * a.im).toFixed(3);
  const p1 = (b.re * b.re + b.im * b.im).toFixed(3);
  return `|0⟩=${p0}, |1⟩=${p1}`;
}

function complex(re = 0, im = 0) {
  return { re, im };
}

function cMul(a, b) {
  return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re };
}

function cAdd(a, b) {
  return { re: a.re + b.re, im: a.im + b.im };
}

function cScale(a, s) {
  return { re: a.re * s, im: a.im * s };
}

function polar(mag, phase) {
  return { re: mag * Math.cos(phase), im: mag * Math.sin(phase) };
}

// Bloch coordinates from amplitudes
function amplitudesToBloch(alpha, beta) {
  const z = alpha.re * alpha.re + alpha.im * alpha.im - (beta.re * beta.re + beta.im * beta.im);
  const x = 2 * (alpha.re * beta.re + alpha.im * beta.im);
  const y = 2 * (alpha.im * beta.re - alpha.re * beta.im);
  // Render space uses X right, Y up, Z toward camera, so we flip y -> -y on Z axis
  return new THREE.Vector3(x, z, -y).normalize();
}

// Snap helper for angles on certain gates/params
function snapAngle(value, points = [0, PI / 2, PI, (3 * PI) / 2, TAU], threshold = 0.22) {
  for (const p of points) {
    if (Math.abs(value - p) < threshold) return p;
  }
  return value;
}

// -------------------- 2D Complex Plane Canvas --------------------
function ComplexPlaneCanvas({ vector, color = "#fbbf24", size = 120 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const scale = w / 2.2;

    ctx.clearRect(0, 0, w, h);

    // axes
    ctx.beginPath();
    ctx.strokeStyle = "#4b5563"; // slate-600
    ctx.lineWidth = 1;
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, h);
    ctx.stroke();

    // labels
    ctx.fillStyle = "#6b7280"; // slate-500
    ctx.font = "10px sans-serif";
    ctx.fillText("Re", w - 15, cy - 5);
    ctx.fillText("Im", cx + 5, 12);

    // vector
    const mag = Math.hypot(vector.re, vector.im);
    if (mag < 0.01) {
      ctx.beginPath();
      ctx.arc(cx, cy, 2, 0, TAU);
      ctx.fillStyle = color;
      ctx.fill();
      return;
    }

    const ex = cx + vector.re * scale;
    const ey = cy - vector.im * scale;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // arrow head
    const ang = Math.atan2(ey - cy, ex - cx);
    ctx.beginPath();
    ctx.moveTo(ex, ey);
    ctx.lineTo(ex - 10 * Math.cos(ang - PI / 6), ey - 10 * Math.sin(ang - PI / 6));
    ctx.lineTo(ex - 10 * Math.cos(ang + PI / 6), ey - 10 * Math.sin(ang + PI / 6));
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }, [vector, color, size]);

  return (
    <div className="canvas-container" style={{ width: size, height: size }}>
      <canvas ref={ref} width={size} height={size} />
    </div>
  );
}

// -------------------- Three.js Bloch Sphere --------------------
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

function BlochSphere({ alpha, beta, vectorColor = 0xfbbf24 }) {
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

// -------------------- Gate definitions & math --------------------
const GATE_INFO = {
  RV: {
    nameLatex: "R(\\vec{v})",
    matrix: String.raw`$$R(\vec{v}) = \begin{pmatrix} c - i n_z s & -n_y s - i n_x s \\ n_y s - i n_x s & c + i n_z s \end{pmatrix}$$ <div class="text-xs mt-2">\(c=\cos(\tfrac{\|\vec{v}\|}{2}), s=\sin(\tfrac{\|\vec{v}\|}{2}), n_k = v_k/\|\vec{v}\|\)</div>`,
    alphaEq: String.raw`\(\alpha' = (c - i n_z s)\alpha + (-n_y s - i n_x s)\beta\)`,
    betaEq: String.raw`\(\beta' = (n_y s - i n_x s)\alpha + (c + i n_z s)\beta\)`,
    alphaTerm1: String.raw`\((c - i n_z s)\alpha\)`,
    alphaTerm2: String.raw`\((-n_y s - i n_x s)\beta\)`,
    betaTerm1: String.raw`\((n_y s - i n_x s)\alpha\)`,
    betaTerm2: String.raw`\((c + i n_z s)\beta\)`,
    params: [
      { id: "vx", label: "v_x", min: -4, max: 4 },
      { id: "vy", label: "v_y", min: -4, max: 4 },
      { id: "vz", label: "v_z", min: -4, max: 4 },
    ],
  },
  U: {
    nameLatex: "U(\\theta,\\phi,\\lambda)",
    matrix: String.raw`$$U = \begin{pmatrix} \cos(\theta/2) & -e^{i\lambda}\sin(\theta/2) \\ e^{i\phi}\sin(\theta/2) & e^{i(\phi+\lambda)}\cos(\theta/2) \end{pmatrix}$$`,
    alphaEq: String.raw`\(\alpha' = \alpha\cos(\theta/2) - \beta e^{i\lambda}\sin(\theta/2)\)`,
    betaEq: String.raw`\(\beta' = \alpha e^{i\phi}\sin(\theta/2) + \beta e^{i(\phi+\lambda)}\cos(\theta/2)\)`,
    alphaTerm1: String.raw`\(\alpha\cos(\theta/2)\)`,
    alphaTerm2: String.raw`\(-\beta e^{i\lambda}\sin(\theta/2)\)`,
    betaTerm1: String.raw`\(\alpha e^{i\phi}\sin(\theta/2)\)`,
    betaTerm2: String.raw`\(\beta e^{i(\phi+\lambda)}\cos(\theta/2)\)`,
    params: [
      { id: "theta", label: "\\theta", min: 0, max: TAU },
      { id: "phi", label: "\\phi", min: 0, max: TAU },
      { id: "lambda", label: "\\lambda", min: 0, max: TAU },
    ],
  },
  P: {
    nameLatex: "P(\\theta)",
    matrix: String.raw`$$P(\theta) = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\theta} \end{pmatrix}$$`,
    alphaEq: String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,
    betaEq: String.raw`\(\beta' = (0)\alpha + (e^{i\theta})\beta\)`,
    alphaTerm1: String.raw`\((1)\alpha\)`,
    alphaTerm2: String.raw`\((0)\beta\)`,
    betaTerm1: String.raw`\((0)\alpha\)`,
    betaTerm2: String.raw`\((e^{i\theta})\beta\)`,
    params: [{ id: "theta", label: "\\theta", min: 0, max: TAU }],
  },
  R: {
    nameLatex: "R(\\theta,\\phi)",
    matrix: String.raw`$$R(\theta, \phi) = \begin{pmatrix} \cos(\theta/2) & -ie^{-i\phi}\sin(\theta/2) \\ -ie^{i\phi}\sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,
    alphaEq: String.raw`\(\alpha' = \alpha\cos(\theta/2) -i\beta e^{-i\phi}\sin(\theta/2)\)`,
    betaEq: String.raw`\(\beta' = -i\alpha e^{i\phi}\sin(\theta/2) + \beta\cos(\theta/2)\)`,
    alphaTerm1: String.raw`\(\alpha\cos(\theta/2)\)`,
    alphaTerm2: String.raw`\(-i\beta e^{-i\phi}\sin(\theta/2)\)`,
    betaTerm1: String.raw`\(-i\alpha e^{i\phi}\sin(\theta/2)\)`,
    betaTerm2: String.raw`\(\beta\cos(\theta/2)\)`,
    params: [
      { id: "theta", label: "\\theta", min: 0, max: TAU },
      { id: "phi", label: "\\phi", min: 0, max: TAU },
    ],
  },
  Rx: {
    nameLatex: "R_x(\\theta)",
    matrix: String.raw`$$R_x(\theta) = \begin{pmatrix} \cos(\theta/2) & -i\sin(\theta/2) \\ -i\sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,
    alphaEq: String.raw`\(\alpha' = \alpha \cos(\theta/2) - i\beta \sin(\theta/2)\)`,
    betaEq: String.raw`\(\beta' = -i\alpha \sin(\theta/2) + \beta \cos(\theta/2)\)`,
    alphaTerm1: String.raw`\(\alpha \cos(\theta/2)\)`,
    alphaTerm2: String.raw`\(-i\beta \sin(\theta/2)\)`,
    betaTerm1: String.raw`\(-i\alpha \sin(\theta/2)\)`,
    betaTerm2: String.raw`\(\beta \cos(\theta/2)\)`,
    params: [{ id: "theta", label: "\\theta", min: 0, max: TAU }],
  },
  Ry: {
    nameLatex: "R_y(\\theta)",
    matrix: String.raw`$$R_y(\theta) = \begin{pmatrix} \cos(\theta/2) & -\sin(\theta/2) \\ \sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,
    alphaEq: String.raw`\(\alpha' = \alpha \cos(\theta/2) - \beta \sin(\theta/2)\)`,
    betaEq: String.raw`\(\beta' = \alpha \sin(\theta/2) + \beta \cos(\theta/2)\)`,
    alphaTerm1: String.raw`\(\alpha \cos(\theta/2)\)`,
    alphaTerm2: String.raw`\(-\beta \sin(\theta/2)\)`,
    betaTerm1: String.raw`\(\alpha \sin(\theta/2)\)`,
    betaTerm2: String.raw`\(\beta \cos(\theta/2)\)`,
    params: [{ id: "theta", label: "\\theta", min: 0, max: TAU }],
  },
  Rz: {
    nameLatex: "R_z(\\theta)",
    matrix: String.raw`$$R_z(\theta) = \begin{pmatrix} e^{-i\theta/2} & 0 \\ 0 & e^{i\theta/2} \end{pmatrix}$$`,
    alphaEq: String.raw`\(\alpha' = e^{-i\theta/2} \alpha\)`,
    betaEq: String.raw`\(\beta' = e^{i\theta/2} \beta\)`,
    alphaTerm1: String.raw`\(e^{-i\theta/2} \alpha\)`,
    alphaTerm2: String.raw`\((0)\beta\)`,
    betaTerm1: String.raw`\((0)\alpha\)`,
    betaTerm2: String.raw`\(e^{i\theta/2} \beta\)`,
    params: [{ id: "theta", label: "\\theta", min: 0, max: TAU }],
  },
  X: {
    nameLatex: "X",
    matrix: String.raw`$$X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$`,
    params: [],
  },
  Y: {
    nameLatex: "Y",
    matrix: String.raw`$$Y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$`,
    params: [],
  },
  Z: {
    nameLatex: "Z",
    matrix: String.raw`$$Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$`,
    params: [],
  },
  S: {
    nameLatex: "S",
    matrix: String.raw`$$S = \begin{pmatrix} 1 & 0 \\ 0 & i \end{pmatrix}$$`,
    params: [],
  },
  T: {
    nameLatex: "T",
    matrix: String.raw`$$T = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{pmatrix}$$`,
    params: [],
  },
};

function computeGate(alpha, beta, gate) {
  const { type, theta, phi, lambda, vx, vy, vz } = gate;
  const cos_t2 = Math.cos((theta ?? 0) / 2);
  const sin_t2 = Math.sin((theta ?? 0) / 2);

  let a1 = complex();
  let a2 = complex();
  let b1 = complex();
  let b2 = complex();

  if (type === "RV") {
    const Vx = vx ?? 0,
      Vy = vy ?? 0,
      Vz = vz ?? 0;
    const norm = Math.hypot(Vx, Vy, Vz);
    if (norm < 1e-9) {
      a1 = { ...alpha };
      a2 = complex(0, 0);
      b1 = complex(0, 0);
      b2 = { ...beta };
    } else {
      const angle = norm;
      const c = Math.cos(angle / 2);
      const s = Math.sin(angle / 2);
      const nx = Vx / norm,
        ny = Vy / norm,
        nz = Vz / norm;
      const m00 = complex(c, -nz * s);
      const m01 = complex(-ny * s, -nx * s);
      const m10 = complex(ny * s, -nx * s);
      const m11 = complex(c, nz * s);
      a1 = cMul(m00, alpha);
      a2 = cMul(m01, beta);
      b1 = cMul(m10, alpha);
      b2 = cMul(m11, beta);
    }
  } else if (type === "U") {
    const e_ilambda = complex(Math.cos(lambda ?? 0), Math.sin(lambda ?? 0));
    const neg_e_ilambda = complex(-e_ilambda.re, -e_ilambda.im);
    const e_iphi = complex(Math.cos(phi ?? 0), Math.sin(phi ?? 0));
    const e_iphi_lambda = complex(
      Math.cos((phi ?? 0) + (lambda ?? 0)),
      Math.sin((phi ?? 0) + (lambda ?? 0))
    );
    a1 = cScale(alpha, cos_t2);
    a2 = cMul(cScale(neg_e_ilambda, sin_t2), beta);
    b1 = cMul(cScale(e_iphi, sin_t2), alpha);
    b2 = cMul(cScale(e_iphi_lambda, cos_t2), beta);
  } else if (type === "P") {
    const e_itheta = complex(Math.cos(theta ?? 0), Math.sin(theta ?? 0));
    a1 = { ...alpha };
    a2 = complex(0, 0);
    b1 = complex(0, 0);
    b2 = cMul(e_itheta, beta);
  } else if (type === "R") {
    // R(θ, φ)
    const neg_ie_neg_iphi = complex(-Math.sin(phi ?? 0), -Math.cos(phi ?? 0)); // -i e^{-iφ}
    const neg_ie_iphi = complex(Math.sin(phi ?? 0), -Math.cos(phi ?? 0)); // -i e^{iφ}
    a1 = cScale(alpha, cos_t2);
    a2 = cMul(cScale(neg_ie_neg_iphi, sin_t2), beta);
    b1 = cMul(cScale(neg_ie_iphi, sin_t2), alpha);
    b2 = cScale(beta, cos_t2);
  } else {
    // rotations and Paulis
    let tempTheta = 0;
    if (["Rx", "Ry", "Rz"].includes(type)) tempTheta = theta ?? 0;
    else if (["X", "Y"].includes(type)) tempTheta = PI;
    else tempTheta = 0;

    const c = Math.cos(tempTheta / 2);
    const s = Math.sin(tempTheta / 2);

    if (type === "Rx") {
      a1 = cScale(alpha, c);
      a2 = complex(beta.im * s, -beta.re * s);
      b1 = complex(alpha.im * s, -alpha.re * s);
      b2 = cScale(beta, c);
    } else if (type === "Ry") {
      a1 = cScale(alpha, c);
      a2 = cScale(beta, -s);
      b1 = cScale(alpha, s);
      b2 = cScale(beta, c);
    } else if (type === "Rz") {
      const exp_neg_it2 = complex(c, -s);
      const exp_pos_it2 = complex(c, s);
      a1 = cMul(exp_neg_it2, alpha);
      a2 = complex(0, 0);
      b1 = complex(0, 0);
      b2 = cMul(exp_pos_it2, beta);
    } else if (type === "X") {
      a1 = complex(0, 0);
      a2 = { ...beta };
      b1 = { ...alpha };
      b2 = complex(0, 0);
    } else if (type === "Y") {
      a1 = complex(0, 0);
      a2 = complex(beta.im, -beta.re);
      b1 = complex(-alpha.im, alpha.re);
      b2 = complex(0, 0);
    } else if (type === "Z") {
      a1 = { ...alpha };
      a2 = complex(0, 0);
      b1 = complex(0, 0);
      b2 = complex(-beta.re, -beta.im);
    } else if (type === "S") {
      a1 = { ...alpha };
      a2 = complex(0, 0);
      b1 = complex(0, 0);
      b2 = complex(-beta.im, beta.re); // multiply by i
    } else if (type === "T") {
      const inv_sqrt2 = 1 / Math.sqrt(2);
      a1 = { ...alpha };
      a2 = complex(0, 0);
      b1 = complex(0, 0);
      b2 = complex((beta.re - beta.im) * inv_sqrt2, (beta.re + beta.im) * inv_sqrt2); // e^{iπ/4}
    }
  }

  const finalAlpha = cAdd(a1, a2);
  const finalBeta = cAdd(b1, b2);
  return { a1, a2, b1, b2, finalAlpha, finalBeta };
}

// -------------------- Main Component --------------------
export default function QubitGateVisualizer() {
  const [angleUnit, setAngleUnit] = useState("rad"); // 'rad' | 'deg'
  const [gate, setGate] = useState({ type: "Rz", theta: PI, phi: 0, lambda: 0, vx: 1, vy: 0, vz: 0 });
  const [init, setInit] = useState({ magnitudeAngle: PI / 4, alphaPhase: 0, betaPhase: 0 }); // default |+>
  const [status, setStatus] = useState("");

  // Presets for initial state
  const presets = useMemo(
    () => ({
      "0": { magnitudeAngle: 0, alphaPhase: 0, betaPhase: 0 },
      "1": { magnitudeAngle: PI / 2, alphaPhase: 0, betaPhase: 0 },
      "+": { magnitudeAngle: PI / 4, alphaPhase: 0, betaPhase: 0 },
      "-": { magnitudeAngle: PI / 4, alphaPhase: 0, betaPhase: PI },
      i: { magnitudeAngle: PI / 4, alphaPhase: 0, betaPhase: PI / 2 },
      "-i": { magnitudeAngle: PI / 4, alphaPhase: 0, betaPhase: (3 * PI) / 2 },
    }),
    []
  );

  // Initial amplitudes from sliders
  const { alpha, beta } = useMemo(() => {
    const magA = Math.cos(init.magnitudeAngle);
    const magB = Math.sin(init.magnitudeAngle);
    return {
      alpha: polar(magA, init.alphaPhase),
      beta: polar(magB, init.betaPhase),
    };
  }, [init]);

  // Gate math
  const math = useMemo(() => computeGate(alpha, beta, gate), [alpha, beta, gate]);

  // UI helpers
  const currentGateInfo = GATE_INFO[gate.type];
  const gateParams = currentGateInfo?.params ?? [];
  const showAngleUnitsToggle = gateParams.some((p) => ["theta", "phi", "lambda"].includes(p.id));

  const displayAngle = (radians) => (angleUnit === "deg" ? `${fmt(radToDeg(radians), 1)}°` : `${fmt(radians, 2)} rad`);

  // Actions
  const onPreset = (key) => {
    const p = presets[key];
    if (!p) return;
    setInit(p);
    setStatus(`Preset ${key} selected.`);
  };

  const onRandomize = () => {
    setInit({
      magnitudeAngle: Math.random() * (PI / 2),
      alphaPhase: Math.random() * TAU,
      betaPhase: Math.random() * TAU,
    });

    setGate((g) => {
      const t = { ...g };
      if (["U", "R"].includes(g.type)) {
        t.theta = Math.random() * TAU;
        t.phi = Math.random() * TAU;
        t.lambda = g.type === "U" ? Math.random() * TAU : 0;
      } else if (["Rx", "Ry", "Rz", "P"].includes(g.type)) {
        t.theta = Math.random() * TAU;
        t.phi = 0;
        t.lambda = 0;
      } else if (g.type === "RV") {
        t.vx = (Math.random() * 2 - 1) * PI;
        t.vy = (Math.random() * 2 - 1) * PI;
        t.vz = (Math.random() * 2 - 1) * PI;
      }
      return t;
    });

    setStatus("Randomized parameters.");
  };

  const onReset = () => {
    setGate({ type: "Rz", theta: PI, phi: 0, lambda: 0, vx: 1, vy: 0, vz: 0 });
    onPreset("+");
    setStatus("Reset to Rz and |+⟩.");
  };

  // Sliders (initial state)
  const setInitField = (k, v) => setInit((s) => ({ ...s, [k]: v }));

  // Sliders (gate params)
  const setGateField = (k, v) => setGate((s) => ({ ...s, [k]: v }));

  const onGateParam = (id, value) => {
    let v = parseFloat(value);
    if (["Rx", "Ry", "Rz", "P", "R"].includes(gate.type) && ["theta", "phi"].includes(id)) {
      v = snapAngle(v);
    }
    setGateField(id, v);
  };

  // -------------------- Render --------------------
  return (
    <MathJaxContext
      version={3}
      config={{
        tex: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
          displayMath: [["$$", "$$"], ["\\[", "\\]"]],
        },
        loader: { load: ["input/tex", "output/chtml"] },
      }}
    >
      <div className="p-4 md:p-8 min-h-screen" style={{
        background:
          "radial-gradient(1200px 800px at 10% -10%, rgba(99,102,241,.14), transparent 60%)," +
          "radial-gradient(1000px 600px at 110% 0%, rgba(34,197,94,.10), transparent 60%)," +
          "#0b1220",
        color: "#e5e7eb",
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
      }}>
        <style>{`
          .panel{background:linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,0)) #111827;border:1px solid #334155;border-radius:1rem;padding:1rem;box-shadow:0 10px 30px rgba(0,0,0,.35)}
          .panel-header{display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem}
          .canvas-container{position:relative;background-color:#1f2937;border:1px solid #334155;border-radius:.75rem}
          .btn{background-color:#111827;border:1px solid #334155;color:#e5e7eb;padding:.5rem .8rem;border-radius:.625rem;transition:.15s;box-shadow:0 2px 0 rgba(0,0,0,.3) inset}
          .btn:hover{background-color:#1f2937}
          .btn.active{background:linear-gradient(180deg,rgba(99,102,241,.35),rgba(99,102,241,.15));border-color:#6366f1;color:white}
          input[type=range]{-webkit-appearance:none;appearance:none;background:transparent;width:100%}
          input[type=range]::-webkit-slider-runnable-track{height:.5rem;background:#374151;border-radius:9999px;border:1px solid #4b5563}
          input[type=range]::-moz-range-track{height:.5rem;background:#374151;border-radius:9999px;border:1px solid #4b5563}
          input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1rem;height:1rem;background:white;border-radius:9999px;margin-top:-.25rem;box-shadow:0 0 0 2px #6366f1 inset}
          input[type=range]::-moz-range-thumb{width:1rem;height:1rem;background:white;border:none;border-radius:9999px;box-shadow:0 0 0 2px #6366f1 inset}
        `}</style>

        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                <MathJax>{`Interactive $${currentGateInfo?.nameLatex ?? gate.type}$ Gate Visualization`}</MathJax>
              </h1>
              <p className="text-base md:text-lg text-slate-400 mt-2">
                <MathJax>{`Visualize how the $${currentGateInfo?.nameLatex ?? gate.type}$ gate transforms a qubit's state vector.`}</MathJax>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn" onClick={onReset}>Reset</button>
              <button className="btn" onClick={onRandomize}>Randomize</button>
            </div>
          </div>
          <div className="sr-only" aria-live="polite">{status}</div>
        </header>

        {/* Layout: Controls (left) + Viz (right) */}
        <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6 max-w-screen-2xl mx-auto">
          {/* Left Controls */}
          <aside className="xl:sticky xl:top-6 h-max space-y-6">
            {/* Initial state */}
            <section className="panel" aria-labelledby="custom-state-title">
              <div className="panel-header">
                <h3 id="custom-state-title" className="text-xl text-white">
                  <MathJax>{String.raw`1) Custom Initial State $(|\psi\rangle = \alpha|0\rangle + \beta|1\rangle)$`}</MathJax>
                </h3>
              </div>

              <div className="flex flex-col gap-3 p-1">
                {/* alpha phase */}
                <div className="flex items-center gap-4">
                  <p className="font-mono text-xl text-indigo-300 w-16 text-center">
                    <MathJax>{String.raw`$\alpha$`}</MathJax>
                  </p>
                  <div className="flex-grow">
                    <label className="block text-sm font-medium text-slate-300">
                      <MathJax>{String.raw`Phase $\phi_\alpha$`}</MathJax>
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={TAU}
                      step={0.01}
                      value={init.alphaPhase}
                      onChange={(e) => setInitField("alphaPhase", parseFloat(e.target.value))}
                    />
                    <span className="block text-right font-mono text-indigo-400 text-sm">{`${fmt(init.alphaPhase, 2)} rad`}</span>
                  </div>
                </div>

                {/* magnitudes */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 text-center">
                    Magnitudes
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={PI / 2}
                    step={0.01}
                    value={init.magnitudeAngle}
                    onChange={(e) => setInitField("magnitudeAngle", parseFloat(e.target.value))}
                  />
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-indigo-400">{`|α| = ${fmt(Math.cos(init.magnitudeAngle), 2)}`}</span>
                    <span className="text-teal-400">{`|β| = ${fmt(Math.sin(init.magnitudeAngle), 2)}`}</span>
                  </div>
                </div>

                {/* beta phase */}
                <div className="flex items-center gap-4">
                  <p className="font-mono text-xl text-teal-300 w-16 text-center">
                    <MathJax>{String.raw`$\beta$`}</MathJax>
                  </p>
                  <div className="flex-grow">
                    <label className="block text-sm font-medium text-slate-300">
                      <MathJax>{String.raw`Phase $\phi_\beta$`}</MathJax>
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={TAU}
                      step={0.01}
                      value={init.betaPhase}
                      onChange={(e) => setInitField("betaPhase", parseFloat(e.target.value))}
                    />
                    <span className="block text-right font-mono text-teal-400 text-sm">{`${fmt(init.betaPhase, 2)} rad`}</span>
                  </div>
                </div>

                {/* Presets */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-300 text-center mb-2">
                    Initial State Presets
                  </label>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {Object.keys(presets).map((k) => (
                      <button key={k} className={`btn ${init === presets[k] ? "active" : ""}`} onClick={() => onPreset(k)}>
                        <MathJax>{`$|${k}\rangle$`}</MathJax>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Gate selection + params */}
            <section className="panel" aria-labelledby="gate-select-title">
              <div className="panel-header">
                <h3 id="gate-select-title" className="text-xl text-white">2) Select Gate</h3>
              </div>

              <div className="flex flex-wrap gap-2 justify-center" id="gate-select-buttons">
                {Object.keys(GATE_INFO).map((key) => (
                  <button
                    key={key}
                    className={`btn ${gate.type === key ? "active" : ""}`}
                    onClick={() => {
                      const resets = { phi: 0, lambda: 0 };
                      const base = { ...gate, type: key, ...resets };
                      if (key === "RV") base.theta = 0;
                      setGate(base);
                      setStatus(`Gate ${key} selected.`);
                    }}
                  >
                    <MathJax>{`$${GATE_INFO[key].nameLatex}$`}</MathJax>
                  </button>
                ))}
              </div>

              {/* Params */}
              <div className="mt-5" id="gate-params-container">
                {gateParams.length > 0 && (
                  <label className="block text-base font-medium mb-2 text-slate-300 text-center">
                    Gate Parameters
                  </label>
                )}

                {/* Angle unit toggle */}
                {showAngleUnitsToggle && (
                  <div className="text-center mb-4">
                    <button className={`btn text-xs px-2 py-1 ${angleUnit === "rad" ? "active" : ""}`} onClick={() => { setAngleUnit("rad"); setStatus("Angle unit set to rad."); }}>Radians</button>
                    <button className={`btn text-xs px-2 py-1 ml-2 ${angleUnit === "deg" ? "active" : ""}`} onClick={() => { setAngleUnit("deg"); setStatus("Angle unit set to deg."); }}>Degrees</button>
                  </div>
                )}

                {gateParams.map((p) => (
                  <div key={p.id} className="flex items-center justify-center mb-2">
                    <label className="block text-sm font-medium text-slate-300 w-20 text-center">
                      <MathJax>{`$${p.label}$`}</MathJax>
                    </label>
                    <input
                      type="range"
                      min={p.min}
                      max={p.max}
                      step={0.01}
                      value={gate[p.id] ?? 0}
                      onChange={(e) => onGateParam(p.id, e.target.value)}
                      className="mx-4"
                    />
                    <span className="font-mono text-sm text-indigo-300 w-24 text-right">
                      {p.id.startsWith("v") ? fmt(gate[p.id] ?? 0, 2) : displayAngle(gate[p.id] ?? 0)}
                    </span>
                  </div>
                ))}

                {/* Matrix */}
                <div className="mt-5 text-center text-lg">
                  <MathJax dynamic>{currentGateInfo?.matrix ?? ""}</MathJax>
                </div>
              </div>
            </section>
          </aside>

          {/* Right: Visualization & math */}
          <main className="space-y-6">
            {/* Bloch spheres */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="panel flex flex-col gap-3 items-center">
                <div className="panel-header justify-between w-full">
                  <h3 className="text-xl text-white">
                    <MathJax>{String.raw`Initial State: $(|\psi\rangle)$`}</MathJax>
                  </h3>
                  <div className="text-xs text-slate-400">|α|², |β|²: <span className="font-mono text-slate-300">{probText(alpha, beta)}</span></div>
                </div>
                <BlochSphere alpha={alpha} beta={beta} vectorColor={0xfbbf24} />
              </section>

              <section className="panel flex flex-col gap-3 items-center">
                <div className="panel-header justify-between w-full">
                  <h3 className="text-xl text-white">
                    <MathJax>{`Final State: $${(currentGateInfo?.nameLatex ?? gate.type).replace(/\\/g, "\\\\")} |\\psi\\rangle$`}</MathJax>
                  </h3>
                  <div className="text-xs text-slate-400">|α'|², |β'|²: <span className="font-mono text-slate-300">{probText(math.finalAlpha, math.finalBeta)}</span></div>
                </div>
                <BlochSphere alpha={math.finalAlpha} beta={math.finalBeta} vectorColor={0x4ade80} />
              </section>
            </div>

            {/* Calculation details */}
            <section className="panel">
              <details className="group" open>
                <summary className="cursor-pointer select-none list-none flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-white">3) Final State Calculation</h3>
                  <span className="text-slate-400 text-sm">(click to collapse)</span>
                </summary>

                <div className="mt-4 flex flex-col items-center gap-4">
                  <div className="w-full">
                    <p className="text-center font-mono text-lg mb-2 text-indigo-400 min-h-8">
                      <MathJax dynamic>{currentGateInfo?.alphaEq ?? String.raw`\(\alpha' = (m_{00})\alpha + (m_{01})\beta\)`}</MathJax>
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap p-1">
                      <div className="w-16 text-center font-mono text-xl text-slate-400 flex items-center justify-center">
                        <MathJax>{String.raw`$|0\rangle$`}</MathJax>
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-xs">Initial α</p>
                        <ComplexPlaneCanvas vector={alpha} color="#818cf8" />
                      </div>
                      <span className="op-symbol">→</span>
                      <div className="text-center">
                        <p className="font-mono text-xs min-h-4">
                          <MathJax dynamic>{currentGateInfo?.alphaTerm1 ?? String.raw`\((m_{00})\alpha\)`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.a1} color="#a5b4fc" />
                      </div>
                      <span className="op-symbol">+</span>
                      <div className="text-center">
                        <p className="font-mono text-xs min-h-4">
                          <MathJax dynamic>{currentGateInfo?.alphaTerm2 ?? String.raw`\((m_{01})\beta\)`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.a2} color="#a5b4fc" />
                      </div>
                      <span className="op-symbol">=</span>
                      <div className="text-center">
                        <p className="font-mono text-xs">
                          <MathJax>{String.raw`$\alpha'$`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.finalAlpha} color="#6366f1" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <p className="text-center font-mono text-lg mb-2 text-teal-400 min-h-8">
                      <MathJax dynamic>{currentGateInfo?.betaEq ?? String.raw`\(\beta' = (m_{10})\alpha + (m_{11})\beta\)`}</MathJax>
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap p-1">
                      <div className="w-16 text-center font-mono text-xl text-slate-400 flex items-center justify-center">
                        <MathJax>{String.raw`$|1\rangle$`}</MathJax>
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-xs">Initial β</p>
                        <ComplexPlaneCanvas vector={beta} color="#2dd4bf" />
                      </div>
                      <span className="op-symbol">→</span>
                      <div className="text-center">
                        <p className="font-mono text-xs min-h-4">
                          <MathJax dynamic>{currentGateInfo?.betaTerm1 ?? String.raw`\((m_{10})\alpha\)`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.b1} color="#5eead4" />
                      </div>
                      <span className="op-symbol">+</span>
                      <div className="text-center">
                        <p className="font-mono text-xs min-h-4">
                          <MathJax dynamic>{currentGateInfo?.betaTerm2 ?? String.raw`\((m_{11})\beta\)`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.b2} color="#5eead4" />
                      </div>
                      <span className="op-symbol">=</span>
                      <div className="text-center">
                        <p className="font-mono text-xs">
                          <MathJax>{String.raw`$\beta'$`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.finalBeta} color="#14b8a6" />
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </section>
          </main>
        </div>
      </div>
    </MathJaxContext>
  );
}
