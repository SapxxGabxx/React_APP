import { useNavigate } from "react-router-dom";
import "./DashButton.css";

export default function DashAdmin() {
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate("/admin")} className="dashboard-btn">
      Torna alla Dashboard
    </button>
  );
}
