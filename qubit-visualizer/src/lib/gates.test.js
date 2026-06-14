import { describe, it, expect } from "vitest";
import { computeGate, GATE_INFO } from "./gates";
import { polar } from "./utils";

const PI = Math.PI;
const SQRT1_2 = Math.SQRT1_2; // 1/sqrt(2)

const KET0 = { alpha: { re: 1, im: 0 }, beta: { re: 0, im: 0 } };
const KET1 = { alpha: { re: 0, im: 0 }, beta: { re: 1, im: 0 } };

function apply(gate, state) {
  const { finalAlpha, finalBeta } = computeGate(state.alpha, state.beta, gate);
  return { alpha: finalAlpha, beta: finalBeta };
}

const norm2 = (c) => c.re * c.re + c.im * c.im;

function expectAmp(c, re, im) {
  expect(c.re).toBeCloseTo(re, 9);
  expect(c.im).toBeCloseTo(im, 9);
}

// A representative parameter set for every gate type.
const sampleGates = [
  { type: "RV", vx: 0.7, vy: -1.2, vz: 0.4 },
  { type: "U", theta: 1.1, phi: 0.6, lambda: 2.0 },
  { type: "P", theta: 0.9 },
  { type: "R", theta: 1.3, phi: 0.7 },
  { type: "Rx", theta: 1.0 },
  { type: "Ry", theta: 2.2 },
  { type: "Rz", theta: 0.5 },
  { type: "X" },
  { type: "Y" },
  { type: "Z" },
  { type: "S" },
  { type: "T" },
  { type: "H" },
  { type: "H_theta", theta: 1.4 },
];

describe("GATE_INFO ↔ computeGate coverage", () => {
  it("computeGate handles every gate declared in GATE_INFO", () => {
    for (const type of Object.keys(GATE_INFO)) {
      const sample = sampleGates.find((g) => g.type === type);
      expect(sample, `no sample params for gate ${type}`).toBeTruthy();
    }
  });
});

describe("all gates are unitary", () => {
  for (const g of sampleGates) {
    it(`${g.type} has orthonormal columns`, () => {
      const col0 = apply(g, KET0); // [m00, m10]
      const col1 = apply(g, KET1); // [m01, m11]

      // Each column is a unit vector.
      expect(norm2(col0.alpha) + norm2(col0.beta)).toBeCloseTo(1, 9);
      expect(norm2(col1.alpha) + norm2(col1.beta)).toBeCloseTo(1, 9);

      // Columns are orthogonal: <col0|col1> = 0 (conjugate inner product).
      const dotRe =
        col0.alpha.re * col1.alpha.re + col0.alpha.im * col1.alpha.im +
        col0.beta.re * col1.beta.re + col0.beta.im * col1.beta.im;
      const dotIm =
        col0.alpha.re * col1.alpha.im - col0.alpha.im * col1.alpha.re +
        col0.beta.re * col1.beta.im - col0.beta.im * col1.beta.re;
      expect(dotRe).toBeCloseTo(0, 9);
      expect(dotIm).toBeCloseTo(0, 9);
    });
  }
});

describe("gates preserve normalization for arbitrary input states", () => {
  for (const g of sampleGates) {
    it(`${g.type} keeps |α|²+|β|² = 1`, () => {
      for (let i = 0; i < 5; i++) {
        const magAngle = Math.random() * (PI / 2);
        const state = {
          alpha: polar(Math.cos(magAngle), Math.random() * 2 * PI),
          beta: polar(Math.sin(magAngle), Math.random() * 2 * PI),
        };
        const out = apply(g, state);
        expect(norm2(out.alpha) + norm2(out.beta)).toBeCloseTo(1, 9);
      }
    });
  }
});

describe("output term decomposition", () => {
  it("finalAlpha = a1 + a2 and finalBeta = b1 + b2", () => {
    const { a1, a2, b1, b2, finalAlpha, finalBeta } = computeGate(
      KET0.alpha,
      KET1.beta, // arbitrary nonzero β to exercise both terms
      { type: "U", theta: 1.1, phi: 0.6, lambda: 2.0 }
    );
    expectAmp(finalAlpha, a1.re + a2.re, a1.im + a2.im);
    expectAmp(finalBeta, b1.re + b2.re, b1.im + b2.im);
  });
});

describe("known single-gate actions", () => {
  it("X|0⟩ = |1⟩ and X|1⟩ = |0⟩", () => {
    const r0 = apply({ type: "X" }, KET0);
    expectAmp(r0.alpha, 0, 0);
    expectAmp(r0.beta, 1, 0);
    const r1 = apply({ type: "X" }, KET1);
    expectAmp(r1.alpha, 1, 0);
    expectAmp(r1.beta, 0, 0);
  });

  it("Y|0⟩ = i|1⟩", () => {
    const r = apply({ type: "Y" }, KET0);
    expectAmp(r.alpha, 0, 0);
    expectAmp(r.beta, 0, 1);
  });

  it("Z|1⟩ = -|1⟩", () => {
    const r = apply({ type: "Z" }, KET1);
    expectAmp(r.alpha, 0, 0);
    expectAmp(r.beta, -1, 0);
  });

  it("S|1⟩ = i|1⟩", () => {
    const r = apply({ type: "S" }, KET1);
    expectAmp(r.beta, 0, 1);
  });

  it("T|1⟩ = e^{iπ/4}|1⟩", () => {
    const r = apply({ type: "T" }, KET1);
    expectAmp(r.beta, SQRT1_2, SQRT1_2);
  });

  it("H|0⟩ = (|0⟩+|1⟩)/√2", () => {
    const r = apply({ type: "H" }, KET0);
    expectAmp(r.alpha, SQRT1_2, 0);
    expectAmp(r.beta, SQRT1_2, 0);
  });

  it("P(θ)|1⟩ = e^{iθ}|1⟩", () => {
    const theta = 1.23;
    const r = apply({ type: "P", theta }, KET1);
    expectAmp(r.beta, Math.cos(theta), Math.sin(theta));
  });

  it("Rx(0) is the identity", () => {
    const r = apply({ type: "Rx", theta: 0 }, KET0);
    expectAmp(r.alpha, 1, 0);
    expectAmp(r.beta, 0, 0);
  });

  it("RV with zero vector is the identity", () => {
    const r = apply({ type: "RV", vx: 0, vy: 0, vz: 0 }, KET1);
    expectAmp(r.alpha, 0, 0);
    expectAmp(r.beta, 1, 0);
  });
});

describe("composition identities", () => {
  it("H∘H = I", () => {
    const once = apply({ type: "H" }, KET0);
    const twice = apply({ type: "H" }, once);
    expectAmp(twice.alpha, 1, 0);
    expectAmp(twice.beta, 0, 0);
  });

  it("X∘X = I", () => {
    const once = apply({ type: "X" }, KET0);
    const twice = apply({ type: "X" }, once);
    expectAmp(twice.alpha, 1, 0);
    expectAmp(twice.beta, 0, 0);
  });
});
