import { useState, useEffect } from "react";
import DistrictSelector from "./components/DistrictSelector";
import CropSelector from "./components/CropSelector";
import TimeRangeSelector from "./components/TimeRangeSelector";
import DataDisplayPanel from "./components/DataDisplayPanel";
import SimulationPanel from "./components/SimulationPanel";
import SystemStateBar from "./components/SystemStateBar";
import { adaptMaheshData } from "./data_adapter/Mahesadapter";
import { adaptSimulation } from "./data_adapter/deep_adapter";

import maheshRaw from "./mock_data/maheshMock.json";
import simulationRaw from "./mock_data/simulationMock.json";

export default function App() {
  const [district, setDistrict] = useState("");
  const [crop, setCrop] = useState("");
  const [season, setSeason] = useState("");
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [simulation, setSimulation] = useState(null);

  useEffect(() => {
    if (!district || !crop || !season) {
      setStatus("idle");
      setData(null);
      setSimulation(null);
      return;
    }

    setStatus("loading");
    setData(null);
    setSimulation(null);

    const timer = setTimeout(() => {
      try {
        const key = crop.toLowerCase();
        console.log("district:", district, "key:", key);
        console.log("maheshRaw:", maheshRaw);
        const rawMahesh = maheshRaw[district]?.[key];
        const rawSim = simulationRaw[district]?.[key];
        console.log("rawMahesh:", rawMahesh);

        if (!rawMahesh || !rawSim) throw new Error("No data");

        setData(adaptMaheshData(rawMahesh));
        setSimulation(adaptSimulation(rawSim));
        setStatus("success");
      } catch (err) {
        console.log("Error:", err.message);
        setStatus("error");
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [district, crop, season]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-2xl font-bold text-green-700">AIAIC District Intelligence Dashboard</h1>
        <p className="text-sm text-gray-400 mt-1">Agricultural Intelligence - Maharashtra</p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-5 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <DistrictSelector value={district} onChange={setDistrict} />
          <CropSelector value={crop} onChange={setCrop} />
          <TimeRangeSelector value={season} onChange={setSeason} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-4">
        <SystemStateBar status={status} district={district} crop={crop} season={season} />
      </div>

      {status === "loading" && (
        <div className="max-w-5xl mx-auto flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-green-500 border-t-transparent" />
        </div>
      )}

      {status === "success" && (
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          <DataDisplayPanel data={data} />
          <SimulationPanel simulation={simulation} />
        </div>
      )}

      {status === "idle" && (
        <div className="max-w-5xl mx-auto text-center py-16">
          <p className="text-lg font-medium text-gray-400">
            Select all three filters above to load district intelligence
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="max-w-5xl mx-auto text-center py-16">
          <p className="text-lg font-medium text-red-400">
            Could not load data. Please try a different selection.
          </p>
        </div>
      )}
    </div>
  );
}