import "./navbar.css"


export default function NavBar() {

    const handleStyles = () => {
        console.log("hola")
    }

    return(
        <>
            <nav id="navbar" onMouseOver={handleStyles}>
                <ul>
                    <li>
                        <a href="#" className="text-3xl font-bold underline">HOME</a>
                    </li>
                    <li>
                        <a href="">ABOUT US</a>
                    </li>
                    <li>
                        <a href="#labels" rel="noopener noreferrer">PROJECTS</a>
                    </li>
                    <li>
                        <a href="">CONTACT US</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}