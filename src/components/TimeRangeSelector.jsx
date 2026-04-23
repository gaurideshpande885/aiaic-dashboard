export default function TimeRangeSelector({ value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Season</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">-- Select Season --</option>
        <option value="Kharif 2025">Kharif 2025</option>
        <option value="Rabi 2025-26">Rabi 2025-26</option>
        <option value="Zaid 2026">Zaid 2026</option>
      </select>
    </div>
  );
}