import React, { useMemo, useState } from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";

import { PI, TAU, polar, fmt, radToDeg, probText } from "./lib/utils";
import { GATE_INFO, computeGate } from "./lib/gates";

import BlochSphere from "./components/BlochSphere";
import ComplexPlaneCanvas from "./components/ComplexPlaneCanvas";
import StateControlPanel from "./components/StateControlPanel";
import GateControlPanel from "./components/GateControlPanel";

export default function App() {
  const [angleUnit, setAngleUnit] = useState("rad");
  const [gate, setGate] = useState({ type: "Rz", theta: PI, phi: 0, lambda: 0, vx: 1, vy: 0, vz: 0 });
  const [init, setInit] = useState({ magnitudeAngle: PI / 4, alphaPhase: 0, betaPhase: 0 }); // |+>
  const [status, setStatus] = useState("");

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
    <MathJaxContext
      version={3}
      config={{
        tex: {
          inlineMath: [["$", "$"], ["\\(", "\\)"]],
          displayMath: [["$$", "$$"], ["\\[", "\\]"]],
        },
        loader: { load: ["input/tex", "output/chtml"] },
      }}
    >
      <div
        className="p-4 md:p-8 min-h-screen"
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
          .panel{background:linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,0)) #111827;border:1px solid #334155;border-radius:1rem;padding:1rem;box-shadow:0 10px 30px rgba(0,0,0,.35)}
          .panel-header{display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem}
          .canvas-container{position:relative;background-color:#1f2937;border:1px solid #334155;border-radius:.75rem}
          .btn{background-color:#111827;border:1px solid #334155;color:#e5e7eb;padding:.5rem .8rem;border-radius:.625rem;transition:.15s;box-shadow:0 2px 0 rgba(0,0,0,.3) inset}
          .btn:hover{background-color:#1f2937}
          .btn.active{background:linear-gradient(180deg,rgba(99,102,241,.35),rgba(99,102,241,.15));border-color:#6366f1;color:white}
          input[type=range]{-webkit-appearance:none;appearance:none;background:transparent;width:100%}
          input[type=range]::-webkit-slider-runnable-track{height:.5rem;background:#374151;border-radius:9999px;border:1px solid #4b5563}
          input[type=range]::-moz-range-track{height:.5rem;background:#374151;border-radius:9999px;border:1px solid #4b5563}
          input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1rem;height:1rem;background:white;border-radius:9999px;margin-top:-.25rem;box-shadow:0 0 0 2px #6366f1 inset}
          input[type=range]::-moz-range-thumb{width:1rem;height:1rem;background:white;border:none;border-radius:9999px;box-shadow:0 0 0 2px #6366f1 inset}
          .op-symbol{display:inline-flex;align-items:center;justify-content:center;width:20px;color:#94a3b8}
        `}</style>

        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                <MathJax>{`Interactive Gate Visualization`}</MathJax>
              </h1>
              <p className="text-base md:text-lg text-slate-400 mt-2">
                <MathJax>{`Visualize how a qubit's state vector is transformed.`}</MathJax>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn" onClick={onReset}>Reset</button>
              <button className="btn" onClick={onRandomize}>Randomize</button>
            </div>
          </div>
          <div className="sr-only" aria-live="polite">{status}</div>
        </header>

        {/* Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6 max-w-screen-2xl mx-auto">
          {/* Left */}
          <aside className="xl:sticky xl:top-6 h-max space-y-6">
            <StateControlPanel init={init} setInit={setInit} presets={presets} onPreset={onPreset} />
            <GateControlPanel
              gate={gate}
              setGate={setGate}
              angleUnit={angleUnit}
              setAngleUnit={setAngleUnit}
              setStatus={setStatus}
            />
          </aside>

          {/* Right */}
          <main className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="panel flex flex-col gap-3 items-center">
                <div className="panel-header justify-between w-full">
                  <h3 className="text-xl text-white">
                    <MathJax>{String.raw`Initial State: $(|\psi\rangle)$`}</MathJax>
                  </h3>
                  <div className="text-xs text-slate-400">
                    |α|², |β|²:
                    <span className="font-mono text-slate-300 ml-1">{probText(alpha, beta)}</span>
                  </div>
                </div>
                <BlochSphere alpha={alpha} beta={beta} vectorColor={0xfbbf24} />
              </section>

              <section className="panel flex flex-col gap-3 items-center">
                <div className="panel-header justify-between w-full">
                  <h3 className="text-xl text-white">
                    <MathJax>
                      {String.raw`Final State: $${currentGateInfo?.nameLatex ?? gate.type} |\psi\rangle$`}
                    </MathJax>
                  </h3>
                  <div className="text-xs text-slate-400">
                    |α'|², |β'|²:
                    <span className="font-mono text-slate-300 ml-1">{probText(math.finalAlpha, math.finalBeta)}</span>
                  </div>
                </div>
                <BlochSphere alpha={math.finalAlpha} beta={math.finalBeta} vectorColor={0x4ade80} />
              </section>
            </div>

            {/* Calculation details */}
            <section className="panel">
              <details className="group" open>
                <summary className="cursor-pointer select-none list-none flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-white">3) Final State Calculation</h3>
                  <span className="text-slate-400 text-sm">(click to collapse)</span>
                </summary>

                <div className="mt-4 flex flex-col items-center gap-4">
                  <div className="w-full">
                    <p className="text-center font-mono text-lg mb-2 text-indigo-400 min-h-8">
                      <MathJax dynamic>{currentGateInfo?.alphaEq ?? String.raw`\(\alpha' = (m_{00})\alpha + (m_{01})\beta\)`}</MathJax>
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap p-1">
                      <div className="w-16 text-center font-mono text-xl text-slate-400 flex items-center justify-center">
                        <MathJax>{String.raw`$|0\rangle$`}</MathJax>
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-xs">Initial α</p>
                        <ComplexPlaneCanvas vector={alpha} color="#818cf8" />
                      </div>
                      <span className="op-symbol">→</span>
                      <div className="text-center">
                        <p className="font-mono text-xs min-h-4">
                          <MathJax dynamic>{currentGateInfo?.alphaTerm1 ?? String.raw`\((m_{00})\alpha\)`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.a1} color="#a5b4fc" />
                      </div>
                      <span className="op-symbol">+</span>
                      <div className="text-center">
                        <p className="font-mono text-xs min-h-4">
                          <MathJax dynamic>{currentGateInfo?.alphaTerm2 ?? String.raw`\((m_{01})\beta\)`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.a2} color="#a5b4fc" />
                      </div>
                      <span className="op-symbol">=</span>
                      <div className="text-center">
                        <p className="font-mono text-xs">
                          <MathJax>{String.raw`$\alpha'$`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.finalAlpha} color="#6366f1" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <p className="text-center font-mono text-lg mb-2 text-teal-400 min-h-8">
                      <MathJax dynamic>{currentGateInfo?.betaEq ?? String.raw`\(\beta' = (m_{10})\alpha + (m_{11})\beta\)`}</MathJax>
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap p-1">
                      <div className="w-16 text-center font-mono text-xl text-slate-400 flex items-center justify-center">
                        <MathJax>{String.raw`$|1\rangle$`}</MathJax>
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-xs">Initial β</p>
                        <ComplexPlaneCanvas vector={beta} color="#2dd4bf" />
                      </div>
                      <span className="op-symbol">→</span>
                      <div className="text-center">
                        <p className="font-mono text-xs min-h-4">
                          <MathJax dynamic>{currentGateInfo?.betaTerm1 ?? String.raw`\((m_{10})\alpha\)`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.b1} color="#5eead4" />
                      </div>
                      <span className="op-symbol">+</span>
                      <div className="text-center">
                        <p className="font-mono text-xs min-h-4">
                          <MathJax dynamic>{currentGateInfo?.betaTerm2 ?? String.raw`\((m_{11})\beta\)`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.b2} color="#5eead4" />
                      </div>
                      <span className="op-symbol">=</span>
                      <div className="text-center">
                        <p className="font-mono text-xs">
                          <MathJax>{String.raw`$\beta'$`}</MathJax>
                        </p>
                        <ComplexPlaneCanvas vector={math.finalBeta} color="#14b8a6" />
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </section>
          </main>
        </div>
      </div>
    </MathJaxContext>
  );
}
