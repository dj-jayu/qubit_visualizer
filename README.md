# [Qubit Visualizer](https://dj-jayu.github.io/qubit_visualizer/)

**Visualizing qubits using both the Bloch sphere and two complex planes.**

---

## Overview

This project provides an interactive way to visualize a qubit’s state and how quantum gates transform it.
While the **Bloch sphere** is a common and powerful representation, it hides certain details like **phase information**.

I personally find it more intuitive to imagine a qubit as **two stacked complex planes**:

* **Upper plane:** amplitude of $|0\rangle$
* **Lower plane:** amplitude of $|1\rangle$

This tool combines both perspectives:

* **Bloch sphere view** – for geometric intuition.
* **Two complex planes view** – for phase clarity.

---

## Features

* Visualize the initial state of a qubit.
* See how various gates transform the state in **both representations**.
* Built using **Gemini Pro** and **ChatGPT** for idea development and prototyping.
* Gate definitions sourced from [IBM Qiskit Documentation](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.library.TGate) (e.g., for the T gate).

---

## Motivation

The Bloch sphere is elegant, but it doesn't always make it easy to see “what’s really happening” when a gate is applied — especially regarding **phase shifts**.
This visualization aims to make those transformations clearer.

---

## Implementation Notes

* The code is currently a single-page web app.
* Future improvements could include refactoring into smaller, reusable components (e.g., with **React** or another framework).
* The math and visuals should be correct, but there may be undetected errors.

---

## Contributing

Contributions are welcome!
Feel free to:

* Fork and extend the project.
* Add more gates or visual modes.
* Improve the code structure.
* Fix bugs or improve the math.

---

## Disclaimer

This is a learning and visualization tool — not a full-featured quantum simulator. Use it to build intuition, but verify calculations independently when precision is critical.

---

## License

[MIT License](LICENSE) — free to use, modify, and share.
