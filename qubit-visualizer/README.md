# Qubit Visualizer — developer guide

The React + Vite source for the Qubit Visualizer. For what the app *is* and the
ideas behind it, see the [root README](../README.md). This file covers how to run,
build, and work on the code.

## Tech stack

- **React 19** + **Vite 7** — UI and dev/build tooling
- **Three.js** — the 3D Bloch sphere
- **better-react-mathjax** — LaTeX rendering for gate matrices and equations
- **Tailwind CSS v3** (PostCSS) — utility styling

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
```

## Scripts

| Script            | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload             |
| `npm run build`   | Production build into `dist/`                          |
| `npm run preview` | Serve the production build locally                     |
| `npm run lint`    | Run ESLint over the project                            |
| `npm run deploy`  | Build and publish `dist/` to GitHub Pages (gh-pages)  |

> The app is deployed to GitHub Pages under the `/qubit_visualizer/` base path
> (see `base` in [vite.config.js](vite.config.js)).

## Project structure

```
src/
  main.jsx                  App entry; mounts React + the MathJax context
  App.jsx                   Top-level state (initial state + selected gate) and layout
  index.css                 Tailwind entry (@tailwind directives)
  components/
    BlochSphere.jsx         Three.js Bloch sphere for one qubit state
    ComplexPlaneCanvas.jsx  2D complex-plane arrow for a single amplitude
    StateControlPanel.jsx   Sliders/presets for the initial state |ψ⟩
    GateControlPanel.jsx    Gate picker, parameter sliders, matrix display
  lib/
    gates.js                GATE_INFO (LaTeX + metadata) and computeGate (the math)
    utils.js                Complex-number helpers, Bloch conversion, formatting
```

## How it fits together

`App` holds two pieces of state: the **initial qubit** (`init` → amplitudes
`alpha`, `beta`) and the **selected gate**. `computeGate(alpha, beta, gate)` in
[src/lib/gates.js](src/lib/gates.js) applies the gate's 2×2 matrix and returns the
per-term breakdown (`a1, a2, b1, b2`) plus the final amplitudes. Those flow into
two `BlochSphere` views (initial vs. final) and the `ComplexPlaneCanvas` arrows in
the calculation breakdown.

## Conventions

- **Amplitudes** are plain objects `{ re, im }`; see the `c*` helpers in
  [src/lib/utils.js](src/lib/utils.js).
- **Bloch mapping:** `amplitudesToBloch` maps `(α, β)` to a Three.js vector with
  the qubit's *z*-axis pointing **up** (Three's +Y), matching the usual Bloch
  convention where |0⟩ is at the top.
