
$(function() {
  $('progress').each(function() {
    var max = $(this).val();
    $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
      });
});

let btnenviar1 = document.getElementById("btnenviar1")
let nombre = document.getElementById("nombre")
let email = document.getElementById("email")
let psw = document.getElementById("psw")
let formdatos = document.getElementById("formdatos")

let usuario ={};

const enviar1 = () => {
    formdatos.style.display = "none"
    usuario = {
        nombre: nombre.value,
        email: email.value,
        psw: psw.value,
    }
    console.log(usuario)
}

console.log('El usuario: ', usuario )

btnenviar1.addEventListener("click", enviar1)
