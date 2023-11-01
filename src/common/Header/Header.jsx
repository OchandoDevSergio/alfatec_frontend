import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();


  return (
    <div className="header">
      <div className="buttonClicker" onClick={() => navigate("/")}>
        INICIO
      </div>
      <div className="buttonClicker" >
        NUEVO USUARIO
      </div>
      <div className="buttonClicker" >
        BORRAR MÉDICOS
      </div>
    </div>
  );
};
