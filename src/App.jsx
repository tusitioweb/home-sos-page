import { useState, useEffect } from "react"

import NavBar from "./components/NavBar/NavBar.jsx"
import Labels from "./components/Labels/Labels.jsx"
import Carrusel from "./components/Carrusel/Carrusel.jsx"
import Footer from "./components/Footer/Footer.jsx"

import "./App.css"

import Home from "./components/Home/Home.jsx";

function App() {

  return (
    <>
      <Home />
      <Labels />
      <Carrusel />
      <Footer />
    </>
  )
}

export default App