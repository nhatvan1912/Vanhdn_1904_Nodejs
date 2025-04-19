import { Navigate } from "react-router-dom";

export default function Stats({ user }) {
  if (!user) return <Navigate to="/login" replace />;
  return (
    <div style={{ padding: 20 }}>
      <h2>Stats View</h2>
      <p>This is a protected route.</p>
    </div>
  );
}
