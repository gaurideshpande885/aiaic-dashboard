export default function DataDisplayPanel({ data }) {
  if (!data) return null;
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <div style={{ flex: 1, minWidth: "200px", border: "2px solid #22c55e", borderRadius: "12px", padding: "16px" }}>
        <p style={{ fontSize: "11px", color: "#9ca3af", fontWeight: "bold" }}>YIELD SIGNAL</p>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>{data.yield} T/ha</p>
        <p style={{ color: data.yieldColor, fontWeight: "600" }}>{data.yieldTrend}</p>
        <p style={{ fontSize: "12px", color: "#9ca3af" }}>Rainfall: {data.rainfall} mm</p>
      </div>
      <div style={{ flex: 1, minWidth: "200px", border: "2px solid #3b82f6", borderRadius: "12px", padding: "16px" }}>
        <p style={{ fontSize: "11px", color: "#9ca3af", fontWeight: "bold" }}>MANDI PRICE</p>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>₹{data.mandiPrice}/q</p>
        <p style={{ color: "#3b82f6", fontWeight: "600" }}>{data.priceTrend}</p>
        <p style={{ fontSize: "12px", color: "#9ca3af" }}>Arrivals: {data.arrivals} qtl</p>
      </div>
      <div style={{ flex: 1, minWidth: "200px", border: "2px solid #f97316", borderRadius: "12px", padding: "16px" }}>
        <p style={{ fontSize: "11px", color: "#9ca3af", fontWeight: "bold" }}>WATER STRESS</p>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>{data.waterLevel}%</p>
        <p style={{ color: data.waterColor, fontWeight: "600" }}>{data.waterStress} Stress</p>
        <p style={{ fontSize: "12px", color: "#9ca3af" }}>Reservoir Level</p>
      </div>
    </div>
  );
}