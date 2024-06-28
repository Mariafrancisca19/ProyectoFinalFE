import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Componentes/Home.jsx'

import IncioSesion from './Componentes/InicioSesion.jsx'
import Registrarse from './Componentes/Registrarse.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

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
    path:"/Home",
    element:<Home/>
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
