// src/components/GateControlPanel.jsx

import React from 'react';
import { MathJax } from 'better-react-mathjax';
import { GATE_INFO } from '../lib/gates';
import { snapAngle, fmt, radToDeg } from '../lib/utils';

export default function GateControlPanel({ gate, setGate, angleUnit, setAngleUnit, setStatus }) {
  const currentGateInfo = GATE_INFO[gate.type];
  const gateParams = currentGateInfo?.params ?? [];
  const showAngleUnitsToggle = gateParams.some((p) => ["theta", "phi", "lambda"].includes(p.id));

  const displayAngle = (radians) => (angleUnit === "deg" ? `${fmt(radToDeg(radians), 1)}°` : `${fmt(radians, 2)} rad`);

  const onGateParamChange = (id, value) => {
    let v = parseFloat(value);
    // Apply snapping for specific angle parameters on certain gates
    if (["Rx", "Ry", "Rz", "P", "R"].includes(gate.type) && ["theta", "phi"].includes(id)) {
      v = snapAngle(v);
    }
    setGate((g) => ({ ...g, [id]: v }));
  };

  const onGateTypeChange = (key) => {
    const resets = { phi: 0, lambda: 0 };
    const base = { ...gate, type: key, ...resets };
    if (key === "RV") base.theta = 0;
    setGate(base);
    setStatus(`Gate ${key} selected.`);
  };

  return (
    <section className="panel" aria-labelledby="gate-select-title">
      <div className="panel-header">
        <h3 id="gate-select-title" className="text-xl text-white">2) Select Gate</h3>
      </div>

      {/* Gate Selection Buttons */}
      <div className="flex flex-wrap gap-2 justify-center" id="gate-select-buttons">
        {Object.keys(GATE_INFO).map((key) => (
          <button
            key={key}
            className={`btn ${gate.type === key ? "active" : ""}`}
            onClick={() => onGateTypeChange(key)}
          >
            <MathJax>{`$${GATE_INFO[key].nameLatex}$`}</MathJax>
          </button>
        ))}
      </div>

      {/* Gate Parameter Sliders */}
      <div className="mt-5" id="gate-params-container">
        {gateParams.length > 0 && (
          <label className="block text-base font-medium mb-2 text-slate-300 text-center">
            Gate Parameters
          </label>
        )}

        {/* Angle unit toggle */}
        {showAngleUnitsToggle && (
          <div className="text-center mb-4">
            <button 
              className={`btn text-xs px-2 py-1 ${angleUnit === "rad" ? "active" : ""}`} 
              onClick={() => { setAngleUnit("rad"); setStatus("Angle unit set to rad."); }}
            >
              Radians
            </button>
            <button 
              className={`btn text-xs px-2 py-1 ml-2 ${angleUnit === "deg" ? "active" : ""}`} 
              onClick={() => { setAngleUnit("deg"); setStatus("Angle unit set to deg."); }}
            >
              Degrees
            </button>
          </div>
        )}

        {/* Parameter sliders */}
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
              onChange={(e) => onGateParamChange(p.id, e.target.value)}
              className="mx-4"
            />
            <span className="font-mono text-sm text-indigo-300 w-24 text-right">
              {p.id.startsWith("v") ? fmt(gate[p.id] ?? 0, 2) : displayAngle(gate[p.id] ?? 0)}
            </span>
          </div>
        ))}

        {/* Gate Matrix Display */}
        <div className="mt-5 text-center text-lg">
          <MathJax dynamic>{currentGateInfo?.matrix ?? ""}</MathJax>
        </div>
      </div>
    </section>
  );
}