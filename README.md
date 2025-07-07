# React Spreadsheet Prototype

This project is a front-end-only React application built as part of an intern assignment. The objective was to replicate a spreadsheet-like interface, similar to Google Sheets or Excel, using modern web technologies. The implementation emphasizes functionality, modularity, and pixel-perfect alignment with the provided Figma design.

---

## Live Demo

- **Deployed Site:** [https://react-spreadsheet-1.vercel.app/]
- **GitHub Repository:** [https://github.com/abhi-rai-001/React-Spreadsheet]

---

## Objective

To build a visually accurate spreadsheet prototype based on the given design.

- **Design Reference (Figma):**  
  [Figma Link](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1)

---

## Tech Stack

- React 18 (Vite)
- TypeScript (Strict Mode)
- Tailwind CSS for utility-first styling
- TanStack Table v8 (`@tanstack/react-table`) for grid management
- ESLint and Prettier for linting and formatting

No external state management libraries were used. All state is managed locally within the components.

---

## Features Implemented

### Layout and Styling

- Pixel-close layout according to Figma design
- Responsive, accessible, and structured component hierarchy

---

### Table Functionality

- Column resizing
- Column visibility toggle checkboxes
- Keyboard navigation using arrow keys
- Focus indicators and cell-level selection
- Hover highlighting and sticky headers
- Blank rows included for structure



### Code Quality

-  Code passes `npm run lint` (ESLint + Prettier)
-  Code passes `npm run type-check` (TypeScript strict mode with `tsc --noEmit`)



### Console Logging

- All UI actions, such as button clicks (e.g., "New Action", "Download", etc.), trigger `console.log()` statements to simulate feature behavior and show interactivity.

---

## Trade-offs and Notes
	•	Used @tanstack/react-table instead of a custom implementation to leverage built-in features like column resizing, visibility toggles, and performance optimization.
	•	The data is hardcoded and not dynamically fetched or persisted, as per assignment scope.
	•	All cells are keyboard-navigable and designed for a spreadsheet-like experience.

---

Author

Abhinav Ramanna Rai
GitHub: @abhi-rai-001
Email: raiabhinav182@gmail.com
