let btnenviar1 = document.getElementById("btnenviar1")
let nombre = document.getElementById("nombre")
let email = document.getElementById("email")
let psw = document.getElementById("psw")

let usuario ={};

const enviar1 = () => {
    let usuario = {
        nombre: nombre.value,
        email: email.value,
        psw: psw.value,
    }
    console.log(usuario);
    return usuario
}

btnenviar1.addEventListener("click", enviar1)
