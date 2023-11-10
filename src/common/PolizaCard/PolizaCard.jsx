import "./PolizaCard.css";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { deletePoliza } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadPolizaData } from "../../pages/polizaSlice";

export const PolizaCard = ({
    id,
    pacienteId,
    aseguradora,
    tipo,
    nºTarjeta,
    poliza,
    update,
}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const polizaDelete = (polizaId) => {
    console.log("soy profesionalId", polizaId.id)
    deletePoliza (polizaId.id)
    .then (()=>{
      update();
    })
    setShowModal(false);
  };

  const modifyPoliza = () => {
    dispatch(loadPolizaData({ polizaData: poliza }))
    navigate("/modificarpoliza")
  };

  return (
    <>
      <div variant="primary" className="polizaDesign">
          <div className="bold">POLIZA</div>
          <div>
          <span className="bold">Número de póliza:</span> {id}{" "}
          <span className="bold">Número identificación paciente:</span> {pacienteId}
          </div>
          <div>
          <span className="bold">Aseguradora:</span> {aseguradora}{" "}
          <span className="bold">Tipo de seguro:</span> {tipo}
          </div>
          <div>
          <span className="bold">Nº de tarjeta:</span> {nºTarjeta}
          </div> 
          <div className="buttonsDiv">
            <div className="buttonClicker" onClick={() => modifyPoliza(poliza)}>
            Modificar
            </div>
            <div className="buttonClicker" onClick={() => setShowModal(true)}>
            Eliminar
            </div>

          <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          className="modal-design"
          aria-labelledby="example-custom-modal-styling-title"
          >
          <Modal.Header className="modalConfirm-design-header">
          <Modal.Title>Atención</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalConfirm-design-body">
          <div>Está seguro de que desea eliminar la póliza de la base de datos?</div>
          </Modal.Body>
          <Modal.Footer className="modalConfirm-design-footer">
            <div onClick={() => polizaDelete({id})} className="buttonClicker">
            Eliminar póliza
            </div>
            <div className="spacer"></div>
            <div onClick={() => setShowModal(false)} className="buttonClicker">
            Regresar
            </div>
            </Modal.Footer>
          </Modal>
          </div>
      </div>
    </>
  );
};