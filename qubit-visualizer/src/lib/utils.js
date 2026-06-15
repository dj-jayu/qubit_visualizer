// src/lib/utils.js

import * as THREE from "three";

export const PI = Math.PI;
export const TAU = 2 * PI;

export const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d) : "—");
export const radToDeg = (r) => (r * 180) / PI;

export function probText(a, b) {
  const p0 = (a.re * a.re + a.im * a.im).toFixed(3);
  const p1 = (b.re * b.re + b.im * b.im).toFixed(3);
  return `|0⟩=${p0}, |1⟩=${p1}`;
}

// Format a complex number {re, im} as "a + bi" (using a real minus sign).
export function cText(z, d = 2) {
  if (!z || !Number.isFinite(z.re) || !Number.isFinite(z.im)) return "—";
  const sign = z.im < 0 ? "−" : "+";
  return `${fmt(z.re, d)} ${sign} ${fmt(Math.abs(z.im), d)}i`;
}

// Format a complex number {re, im} in polar form as "magnitude ∠ phase"
// with the phase in radians on [0, 2π).
export function polarText(z, d = 2) {
  if (!z || !Number.isFinite(z.re) || !Number.isFinite(z.im)) return "—";
  const mag = Math.hypot(z.re, z.im);
  let phase = Math.atan2(z.im, z.re);
  if (phase < 0) phase += TAU;
  return `${fmt(mag, d)} ∠ ${fmt(phase, d)}`;
}

// --- Complex Number Helpers ---
export function complex(re = 0, im = 0) { return { re, im }; }
export function cMul(a, b) { return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re }; }
export function cAdd(a, b) { return { re: a.re + b.re, im: a.im + b.im }; }
export function cScale(a, s) { return { re: a.re * s, im: a.im * s }; }
export function polar(mag, phase) { return { re: mag * Math.cos(phase), im: mag * Math.sin(phase) }; }

// --- Coordinate Conversion ---
// Bloch-sphere coordinates (x, y, z) for |ψ⟩ = α|0⟩ + β|1⟩, in the usual
// convention where |0⟩ is +z and |1⟩ is -z.
export function blochVector(alpha, beta) {
  const x = 2 * (alpha.re * beta.re + alpha.im * beta.im); // 2·Re(α*β)
  const y = 2 * (alpha.re * beta.im - alpha.im * beta.re); // 2·Im(α*β)
  const z = alpha.re * alpha.re + alpha.im * alpha.im - (beta.re * beta.re + beta.im * beta.im);
  return { x, y, z };
}

// Polar/azimuthal angles of the Bloch vector: theta from +z, phi in the x-y plane.
export function blochAngles(alpha, beta) {
  const { x, y, z } = blochVector(alpha, beta);
  const r = Math.hypot(x, y, z);
  const theta = r < 1e-9 ? 0 : Math.acos(Math.min(1, Math.max(-1, z / r)));
  let phi = Math.atan2(y, x);
  if (phi < 0) phi += TAU;
  return { theta, phi };
}

// Three.js scene vector for the state arrow. The scene uses Y-up, so the Bloch
// z-axis maps to the scene's +Y (|0⟩ at the top).
export function amplitudesToBloch(alpha, beta) {
  const { x, y, z } = blochVector(alpha, beta);
  return new THREE.Vector3(x, z, -y).normalize();
}

// --- UI Helpers ---
export function snapAngle(
  value,
  points = [0, PI / 2, PI, (3 * PI) / 2, TAU, (5 * PI) / 2, 3 * PI, (7 * PI) / 2, 2 * TAU],
  threshold = 0.22
) {
  for (const p of points) {
    if (Math.abs(value - p) < threshold) return p;
  }
  return value;
}

// Build a CSS background that draws tick marks at every `step` along a slider's
// [min, max] range, layered over the base track color. Assign it to the
// `--tick-bg` custom property on the range input.
export function tickBackground(min, max, step, color = "#818cf8", base = "#374151") {
  const span = max - min;
  if (!(span > 0) || !(step > 0)) return base;
  const spacingPct = (step / span) * 100;
  return `repeating-linear-gradient(90deg, ${color} 0, ${color} 2px, transparent 2px, transparent ${spacingPct}%), ${base}`;
}

// Soft-lock a value to the nearest multiple of `step`: snaps only when within
// `threshold` of a multiple, so dragging stays free in between. A small
// threshold keeps the pull gentle and leaves room for fine values nearby.
export function snapTo(value, step, threshold = step * 0.12) {
  const nearest = Math.round(value / step) * step;
  return Math.abs(value - nearest) < threshold ? nearest : value;
}