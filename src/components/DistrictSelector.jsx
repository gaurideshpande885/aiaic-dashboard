export default function DistrictSelector({ value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">District</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">-- Select District --</option>
        <option value="Pune">Pune</option>
        <option value="Nashik">Nashik</option>
        <option value="Aurangabad">Aurangabad</option>
      </select>
    </div>
  );
}