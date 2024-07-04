import React from 'react'

function Card({nombre,precio,descripcion, material,btnEliminar}) {
  return (
    <div>
      <h1>{nombre}</h1>
      <h5>{precio}</h5>
      <p>{descripcion}</p>
      <p>{material}</p>
      <button onClick={btnEliminar}>🗑️</button>
    </div>
  )
}

export default Card
