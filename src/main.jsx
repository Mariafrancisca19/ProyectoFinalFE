import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Componentes/Home.jsx'

import IncioSesion from './Componentes/InicioSesion.jsx'
import Registrarse from './Componentes/Registrarse.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Estilos/index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import VenderProducto from './Componentes/VenderProduc.jsx'
import Destacados from './Componentes/Destacados.jsx'
import SobreNosotros from './Componentes/SobreNosotros.jsx'
import PreguntasFrecuentes from './Componentes/PreguntasFre.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<IncioSesion/>
  },
  {
    path:"/InicioSesion",
    element:<IncioSesion/>
  },

  {
    path:"/Registrarse",
    element:<Registrarse/>
  },

  {
    path:"/home",
    element:<Home/>
  },

  {
    path:"/venderProductos",
    element:<VenderProducto/>
  },

  {
    path:"/destacado",
    element:<Destacados/>
  },

  {
    path:"/sobreNosotros",
    element:<SobreNosotros/>
  },

  {
    path:"/preguntasfrecuentes",
    element:<PreguntasFrecuentes/>
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
