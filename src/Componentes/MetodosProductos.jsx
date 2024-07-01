// metodo del get 
const obtenerProductos= async () => {
  
      try {
        const respuesta = await fetch("http://localhost:3001/productos")
        const data = await respuesta.json()
        
        console.log(`los datos son${datos}`)
      } catch (error) {
        console.log(error)
      }
    }


// metodo del post 
const guardarProductos = async(obj) => {
    try {

        const respuesta = await fetch("http://localhost:3001/productos", {
            method: "POST",
            headers: {
                "Content-type": "application; charset=UTF-8"
            },
            body: JSON.stringify(obj)

        })
        let datos = await respuesta.json()
        console.log(datos)
    } catch (error) {
        console.log(error);
    }
}

// metodo del put 
const cambiarProductos= async (endpoint,id) => {
    try {
      
      const respuesta = await fetch(`http://localhost:3001/${endpoint}/${id}`,{
          method:"PUT",
          headers:{
              "Content-type": "application; charset=UTF-8"
          },
          body: JSON.stringify()
      })
      let datosF =await respuesta.json()
      console.log(datosF)
  
    } catch (error) {
      console.log(error)
    }
  }
  
  

// metodo delete



const eliminarProductos = async (id) => {
  
    try {
      fetch(`http://localhost:3001${id}`,{
          method:"DELETE",
  
      })
      
    } catch (error) {
      console.log(error)
    }
  }
  
  export {obtenerProductos,guardarProductos,cambiarProductos,eliminarProductos}



