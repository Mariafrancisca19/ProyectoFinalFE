import React, { useState } from 'react'

function Card({imagen,nombre,precio,descripcion, material,btnEliminar,btnEditar}) {
  const[ iniciar,setIniciar] = useState(false)
  const modificarTexto = () =>{
    setIniciar(true)
  }
  return (
    <div>
    <img src={imagen}></img>
      <h1>{nombre}</h1>
      <h5>{precio}</h5>
      <p>{descripcion}</p>
      <p>{material}</p>
      <button onClick={btnEliminar}>🗑️</button>
      <button onClick={btnEditar}>EDITAR</button>
    </div>
  )
}

export default Card
