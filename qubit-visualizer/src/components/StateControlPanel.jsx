// src/components/StateControlPanel.jsx

import React from "react";
import { MathJax } from "better-react-mathjax";
import { PI, TAU, fmt } from "../lib/utils";

export default function StateControlPanel({ init, setInit, presets, onPreset }) {
  const setInitField = (k, v) => setInit((s) => ({ ...s, [k]: v }));

  return (
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
              <button key={k} className={`btn ${JSON.stringify(init) === JSON.stringify(presets[k]) ? "active" : ""}`} onClick={() => onPreset(k)}>
                <MathJax>{`$|${k}\\rangle$`}</MathJax>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}