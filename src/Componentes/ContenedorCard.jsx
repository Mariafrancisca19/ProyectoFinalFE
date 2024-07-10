import React from 'react'
import Card from './Card'

function ContenedorCard({getPulceras,btnEliminar,btnEditar,mostrarBotones}) {
  return (
    <div className='d-flex gap-3 mt-3'>
      {getPulceras.map(pul=>(
        <Card
         key={pul.id}   
         nombre={pul.nombre}
         imagen={pul.imagen}
         precio={pul.precio}
         descripcion={pul.descripcion}
         material={pul.material}
         btnEliminar={()=>btnEliminar(pul.id)}
         btnEditar={()=> btnEditar(pul.id)}
        mostrarBotones={mostrarBotones}
        />
      ))}
    </div>
  )
}

export default ContenedorCard
