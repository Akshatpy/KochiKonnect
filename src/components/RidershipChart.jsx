import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import data from "../data/subset_predictions.json";

export default function RidershipChart() {
  const formattedData = data.map(d => ({
    ...d,
    timestamp: new Date(d.timestamp).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit" })
  }));

  return (
    <div className="card">
      <h2>Ridership Forecast (Last 200 Hours)</h2>
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" angle={-45} textAnchor="end" height={60}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual" dot={false} />
            <Line type="monotone" dataKey="predicted" stroke="#82ca9d" name="Predicted" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
