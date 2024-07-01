import { useRef, useState } from "react"
import { Await, Link } from "react-router-dom"



// constante
    // metodo post

async function guardarDatos(obj) {
    try {

        const respuesta = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-type": "application; charset=UTF-8"
            },
            body: JSON.stringify(obj)

        })
        let datos = await respuesta.json()
        console.log(datos)
    } catch (error) {
        console.log(error);
    }
}
const Registrarse = ({ }) => {
    
    // const correoR = useRef('')
    // const claveR = useRef('')

    

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [clave, setClave] = useState("")
    // crear metodo del post para guardar los datos
    const llamarDatos = async ()=>{

        // funcion para validar que no ingresen espacios vacios
        if (nombre.trim() ==="" || correo.trim()==="" || clave.trim()==="") {
        alert ("Por favor ingresar texto ")
        }

        await guardarDatos({
            usuario: nombre,
            email: correo,
            clave: clave
        })

    }


    return (
        <>
        <div className="btnRegistar">
            <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} placeholder="Nombre Completo" type="text"/>
            <input value={correo} onChange={(e)=>{setCorreo(e.target.value)}} placeholder="Correo Electrronico" type="correo"/>
            <input value={clave} onChange={(e)=>{setClave(e.target.value)}} placeholder="Contrasena" type="password"/>
            <button onClick={llamarDatos}>REGISTRARME</button>
            {/* <a  onClick={()=>{navigate("/InicioSesion")}}>DEVOLVERSE DE PAGINA</a>
            <a href="./InicioSesion.jsx"/> */}
            <button><Link to="/InicioSesion" >Devolverse de pagina</Link></button>

        </div>
        </>
    )
}


export default Registrarse


