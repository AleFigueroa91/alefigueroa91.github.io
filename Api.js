
//variantes


const foto = document.getElementById("foto");
const Nombre = document.getElementById("nombre");


//funciones
const generarCV = async() => {
    const url = "https://randomuser.me/api/"
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];
 //datos   
    console.log(datos);
    foto.src = datos.picture.large;
    Nombre.textContent = datos.name.first +" "+datos.name.last;
   
}

// refresco de pagina

document.addEventListener('DOMContentLoaded', generarCV)



