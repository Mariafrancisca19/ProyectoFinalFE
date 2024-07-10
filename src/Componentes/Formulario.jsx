import { useState,useEffect } from 'react'
import React from 'react'
import { obtenerProductos,guardarProductos,eliminarProductos } from './MetodosProductos'
import { Navigate } from 'react-router-dom'
import { mostrarAlerta } from '../JS/Alerta'
import MenuNav from './MenuNav'
import ContenedorCard from './ContenedorCard'
import FormularioEditar from './FormularioEditar'


// VALIDACION
const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [material, setMaterial] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [base64, setBase64] = useState('')
    const [data,setData] = useState([])
    const [estado,setEstado]=useState(false)
  const [id,setID]=useState()

//  funcion para leer el archivo
const cambioArchivo = (event) =>{
    const archivo = event.target.files[0];
    convertirBase64(archivo)
}
async function productos() {
    const data = await obtenerProductos()
    console.log(data)
    setData(data)
  }
  
  // FUNCION PARA RECARGAR LA PAGINA
  const recargaPag=()=>{
    setEstado(!estado)
  }
    useEffect(()=>{
      productos()
    },[estado])
// convertir base64
const convertirBase64 = (archivo)=>{
    const reader = new FileReader();
    reader.readAsDataURL(archivo)
    reader.onloadend = ()=>{
        setBase64(reader.result);
    }
}
async function eliminar(id) {
    await eliminarProductos(id)
    productos()
    recargaPag()
  }
  // funcion para editar los productos "id del put"
  async function editar(id) {  
    setID(id)
    console.log(id);
  }

// LLAMADO DEL METODO POST
    const postProducto = async () => {

        if (nombre.trim() === "" || descripcion.trim() === "" || precio.trim() === "" || material.trim() === "") {
            mostrarAlerta("error", "OBLIGARIO LLENAR TODOS LOS CAMPOS")
            return
        } else {
            await guardarProductos({
                nombre: nombre,
                descripcion: descripcion,
                precio: precio,
                material: material,
                imagen:base64
            })
        }


    }

    return (
        <div>
        <MenuNav/>
            <h1> Articulos</h1>
            <form>
                <div>
                    <label>PULSERA</label>
                
                </div>
                <input type='text' onChange={(e) => { setNombre(e.target.value) }} />
                <div>
                    <label>DESCRIPCION</label>
                    <input type='text' onChange={(e) => { setDescripcion(e.target.value) }} />
                </div>
                <div>
                    <label>Precio</label>
                    <input type='number' onChange={(e) => { setPrecio(e.target.value) }} />
                </div>
                <div>
                    <label>Material</label>
                    <input type='text' onChange={(e) => { setMaterial(e.target.value) }} />
                </div>
                <input type='file' onChange={cambioArchivo}></input>
                
                <button type='button' onClick={postProducto}>ENVIAR</button>
            </form>

            <ContenedorCard btnEditar={editar} mostrarBotones={true} btnEliminar={eliminar} getPulceras={data}/>
            {id && 
    <FormularioEditar id={id} recargaPag={recargaPag}/>
    }
        </div>
    )
}

export default Formulario

