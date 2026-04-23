export function adaptMaheshData(raw) {
  if (!raw) return null;

  const waterStress =
    raw.water_level > 60 ? "Low" :
    raw.water_level > 40 ? "Moderate" : "High";

  const waterColor =
    waterStress === "Low" ? "#16a34a" :
    waterStress === "Moderate" ? "#ca8a04" : "#dc2626";

  const yieldValue = Array.isArray(raw.yield)
    ? raw.yield[raw.yield.length - 1]
    : raw.yield;

  const yieldTrend =
    yieldValue > 4 ? "↑ Strong" :
    yieldValue > 3 ? "→ Stable" : "↓ Weak";

  const yieldColor =
    yieldValue > 4 ? "#16a34a" :
    yieldValue > 3 ? "#ca8a04" : "#dc2626";

  const priceValue = Array.isArray(raw.mandi_price)
    ? raw.mandi_price[raw.mandi_price.length - 1]
    : raw.mandi_price;

  const priceTrend =
    priceValue > 2000 ? "↑ Above Average" :
    priceValue > 1700 ? "→ Average" : "↓ Below Average";

  const arrivalsValue = Array.isArray(raw.arrivals)
    ? raw.arrivals[raw.arrivals.length - 1]
    : raw.arrivals;

  return {
    district: raw.district,
    crop: raw.crop,
    rainfall: raw.rainfall ?? 0,
    yield: yieldValue,
    yieldTrend,
    yieldColor,
    mandiPrice: priceValue,
    priceTrend,
    arrivals: arrivalsValue,
    waterLevel: raw.water_level ?? 0,
    waterStress,
    waterColor,
  };
}