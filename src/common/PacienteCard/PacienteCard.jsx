import "./PacienteCard.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadPacienteData } from "../../pages/pacienteSlice";
import { pacienteDataCheck } from "../../pages/pacienteSlice";
import { deletePaciente } from "../../services/apiCalls";
import { deletePolizasPaciente } from "../../services/apiCalls";
import Modal from "react-bootstrap/Modal";

export const PacienteCard = ({
    id,
    nhc,
    nombre,
    primerApellido,
    paciente,
    update,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxPacienteData = useSelector(pacienteDataCheck);
  const showPaciente = () => {
    dispatch(loadPacienteData({ pacienteData: paciente }))
    navigate("/mostrarpaciente")
  };
  const modifyPaciente = () => {
    dispatch(loadPacienteData({ pacienteData: paciente }))
    navigate("/modificarpaciente")
  };
  const [showModal, setShowModal] = useState(false);

  const pacienteDelete = (pacienteId) => {
    deletePolizasPaciente(pacienteId.id)
    .then(()=>{
      deletePaciente (pacienteId.id)
      .then (()=>{
        update()
        })
      .catch((error) => console.log(error));
    })
    setShowModal(false);

  };


  return (
    <>
      <div variant="primary" className="pacienteDesign" >
          <div className="bold">PACIENTE</div>
          <div>
          <span className="bold">Id:</span> {id}{" "}
          <span className="bold">Número historial clínico:</span> {nhc}
          </div>
          <div>
          <span className="bold">Nombre:</span> {nombre}{" "}
          <span className="bold">Apellido:</span> {primerApellido} 
          </div>
          <div className="buttonsDiv">
            <div className="buttonClicker" onClick={() => showPaciente(paciente)}>
            Examinar
            </div>
            <div className="buttonClicker" onClick={() => modifyPaciente(paciente)}>
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
          <div>Está seguro de que desea eliminar al paciente de la base de datos?</div>
          </Modal.Body>
          <Modal.Footer className="modalConfirm-design-footer">
            <div onClick={() => pacienteDelete({id})} className="buttonClicker">
            Eliminar paciente
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