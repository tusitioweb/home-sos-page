import "./Label.css"

export default function Label({person, description}) {

    return (
        <>
            <div id="label">
                <div id="person-img"></div>
                <h3>{person}</h3>
                <strong>DESCRIPTION</strong>
                <p>
                    {description}
                </p>
            </div>
        </>
    )
}