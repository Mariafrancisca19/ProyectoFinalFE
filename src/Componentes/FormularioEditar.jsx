import React from 'react'
import { cambiarProductos } from './MetodosProductos'
import { useState } from 'react'
const FormularioEditar = ({id}) => {

  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [material, setMaterial] = useState('')

  const actualizar = async () => {
    const datos = {
      nombre: nombre,
      precio: precio,
      meterial: material
    }
    await cambiarProductos("productos", id, datos)
  }

  return (
    <div>
    <form>
      <div>
        <label>NOMBRE</label>
        <input type='text' onChange={(e) => { setNombre(e.target.value) }} />
      </div>
      <div>
        <label>PRECIO</label>
        <input type='number' onChange={(e) => { setPrecio(e.target.value) }} />
      </div>
      <div>
        <label>MATERIAL</label>
        <input type='text' onChange={(e) => { setMaterial(e.target.value) }} />
      </div>
      <button type='button' onClick={actualizar}>EDITAR</button>

    </form>
    </div>
  )
}

export default FormularioEditar

