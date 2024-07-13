import React from 'react'

const InfoPagina = () => {
  return (
    <div className= "bg-white" id='info' style={{width: "800px" }}>
      <h1 className='text-center' >INFORMACIÒN</h1>
      <div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                COMO SE COMPRA?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Puedes comprar mediante nuestra pagina web o bien puedes visitarnos en Guachipelin , frente a la escuela Guachipelin</div>

            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                PREGUNTAS FRECUENTES
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">CUALES SON LOS CUIDADOS QUE DEBO TENER CON LOS PRODUCTOS? <ul><li>No aplicar sobre la pieza lociones, cremas, cosméticos, perfumes y agua.</li>
                <li>Guardar en su empaque por separado.</li>
                <li>No llevar durante el ejercicio físico.</li>
                <li>Limpia la pieza antes y después de usarla con un paño suave y seco para quitarle los agentes del PH que hacen que se oscurezca más rápido.</li>
                <li>No duermas ni te bañes con los accesorios.</li>
              </ul>
              CUANTO CUESTA EL ENVIO?
              <ul>
              <li>El envio cuesta  GAM ₡2 500 🛵</li>
              <li> Fuera de la GMA ₡3 100 🛵</li>
              <li>Si compras ₡30 000, el envio sera gratis</li>
              </ul>
              TIENEN TIENDA FISICA?
              <ul><li>Si en Encanto y Glamour tenemos tanto tienda fisica como en linea= </li></ul>
              QUE FORMAS DE PAGO ACEPTAN?
              <ul><li>Vendemos unicamente de contado y los pedidos deben ser pagados en tu totalidad antes de ser enviados.</li>
              <li>Aceptamos las siguientes formas de pago: <br></br>
              Tendras que seleccionar una opcion durante el proceso de pago.</li>
              <li>Sinpe Movil</li>
              <li>Efectivo</li>
              <li>Tarjeta de Credito o Debito</li>
              <li>Deposito Bancario</li>
              <li>Paypal</li>
              </ul>

              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                COMO RASTREAR MI PEDIDO?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><ul><li> Apenas hacemos el despacho de tu pedido te enviamos toda la informacion del envio a tu correo electronico.</li>
              <li>Si no lo encuentras, por favor buscalo en la carpeta de promociones, spam o correo no deseado, viene de parte de encantoyglamour@gmai.com.</li>
              </ul> </div>
            </div>
          </div>

        
        </div>

      </div>
    </div>
  )
}

export default InfoPagina
