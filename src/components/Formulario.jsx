import { useEffect, useState } from "react";



const Formulario = () =>{
    const [nombre,setNombre] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [laboratorio,setLaboratorio] = useState('');
    const [formula,setFormula] = useState('');
    const [contraindicaciones,setContraindicaciones] = useState('');
    const [via,setVia] = useState('');
    const [almacenamiento,setAlmacenamiento] = useState('');
    const [stock,setStock] = useState(1);
    const [precio,setPrecio] = useState(0);
    const [mililitros,setMililitros] = useState('');
    const [receta,setReceta] = useState('');
    const [tipo,setTipo] = useState('');
    const [exito,setExito] = useState(false);
    const [error,setError] = useState(false);
    const [datos,setDatos] = useState([])

    useEffect(()=>{
        const data = localStorage.getItem('inventario')
        if(data){
            setDatos(JSON.parse(data))
        }else{
            setDatos([])
        }
    },[])

    const agregarMedicamento = (e) =>{
        e.preventDefault()
        if(nombre === '' || descripcion === '' || laboratorio === '' || formula === '' || contraindicaciones === '' || via === '' || almacenamiento === '' || precio === 0 || mililitros === '' || receta === '' || tipo === ''){
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1500);
            return
        }

        const medicamento = {
            nombre,
            descripcion,
            laboratorio,
            formula,
            contraindicaciones,
            via,
            almacenamiento,
            stock,
            precio,
            mililitros,
            receta,
            tipo
        }
        setExito(true)
        setTimeout(() => {
            setExito(false)
        }, 1500);
        setNombre('')
        setDescripcion('')
        setLaboratorio('')
        setFormula('')
        setContraindicaciones('')
        setVia('')
        setAlmacenamiento('')
        setStock(1)
        setPrecio(0)
        setMililitros('')
        setReceta('')
        setTipo('')
        setDatos([...datos,medicamento])
        localStorage.setItem('inventario', JSON.stringify([...datos,medicamento]));
    }

    return(
        <>
            { exito ? <div class="alert alert-primary text-center" role="alert">Medicamento agregado</div> : ''}
            { error ? <div class="alert alert-danger text-center" role="alert">Todos los campos son obligatorios</div> :''}
            <h1 className="text-center mt-5">Registro de Medicamento</h1>
            <div className="d-flex justify-content-center mt-5">
                <form action="" className="w-100">
                <div className="d-flex justify-content-around">
                    <div>
                        <label for="nombre" class="form-label fw-medium d-block">Nombre medicamento:</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese nombre de producto..." value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    </div>
                    <div>

                        <label for="descripcion" class="form-label fw-medium d-block">Descripción:</label>
                        <input type="text" className="form-control" id="descripcion" placeholder="Descripcion del producto..."value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}/>
                    </div>
                    <div>
                        <label for="laboratorio" class="form-label fw-medium d-block">Laboratorio Fabricante:</label>
                        <input type="text" className="form-control" id="laboratorio" placeholder="Nombre de laboratorio fabricante..." value={laboratorio} onChange={(e)=>setLaboratorio(e.target.value)}/>
                    </div>

                </div>

                <div className="d-flex justify-content-around mt-3">
                    
                    <div>
                        <label for="formula" class="form-label fw-medium d-block">Fórmula del medicamento:</label>
                        <input type="text" className="form-control" id="formula" placeholder="Ingrese formula del producto..." value={formula} onChange={(e)=>setFormula(e.target.value)}/>
                    </div>
                    <div>
                        <label for="contraindicaciones" class="form-label fw-medium d-block">Contraindicaciones:</label>
                        <input type="text" className="form-control" id="contraindicaciones" placeholder="Ingrese contraindicaciones del producto..." value={contraindicaciones} onChange={(e)=>setContraindicaciones(e.target.value)}/>
                    </div>
                    <div>
                        <label className="fw-medium d-block">Via de administración</label>
                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example" value={via} onChange={(e)=>setVia(e.target.value)}>
                            <option selected>Selecciona una opción</option>
                            <option value="Oral">Oral</option>
                            <option value="Intravenosa">Intravenosa</option>
                        </select>
                    </div>

                </div>

                <div className="d-flex justify-content-around mt-3">

                    <div>

                    <label className="fw-medium d-block">Opción de almacenamiento</label>
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked={almacenamiento === 'Seco'} value="Seco"  onChange={(e)=>setAlmacenamiento(e.target.value)}/>
                        <label class="btn btn-outline-primary" for="btnradio1">Seco</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"checked={almacenamiento === 'Refrigerado'} value="Refrigerado"  onChange={(e)=>setAlmacenamiento(e.target.value)}/>
                        <label class="btn btn-outline-primary" for="btnradio2">Refrigerado</label>

                    </div>

                    </div>

                    <div>
                        <label for="stock" class="form-label fw-medium d-block">Stock:</label>
                        <input type="number" min={1} className="form-control" id="stock" placeholder="Ingrese stock..." value={stock} onChange={(e)=>setStock(e.target.value)}/>

                    </div>

                    <div>

                    <label for="precio" class="form-label fw-medium d-block">Precio:</label>
                    <input type="number" min={0} className="form-control" id="precio" placeholder="Ingrese precio del producto..." value={precio} onChange={(e)=>setPrecio(e.target.value)}/>
                    </div>
                </div>

                <div className="d-flex justify-content-around mt-3">
                    <div>

                    <label className="fw-medium d-block">Cantidad mililitros:</label>
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example" value={mililitros} onChange={(e)=>setMililitros(e.target.value)}>
                        <option selected>Selecciona una opción</option>
                        <option value="100ml">100ml</option>
                        <option value="200ml">200ml</option>
                    </select>
                    
                    </div>
                    <div>

                    <label className="fw-medium d-block">Requiere Receta médica:</label>
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio2" id="btnradio3" autocomplete="off" checked={receta === 'Si'} value="Si"  onChange={(e)=>setReceta(e.target.value)}/>
                        <label class="btn btn-outline-primary" for="btnradio3">Si</label>

                        <input type="radio" class="btn-check" name="btnradio2" id="btnradio4" autocomplete="off" checked={receta === 'No'} value="No"  onChange={(e)=>setReceta(e.target.value)}/>
                        <label class="btn btn-outline-primary" for="btnradio4">No</label>

                    </div>
                    </div>

                    <div>


                    <label className="fw-medium d-block">Tipo de medicamento:</label>
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example" value={tipo} onChange={(e)=>setTipo(e.target.value)}>
                        <option selected>Selecciona una opción</option>
                        <option value="Analgésico">Analgésico</option>
                        <option value="Antibiótico">Antibiótico</option>
                    </select>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button className="btn btn-primary" onClick={(e)=>agregarMedicamento(e)}>Agregar Medicamento</button>
                </div>

                </form>
            </div>
        </>
    )
}

export default Formulario