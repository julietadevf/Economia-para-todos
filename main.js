let btnenviar1 = document.getElementById("btnenviar1")
let nombre = document.getElementById("nombre")
let email = document.getElementById("email")
let psw = document.getElementById("psw")
let btnsiguiente = document.getElementById("btnsiguiente")
let btnguardar = document.getElementById("btnguardar")

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
    divese.style.display = "none";
    rnombre.style.display = "none";

}

btnguardar.addEventListener("click",guardar)
