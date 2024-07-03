import { useEffect,useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import { mostrarAlerta } from "../JS/Alerta";
import { AuthContext } from '../Rutas/AuthProvider'
import { useContext } from 'react'

// metodo get
const IncioSesion = ({ text }) => {
  const correoR = useRef ('')
  const claveR = useRef('')
  const[ datos, setDatos] = useState([])
  const navigate = useNavigate()
  const {login} = useContext(AuthContext) ;
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
    console.log(datos);
  }, [])

  
  const validando =()=>{
    console.log(datos);
    let usuario = datos.find((user)=>user.email===correoR.current.value && user.clave===claveR.current.value)
    console.log(usuario)
    if (usuario) {
      return true
    }else return false
  }

  return (
    <div className="inicio">
      <h1>Welcome</h1>
      <input placeholder="Correo Electrronico" type="correo" ref={correoR}/>
      <input placeholder="Contrasena" type="password" ref={claveR}/>
      <button onClick={()=>{
        if(validando()){
          login()
          navigate('/home')
          // mostrarAlerta("exito", "te has registradocon exito")
          //MANDA A OTRA PAGINA
        }else{
          mostrarAlerta("error", "LLENE TODOS LOS CAMPOS")
        }
      }}>INICIAR</button>
      <a  onClick={()=>{navigate("/Registrarse")}}>NO TENGO CUENTA</a>
      <a  onClick={()=>{navigate("/Home")}}>Home</a>
    </div>
  )

}

export default IncioSesion














