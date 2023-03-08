const slides = [{
        "image": "slide1.jpg"
        , "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    }
    , {
        "image": "slide2.jpg"
        , "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    }
    , {
        "image": "slide3.jpg"
        , "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    }
    , {
        "image": "slide4.png"
        , "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]
var currentIndex = 0;

/* Gestion des fleches du carrousel */
const arrow_left = document.querySelector("#banner .arrow_left");
const arrow_right = document.querySelector("#banner .arrow_right");

// Ajoutons des events listeners pour la fleche droite 
arrow_right.addEventListener('click', () => {
    currentIndex++;
    selectedDot(currentIndex);
    window.clearInterval(timer);
    let timer = window.setInterval(() => {
        currentIndex++;
        selectedDot(currentIndex);
    }, 3000);
});

// Ajoutons des events listeners pour la fleche gauche 
arrow_left.addEventListener('click', () => {
    currentIndex--;
    selectedDot(currentIndex);
    window.clearInterval(timer);
    let timer = window.setInterval(() => {
        currentIndex++;
        selectedDot(currentIndex);
    }, 3000);
});


// Creation des points en bas de la baniere pour indiquer sur laquelle on se trouve
slides.forEach((e, index) => {
    document.querySelector(".dots").innerHTML += '<div class="dot"></div>';
});

/* Gestion des points */
const dots = document.querySelectorAll(".dot");

// Ajout des events listeners pour les points
dots.forEach((e, index) => {
    e.addEventListener('click', () => {

        selectedDot(index);
        window.clearInterval(timer);
        let timer = window.setInterval(() => {
            currentIndex++;
            selectedDot(currentIndex);
        }, 3000);

    })
});


/* Fonctions */

// Fonction pour gerer l'image et le texte au chargement de la page

function selectedImage(index) {
    document.querySelector("#banner > img").src = `./assets/images/slideshow/${slides[index].image}`;
    document.querySelector("#banner > p").innerHTML = slides[index].tagLine;
}

function selectedDot(index) {
    if (index == 4) {
        index = 0;
    } else if (index < 0) {
        index = 3;
    }
    // Enleve toutes les classes de tous les points sur la banniere
    dots.forEach(el => {
        el.classList.remove("dot_selected");
    });
    // Application du point de couleur pour la nouvelle banniere 

    document.querySelectorAll(".dot")[index].classList.add("dot_selected");

    // Selection de la nouvelle image 
    selectedImage(index);
    currentIndex = index;
}
selectedDot(0);

let timer = window.setInterval(() => {
    currentIndex++;
    selectedDot(currentIndex);
}, 3000);