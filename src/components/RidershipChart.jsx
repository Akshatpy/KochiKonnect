import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import data from "../data/subset_predictions.json"; 
export default function RidershipChart() {
  const formattedData = data.map(d => ({
    ...d,
    timestamp: new Date(d.timestamp).toLocaleString([], { month: "short", day: "numeric" })
  }));
  return (
    <div style={{ width: "100%", height: 400, backgroundColor: "white", padding: "1rem", borderRadius: "0.5rem", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>N-BEATS Ridership Predictions (April Month Stats)</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" angle={-45} textAnchor="end" height={60} />
          <YAxis label={{ value: "Ridership", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="actual" stroke="#1f77b4" name="Actual" dot={false} />
          <Line type="monotone" dataKey="predicted" stroke="#ff7f0e" name="Predicted" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
