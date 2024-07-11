import React from 'react'
import MenuNav from './MenuNav'
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Img from "./Img";
const Destacados = () => {
  return (
    <div className="destacado" >
    <MenuNav/>

    <Carousel className="text-center">
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/perlas_diamante.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA DE DIAMANTES</h5>
          <p className="text-dark">₵250 000</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/conjunto_pulsera.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div  className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark"> SET DE PULSERA DE ORO</h5>
          <p className="text-dark">₵25 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/macrame.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA DE MACRAME</h5>
          <p className="text-dark">₵7 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/ojo_turco.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA OJO TURCO</h5>
          <p className="text-dark">₵2 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/perlas_blancas.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark" >PULSERA DE PERLAS BLANCAS</h5>
          <p className="text-dark">₵19 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/oro3.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark" >PULSERA DE ORO</h5>
          <p className="text-dark">₵10 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/perlas_flor.JPG"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark" >PULSERA DE PERLAS TIPO FLOR</h5>
          <p className="text-dark">₵20 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/perlas_rosadas.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark" >PULSERA DE PERLAS ROSADAS</h5>
          <p className="text-dark">₵19 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/piedra_colores.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark" >PULSERA DE PIEDRAS DE COLORES</h5>
          <p className="text-dark">₵15 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/pulsera7.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark" >PULSERA DE PIEDRITAS</h5>
          <p className="text-dark">₵16 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* carousel 2 */}
    <Carousel className="text-center">
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/pulsera1.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA DE PLATA</h5>
          <p className="text-dark">₵14 000</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/pulsera2.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div  className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark"> SET DE PULSERA </h5>
          <p className="text-dark">₵10 500</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/pullsera4.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA DE CUERO </h5>
          <p className="text-dark">₵12 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/pulsera5.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA HOMBRE</h5>
          <p className="text-dark">₵10 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* carousel 3 kids */}
    <Carousel className="text-center">
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/12.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA DE KIDS</h5>
          <p className="text-dark">₵5 000</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/13.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div  className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA KIDS </h5>
          <p className="text-dark">₵3 500</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/14.jpeg"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark"> CONJUNTO CADENA Y PULSERA </h5>
          <p className="text-dark">₵12 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/15.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA KIDS</h5>
          <p className="text-dark">₵3 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/locai.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#ffdab9", width:"15vw"}}>
          <h5 className="text-dark">PULSERA LOCAI</h5>
          <p className="text-dark">₵10 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      



    </Carousel>

    


    </div>
  )
}

export default Destacados
