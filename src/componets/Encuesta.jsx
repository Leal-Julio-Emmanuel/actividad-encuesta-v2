import React from "react";
import { Link, useParams } from "react-router-dom";

const Encuesta = ({ listaEncuestas, responderEncuesta }) => {
  const { id } = useParams();
  const encuesta = listaEncuestas.find((enc) => enc.id === parseInt(id));

  const renderPreguntas = () => {
    if (!encuesta.preguntas) {
      return <p>Sin preguntas definidas.</p>;
    }

    return encuesta.preguntas.map((pregunta) => (
      <div key={pregunta.id}>
        <p>{pregunta.pregunta}</p>
        <ol>
          {pregunta.opciones.map((opcion) => (
            <div key={opcion.id}>
              <label>
                <li>{opcion.texto}</li>
              </label>
            </div>
          ))}
        </ol>
      </div>
    ));
  };

  return (
    <div>
      <div className="encuesta-item-container">
        <div className="encuesta-item">
          <h2>{encuesta.titulo}</h2>
          <p>{encuesta.descripcion}</p>
        </div>
      </div>

      <div className="encuesta-item-container">
        <div className="encuesta-item">
          <h2>Preguntas</h2>
          {renderPreguntas()}
        </div>
      </div>

      <Link to="/">Volver</Link>
    </div>
  );
};

export default Encuesta;