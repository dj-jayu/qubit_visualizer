// src/components/StateControlPanel.jsx

import React from "react";
import MathText from "./MathText";
import { PI, TAU, fmt, radToDeg, snapTo, tickBackground } from "../lib/utils";

export default function StateControlPanel({ init, setInit, presets, onPreset, angleUnit, setAngleUnit }) {
  const setInitField = (k, v) => setInit((s) => ({ ...s, [k]: v }));

  const magA = Math.cos(init.magnitudeAngle);
  const magB = Math.sin(init.magnitudeAngle);

  // Phase readouts honor the rad/deg switch. The e^{iθ} exponent in the formula
  // stays in radians (the mathematically correct unit for an exponent).
  const displayAngle = (rad) => (angleUnit === "deg" ? `${fmt(radToDeg(rad), 0)}°` : `${fmt(rad, 2)} rad`);

  return (
    <section className="panel" aria-labelledby="custom-state-title">
      <div className="mb-2">
        {/* Title + static symbolic form on line 1 (with the rad/deg switch on the
            right); live numeric polar form on line 2. The numeric part is plain
            text, not MathJax, so it re-renders instantly while sliders drag. */}
        <div className="flex items-start justify-between gap-2">
          <h3 id="custom-state-title" className="text-base text-white flex items-baseline gap-2 flex-wrap">
            <span>1) Initial State</span>
            <MathText>{String.raw`$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$`}</MathText>
          </h3>
          <div className="flex shrink-0 text-[10px] rounded overflow-hidden border border-slate-600">
            <button
              className={`px-1.5 py-0.5 ${angleUnit === "rad" ? "bg-indigo-500/40 text-white" : "text-slate-400"}`}
              onClick={() => setAngleUnit("rad")}
            >
              rad
            </button>
            <button
              className={`px-1.5 py-0.5 ${angleUnit === "deg" ? "bg-indigo-500/40 text-white" : "text-slate-400"}`}
              onClick={() => setAngleUnit("deg")}
            >
              deg
            </button>
          </div>
        </div>
        <div className="text-sm text-white leading-snug mt-1">
          <span className="font-mono text-slate-200">
            = ({fmt(magA, 2)} e<sup>i{fmt(init.alphaPhase, 2)}</sup>)|0⟩ + ({fmt(magB, 2)} e<sup>i{fmt(init.betaPhase, 2)}</sup>)|1⟩
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-1">
        {/* magnitudes */}
        <div>
          <div className="flex items-baseline justify-between">
            <label className="text-sm font-medium text-slate-300">Magnitudes</label>
            <span className="font-mono text-sm">
              <span className="text-indigo-400">{`|α| = ${fmt(magA, 2)}`}</span>
              <span className="text-teal-400 ml-3">{`|β| = ${fmt(magB, 2)}`}</span>
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={PI / 2}
            step={0.01}
            value={init.magnitudeAngle}
            style={{ "--tick-bg": tickBackground(0, PI / 2, PI / 8, "#94a3b8") }}
            onChange={(e) => setInitField("magnitudeAngle", snapTo(parseFloat(e.target.value), PI / 8))}
          />
        </div>

        {/* alpha phase */}
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-indigo-300">α</span>
            <label className="text-sm font-medium text-slate-300">Phase</label>
            <span className="font-mono text-indigo-400 text-sm">{displayAngle(init.alphaPhase)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={TAU}
            step={0.01}
            value={init.alphaPhase}
            style={{ "--tick-bg": tickBackground(0, TAU, PI / 4, "#818cf8") }}
            onChange={(e) => setInitField("alphaPhase", snapTo(parseFloat(e.target.value), PI / 4))}
          />
        </div>

        {/* beta phase */}
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-teal-300">β</span>
            <label className="text-sm font-medium text-slate-300">Phase</label>
            <span className="font-mono text-teal-400 text-sm">{displayAngle(init.betaPhase)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={TAU}
            step={0.01}
            value={init.betaPhase}
            style={{ "--tick-bg": tickBackground(0, TAU, PI / 4, "#5eead4") }}
            onChange={(e) => setInitField("betaPhase", snapTo(parseFloat(e.target.value), PI / 4))}
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
