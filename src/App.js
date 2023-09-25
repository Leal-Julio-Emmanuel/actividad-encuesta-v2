
import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componets/Inicio";
import CrearEncuesta from "./componets/CrearEncuesta";
import Encuesta from "./componets/Encuesta";
import Menu from "./componets/Menu";
import NotFound from "./componets/NotFound";
import encuestas from "./data/encuestas.json"

function App() {
  const [listaEncuestas, setListaEncuestas] =
  useState(encuestas);
  const agregarEncuesta = (nuevaEncuesta) => {
    nuevaEncuesta.id = listaEncuestas.length + 1
    setListaEncuestas([...listaEncuestas, nuevaEncuesta]);
  };

  const responderEncuesta = (id, respuesta) => {
    const encuesta = listaEncuestas.find(enc => enc.id ===
      parseInt(id));
    encuesta.respuestas = [respuesta];

  };

  return (
    <BrowserRouter>
    <Menu /> {/* Agrega el menú de navegación */}
    <Routes>
    <Route path="/" element={<Inicio
    listaEncuestas={listaEncuestas} />} />
    <Route path="/encuesta/crear" element={<CrearEncuesta
    agregarEncuesta={agregarEncuesta} />} />
    <Route path="/encuesta/:id" element={<Encuesta
    listaEncuestas={listaEncuestas}
    responderEncuesta={responderEncuesta} />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    );
    }
    export default App;
