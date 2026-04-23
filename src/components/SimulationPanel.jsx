import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function SimulationPanel({ simulation }) {
  if (!simulation) return null;

  const chartData = [
    { name: "Best Case",  value: simulation.best,  color: "#22c55e" },
    { name: "Average",    value: simulation.avg,   color: "#3b82f6" },
    { name: "Worst Case", value: simulation.worst, color: "#ef4444" },
  ];

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "20px", marginTop: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "16px" }}>Income Simulation (per season)</h2>
        <span style={{ color: simulation.riskColor, fontWeight: "600" }}>
          {simulation.riskLevel} · {simulation.confidence}% Confidence
        </span>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis tickFormatter={v => `₹${(v/1000).toFixed(0)}k`} />
          <Tooltip formatter={v => [`₹${v.toLocaleString()}`, "Income"]} />
          <Bar dataKey="value" radius={[6,6,0,0]}>
            {chartData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "16px" }}>
        {chartData.map(d => (
          <div key={d.name} style={{ textAlign: "center" }}>
            <p style={{ fontSize: "12px", color: "#9ca3af" }}>{d.name}</p>
            <p style={{ fontWeight: "bold", color: d.color }}>₹{d.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}