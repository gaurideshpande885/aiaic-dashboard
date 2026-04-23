export default function SystemStateBar({ status }) {
  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Error loading data</p>}
      {status === "success" && <p>Data Loaded</p>}
    </div>
  );
}