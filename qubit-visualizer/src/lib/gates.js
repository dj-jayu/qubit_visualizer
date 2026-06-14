// src/lib/gates.js
import { TAU, complex, cMul, cAdd } from "./utils";

const INV_SQRT2 = 1 / Math.sqrt(2);
const IDENTITY = [
  [complex(1, 0), complex(0, 0)],
  [complex(0, 0), complex(1, 0)],
];

// Each gate declares both how it is displayed (the `*Latex` fields) and how it
// acts (`getMatrix`, returning the 2x2 complex matrix [[m00, m01], [m10, m11]]).
// Keeping the numeric matrix next to its LaTeX makes it much harder for the two
// to drift apart. `computeGate` below applies any of these matrices generically.
export const GATE_INFO = {
  RV: {
    nameLatex: "R(\\vec{v})",
    matrixLatex: String.raw`$$R(\vec{v}) = \begin{pmatrix} c - i n_z s & -n_y s - i n_x s \\ n_y s - i n_x s & c + i n_z s \end{pmatrix}$$ \(c=\cos(\tfrac{\|\vec{v}\|}{2}), s=\sin(\tfrac{\|\vec{v}\|}{2}), n_k = v_k/\|\vec{v}\|\)`,
    getMatrix: ({ vx = 0, vy = 0, vz = 0 }) => {
      const Vx = vx ?? 0, Vy = vy ?? 0, Vz = vz ?? 0;
      const norm = Math.hypot(Vx, Vy, Vz);
      if (norm < 1e-9) return IDENTITY;
      const c = Math.cos(norm / 2);
      const s = Math.sin(norm / 2);
      const nx = Vx / norm, ny = Vy / norm, nz = Vz / norm;
      return [
        [complex(c, -nz * s), complex(-ny * s, -nx * s)],
        [complex(ny * s, -nx * s), complex(c, nz * s)],
      ];
    },
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
    matrixLatex: String.raw`$$U = \begin{pmatrix} \cos(\theta/2) & -e^{i\lambda}\sin(\theta/2) \\ e^{i\phi}\sin(\theta/2) & e^{i(\phi+\lambda)}\cos(\theta/2) \end{pmatrix}$$`,
    getMatrix: ({ theta = 0, phi = 0, lambda = 0 }) => {
      const t = theta ?? 0, p = phi ?? 0, l = lambda ?? 0;
      const ct = Math.cos(t / 2), st = Math.sin(t / 2);
      return [
        [complex(ct, 0), complex(-st * Math.cos(l), -st * Math.sin(l))],
        [complex(st * Math.cos(p), st * Math.sin(p)), complex(ct * Math.cos(p + l), ct * Math.sin(p + l))],
      ];
    },
    alphaEq: String.raw`\(\alpha' = \alpha\cos(\theta/2) - \beta e^{i\lambda}\sin(\theta/2)\)`,
    betaEq: String.raw`\(\beta' = \alpha e^{i\phi}\sin(\theta/2) + \beta e^{i(\phi+\lambda)}\cos(\theta/2)\)`,
    alphaTerm1: String.raw`\(\alpha\cos(\theta/2)\)`,
    alphaTerm2: String.raw`\(-\beta e^{i\lambda}\sin(\theta/2)\)`,
    betaTerm1: String.raw`\(\alpha e^{i\phi}\sin(\theta/2)\)`,
    betaTerm2: String.raw`\(\beta e^{i(\phi+\lambda)}\cos(\theta/2)\)`,
    params: [
      { id: "theta", label: "\\theta", min: 0, max: 2 * TAU },
      { id: "phi", label: "\\phi", min: 0, max: TAU },
      { id: "lambda", label: "\\lambda", min: 0, max: TAU },
    ],
  },
  P: {
    nameLatex: "P(\\theta)",
    matrixLatex: String.raw`$$P(\theta) = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\theta} \end{pmatrix}$$`,
    getMatrix: ({ theta = 0 }) => {
      const t = theta ?? 0;
      return [
        [complex(1, 0), complex(0, 0)],
        [complex(0, 0), complex(Math.cos(t), Math.sin(t))],
      ];
    },
    alphaEq: String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,
    betaEq: String.raw`\(\beta' = (0)\alpha + (e^{i\theta})\beta\)`,
    alphaTerm1: String.raw`\((1)\alpha\)`,
    alphaTerm2: String.raw`\((0)\beta\)`,
    betaTerm1: String.raw`\((0)\alpha\)`,
    betaTerm2: String.raw`\((e^{i\theta})\beta\)`,
    params: [{ id: "theta", label: "\\theta", min: 0, max: 2 * TAU }],
  },
  R: {
    nameLatex: "R(\\theta,\\phi)",
    matrixLatex: String.raw`$$R(\theta, \phi) = \begin{pmatrix} \cos(\theta/2) & -ie^{-i\phi}\sin(\theta/2) \\ -ie^{i\phi}\sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,
    getMatrix: ({ theta = 0, phi = 0 }) => {
      const t = theta ?? 0, p = phi ?? 0;
      const ct = Math.cos(t / 2), st = Math.sin(t / 2);
      return [
        [complex(ct, 0), complex(-st * Math.sin(p), -st * Math.cos(p))],
        [complex(st * Math.sin(p), -st * Math.cos(p)), complex(ct, 0)],
      ];
    },
    alphaEq: String.raw`\(\alpha' = \alpha\cos(\theta/2) -i\beta e^{-i\phi}\sin(\theta/2)\)`,
    betaEq: String.raw`\(\beta' = -i\alpha e^{i\phi}\sin(\theta/2) + \beta\cos(\theta/2)\)`,
    alphaTerm1: String.raw`\(\alpha\cos(\theta/2)\)`,
    alphaTerm2: String.raw`\(-i\beta e^{-i\phi}\sin(\theta/2)\)`,
    betaTerm1: String.raw`\(-i\alpha e^{i\phi}\sin(\theta/2)\)`,
    betaTerm2: String.raw`\(\beta\cos(\theta/2)\)`,
    params: [
      { id: "theta", label: "\\theta", min: 0, max: 2 * TAU },
      { id: "phi", label: "\\phi", min: 0, max: TAU },
    ],
  },
  Rx: {
    nameLatex: "R_x(\\theta)",
    matrixLatex: String.raw`$$R_x(\theta) = \begin{pmatrix} \cos(\theta/2) & -i\sin(\theta/2) \\ -i\sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,
    getMatrix: ({ theta = 0 }) => {
      const c = Math.cos((theta ?? 0) / 2), s = Math.sin((theta ?? 0) / 2);
      return [
        [complex(c, 0), complex(0, -s)],
        [complex(0, -s), complex(c, 0)],
      ];
    },
    alphaEq: String.raw`\(\alpha' = \alpha \cos(\theta/2) - i\beta \sin(\theta/2)\)`,
    betaEq: String.raw`\(\beta' = -i\alpha \sin(\theta/2) + \beta \cos(\theta/2)\)`,
    alphaTerm1: String.raw`\(\alpha \cos(\theta/2)\)`,
    alphaTerm2: String.raw`\(-i\beta \sin(\theta/2)\)`,
    betaTerm1: String.raw`\(-i\alpha \sin(\theta/2)\)`,
    betaTerm2: String.raw`\(\beta \cos(\theta/2)\)`,
    params: [{ id: "theta", label: "\\theta", min: 0, max: 2 * TAU }],
  },
  Ry: {
    nameLatex: "R_y(\\theta)",
    matrixLatex: String.raw`$$R_y(\theta) = \begin{pmatrix} \cos(\theta/2) & -\sin(\theta/2) \\ \sin(\theta/2) & \cos(\theta/2) \end{pmatrix}$$`,
    getMatrix: ({ theta = 0 }) => {
      const c = Math.cos((theta ?? 0) / 2), s = Math.sin((theta ?? 0) / 2);
      return [
        [complex(c, 0), complex(-s, 0)],
        [complex(s, 0), complex(c, 0)],
      ];
    },
    alphaEq: String.raw`\(\alpha' = \alpha \cos(\theta/2) - \beta \sin(\theta/2)\)`,
    betaEq: String.raw`\(\beta' = \alpha \sin(\theta/2) + \beta \cos(\theta/2)\)`,
    alphaTerm1: String.raw`\(\alpha \cos(\theta/2)\)`,
    alphaTerm2: String.raw`\(-\beta \sin(\theta/2)\)`,
    betaTerm1: String.raw`\(\alpha \sin(\theta/2)\)`,
    betaTerm2: String.raw`\(\beta \cos(\theta/2)\)`,
    params: [{ id: "theta", label: "\\theta", min: 0, max: 2 * TAU }],
  },
  Rz: {
    nameLatex: "R_z(\\theta)",
    matrixLatex: String.raw`$$R_z(\theta) = \begin{pmatrix} e^{-i\theta/2} & 0 \\ 0 & e^{i\theta/2} \end{pmatrix}$$`,
    getMatrix: ({ theta = 0 }) => {
      const c = Math.cos((theta ?? 0) / 2), s = Math.sin((theta ?? 0) / 2);
      return [
        [complex(c, -s), complex(0, 0)],
        [complex(0, 0), complex(c, s)],
      ];
    },
    alphaEq: String.raw`\(\alpha' = e^{-i\theta/2} \alpha\)`,
    betaEq: String.raw`\(\beta' = e^{i\theta/2} \beta\)`,
    alphaTerm1: String.raw`\(e^{-i\theta/2} \alpha\)`,
    alphaTerm2: String.raw`\((0)\beta\)`,
    betaTerm1: String.raw`\((0)\alpha\)`,
    betaTerm2: String.raw`\(e^{i\theta/2} \beta\)`,
    params: [{ id: "theta", label: "\\theta", min: 0, max: 2 * TAU }],
  },
  X: {
    nameLatex: "X",
    matrixLatex: String.raw`$$X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$`,
    getMatrix: () => [
      [complex(0, 0), complex(1, 0)],
      [complex(1, 0), complex(0, 0)],
    ],
    alphaEq: String.raw`\(\alpha' = (0)\alpha + (1)\beta\)`,
    betaEq: String.raw`\(\beta'  = (1)\alpha + (0)\beta\)`,
    alphaTerm1: String.raw`\((0)\alpha\)`,
    alphaTerm2: String.raw`\((1)\beta\)`,
    betaTerm1: String.raw`\((1)\alpha\)`,
    betaTerm2: String.raw`\((0)\beta\)`,
    params: [],
  },
  Y: {
    nameLatex: "Y",
    matrixLatex: String.raw`$$Y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$`,
    getMatrix: () => [
      [complex(0, 0), complex(0, -1)],
      [complex(0, 1), complex(0, 0)],
    ],
    alphaEq: String.raw`\(\alpha' = (0)\alpha + (-i)\beta\)`,
    betaEq: String.raw`\(\beta'  = (i)\alpha + (0)\beta\)`,
    alphaTerm1: String.raw`\((0)\alpha\)`,
    alphaTerm2: String.raw`\((-i)\beta\)`,
    betaTerm1: String.raw`\((i)\alpha\)`,
    betaTerm2: String.raw`\((0)\beta\)`,
    params: [],
  },
  Z: {
    nameLatex: "Z",
    matrixLatex: String.raw`$$Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$`,
    getMatrix: () => [
      [complex(1, 0), complex(0, 0)],
      [complex(0, 0), complex(-1, 0)],
    ],
    alphaEq: String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,
    betaEq: String.raw`\(\beta'  = (0)\alpha + (-1)\beta\)`,
    alphaTerm1: String.raw`\((1)\alpha\)`,
    alphaTerm2: String.raw`\((0)\beta\)`,
    betaTerm1: String.raw`\((0)\alpha\)`,
    betaTerm2: String.raw`\((-1)\beta\)`,
    params: [],
  },
  S: {
    nameLatex: "S",
    matrixLatex: String.raw`$$S = \begin{pmatrix} 1 & 0 \\ 0 & i \end{pmatrix}$$`,
    getMatrix: () => [
      [complex(1, 0), complex(0, 0)],
      [complex(0, 0), complex(0, 1)],
    ],
    alphaEq: String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,
    betaEq: String.raw`\(\beta'  = (0)\alpha + (i)\beta\)`,
    alphaTerm1: String.raw`\((1)\alpha\)`,
    alphaTerm2: String.raw`\((0)\beta\)`,
    betaTerm1: String.raw`\((0)\alpha\)`,
    betaTerm2: String.raw`\((i)\beta\)`,
    params: [],
  },
  T: {
    nameLatex: "T",
    matrixLatex: String.raw`$$T = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{pmatrix}$$`,
    getMatrix: () => [
      [complex(1, 0), complex(0, 0)],
      [complex(0, 0), complex(INV_SQRT2, INV_SQRT2)],
    ],
    alphaEq: String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,
    betaEq: String.raw`\(\beta'  = (0)\alpha + (e^{i\pi/4})\beta\)`,
    alphaTerm1: String.raw`\((1)\alpha\)`,
    alphaTerm2: String.raw`\((0)\beta\)`,
    betaTerm1: String.raw`\((0)\alpha\)`,
    betaTerm2: String.raw`\((e^{i\pi/4})\beta\)`,
    params: [],
  },
  H: {
    nameLatex: "H",
    matrixLatex: String.raw`$$H = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$`,
    getMatrix: () => [
      [complex(INV_SQRT2, 0), complex(INV_SQRT2, 0)],
      [complex(INV_SQRT2, 0), complex(-INV_SQRT2, 0)],
    ],
    alphaEq: String.raw`\(\alpha' = \frac{1}{\sqrt{2}}\alpha + \frac{1}{\sqrt{2}}\beta\)`,
    betaEq: String.raw`\(\beta'  = \frac{1}{\sqrt{2}}\alpha - \frac{1}{\sqrt{2}}\beta\)`,
    alphaTerm1: String.raw`\(\frac{1}{\sqrt{2}}\alpha\)`,
    alphaTerm2: String.raw`\(\frac{1}{\sqrt{2}}\beta\)`,
    betaTerm1: String.raw`\(\frac{1}{\sqrt{2}}\alpha\)`,
    betaTerm2: String.raw`\(-\frac{1}{\sqrt{2}}\beta\)`,
    params: [],
  },
  H_theta: {
    nameLatex: "H(\\theta)",
    matrixLatex: String.raw`$$H(\theta) = \begin{pmatrix} \cos(\frac{\theta}{2}) - \frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) & -\frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) \\ -\frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) & \cos(\frac{\theta}{2}) + \frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) \end{pmatrix}$$`,
    getMatrix: ({ theta = 0 }) => {
      const ct = Math.cos((theta ?? 0) / 2), st = Math.sin((theta ?? 0) / 2);
      return [
        [complex(ct, -INV_SQRT2 * st), complex(0, -INV_SQRT2 * st)],
        [complex(0, -INV_SQRT2 * st), complex(ct, INV_SQRT2 * st)],
      ];
    },
    alphaEq: String.raw`\(\alpha' = (\cos\frac{\theta}{2} - \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha - (\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,
    betaEq: String.raw`\(\beta' = -(\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha + (\cos\frac{\theta}{2} + \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,
    alphaTerm1: String.raw`\((\cos\frac{\theta}{2} - \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha\)`,
    alphaTerm2: String.raw`\((-\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,
    betaTerm1: String.raw`\((-\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha\)`,
    betaTerm2: String.raw`\((\cos\frac{\theta}{2} + \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,
    params: [{ id: "theta", label: "\\theta", min: 0, max: 2 * TAU }],
  },
};

// Apply the selected gate's 2x2 matrix to the state |ψ⟩ = α|0⟩ + β|1⟩.
// Returns the four weighted terms (a1, a2, b1, b2) plus the summed final
// amplitudes, so the UI can show the per-term breakdown of the calculation.
export function computeGate(alpha, beta, gate) {
  const info = GATE_INFO[gate.type];
  const [[m00, m01], [m10, m11]] = info.getMatrix(gate);

  const a1 = cMul(m00, alpha);
  const a2 = cMul(m01, beta);
  const b1 = cMul(m10, alpha);
  const b2 = cMul(m11, beta);

  return { a1, a2, b1, b2, finalAlpha: cAdd(a1, a2), finalBeta: cAdd(b1, b2) };
}

// The Bloch-sphere axis a gate rotates the state around, as a unit vector
// {x, y, z}, or null for gates without a single well-defined axis (U) or no
// rotation (RV with a zero vector). Used to draw the rotation axis on the sphere.
export function getRotationAxis(gate) {
  const norm = (x, y, z) => {
    const r = Math.hypot(x, y, z);
    return r < 1e-9 ? null : { x: x / r, y: y / r, z: z / r };
  };
  switch (gate.type) {
    case "Rx":
    case "X":
      return { x: 1, y: 0, z: 0 };
    case "Ry":
    case "Y":
      return { x: 0, y: 1, z: 0 };
    case "Rz":
    case "Z":
    case "S":
    case "T":
    case "P":
      return { x: 0, y: 0, z: 1 };
    case "R":
      return norm(Math.cos(gate.phi ?? 0), Math.sin(gate.phi ?? 0), 0);
    case "H":
    case "H_theta":
      return norm(1, 0, 1);
    case "RV":
      return norm(gate.vx ?? 0, gate.vy ?? 0, gate.vz ?? 0);
    default:
      return null; // U and anything else: no single axis drawn
  }
}
