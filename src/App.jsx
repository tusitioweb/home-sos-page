import { useState, useEffect } from "react"

import NavBar from "./components/NavBar/NavBar.jsx"
import Labels from "./components/Labels/Labels.jsx"
import Footer from "./components/Footer/Footer.jsx"

import "./App.css"

import Home from "./components/Home/Home.jsx";

function App() {

  return (
    <>
      <Home />
      <Labels />
      <Footer />
    </>
  )
}

export default App