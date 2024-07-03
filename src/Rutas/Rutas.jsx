import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import IncioSesion from '../Componentes/InicioSesion.jsx'
import Registrarse from '../Componentes/Registrarse.jsx'
import RutaPrivada from '../Rutas/RutaPrivada.jsx'
import Home from '../Componentes/Home.jsx'
import AuthProvider from '../Rutas/AuthProvider.jsx'
import VenderProducto from '../Componentes/VenderProduc.jsx'
import Destacados from '../Componentes/Destacados.jsx'
import SobreNosotros from '../Componentes/SobreNosotros.jsx'
import PreguntasFrecuentes from '../Componentes/PreguntasFre.jsx'
const router = createBrowserRouter([
    {
        path: "/",
        element: <IncioSesion />
    },
    {
        path: "/InicioSesion",
        element: <IncioSesion />
    },

    {
        path: "/Registrarse",
        element: <Registrarse />
    },
    {
        path: "/home",
        element: <RutaPrivada route={<Home/>} />
        // element: <Home/>

    },

    {
        path: "/venderProductos",
        element: <VenderProducto/>
    },

    {
        path: "/destacado",
        element: <Destacados />
    },

    {
        path: "/sobreNosotros",
        element: <SobreNosotros />
    },

    {
        path: "/preguntasfrecuentes",
        element: <PreguntasFrecuentes />
    }

]);
const Rutas = () => {

    

    return (
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
    )

}

export default Rutas
