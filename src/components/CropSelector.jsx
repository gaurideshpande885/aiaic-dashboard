export default function CropSelector({ value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Crop</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">-- Select Crop --</option>
        <option value="wheat">Wheat</option>
        <option value="rice">Rice</option>
        <option value="sugarcane">Sugarcane</option>
      </select>
    </div>
  );
}