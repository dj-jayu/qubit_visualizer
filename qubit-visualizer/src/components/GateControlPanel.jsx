// src/components/GateControlPanel.jsx

import React from 'react';
import MathText from './MathText';
import { GATE_INFO } from '../lib/gates';
import { snapTo, fmt, radToDeg, PI, tickBackground } from '../lib/utils';

export default function GateControlPanel({ gate, setGate, angleUnit, setStatus }) {
  const currentGateInfo = GATE_INFO[gate.type];
  const gateParams = currentGateInfo?.params ?? [];

  const displayAngle = (radians) => (angleUnit === "deg" ? `${fmt(radToDeg(radians), 1)}°` : `${fmt(radians, 2)} rad`);

  const onGateParamChange = (id, value) => {
    let v = parseFloat(value);
    // Soft-lock angle parameters to every pi/4 (45°); leave vector components free.
    if (["theta", "phi", "lambda"].includes(id)) {
      v = snapTo(v, PI / 4);
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
        <h3 id="gate-select-title" className="text-base text-white">2) Select Gate</h3>
      </div>

      {/* Gate Selection Buttons */}
      <div className="flex flex-wrap gap-1.5 justify-center" id="gate-select-buttons">
        {Object.keys(GATE_INFO).map((key) => (
          <button
            key={key}
            className={`btn btn-sm ${gate.type === key ? "active" : ""}`}
            onClick={() => onGateTypeChange(key)}
          >
            <MathText>{`$${GATE_INFO[key].nameLatex}$`}</MathText>
          </button>
        ))}
      </div>

      {/* Gate Parameter Sliders */}
      <div className="mt-4" id="gate-params-container">
        {gateParams.length > 0 && (
          <label className="block text-sm font-medium mb-2 text-slate-300 text-center">
            Gate Parameters
          </label>
        )}

        {/* Parameter sliders */}
        {gateParams.map((p) => (
          <div key={p.id} className="flex items-center justify-center mb-2">
            <label className="block text-sm font-medium text-slate-300 w-20 text-center">
              <MathText>{`$${p.label}$`}</MathText>
            </label>
            <input
              type="range"
              min={p.min}
              max={p.max}
              step={0.01}
              value={gate[p.id] ?? 0}
              onChange={(e) => onGateParamChange(p.id, e.target.value)}
              className="mx-4"
              style={["theta", "phi", "lambda"].includes(p.id) ? { "--tick-bg": tickBackground(p.min, p.max, PI / 4) } : undefined}
            />
            <span className="font-mono text-sm text-indigo-300 w-24 text-right">
              {p.id.startsWith("v") ? fmt(gate[p.id] ?? 0, 2) : displayAngle(gate[p.id] ?? 0)}
            </span>
          </div>
        ))}

        {/* Gate Matrix Display */}
        <div className="mt-3 text-center text-base overflow-x-auto p-1">
          <MathText dynamic>{currentGateInfo?.matrixLatex ?? ""}</MathText>
        </div>
      </div>
    </section>
  );
}