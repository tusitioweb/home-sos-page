import NavBar from "./components/NavBar/NavBar.jsx"
import Labels from "./components/Labels/Labels.jsx"

import "./App.css"

function App() {

  return (
    <>
      <div className="header">
        <NavBar />
        <div id="planta"></div>
      </div>
      <Labels />
    </>
  )
}

export default App
