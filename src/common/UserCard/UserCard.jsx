import "./UserCard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Input } from "../Input/Input";
import { useSelector } from "react-redux";

export const UserCard = ({
  id,
  rol,
  nhc,
  nombre_paciente,
  primerApellido_paciente,
  segundoApellido_paciente,
  genero_paciente,
  fechaNacimiento_paciente,
  nifPasaporte_paciente,
  calle_paciente,
  numero_paciente,
  puerta_paciente,
  codigoPostal_paciente,
  ciudad_paciente,
  nºColegiado,
  nombre_profesional,
  primerApellido_profesional,
  segundoApellido_profesional,
  genero_profesional,
  fechaNacimiento_profesional,
  nifPasaporte_profesional,
  tipoProfesional,
  calle_profesional,
  numero_profesional,
  puerta_profesional,
  codigoPostal_profesional,
  ciudad_profesional,
  usuario,
  //update,
}) => {
  const [show, setShow] = useState(false);

  const showMe = () => {
    setShow(true);
  };

  return (
    <>
      <div variant="primary" className="userDesign">
        <div>
          <span className="bold">Número de identificación de usuario:</span> {id}
          <span className="bold">Rol:</span> {rol}
        </div>
        {rol === "profesional" && ( 
        <> 
        <div>
          <span className="bold">Tipo de profesional:</span> {tipoProfesional}
          <span className="bold">Número de colegiado:</span> {nºColegiado}
          <span className="bold">Nombre:</span> {nombre_profesional}
          <span className="bold">Apellidos:</span> {primerApellido_profesional} {segundoApellido_profesional}
          <span className="bold">Género:</span> {genero_profesional}
          <span className="bold">Fecha de nacimiento:</span> {fechaNacimiento_profesional}
          <span className="bold">NIF/Pasaporte:</span> {nifPasaporte_profesional}
          <span className="bold">Dirección:</span>
          <span className="bold">Calle:</span> {calle_profesional}
          <span className="bold">Nº:</span> {numero_profesional}
          <span className="bold">Pta:</span> {puerta_profesional}
          <span className="bold">C.P:</span> {codigoPostal_profesional}
          <span className="bold">Ciudad:</span> {ciudad_profesional}
        </div>
        </>
        )}
        {rol === "paciente" && (
        <> 
        <div>
          <span className="bold">Número historial clínico:</span> {nhc}
          <span className="bold">Nombre:</span> {nombre_paciente}
          <span className="bold">Apellidos:</span> {primerApellido_paciente} {segundoApellido_paciente}
          <span className="bold">Género:</span> {genero_paciente}
          <span className="bold">Fecha de nacimiento:</span> {fechaNacimiento_paciente}
          <span className="bold">NIF/Pasaporte:</span> {nifPasaporte_paciente}
          <span className="bold">Dirección:</span>
          <span className="bold">Calle:</span> {calle_paciente}
          <span className="bold">Nº:</span> {numero_paciente}
          <span className="bold">Pta:</span> {puerta_paciente}
          <span className="bold">C.P:</span> {codigoPostal_paciente}
          <span className="bold">Ciudad:</span> {ciudad_paciente}
        </div>
        </>
        )}
                  <>
            <Button
              variant="primary"
              className="makeArtist"
              onClick={() => showMe(user)}
            >
              Add Artist profile to this user
            </Button>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              className="modal-design"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header className="modal-design-header">
                <Modal.Title>Add artist profile to {name}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-design-body">
                <div className="bold lettering">Artist porfolio</div>
                <div className="row inputRow">
                  <Input
                    type={"text"}
                    placeholder="Introduce the artist portfolio URL"
                    value={artistRegisterBody.portfolio}
                    name={"portfolio"}
                    className="defaultInput"
                    manejadora={inputHandler}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer className="modal-design-footer">
                <div onClick={() => addArtistProfile()} className="modalButton">
                  Add artist profile
                </div>
                <div className="spacer"></div>
                <div onClick={handleClose} className="modalButton">
                  Return
                </div>
              </Modal.Footer>
            </Modal>
          </>
      </div>
    </>
  );
};
