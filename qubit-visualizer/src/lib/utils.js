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

// --- Complex Number Helpers ---
export function complex(re = 0, im = 0) { return { re, im }; }
export function cMul(a, b) { return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re }; }
export function cAdd(a, b) { return { re: a.re + b.re, im: a.im + b.im }; }
export function cScale(a, s) { return { re: a.re * s, im: a.im * s }; }
export function polar(mag, phase) { return { re: mag * Math.cos(phase), im: mag * Math.sin(phase) }; }

// --- Coordinate Conversion ---
export function amplitudesToBloch(alpha, beta) {
  const z = alpha.re * alpha.re + alpha.im * alpha.im - (beta.re * beta.re + beta.im * beta.im);
  const x = 2 * (alpha.re * beta.re + alpha.im * beta.im);
  const y = 2 * (alpha.im * beta.re - alpha.re * beta.im);
  return new THREE.Vector3(x, z, -y).normalize();
}

// --- UI Helpers ---
export function snapAngle(value, points = [0, PI / 2, PI, (3 * PI) / 2, TAU], threshold = 0.22) {
  for (const p of points) {
    if (Math.abs(value - p) < threshold) return p;
  }
  return value;
}