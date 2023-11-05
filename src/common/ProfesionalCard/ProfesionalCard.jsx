import "./ProfesionalCard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadProfesionalData } from "../../pages/profesionalSlice";
import { profesionalDataCheck } from "../../pages/profesionalSlice";


export const ProfesionalCard = ({
    id,
    nºColegiado,
    nombre,
    primerApellido,
    segundoApellido,
    genero,
    fechaNacimiento,
    nifPasaporte,
    tipoProfesional,
    calle,
    numero,
    puerta,
    codigoPostal,
    ciudad,
    profesional,
  //update,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxProfesionalData = useSelector(profesionalDataCheck);
  const showProfesional = () => {
    dispatch(loadProfesionalData({ profesionalData: profesional }))
    navigate("/mostrarprofesional")
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("soy profesionalDataCheck", reduxProfesionalData.profesionalData)
  }, [reduxProfesionalData]);

  const profesionalDelete = (profesionalId) => {
    console.log("soy profesionalId", profesionalId.id)
    deleteProfesional (profesionalId.id)
    // .then (()=>{
    //   searchProfesionales()
    //   .then((results) => {
    //     console.log("soy results tras deleteMedics",results)
    //     setProfesionales(results.data.data);
    //   })
    //   .catch((error) => console.log(error));
    //})
    setShowModal(false);

  };



  return (
    <>
      <div variant="primary" className="profesionalDesign">
          <div className="bold">PROFESIONAL</div>
          <div>
          <span className="bold">Id:</span> {id}{" "}
          <span className="bold">Número de colegiado:</span> {nºColegiado}</div>
          <div>
          <span className="bold">Nombre:</span> {nombre}{" "}
          <span className="bold">Apellido:</span> {primerApellido}
          </div> 
          <div className="buttonsDiv">
            <div className="buttonClicker" onClick={() => showProfesional(profesional)}>
            Examinar
            </div>
            <div className="buttonClicker" onClick={() => navigate("/profesionales")}>
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
          <div>Está seguro de que desea eliminar al profesional de la base de datos?</div>
          </Modal.Body>
          <Modal.Footer className="modalConfirm-design-footer">
            <div onClick={() => profesionalDelete({id})} className="modalButton">
            Eliminar profesional
            </div>
            <div className="spacer"></div>
            <div onClick={() => setShowModal(false)} className="modalButton">
            Regresar
            </div>
            </Modal.Footer>
          </Modal>
          </div>
      </div>
    </>
  );
};
