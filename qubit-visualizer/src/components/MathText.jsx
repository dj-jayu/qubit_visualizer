// src/components/MathText.jsx

import React from "react";
import { MathJax } from "better-react-mathjax";

// Memoized MathJax wrapper. MathJax typesetting is slow and synchronous, and
// with `dynamic` it re-typesets on every re-render. The formulas here only
// depend on the selected gate (their LaTeX string), not on slider values, so
// memoizing on `children` means dragging a slider no longer triggers a
// re-typeset — keeping the controls and the Bloch arrow smooth.
const MathText = React.memo(function MathText({ children, dynamic = false }) {
  return <MathJax dynamic={dynamic}>{children}</MathJax>;
});

export default MathText;
