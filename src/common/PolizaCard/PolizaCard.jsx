import "./PolizaCard.css";

export const PolizaCard = ({
    id,
    pacienteId,
    aseguradora,
    tipo,
    nºTarjeta,
    poliza,
  //update,
}) => {

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
      </div>
    </>
  );
};