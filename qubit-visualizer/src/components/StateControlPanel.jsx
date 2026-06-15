// src/components/StateControlPanel.jsx

import React from "react";
import MathText from "./MathText";
import { PI, TAU, fmt } from "../lib/utils";

export default function StateControlPanel({ init, setInit, presets, onPreset }) {
  const setInitField = (k, v) => setInit((s) => ({ ...s, [k]: v }));

  return (
    <section className="panel" aria-labelledby="custom-state-title">
      <div className="panel-header">
        <h3 id="custom-state-title" className="text-base text-white">
          <MathText>{String.raw`1) Custom Initial State $(|\psi\rangle = \alpha|0\rangle + \beta|1\rangle)$`}</MathText>
        </h3>
      </div>

      <div className="flex flex-col gap-2 p-1">
        {/* magnitudes */}
        <div>
          <div className="flex items-baseline justify-between">
            <label className="text-sm font-medium text-slate-300">Magnitudes</label>
            <span className="font-mono text-sm">
              <span className="text-indigo-400">{`|α| = ${fmt(Math.cos(init.magnitudeAngle), 2)}`}</span>
              <span className="text-teal-400 ml-3">{`|β| = ${fmt(Math.sin(init.magnitudeAngle), 2)}`}</span>
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={PI / 2}
            step={0.01}
            value={init.magnitudeAngle}
            onChange={(e) => setInitField("magnitudeAngle", parseFloat(e.target.value))}
          />
        </div>

        {/* alpha phase */}
        <div>
          <div className="flex items-baseline justify-between">
            <label className="text-sm font-medium text-slate-300">
              <span className="font-mono text-indigo-300 mr-1.5">α</span>
              <MathText>{String.raw`Phase $\phi_\alpha$`}</MathText>
            </label>
            <span className="font-mono text-indigo-400 text-sm">{`${fmt(init.alphaPhase, 2)} rad`}</span>
          </div>
          <input
            type="range"
            min={0}
            max={TAU}
            step={0.01}
            value={init.alphaPhase}
            onChange={(e) => setInitField("alphaPhase", parseFloat(e.target.value))}
          />
        </div>

        {/* beta phase */}
        <div>
          <div className="flex items-baseline justify-between">
            <label className="text-sm font-medium text-slate-300">
              <span className="font-mono text-teal-300 mr-1.5">β</span>
              <MathText>{String.raw`Phase $\phi_\beta$`}</MathText>
            </label>
            <span className="font-mono text-teal-400 text-sm">{`${fmt(init.betaPhase, 2)} rad`}</span>
          </div>
          <input
            type="range"
            min={0}
            max={TAU}
            step={0.01}
            value={init.betaPhase}
            onChange={(e) => setInitField("betaPhase", parseFloat(e.target.value))}
          />
        </div>

        {/* Presets */}
        <div className="mt-1">
          <label className="block text-sm font-medium text-slate-300 text-center mb-2">
            Initial State Presets
          </label>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {Object.keys(presets).map((k) => (
              <button key={k} className={`btn btn-sm ${JSON.stringify(init) === JSON.stringify(presets[k]) ? "active" : ""}`} onClick={() => onPreset(k)}>
                <MathText>{`$|${k}\\rangle$`}</MathText>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}