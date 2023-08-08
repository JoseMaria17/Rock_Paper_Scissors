/* initialize player and computer points to zero */

let puntosUsuario = 0;
let puntosPC = 0;

/* Estas variables nos van a permitir modificar los elementos de nuestra app atraves de sus respectivos ID */

let instrucciones = document.querySelector("#instructions");
let contenedorPuntosUsuario = document.querySelector("#puntos-player");
let contenedorPuntosPC = document.querySelector("#puntos-computer");
let mensaje = document.querySelector("#message");
let contenedorGanaPunto = document.querySelector("#won-point");
let elegiTuArma = document.querySelector("#choose-your-weapon");


let contenedorEleccionUsuario = document.querySelector("#choice-player");
let contenedorEleccionPC = document.querySelector("#choice-computer");


let botonesArmas = document.querySelectorAll(".weapon");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});


function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id; /* Esta variable nos devuelve el id del boton que selencionemos */

    // piedra => 0
    // papel => 1
    // tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra✊";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel🤚"
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera✌"
    }

    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate

    if (
        (eleccionUsuario === "piedra✊" && eleccionPC === "tijera✌") ||
        (eleccionUsuario === "tijera✌" && eleccionPC === "papel🤚") ||
        (eleccionUsuario === "papel🤚" && eleccionPC === "piedra✊")
    ) {
        ganaUsuario();

    } else if (
        (eleccionPC === "piedra✊" && eleccionUsuario === "tijera✌") ||
        (eleccionPC === "tijera✌" && eleccionUsuario === "papel🤚") ||
        (eleccionPC === "papel🤚" && eleccionUsuario === "piedra✊")
    ) {
        ganaPC();

    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            instrucciones.innerText = "🔥 ¡You won the game! 🔥"
        }

        if (puntosPC === 5) {
            instrucciones.innerText = "😭 ¡The computer won the game! 😭"
        }

        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }


}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡you won a point! 🔥"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡The computer won a point! 😭"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Tie! 😱"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0
    puntosPC = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "The first to reach 5 points wins."
}