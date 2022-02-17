
// ANIMACIONES

    let animacionTitulos, navMenu, animacionLogos;

    animacionTitulos = document.querySelectorAll(".titulo")

    navMenu = document.querySelector("#navegacion")

    animacionLogos = document.querySelectorAll(".logos")

    function titulosScroll() {
        let scrollTop = document.documentElement.scrollTop;
        for (let i = 0; i < animacionTitulos.length; i++) {
            let alturaAnimTitulos = animacionTitulos[i].offsetTop;
            if (alturaAnimTitulos - 600 < scrollTop) {
                animacionTitulos[i].style.opacity = 1;
                animacionTitulos[i].classList.add("mostrarArriba");
            }
            if(alturaAnimTitulos -2000 < scrollTop){
                navMenu.style.opacity = 1;
                navMenu.style.display = "flex";
                navMenu.classList.add("mostrarNav");
            }
        }
        for (let i = 0; i < animacionLogos.length; i++) {
            let alturaAnimLogos = animacionLogos[i].offsetTop;
            if (alturaAnimLogos -650 < scrollTop) {
                animacionLogos[i].style.opacity = 1;
                animacionLogos[i].style.display = "flex";
                animacionLogos[i].classList.add("mostrarIzquierda");
            }
        }
    }

    window.addEventListener("scroll", titulosScroll);

// BOTON HAMBURGUESA

    let boton = document.getElementById("hamburguesa");

    function mostrarMenu() {
        let menuh = document.getElementById("navh")

        if(menuh.classList.contains("desactivar-menu")){
            menuh.classList.remove("desactivar-menu");
            menuh.classList.add("activar-menu");
        }else{
            menuh.classList.remove("activar-menu");
            menuh.classList.add("desactivar-menu");
        }

    }

    boton.addEventListener("click", mostrarMenu);
   


