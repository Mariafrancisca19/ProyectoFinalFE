import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

// otra forma de hacer las rutas 
const MenuNav  =()=>{
  const navigate = useNavigate()
  function destacados() {
    navigate("")
  }
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand onClick={()=>{navigate("/home")}}>ENCANTO Y GLAMOUR</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  onClick={()=>{navigate("/destacado")}}>DESTACADOS</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/venderProductos")}}>PUBLICAR</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/sobreNosotros")}}>SOBRE NOSOTROS</Nav.Link>
            <NavDropdown title="MENU" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">ACERCA DE </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                ACERCA DE
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link>CERRAR SESION</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">BUSCAR</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default MenuNav



