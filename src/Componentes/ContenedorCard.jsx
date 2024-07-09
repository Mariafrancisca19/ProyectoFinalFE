import React from 'react'
import Card from './Card'

function ContenedorCard({getPulceras,btnEliminar,btnEditar}) {
  return (
    <div>
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

        />
      ))}
    </div>
  )
}

export default ContenedorCard
