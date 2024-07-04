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
                material: material
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

