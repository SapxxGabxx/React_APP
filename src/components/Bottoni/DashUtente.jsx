import { useNavigate } from "react-router-dom";
import "./DashButton.css";

export default function DashUtente() {
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate("/dashboard")} className="dashboard-btn">
      Torna alla Dashboard
    </button>
  );
}
