
//variantes

const boton = document.getElementById("boton");
const foto = document.getElementById("foto");
const Nombre = document.getElementById("Nombre");
const Correo = document.getElementById("Correo");
const Edad = document.getElementById("Edad");
const Direccion = document.getElementById("Direccion");
const Telefono = document.getElementById("Telefono");

//funciones
const generarCV = async() => {
    const url = "https://randomuser.me/api/"
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];
 //datos   
    console.log(datos);
    foto.src = datos.picture.medium;
    Nombre.textContent = datos.name.first +" "+datos.name.last;
    Correo.textContent = datos.email;
    Edad.textContent = datos.dob.age;
    Direccion.textContent = datos.location.street.name +" "+datos.location.street.number;
    Telefono.textContent = datos.phone;
    
    
}

/* boton de generar curriculum*/

boton.addEventListener("click", generarCV);

document.addEventListener('DOMContentLoaded', generarCV)