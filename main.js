let btnenviar1 = document.getElementById("btnenviar1")
let nombre = document.getElementById("nombre")
let email = document.getElementById("email")
let psw = document.getElementById("psw")
let btnsiguiente = document.getElementById("btnsiguiente")
let btnguardar = document.getElementById("btnguardar")
let btnbajo = document.getElementById("btnbajo")
let btnmedio = document.getElementById("btnmedio")
let btnalto = document.getElementById("btnalto")


let usuario ={};

const enviar1 = () => {
    formdatos.style.display = "none",
    divingresos.style.display = "flex",
    hola.style.display = "flex"
    usuario = {
        nombre: nombre.value,
        email: email.value,
        psw: psw.value,
    }
    rnombre.innerHTML = `¡Hola ${usuario.nombre}!`
}
console.log('El usuario: ', usuario )
btnenviar1.addEventListener("click", enviar1)

const siguiente = () => {
    divingresos.style.display = "none";
    divese.style.display = "flex";
}

btnsiguiente.addEventListener("click",siguiente)

const guardar = () => {
    divp2.style.display = "none";
    divp3.style.display = "block";

}

btnguardar.addEventListener("click",guardar)

const resbajo = () =>{rbajo.style.display = "flex", rmedio.style.display = "none", ralto.style.display = "none"}
const resmedio = () =>{rmedio.style.display = "flex",rbajo.style.display = "none", ralto.style.display = "none" }
const resalto = () =>{ralto.style.display = "flex", rmedio.style.display = "none", rbajo.style.display = "none" }

btnbajo.addEventListener("click", resbajo);
btnmedio.addEventListener("click", resmedio);
btnalto.addEventListener("click", resalto);


