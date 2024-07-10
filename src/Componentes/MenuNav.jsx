import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { obtenerProductos } from './MetodosProductos';
import ContenedorCard from './ContenedorCard';


// otra forma de hacer las rutas 
const MenuNav  =()=>{
  const[Info,setInfo]= useState([])
  const navigate = useNavigate()
  const [Busqueda,setBusqueda] = useState("")
  const [data,setData]=useState([])
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
    const productoFltrado = data.filter((obtener)=>obtener.nombre===Busqueda)
    if(productoFltrado.length ===0){
      alert("EL PRODUCTO NO EXISTE")
      return
    }
    console.log(productoFltrado)
    setData(productoFltrado)
  }

    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand onClick={()=>{navigate("/home")}} className=''>𝔼ℕℂ𝔸ℕ𝕋𝕆 𝕐 𝔾𝕃𝔸𝕄𝕆𝕌ℝ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  onClick={()=>{navigate("/destacado")}}>𝔸ℂℂ𝔼𝕊𝕆ℝ𝕀𝕆𝕊</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate("/venderProductos")}}>PUBLICAR</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{navigate("/sobreNosotros")}}>SOBRE NOSOTROS</Nav.Link> */}
            <NavDropdown title="𝕄𝔼ℕ𝕌" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" onClick={()=>{navigate("/venderProductos")}}>ℙ𝕌𝔹𝕃𝕀ℂ𝔸ℝ </NavDropdown.Item>
              <NavDropdown.Item href="#action4"  onClick={()=>{navigate("/sobreNosotros")}}>
              𝕊𝕆𝔹ℝ𝔼 ℕ𝕆𝕊𝕆𝕋ℝ𝕆𝕊
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              ℂ𝔼ℝℝ𝔸ℝ 𝕊𝔼𝕊𝕀𝕆ℕ
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link>ℂ𝔼ℝℝ𝔸ℝ 𝕊𝔼𝕊𝕀𝕆ℕ</Nav.Link>

          </Nav>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg> 
          <Form className="d-flex">
            <Form.Control
              type="search" onChange={(e) => { setBusqueda(e.target.value) }}
              placeholder="𝕊𝔼𝔸ℝℂℍ"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={productos}>𝔹𝕌𝕊ℂ𝔸ℝ</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* barra de busqueda echa a la cochino ,bueno mas rapido no hay tiempo*/}
    {data &&
    <ContenedorCard getPulceras={data}/>
  }

        </>
    )
}
export default MenuNav



