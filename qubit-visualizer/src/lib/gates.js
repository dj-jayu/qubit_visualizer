// src/lib/gates.js
import { PI, TAU, complex, cMul, cAdd, cScale } from "./utils";

export const GATE_INFO = {
  RV: {
    nameLatex: "R(\\vec{v})",
    matrix: String.raw`$$R(\vec{v}) = \begin{pmatrix} c - i n_z s & -n_y s - i n_x s \\ n_y s - i n_x s & c + i n_z s \end{pmatrix}$$ \(c=\cos(\tfrac{\|\vec{v}\|}{2}), s=\sin(\tfrac{\|\vec{v}\|}{2}), n_k = v_k/\|\vec{v}\|\)</div>`,
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
    alphaEq:    String.raw`\(\alpha' = (0)\alpha + (1)\beta\)`,
    betaEq:     String.raw`\(\beta'  = (1)\alpha + (0)\beta\)`,
    alphaTerm1: String.raw`\((0)\alpha\)`,
    alphaTerm2: String.raw`\((1)\beta\)`,
    betaTerm1:  String.raw`\((1)\alpha\)`,
    betaTerm2:  String.raw`\((0)\beta\)`,
    params: [],
  },
  Y: {
    nameLatex: "Y",
    matrix: String.raw`$$Y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$`,
    alphaEq:    String.raw`\(\alpha' = (0)\alpha + (-i)\beta\)`,
    betaEq:     String.raw`\(\beta'  = (i)\alpha + (0)\beta\)`,
    alphaTerm1: String.raw`\((0)\alpha\)`,
    alphaTerm2: String.raw`\((-i)\beta\)`,
    betaTerm1:  String.raw`\((i)\alpha\)`,
    betaTerm2:  String.raw`\((0)\beta\)`,
    params: [],
  },
  Z: {
    nameLatex: "Z",
    matrix: String.raw`$$Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$`,
    alphaEq:    String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,
    betaEq:     String.raw`\(\beta'  = (0)\alpha + (-1)\beta\)`,
    alphaTerm1: String.raw`\((1)\alpha\)`,
    alphaTerm2: String.raw`\((0)\beta\)`,
    betaTerm1:  String.raw`\((0)\alpha\)`,
    betaTerm2:  String.raw`\((-1)\beta\)`,
    params: [],
  },
  S: {
    nameLatex: "S",
    matrix: String.raw`$$S = \begin{pmatrix} 1 & 0 \\ 0 & i \end{pmatrix}$$`,
    alphaEq:    String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,
    betaEq:     String.raw`\(\beta'  = (0)\alpha + (i)\beta\)`,
    alphaTerm1: String.raw`\((1)\alpha\)`,
    alphaTerm2: String.raw`\((0)\beta\)`,
    betaTerm1:  String.raw`\((0)\alpha\)`,
    betaTerm2:  String.raw`\((i)\beta\)`,
    params: [],
  },
  T: {
    nameLatex: "T",
    matrix: String.raw`$$T = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{pmatrix}$$`,
    params: [],
    alphaEq:    String.raw`\(\alpha' = (1)\alpha + (0)\beta\)`,
    betaEq:     String.raw`\(\beta'  = (0)\alpha + (e^{i\pi/4})\beta\)`,
    alphaTerm1: String.raw`\((1)\alpha\)`,
    alphaTerm2: String.raw`\((0)\beta\)`,
    betaTerm1:  String.raw`\((0)\alpha\)`,
    betaTerm2:  String.raw`\((e^{i\pi/4})\beta\)`,
    params: [],
  },
  H: {
    nameLatex: "H",
    matrix: String.raw`$$H = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$`,
    alphaEq:    String.raw`\(\alpha' = \frac{1}{\sqrt{2}}\alpha + \frac{1}{\sqrt{2}}\beta\)`,
    betaEq:     String.raw`\(\beta'  = \frac{1}{\sqrt{2}}\alpha - \frac{1}{\sqrt{2}}\beta\)`,
    alphaTerm1: String.raw`\(\frac{1}{\sqrt{2}}\alpha\)`,
    alphaTerm2: String.raw`\(\frac{1}{\sqrt{2}}\beta\)`,
    betaTerm1:  String.raw`\(\frac{1}{\sqrt{2}}\alpha\)`,
    betaTerm2:  String.raw`\(-\frac{1}{\sqrt{2}}\beta\)`,
    params: [],
  },
  H_theta: {
    nameLatex: "H(\\theta)",
    matrix: String.raw`$$H(\theta) = \begin{pmatrix} \cos(\frac{\theta}{2}) - \frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) & -\frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) \\ -\frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) & \cos(\frac{\theta}{2}) + \frac{i}{\sqrt{2}}\sin(\frac{\theta}{2}) \end{pmatrix}$$`,
    alphaEq: String.raw`\(\alpha' = (\cos\frac{\theta}{2} - \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha - (\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,
    betaEq: String.raw`\(\beta' = -(\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha + (\cos\frac{\theta}{2} + \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,
    alphaTerm1: String.raw`\((\cos\frac{\theta}{2} - \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha\)`,
    alphaTerm2: String.raw`\((-\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,
    betaTerm1: String.raw`\((-\frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\alpha\)`,
    betaTerm2: String.raw`\((\cos\frac{\theta}{2} + \frac{i}{\sqrt{2}}\sin\frac{\theta}{2})\beta\)`,
    params: [{ id: "theta", label: "\\theta", min: 0, max: TAU }],
  },
};

export function computeGate(alpha, beta, gate) {
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
     else if (type === "H") {
      const inv_sqrt2 = 1 / Math.sqrt(2);
      a1 = cScale(alpha, inv_sqrt2);
      a2 = cScale(beta, inv_sqrt2);
      b1 = cScale(alpha, inv_sqrt2);
      b2 = cScale(beta, -inv_sqrt2);
     }
     else if (type === "H_theta") {
      const cos_t2 = Math.cos((theta ?? 0) / 2);
      const sin_t2 = Math.sin((theta ?? 0) / 2);
      const i_inv_sqrt2 = 1 / Math.sqrt(2);

      // Define the 4 matrix elements from the image
      const m00 = complex(cos_t2, -i_inv_sqrt2 * sin_t2);
      const m01 = complex(0, -i_inv_sqrt2 * sin_t2);
      const m10 = complex(0, -i_inv_sqrt2 * sin_t2);
      const m11 = complex(cos_t2, i_inv_sqrt2 * sin_t2);
      
      a1 = cMul(m00, alpha);
      a2 = cMul(m01, beta);
      b1 = cMul(m10, alpha);
      b2 = cMul(m11, beta);
    }
  }

  const finalAlpha = cAdd(a1, a2);
  const finalBeta = cAdd(b1, b2);
  return { a1, a2, b1, b2, finalAlpha, finalBeta };
}