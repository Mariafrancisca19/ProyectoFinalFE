import Formulario from './Formulario';
import MenuNav from './MenuNav';
import { mostrarAlerta } from '../JS/Alerta';
import { eliminarProductos, obtenerProductos } from './MetodosProductos';
import { useEffect, useState } from 'react';
import Carousel1 from './Carousel1';
import ContenedorCard from './ContenedorCard';
import Info from './Info';
import InfoPagina from './InfoPagina';
import FormularioEditar from './FormularioEditar';

const Home  = () => {
  const [data, setData] = useState([])
  const [id,setID]=useState()
  const [estado,setEstado]=useState(false)

  // METODO DEL GET
  async function productos() {
    const data = await obtenerProductos()
    console.log(data)
    setData(data)
  }
  
  // FUNCION PARA RECARGAR LA PAGINA
  const recargaPag=()=>{
    setEstado(!estado)
  }
    useEffect(()=>{
      productos()
    },[estado])

     return (
    <div className='fondo'>
    <MenuNav/>
    
    <Carousel1/>
    <ContenedorCard  getPulceras={data}/>
    {id && 
    <FormularioEditar id={id} recargaPag={recargaPag}/>
    }
    <Info/>
    <InfoPagina/>
</div>
  );
}

export default Home


