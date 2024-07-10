import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { obtenerProductos } from './MetodosProductos';


// otra forma de hacer las rutas 
const MenuNav  =()=>{
  const[Info,setInfo]= useState([])
  const navigate = useNavigate()
  const [Busqueda,setBusqueda] = useState("")
  function destacados() {
    navigate("")
  }
// get
  async function productos() {
    const data = await obtenerProductos()
    // realizar validacion con una condicional .filter
    // para validadr que datos se 
    // RENDERIZAR EL DATO FILTRADO 
     console.log(Busqueda)
    const productoFltrado = data.filter((vale)=>vale.nombre===Busqueda)
    console.log(productoFltrado)
    // setData(data)

  }

    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand onClick={()=>{navigate("/home")}}>ENCANTO Y GLAMOUR</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  onClick={()=>{navigate("/destacado")}}>ACCESORIO</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate("/venderProductos")}}>PUBLICAR</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{navigate("/sobreNosotros")}}>SOBRE NOSOTROS</Nav.Link> */}
            <NavDropdown title="MENU" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" onClick={()=>{navigate("/venderProductos")}}>VENTAS </NavDropdown.Item>
              <NavDropdown.Item href="#action4"  onClick={()=>{navigate("/sobreNosotros")}}>
                SOBRE NOSOTROS
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                CERRAR SESION
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link>CERRAR SESION</Nav.Link>

          </Nav>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg> 
          <Form className="d-flex">
            <Form.Control
              type="search" onChange={(e) => { setBusqueda(e.target.value) }}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={productos}>BUSCAR</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default MenuNav



