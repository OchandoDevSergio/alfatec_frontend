import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="buttonClicker" onClick={() => navigate("/")}>
        PACIENTES
      </div>
      <div className="buttonClicker" onClick={() => navigate("/profesionales")}>
        PROFESIONALES
      </div>
    </div>
  );
};
