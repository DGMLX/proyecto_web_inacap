import { useEffect, useState } from "react";


const Listado = () =>{
    const [datos,setDatos] = useState([]);
    const [alertarEliminar,setAlertaEliminar] = useState(false);

    useEffect(()=>{
        const data = localStorage.getItem('inventario')
        if(data){
            setDatos(JSON.parse(data))
        }else{
            setDatos([])
        }
    },[])

    const eliminarMedicamento=(nombre)=>{
            const medicamentosActualizados = datos.filter(medicamento => medicamento.nombre !== nombre)
            setDatos(medicamentosActualizados)  
            setAlertaEliminar(true);
            setTimeout(() => {
                setAlertaEliminar(false)
            }, 1500);
            localStorage.setItem('inventario',JSON.stringify(medicamentosActualizados))
    }

    return(
        <>  
            {alertarEliminar ? <div class="alert alert-success text-center" role="alert">Registro eliminado correctamente</div> : ''}
            <h1 className="text-center mt-5">Listado de Registro de Medicamentos</h1> 
            {
                datos.length === 0 
                ?
                    <h4 className="text-center mt-5 fw-medium">No hay datos disponibles.</h4>
                : 
                    <table class="table table-primary mt-5">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Laboratorio</th>
                            <th scope="col">Formula</th>
                            <th scope="col">Contraindicaciones</th>
                            <th scope="col">Via administración</th>
                            <th scope="col">Almacenamiento</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Mililitros</th>
                            <th scope="col">Receta médica</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map(medicamento=>(
                                <tr>
                                    <td>{medicamento.nombre}</td>
                                    <td>{medicamento.descripcion}</td>
                                    <td>{medicamento.laboratorio}</td>
                                    <td>{medicamento.formula}</td>
                                    <td>{medicamento.contraindicaciones}</td>
                                    <td>{medicamento.via}</td>
                                    <td>{medicamento.almacenamiento}</td>
                                    <td>{medicamento.stock}</td>
                                    <td>{medicamento.precio}</td>
                                    <td>{medicamento.mililitros}</td>
                                    <td>{medicamento.receta}</td>
                                    <td>{medicamento.tipo}</td>
                                    <td className="d-flex justify-content-center" ><button className="btn btn-danger" onClick={()=>(eliminarMedicamento(medicamento.nombre))}>X</button></td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
            }
        </>
    )
}

export default Listado