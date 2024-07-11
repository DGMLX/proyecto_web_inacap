import { Route, Routes } from "react-router-dom"
import Inicio from "../components/Inicio"
import Formulario from "../components/Formulario"
import Listado from "../components/Listado"


const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/formulario" element={<Formulario/>}/>
            <Route path="/listado" element={<Listado/>}/>
        </Routes>
    )
}

export default AppRouter