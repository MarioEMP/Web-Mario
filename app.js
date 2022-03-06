
// ANIMACIONES

let animacionTitulos, navMenu, animacionLogos;

animacionTitulos = document.querySelectorAll(".titulo")

navMenu = document.querySelector("#navegacion")

animacionLogos = document.querySelectorAll(".logos")

function titulosScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animacionTitulos.length; i++) {
        let alturaAnimTitulos = animacionTitulos[i].offsetTop;
        if (alturaAnimTitulos - 400 < scrollTop) {
            animacionTitulos[i].style.opacity = 1;
            animacionTitulos[i].classList.add("mostrarArriba");
        }
        if (alturaAnimTitulos - 2000 < scrollTop) {
            navMenu.style.opacity = 1;
            navMenu.style.display = "flex";
            navMenu.classList.add("mostrarNav");
        }
    }
    for (let i = 0; i < animacionLogos.length; i++) {
        let alturaAnimLogos = animacionLogos[i].offsetTop;
        if (alturaAnimLogos - 600 < scrollTop) {
            animacionLogos[i].style.opacity = 1;
            animacionLogos[i].classList.add("mostrarIzquierda");
        }
    }
}

window.addEventListener("scroll", titulosScroll);

// BOTON HAMBURGUESA

let boton = document.getElementById("hamburguesa");
let menuh = document.getElementById("navh");

function mostrarMenu() {
    if (menuh.classList.contains("desactivar-menu")) {
        menuh.classList.remove("desactivar-menu");
        menuh.style.opacity = 1;
        menuh.style.display = "block";
        menuh.classList.add("activar-menu");
        return
    }
    if (menuh.classList.contains("activar-menu")) {
        menuh.classList.remove("activar-menu");
        menuh.classList.add("desactivar-menu");
        menuh.style.opacity = 0;
        menuh.style.display = "none";
    }
}


boton.addEventListener("click", mostrarMenu);


// CONOCIMIENTOS

function mostrarHtml() {
    if (parHtml.classList.contains("desactivar-html")) {
        document.getElementById("div-html").style.boxShadow = "none";
        document.getElementById("div-html").style.transform = "none";
        document.getElementById("flechas-html").style.opacity = 0.1;
        document.getElementById("html").style.display = "block";
        document.getElementById("info-html").style.display = "none";
    }
}
function mostrarInfoHtml() {
    document.getElementById("info-html").style.display = "block";
    document.getElementById("html").style.display = "none";
    document.getElementById("flechas-html").style.opacity = 0.3;
    document.getElementById("div-html").style.boxShadow = "0 0 10px 10px rgb(172, 172, 172)";
    document.getElementById("div-html").style.transform = "scale(1.05)";
}
function mostrarJs() {
    if (parJs.classList.contains("desactivar-js")) {
        document.getElementById("div-js").style.boxShadow = "none";
        document.getElementById("div-js").style.transform = "none";
        document.getElementById("flechas-js").style.opacity = 0.1;
        document.getElementById("js").style.display = "block";
        document.getElementById("info-js").style.display = "none";
    }
}
function mostrarInfoJs() {
    document.getElementById("info-js").style.display = "block";
    document.getElementById("js").style.display = "none";
    document.getElementById("flechas-js").style.opacity = 0.3;
    document.getElementById("div-js").style.boxShadow = "0 0 10px 10px rgb(172, 172, 172)";
    document.getElementById("div-js").style.transform = "scale(1.05)";
}
function mostrarReact() {
    if (parReact.classList.contains("desactivar-react")) {
        document.getElementById("div-react").style.boxShadow = "none";
        document.getElementById("div-react").style.transform = "none";
        document.getElementById("flechas-react").style.opacity = 0.1;
        document.getElementById("react").style.display = "block";
        document.getElementById("info-react").style.display = "none";
    }
}
function mostrarInfoReact() {
    document.getElementById("info-react").style.display = "block";
    document.getElementById("react").style.display = "none";
    document.getElementById("flechas-react").style.opacity = 0.3;
    document.getElementById("div-react").style.boxShadow = "0 0 10px 10px rgb(172, 172, 172)";
    document.getElementById("div-react").style.transform = "scale(1.05)";
}

let parHtml = document.getElementById("p-html");
let parJs = document.getElementById("p-js");
let parReact = document.getElementById("p-react");

function pHtml() {
    if (parHtml.classList.contains("desactivar-html")) {
        parHtml.classList.remove("desactivar-html");
        parHtml.classList.add("activar-html");
        parHtml.style.display = "block";
        document.getElementById("flechas-html").style.transform = "rotate(180deg)";
        document.getElementById("info-html").style.display = "block";
    }
    else if (parHtml.classList.contains("activar-html")) {
        parHtml.classList.add("desactivar-html");
        parHtml.classList.remove("activar-html");
        parHtml.style.display = "none";
        document.getElementById("flechas-html").style.transform = "rotate(0deg)";
    }
}
function pJs() {
    if (parJs.classList.contains("desactivar-js")) {
        parJs.classList.remove("desactivar-js");
        parJs.classList.add("activar-js");
        parJs.style.display = "block";
        document.getElementById("flechas-js").style.transform = "rotate(180deg)";
        document.getElementById("info-js").style.display = "block";
    }
    else if (parJs.classList.contains("activar-js")) {
        parJs.classList.add("desactivar-js");
        parJs.classList.remove("activar-js");
        parJs.style.display = "none";
        document.getElementById("flechas-js").style.transform = "rotate(0deg)";
    }
}
function pReact() {
    if (parReact.classList.contains("desactivar-react")) {
        parReact.classList.remove("desactivar-react");
        parReact.classList.add("activar-react");
        parReact.style.display = "block";
        document.getElementById("flechas-react").style.transform = "rotate(180deg)";
        document.getElementById("info-react").style.display = "block";
    }
    else if (parReact.classList.contains("activar-react")) {
        parReact.classList.add("desactivar-react");
        parReact.classList.remove("activar-react");
        parReact.style.display = "none";
        document.getElementById("flechas-react").style.transform = "rotate(0deg)";
    }
}
