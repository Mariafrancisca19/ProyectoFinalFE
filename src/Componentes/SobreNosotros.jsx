import React from 'react'
import MenuNav from './MenuNav'

const SobreNosotros = () => {
  return (
    <div className="sobre" style={{backgroundColor:"#ffdab9", width:"50vw "}}>
       <MenuNav/>
      <h1>¿Quienes somos Encanto y glamour?</h1>
      <p><ul>
        <li>Una empresa Costarricense de emprendedores en dónde cada una de nuestras piezas es un testimonio de nuestra pasión por la creatividad y la belleza por la bisutería.</li>
        <li>Reconociendo que la bisutería también puede ser una forma especial de expresar amor y gratitud, hemos ampliado nuestra oferta para incluir regalos únicos y personalizados.</li>
      </ul></p>
      <h2>MISION:</h2>
      <p>Satisfacer  a nuestros clientes y  proveerle a través de nuestra tienda de bisutería artesanal utilizando las redes sociales ó otros métodos de marketing.  </p>
      <h2>VISION:</h2>
      <p><ul>
        <li> Lograr a largo plazo un crecimiento de usuarios y ventas de nuestros productos. </li>
        <li>Mantener el interés de nuestros clientes en nuestras bisutería artesanal y se sienta satisfecho con nuestro producto.  "Siempre mantener nuestra calidad antes de cantidad".</li>
      </ul></p>

    </div>
  )
}

export default SobreNosotros
