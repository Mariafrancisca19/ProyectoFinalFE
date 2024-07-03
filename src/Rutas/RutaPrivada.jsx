import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'


 const RutaPrivada = ({route}) => {
   const {auth} = useContext(AuthContext) ;
    return auth ? route : <Navigate to={"/"}/>;
 }
 
 export default RutaPrivada
 