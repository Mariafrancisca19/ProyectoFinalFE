import React from 'react'
import Card from './Card'

function ContenedorCard({getPulceras,btnEliminar}) {
  return (
    <div>
      {getPulceras.map(pul=>(
        <Card
         key={pul.id}   
         nombre={pul.nombre}
         precio={pul.precio}
         descripcion={pul.descripcion}
         material={pul.material}
        btnEliminar={()=>btnEliminar(pul.id)}
        />
      ))}
    </div>
  )
}

export default ContenedorCard
