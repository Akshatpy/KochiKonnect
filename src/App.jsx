import RidershipChart from "./components/RidershipChart";
import ModuleCard from "./components/ModuleCard";
import Metro3D from "./components/Metro3D";
import "./index.css";
import logo from '../public/logo.jpg';
export default function App() {
  return (
    <div       className="app-container"
      style={{
        backgroundColor: '#f0f4f8',
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left', // adjust as needed
        backgroundSize: '150px 150px', // adjust size
        backgroundBlendMode: 'multiply',
      }}>
      <header className="app-header">
        <h1 className="app-title">AI-Driven Metro Scheduling</h1>
        <p className="app-subtitle">Prototype Dashboard – Team Kochi Connect</p>
      </header> 
      <RidershipChart />
      <section className="grid grid-2 section modules-section">
        <ModuleCard
          title="AI Powered Scheduling"
          description="Static schedules cause overcrowding and energy waste."
          color="#3b82f6"
        />
        <ModuleCard
          title="Fleet Health & Maintenance"
          description="Fragmented maintenance data leads to unexpected breakdowns."
          color="#10b981"
        />
        <ModuleCard
          title="Unified Data Hub"
          description="Data silos reduce transparency and create errors."
          color="#8b5cf6"
        />
        <ModuleCard
          title="Multi-Objective Simulator"
          description="Manual scheduling is slow and error-prone."
          color="#ef4444"
        />
      </section>
      <section className="section metro3d-section">
        <h2 className="section-title">Future Planning Simulation (3D)</h2>
        <div className="metro3d-canvas-container">
          <Metro3D />
        </div>
      </section>
    </div>
  );
}
