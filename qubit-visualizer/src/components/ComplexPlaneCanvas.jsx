// src/components/ComplexPlaneCanvas.jsx

import React, { useRef, useEffect } from 'react';
import { PI, TAU } from '../lib/utils';

export default function ComplexPlaneCanvas({ vector, color = "#fbbf24", size = 120 }) {
  const ref = useRef(null);

  useEffect(() => {
      const canvas = ref.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const scale = w / 2.2;
  
      ctx.clearRect(0, 0, w, h);
  
      // axes
      ctx.beginPath();
      ctx.strokeStyle = "#4b5563"; // slate-600
      ctx.lineWidth = 1;
      ctx.moveTo(0, cy);
      ctx.lineTo(w, cy);
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, h);
      ctx.stroke();
  
      // labels
      ctx.fillStyle = "#6b7280"; // slate-500
      ctx.font = "10px sans-serif";
      ctx.fillText("Re", w - 15, cy - 5);
      ctx.fillText("Im", cx + 5, 12);
  
      // vector
      const mag = Math.hypot(vector.re, vector.im);
      if (mag < 0.01) {
        ctx.beginPath();
        ctx.arc(cx, cy, 2, 0, TAU);
        ctx.fillStyle = color;
        ctx.fill();
        return;
      }
  
      const ex = cx + vector.re * scale;
      const ey = cy - vector.im * scale;
  
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.stroke();
  
      // arrow head
      const ang = Math.atan2(ey - cy, ex - cx);
      ctx.beginPath();
      ctx.moveTo(ex, ey);
      ctx.lineTo(ex - 10 * Math.cos(ang - PI / 6), ey - 10 * Math.sin(ang - PI / 6));
      ctx.lineTo(ex - 10 * Math.cos(ang + PI / 6), ey - 10 * Math.sin(ang + PI / 6));
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }, [vector, color, size]);

  return (
    <div className="canvas-container" style={{ width: size, height: size }}>
      <canvas ref={ref} width={size} height={size} />
    </div>
  );
}