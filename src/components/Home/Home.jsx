import "./home.css"
import marianImg from "../../images/Marian.png"
import agusImg from "../../images/Agus.png"

import NavBar from "../NavBar/NavBar"
import Slogan from "../Slogan/Slogan.jsx"

export default function Home() {
    
    return (
        <>
        <div className="header">
            <NavBar />
            <Slogan />
            <div class="img-container">
                <img src={marianImg} className="img-header" id="img-marian" />
                <img src={agusImg} className="img-header" id="img-agus" />
            </div>  
            <hr />
        </div>
        </>
    )
}