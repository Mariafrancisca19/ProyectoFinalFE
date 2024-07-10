import React, { useState } from 'react'

function Card({imagen,nombre,precio,descripcion, material,btnEliminar,btnEditar,mostrarBotones}) {
  const[ iniciar,setIniciar] = useState(false)
  const modificarTexto = () =>{
    setIniciar(true)
  }
  return (
    <div>
      <img width={"400px"} height={"300px"} src={imagen}></img>
      <h1>Nombre: {nombre}</h1>
      <h5>Precio: {precio}</h5>
      <p>Descripcion: {descripcion}</p>
      <p>Material: {material}</p>
      {mostrarBotones &&
    <>
      <button  className='btn btn-success ml-3' onClick={btnEliminar}>🗑️</button>
      <button className='btn btn-success' onClick={btnEditar}>EDITAR</button>
      </>
    }
    </div>
  )
}

export default Card
