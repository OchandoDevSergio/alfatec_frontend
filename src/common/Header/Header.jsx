import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteMedics } from "../../services/apiCalls";
import Modal from "react-bootstrap/Modal";

export const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const medicsDelete = () => {
    deleteMedics ();
    setShow(false);
  };

  return (
    <div className="header">
      <div className="buttonClicker" onClick={() => navigate("/")}>
        PACIENTES
      </div>
      <div className="buttonClicker" onClick={() => navigate("/profesionales")}>
        PROFESIONALES
      </div>
      <div className="buttonClicker" >
        NUEVO USUARIO
      </div>
      <>
      <div className="buttonClicker" onClick={() => setShow(true)}>
        BORRAR MÉDICOS
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="modal-design"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header className="modalConfirm-design-header">
          <Modal.Title>Atención</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalConfirm-design-body">
          <div>Está seguro de que desea eliminar a todos los médicos de la base de datos?</div>
        </Modal.Body>
        <Modal.Footer className="modalConfirm-design-footer">
          <div onClick={() => medicsDelete()} className="modalButton">
            Eliminar médicos
          </div>
          <div className="spacer"></div>
          <div onClick={() => setShow(false)} className="modalButton">
            Regresar
          </div>
        </Modal.Footer>
      </Modal>
      </>
    </div>
  );
};
