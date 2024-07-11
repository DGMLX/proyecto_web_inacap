

const Inicio = () =>{
    return(
        <>
            <div className="d-flex justify-content-center align-items-center mt-5 ">
                <div>
                    <div className="d-flex justify-content-center  mb-3 ">
                        <img src="./usuario.jpg" alt="img_usuario" className="rounded-circle w-50"  />
                    </div>
                    <h4 className="text-center">Nombre de Estudiante: <span className="fw-light"> Maximiliano Pacheco</span></h4>
                    <h4 className="text-center">Asignatura: <span className="fw-light"> Programación Front End</span></h4>
                    <h4 className="text-center">Carrera: <span className="fw-light">Ingeniería en Informática</span></h4>
                    <h4 className="text-center">Sección: <span className="fw-light"> TI2031</span></h4>
                </div>
            </div>
        </>
    )
}

export default Inicio