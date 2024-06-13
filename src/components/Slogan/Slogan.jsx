import { useState } from "react";
import obtenerNumeroAleatorio from "../../utils/getAleatoryNumber.js"; 

import "./slogan.css"

export default function Slogan() {
    const array = ["Profesionalism", "Creativity", "Innovation", "Solutions"]
    const [value, setValue] = useState(array[obtenerNumeroAleatorio()])

    const handleValue = () => {
        setValue(array[obtenerNumeroAleatorio()])
    }

    return(
        <>
        <div className="slogan">
            <p onClick={handleValue}>
                {value}
            </p>
        </div>
        </>
    )
}

