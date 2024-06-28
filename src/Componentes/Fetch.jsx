// METODO PUT


const cambiarDato = async (endpoint,id) => {
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


// METODO DELETE 


const eliminarDato = async (id) => {
  
  try {
    fetch(`http://localhost:3001${id}`,{
        method:"DELETE",

    })
    
  } catch (error) {
    console.log(error)
  }
}

export default {eliminarDato,cambiarDato}
