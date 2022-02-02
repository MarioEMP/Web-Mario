    // TITULOS

    let animacionTitulos = document.querySelectorAll(".titulo")

    let navMenu = document.querySelector("#navegacion")

    let animacionLogos = document.querySelectorAll(".logos")

    function titulosScroll() {
        let scrollTop = document.documentElement.scrollTop;
        for (let i = 0; i < animacionTitulos.length; i++) {
            let alturaAnimTitulos = animacionTitulos[i].offsetTop;
            if (alturaAnimTitulos - 350 < scrollTop) {
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
            if (alturaAnimLogos -400 < scrollTop) {
                animacionLogos[i].style.opacity = 1;
                animacionLogos[i].style.display = "flex";
                animacionLogos[i].classList.add("mostrarIzquierda");
            }
        }
    }

    window.addEventListener("scroll", titulosScroll);



