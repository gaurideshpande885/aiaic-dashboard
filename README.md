# AIAIC District Intelligence Dashboard

A district-level agricultural intelligence dashboard built for the AIAIC Interface Layer (Task 3).

**Built by:** Gauri Deshpande

## What it does
Allows users to select a district, crop, and season to view:
- Yield signals and trends
- Mandi price signals  
- Water stress indicators
- Income simulation (best/average/worst case scenarios)

## Tech Stack
- React 19 + Vite
- Tailwind CSS v4
- Recharts (bar chart visualization)
- Mock data (Mahesh + Deep pipeline format)

## How to run
```bash
npm install
npm run dev
```
Opens at: http://localhost:5173

## Project Structure
src/
├── components/
│   ├── DistrictSelector.jsx
│   ├── CropSelector.jsx
│   ├── TimeRangeSelector.jsx
│   ├── DataDisplayPanel.jsx
│   ├── SimulationPanel.jsx
│   └── SystemStateBar.jsx
├── data_adapter/
│   ├── Mahesadapter.jsx
│   └── deep_adapter.jsx
├── mock_data/
│   ├── maheshMock.json
│   └── simulationMock.json
└── App.jsx

## Sample Output
Selecting Pune + Wheat + Kharif 2025 shows:
- Yield: 3.4 T/ha — Stable
- Mandi Price: ₹2100/q — Above Average  
- Water Stress: 68% — Low Stress
- Income: Best ₹85,000 / Avg ₹68,000 / Worst ₹42,000
- Confidence: 82% — Low Risk
