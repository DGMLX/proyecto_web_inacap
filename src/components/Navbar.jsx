import { Link } from "react-router-dom"


const Navbar = () =>{
    return(
        <>
            <nav className="navbar bg-primary navbar-expand-lg  " data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Evaluacion 4</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/formulario">Formulario</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/listado">Listado</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar