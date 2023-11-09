import "./Profesionales.css";
import { searchProfesionales } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfesionalCard } from "../../common/ProfesionalCard/ProfesionalCard";
import { deleteMedics } from "../../services/apiCalls";
import Modal from "react-bootstrap/Modal";


export const Profesionales = () => {
  const [profesionales, setProfesionales] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const medicsDelete = () => {
    deleteMedics ()
    .then (()=>{
      searchProfesionales()
      .then((results) => {
        console.log("soy results tras deleteMedics",results)
        setProfesionales(results.data.data);
      })
      .catch((error) => console.log(error));
    })
    setShow(false);

  };

  useEffect(() => {
    searchProfesionales()
      .then((results) => {
        console.log("soy results",results)
        setProfesionales(results.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateMe = () => {
    searchProfesionales()
      .then((results) => {
        console.log("soy results",results)
        setProfesionales(results.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("soy profesionales", profesionales)
  }, [profesionales]);

  return (
    <div className="profesionales">
      <div className="subHeader">
        <div className="buttonClicker" onClick={() => setShow(true)}>
        BORRAR MÉDICOS
        </div>
        <div className="buttonClicker" onClick={() => navigate("/profesionaladd")}>
        AÑADIR PROFESIONAL
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
          <div>¿Está seguro de que desea eliminar a todos los médicos de la base de datos?</div>
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
      </div>
      {profesionales.length > 0 ? (
        <div className="infinite-scroll-container">

          {profesionales.map((profesional) => {

            return (
              
              <ProfesionalCard
                
                // Key es una palabra reservada en React
                key={profesional.id}
                ////////////////////////////////
                id={profesional.id}
                nºColegiado={profesional.nºColegiado}
                nombre={profesional.nombre}
                primerApellido={profesional.primerApellido}
                segundoApellido={profesional.segundoApellido}
                genero={profesional.genero}
                fechaNacimiento={profesional.fechaNacimiento}
                nifPasaporte={profesional.nifPasaporte}
                tipoProfesional={profesional.tipoProfesional}
                calle={profesional.calle}
                numero={profesional.numero}
                puerta={profesional.puerta}
                codigoPostal={profesional.codigoPostal}
                ciudad={profesional.ciudad}
                profesional={profesional}
                update={updateMe}
              />
            );
          })}
        </div>
      ) : (
        <div className="home">
          <div className="title">
            No se han encontrado profesionales
          </div>
        </div>
      )}
      </div>
  );
};
