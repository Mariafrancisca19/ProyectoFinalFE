import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Img from "./Img";
const Carousel1 =() => {
  return (
    <Carousel className="text-center">
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/perlas_diamante.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <div className="" style={{backgroundColor:"#f2f2f2", width:"20vw"}}>
          <h5 className="tit">PULSERA DE DIAMANTES</h5>
          <p className="text-success">₵250 000</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/15.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div  className="" style={{backgroundColor:"#f2f2f2", width:"20vw"}}>
          <h5 className="tit">PULSERA KIDS</h5>
          <p className="text-success">₵3 500</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/conjunto_pulsera.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#f2f2f2", width:"20vw"}}>
          <h5 className="tit">PULSERA DE ORO </h5>
          <p className="text-success">₵22 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/pulsera5.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#f2f2f2", width:"18vw"}}>
          <h5 className="tit">PULSERA HOMBRE</h5>
          <p className="text-success">₵10 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/pulseras_locai.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
        <div className="" style={{backgroundColor:"#f2f2f2", width:"20vw"}}>
          <h5 className="tit" >PULSERA LOCAI</h5>
          <p className="text-success">₵10 000</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
  );
};
export default Carousel1;