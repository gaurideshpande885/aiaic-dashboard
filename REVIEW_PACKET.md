# REVIEW_PACKET.md
## AIAIC District Intelligence Dashboard
**Submitted by:** Gauri Deshpande  
**Task:** Interface Layer — Task 3  
**Date:** April 2026

---

## 1. Entry Point
- File: `index.html` loads `src/main.jsx` which renders `src/App.jsx`
- Run: `npm run dev` → opens at `http://localhost:5173`

---

## 2. Core Execution Flow (3 files)

**`src/App.jsx`** — Central state manager. Holds district, crop, season, status, data, simulation state. Triggers data load via useEffect when all 3 inputs are selected.

**`src/data_adapter/Mahesadapter.jsx`** — Converts raw Mahesh pipeline JSON into UI-ready format. Adds intelligence labels: yield trend, price trend, water stress level.

**`src/data_adapter/deep_adapter.jsx`** — Converts Deep's simulation JSON into UI format. Calculates risk level and confidence percentage.

---

## 3. Live Flow (Input → Output)

User selects District + Crop + Season
→ App.jsx useEffect triggers
→ Status set to "loading" (spinner shown)
→ Mock data fetched from maheshMock.json + simulationMock.json
→ adaptMaheshData() adds yield trend, price trend, water stress labels
→ adaptSimulation() adds income bands, risk level, confidence score
→ Status set to "success"
→ DataDisplayPanel shows yield/price/water cards
→ SimulationPanel shows income bar chart

---

## 4. What Was Built

- DistrictSelector — dropdown for Pune, Nashik, Aurangabad
- CropSelector — dropdown for wheat, rice, sugarcane
- TimeRangeSelector — dropdown for Kharif/Rabi/Zaid seasons
- SystemStateBar — shows idle/loading/success/error states
- DataDisplayPanel — 3 intelligence cards: yield signal, mandi price, water stress
- SimulationPanel — bar chart with best/average/worst income scenarios
- Data Adapter Layer — converts raw JSON to labeled intelligence output
- Mock Data — structured as district > crop > fields (same schema as Mahesh/Deep)

---

## 5. Failure Cases

- Missing district/crop/season → status stays idle, no fetch triggered
- Data not found for combination → error caught, error state shown
- Adapter receives null → returns null safely, panel renders nothing
- Import/parse failure → caught in try/catch, error state shown

---

## 6. Proof

Selecting Pune + Wheat + Kharif 2025 shows:
- Yield: 3.4 T/ha — Stable trend
- Mandi Price: 2100 per quintal — Above Average
- Water Stress: 68% — Low Stress
- Income Simulation: Best 85000 / Average 68000 / Worst 42000
- Confidence: 82% — Low Risk

All 3 districts and all 3 crops work correctly.
Loading spinner appears during simulated fetch.
Error state displays for invalid combinations.