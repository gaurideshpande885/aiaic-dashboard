export function adaptSimulation(raw) {
  if (!raw) return null;

  const confidence = Math.round((raw.confidence_score ?? 0) * 100);

  const riskLevel =
    raw.confidence_score > 0.75 ? "Low Risk" :
    raw.confidence_score > 0.60 ? "Moderate Risk" : "High Risk";

  const riskColor =
    raw.confidence_score > 0.75 ? "#16a34a" :
    raw.confidence_score > 0.60 ? "#ca8a04" : "#dc2626";

  return {
    best: raw.best_case_income,
    avg: raw.average_income,
    worst: raw.worst_case_income,
    confidence,
    riskLevel,
    riskColor,
  };
}