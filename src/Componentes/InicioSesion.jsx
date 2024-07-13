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
    if (claveR.current.value.trim()!==''||correoR.current.value.trim()!=='') {
      console.log(claveR,' ',correoR);
      console.log(datos);
      let usuario = datos.find((user)=>user.email===correoR.current.value && user.clave===claveR.current.value)
      console.log(usuario)
      if (usuario) {
        return true
      }else{
        mostrarAlerta("error", "usuario o contraseña equivocados")
        return false
      }
      
    } else{
      
      mostrarAlerta("error", "usuario o contraseña vacios")
        return false
    }
    
  }

  return (
    <div className="">
      <h1 className="welcome">░W░E░L░C░O░M░E░</h1>
      <div className="inic">
      <input className="inputB" placeholder="Correo Electrronico" type="correo" ref={correoR}/>
      <input className="inputB" placeholder="Contrasena" type="password" ref={claveR}/>
      <button onClick={()=>{
        if(validando()){
          login()
          navigate('/home')
          // mostrarAlerta("exito", "te has registradocon exito")
          //MANDA A OTRA PAGINA
        }
      
      }}>INICIAR</button></div>
      <div className="text-center d-flex gap-3 mx-auto justify-content-center">
      <a className="text-decoration-none text-black" onClick={()=>{navigate("/Registrarse")}}>NO TENGO CUENTA</a>
      <a className="text-decoration-none text-black" onClick={()=>{navigate("/Home")}}>Home</a></div>
    </div>
  )

}

export default IncioSesion














