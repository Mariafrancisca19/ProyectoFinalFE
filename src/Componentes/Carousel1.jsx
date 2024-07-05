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
          <h5>PULSERA DE DIAMANTE</h5>
          <p>sdfasfa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"src/Imagenesp/ulsera5.webp"} with="50px"/>
        </Link>
        <Carousel.Caption>
          <h5>asdf</h5>
          <p>asdf</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
        <Img src={"C:\Users\estud\Downloads\pfinal\src\Imagenes\pulsera5.webp"}/>
        </Link>
        <Carousel.Caption>
          <h5>asdf</h5>
          <p>asdf</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Link to="/announcements">
          <img className="images zoom"  alt="" />
        </Link>
        <Carousel.Caption>
          <h5>afaf</h5>
          <p>afafa</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carousel1;