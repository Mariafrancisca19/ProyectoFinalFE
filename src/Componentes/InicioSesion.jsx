import { useEffect,useRef,useState } from "react";
import { useNavigate } from "react-router-dom";

const IncioSesion = ({ text }) => {
  const correoR = useRef ('')
  const claveR = useRef('')
  const[ datos, setDatos] = useState("")
  const navigate = useNavigate()

  // // funcion para validar que no ingresen espacios vacios
  // const espacioVacio = ()=>{
  //   if (!correoR.current.value && !claveR.current.value) {
  //       alert ("por favor ingresar texto")
  //   } else {
      
  //   }

  //   text()
  // }



  // metodo del get para obtener los datos

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch("http://localhost:3001/users")
        const data = await respuesta.json()
        setDatos(data)
        console.log(`los datos son${datos}`)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [])

  return (
    <div className="inicio">
      <h1>Welcome</h1>
      <input placeholder="Correo Electrronico" type="correo" ref={correoR}/>
      <input placeholder="Contrasena" type="password" ref={claveR}/>
      <button>INICIAR</button>
      <a  onClick={()=>{navigate("/Registrarse")}}>NO TENGO CUENTA</a>
      <a  onClick={()=>{navigate("/Home")}}>Home</a>
    </div>
  )

}

export default IncioSesion














