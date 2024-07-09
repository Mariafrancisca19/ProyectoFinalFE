import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Img from "./Img";
const Carousel1 =() => {
  return (
    <Carousel >
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/perlas_diamante.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <h5>PULSERA DE DIAMANTES</h5>
          <p>₵250 000</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenesp/15.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <h5>PULSERA KIDS</h5>
          <p>₵3 500</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenes/conjunto_pulsera.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <h5>PULSERA DE ORO </h5>
          <p>₵22 000</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/pulsera5.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <h5>PULSERA HOMBRE</h5>
          <p>₵10 000</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/announcements">
        <Img src={"src/Imagenes/pulseras_locai.jpg"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <h5>PULSERA LOCAI</h5>
          <p>₵10 000</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
  );
};
export default Carousel1;