import React, { useMemo, useState } from "react";
import MathText from "./components/MathText";

import { PI, TAU, polar, probText, blochVector, fmt, cText } from "./lib/utils";
import { GATE_INFO, computeGate, getRotationAxis } from "./lib/gates";

// Compact "x, y, z" readout of a state's Bloch-sphere coordinates.
const blochText = (a, b) => {
  const { x, y, z } = blochVector(a, b);
  return `(${fmt(x, 2)}, ${fmt(y, 2)}, ${fmt(z, 2)})`;
};

import BlochSphere from "./components/BlochSphere";
import ComplexPlaneCanvas from "./components/ComplexPlaneCanvas";
import StateControlPanel from "./components/StateControlPanel";
import GateControlPanel from "./components/GateControlPanel";

export default function App() {
  const [angleUnit, setAngleUnit] = useState("rad");
  const [gate, setGate] = useState({ type: "Rz", theta: PI, phi: 0, lambda: 0, vx: 1, vy: 0, vz: 0 });
  const [init, setInit] = useState({ magnitudeAngle: PI / 4, alphaPhase: 0, betaPhase: 0 }); // |+>
  const [status, setStatus] = useState("");
  const [calcOpen, setCalcOpen] = useState(true);

  const presets = useMemo(
    () => ({
      "0": { magnitudeAngle: 0,       alphaPhase: 0, betaPhase: 0 },
      "1": { magnitudeAngle: PI / 2,  alphaPhase: 0, betaPhase: 0 },
      "+": { magnitudeAngle: PI / 4,  alphaPhase: 0, betaPhase: 0 },
      "-": { magnitudeAngle: PI / 4,  alphaPhase: 0, betaPhase: PI },
      "i":   { magnitudeAngle: PI / 4,  alphaPhase: 0, betaPhase: PI / 2 },
      "-i":{ magnitudeAngle: PI / 4,  alphaPhase: 0, betaPhase: (3 * PI) / 2 },
    }),
    []
  );

  // amplitudes from UI
  const { alpha, beta } = useMemo(() => {
    const magA = Math.cos(init.magnitudeAngle);
    const magB = Math.sin(init.magnitudeAngle);
    return { alpha: polar(magA, init.alphaPhase), beta: polar(magB, init.betaPhase) };
  }, [init]);

  const math = useMemo(() => computeGate(alpha, beta, gate), [alpha, beta, gate]);
  const rotationAxis = useMemo(() => getRotationAxis(gate), [gate]);
  const currentGateInfo = GATE_INFO[gate.type];

  const onPreset = (key) => {
    const p = presets[key];
    if (!p) return;
    setInit(p);
    setStatus(`Preset ${key} selected.`);
  };

  const onRandomize = () => {
    setInit({
      magnitudeAngle: Math.random() * (PI / 2),
      alphaPhase: Math.random() * TAU,
      betaPhase: Math.random() * TAU,
    });

    setGate((g) => {
      const t = { ...g };
      if (["U", "R"].includes(g.type)) {
        t.theta = Math.random() * TAU;
        t.phi = Math.random() * TAU;
        t.lambda = g.type === "U" ? Math.random() * TAU : 0;
      } else if (["Rx", "Ry", "Rz", "P"].includes(g.type)) {
        t.theta = Math.random() * TAU;
        t.phi = 0; t.lambda = 0;
      } else if (g.type === "RV") {
        t.vx = (Math.random() * 2 - 1) * PI;
        t.vy = (Math.random() * 2 - 1) * PI;
        t.vz = (Math.random() * 2 - 1) * PI;
      }
      return t;
    });

    setStatus("Randomized parameters.");
  };

  const onReset = () => {
    setGate({ type: "Rz", theta: PI, phi: 0, lambda: 0, vx: 1, vy: 0, vz: 0 });
    onPreset("+");
    setStatus("Reset to Rz and |+⟩.");
  };

  return (
      <div
        className="h-screen overflow-hidden flex flex-col p-3 gap-3"
        style={{
          background:
            "radial-gradient(1200px 800px at 10% -10%, rgba(99,102,241,.14), transparent 60%)," +
            "radial-gradient(1000px 600px at 110% 0%, rgba(34,197,94,.10), transparent 60%)," +
            "#0b1220",
          color: "#e5e7eb",
          fontFamily:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
        }}
      >
        <style>{`
          .panel{background:linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,0)) #111827;border:1px solid #334155;border-radius:.75rem;padding:.75rem;box-shadow:0 10px 30px rgba(0,0,0,.35)}
          .panel-header{display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem}
          .canvas-container{position:relative;background-color:#1f2937;border:1px solid #334155;border-radius:.5rem}
          .btn{background-color:#111827;border:1px solid #334155;color:#e5e7eb;padding:.5rem .8rem;border-radius:.5rem;transition:.15s;box-shadow:0 2px 0 rgba(0,0,0,.3) inset}
          .btn:hover{background-color:#1f2937}
          .btn.active{background:linear-gradient(180deg,rgba(99,102,241,.35),rgba(99,102,241,.15));border-color:#6366f1;color:white}
          .btn-sm{padding:.25rem .55rem;font-size:.8rem;line-height:1.1;border-radius:.4rem}
          input[type=range]{-webkit-appearance:none;appearance:none;background:transparent;width:100%}
          input[type=range]::-webkit-slider-runnable-track{height:.4rem;background:#374151;border-radius:9999px;border:1px solid #4b5563}
          input[type=range]::-moz-range-track{height:.4rem;background:#374151;border-radius:9999px;border:1px solid #4b5563}
          input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:.9rem;height:.9rem;background:white;border-radius:9999px;margin-top:-.25rem;box-shadow:0 0 0 2px #6366f1 inset}
          input[type=range]::-moz-range-thumb{width:.9rem;height:.9rem;background:white;border:none;border-radius:9999px;box-shadow:0 0 0 2px #6366f1 inset}
          .op-symbol{display:inline-flex;align-items:center;justify-content:center;width:18px;color:#94a3b8}
          aside::-webkit-scrollbar{width:8px}
          aside::-webkit-scrollbar-thumb{background:#334155;border-radius:9999px}
          aside::-webkit-scrollbar-track{background:transparent}
        `}</style>

        {/* Header (slim) */}
        <header className="flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-baseline gap-3 min-w-0">
            <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-white truncate">
              <MathText>{`Interactive Gate Visualization`}</MathText>
            </h1>
            <p className="hidden lg:block text-sm text-slate-400 truncate">
              <MathText>{`Visualize how a qubit's state vector is transformed.`}</MathText>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="btn btn-sm" onClick={onReset}>Reset</button>
            <button className="btn btn-sm" onClick={onRandomize}>Randomize</button>
          </div>
          <div className="sr-only" aria-live="polite">{status}</div>
        </header>

        {/* Dashboard */}
        <div className="grid grid-cols-1 xl:grid-cols-[340px_minmax(0,1fr)] gap-3 flex-1 min-h-0">
          {/* Left controls */}
          <aside className="flex flex-col gap-3 min-h-0 overflow-y-auto pr-1">
            <StateControlPanel init={init} setInit={setInit} presets={presets} onPreset={onPreset} />
            <GateControlPanel
              gate={gate}
              setGate={setGate}
              angleUnit={angleUnit}
              setAngleUnit={setAngleUnit}
              setStatus={setStatus}
            />
          </aside>

          {/* Right: spheres fill, calculation sits below */}
          <main className="grid grid-rows-[minmax(0,1fr)_auto] gap-3 min-h-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-h-0">
              <section className="panel flex flex-col gap-2 min-h-0">
                <div className="panel-header justify-between w-full shrink-0 m-0">
                  <h3 className="text-base text-white">
                    <MathText>{String.raw`Initial State: $(|\psi\rangle)$`}</MathText>
                  </h3>
                  <div className="text-xs text-slate-400">
                    |α|², |β|²:
                    <span className="font-mono text-slate-300 ml-1">{probText(alpha, beta)}</span>
                  </div>
                </div>
                <BlochSphere alpha={alpha} beta={beta} vectorColor={0xfbbf24} />
                <div className="text-xs text-slate-400 self-start shrink-0">
                  Bloch <span className="font-mono text-slate-300">x, y, z = {blochText(alpha, beta)}</span>
                </div>
              </section>

              <section className="panel flex flex-col gap-2 min-h-0">
                <div className="panel-header justify-between w-full shrink-0 m-0">
                  <h3 className="text-base text-white">
                    <MathText dynamic>
                      {`Final State: $${currentGateInfo?.nameLatex ?? gate.type} |\\psi\\rangle$`}
                    </MathText>
                  </h3>
                  <div className="text-xs text-slate-400">
                    |α'|², |β'|²:
                    <span className="font-mono text-slate-300 ml-1">{probText(math.finalAlpha, math.finalBeta)}</span>
                  </div>
                </div>
                <BlochSphere alpha={math.finalAlpha} beta={math.finalBeta} vectorColor={0x4ade80} rotationAxis={rotationAxis} />
                <div className="text-xs text-slate-400 self-start flex items-center gap-3 flex-wrap shrink-0">
                  <span>Bloch <span className="font-mono text-slate-300">x, y, z = {blochText(math.finalAlpha, math.finalBeta)}</span></span>
                  {rotationAxis && (
                    <span className="text-slate-500">— white line: rotation axis</span>
                  )}
                </div>
              </section>
            </div>

            {/* Calculation details */}
            <section className="panel shrink-0">
              <details
                className="group"
                open={calcOpen}
                onToggle={(e) => setCalcOpen(e.currentTarget.open)}
              >
                <summary className="cursor-pointer select-none list-none flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-white">3) Final State Calculation</h3>
                  <span className="text-slate-400 text-xs">({calcOpen ? "click to collapse" : "click to expand"})</span>
                </summary>

                <div className="mt-2 flex flex-col items-stretch gap-3">
                  {/* alpha row: planes/values on the left, formula on the right */}
                  <div className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <div className="w-10 text-center font-mono text-lg text-slate-400 flex items-center justify-center">
                        <MathText>{String.raw`$|0\rangle$`}</MathText>
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-[10px] leading-tight text-indigo-300 whitespace-nowrap">α = {cText(alpha)}</p>
                        <ComplexPlaneCanvas vector={alpha} color="#818cf8" size={92} />
                      </div>
                      <span className="op-symbol">→</span>
                      <div className="text-center">
                        <p className="font-mono text-[10px] leading-tight text-slate-300 whitespace-nowrap">{cText(math.a1)}</p>
                        <ComplexPlaneCanvas vector={math.a1} color="#a5b4fc" size={92} />
                      </div>
                      <span className="op-symbol">+</span>
                      <div className="text-center">
                        <p className="font-mono text-[10px] leading-tight text-slate-300 whitespace-nowrap">{cText(math.a2)}</p>
                        <ComplexPlaneCanvas vector={math.a2} color="#a5b4fc" size={92} />
                      </div>
                      <span className="op-symbol">=</span>
                      <div className="text-center">
                        <p className="font-mono text-[10px] leading-tight text-indigo-300 whitespace-nowrap">α' = {cText(math.finalAlpha)}</p>
                        <ComplexPlaneCanvas vector={math.finalAlpha} color="#6366f1" size={92} />
                      </div>
                    </div>
                    <p className="flex-1 min-w-[220px] max-w-[460px] text-center font-mono text-sm md:text-base text-indigo-400">
                      <MathText dynamic>{currentGateInfo?.alphaEq ?? String.raw`\(\alpha' = (m_{00})\alpha + (m_{01})\beta\)`}</MathText>
                    </p>
                  </div>

                  <div className="border-t border-slate-700/60" />

                  {/* beta row */}
                  <div className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <div className="w-10 text-center font-mono text-lg text-slate-400 flex items-center justify-center">
                        <MathText>{String.raw`$|1\rangle$`}</MathText>
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-[10px] leading-tight text-teal-300 whitespace-nowrap">β = {cText(beta)}</p>
                        <ComplexPlaneCanvas vector={beta} color="#2dd4bf" size={92} />
                      </div>
                      <span className="op-symbol">→</span>
                      <div className="text-center">
                        <p className="font-mono text-[10px] leading-tight text-slate-300 whitespace-nowrap">{cText(math.b1)}</p>
                        <ComplexPlaneCanvas vector={math.b1} color="#5eead4" size={92} />
                      </div>
                      <span className="op-symbol">+</span>
                      <div className="text-center">
                        <p className="font-mono text-[10px] leading-tight text-slate-300 whitespace-nowrap">{cText(math.b2)}</p>
                        <ComplexPlaneCanvas vector={math.b2} color="#5eead4" size={92} />
                      </div>
                      <span className="op-symbol">=</span>
                      <div className="text-center">
                        <p className="font-mono text-[10px] leading-tight text-teal-300 whitespace-nowrap">β' = {cText(math.finalBeta)}</p>
                        <ComplexPlaneCanvas vector={math.finalBeta} color="#14b8a6" size={92} />
                      </div>
                    </div>
                    <p className="flex-1 min-w-[220px] max-w-[460px] text-center font-mono text-sm md:text-base text-teal-400">
                      <MathText dynamic>{currentGateInfo?.betaEq ?? String.raw`\(\beta' = (m_{10})\alpha + (m_{11})\beta\)`}</MathText>
                    </p>
                  </div>
                </div>
              </details>
            </section>
          </main>
        </div>
      </div>
  );
}