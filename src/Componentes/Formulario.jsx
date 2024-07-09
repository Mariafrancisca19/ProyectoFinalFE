import { useState } from 'react'
import React from 'react'
import { obtenerProductos } from './MetodosProductos'
import { guardarProductos } from './MetodosProductos'
import { Navigate } from 'react-router-dom'
import { mostrarAlerta } from '../JS/Alerta'
import MenuNav from './MenuNav'




// VALIDACION
const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [material, setMaterial] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [base64, setBase64] = useState('')

//  funcion para leer el archivo
const cambioArchivo = (event) =>{
    const archivo = event.target.files[0];
    convertirBase64(archivo)
}

// convertir base64
const convertirBase64 = (archivo)=>{
    const reader = new FileReader();
    reader.readAsDataURL(archivo)
    reader.onloadend = ()=>{
        setBase64(reader.result);
    }
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
                <div>
                    <label>Pais</label>
                    <select>
                        <option value="es">Espanol</option>
                        <option value="in">Ingles</option>
                        <option value="fr">Francia</option>
                        <option value="ch">Chino</option>
                    </select>
                </div>
                <button onClick={postProducto}>ENVIAR</button>
            </form>

        </div>
    )
}

export default Formulario

