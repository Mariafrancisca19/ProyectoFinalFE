import React from 'react'

const InfoPagina = () => {
  return (
    <div>
      <h1>INFORMACION</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              COMO SE COMPRA
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">CUALES SON LOS CUIDADOS QUE DEBO TENER CON LOS PRODUCTOS? <ul><li>No aplicar sobre la pieza lociones, cremas, cosméticos, perfumes y agua.</li> 
         <li>Guardar en su empaque por separado.</li> 
         <li>No llevar durante el ejercicio físico.</li> 
         <li>Limpia la pieza antes y después de usarla con un paño suave y seco para quitarle los agentes del PH que hacen que se oscurezca más rápido.</li>
         <li>No duermas ni te bañes con los accesorios.</li>
             </ul></div>

          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              PREGUNTAS FRECUENTES
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"></div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              RASTREAR MI PEDIDO
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default InfoPagina
