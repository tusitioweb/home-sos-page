import Label from "../Label/Label.jsx"
import "./labels.css"

export default function Labels() {
    
    return (
        <>
        <div id="labels">
            <Label person={"Mariano"} description={"20 AÑOS, EStudian programacion, no trbaja, no casado"}/>
            <div className="linea"></div>
            <Label person={"Agustin"} description={"19 AÑOS, EStudian programacion, trabaja, casadito"}/>
        </div>
        </>
    )
}