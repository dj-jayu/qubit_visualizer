// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MathJaxContext } from "better-react-mathjax";
import App from './App.jsx';
import './index.css';

// Use the FULL configuration object
const config = {
  // This line tells MathJax to load the TeX input and HTML output components
  loader: { load: ["input/tex", "output/chtml"] },
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MathJaxContext version={3} config={config}>
      <App />
    </MathJaxContext>
  </React.StrictMode>,
);