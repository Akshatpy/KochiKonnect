export default function ModuleCard({ title, description, color }) {
  return (
    <div className="card" style={{ borderColor: color }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
