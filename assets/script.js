// Je déclare le slides
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

let numero = 0;

/*ETAPE 2 : AJOUTEZ DES EVENT LISTENERS SUR LES FLECHCHES */
/*Je récupére les classes des flêches*/
const FlecheGauche = document.querySelector(".arrow_left");
const FlecheDroite = document.querySelector(".arrow_right");
/*Quand on clique sur les flêches il y a un message dans console pour tester le fonctionnement des event listeners.*/
FlecheGauche.addEventListener("click", function () {
    console.log("Vous avez cliqué sur la flêche gauche");
    changeSlide(-1);
});
FlecheDroite.addEventListener("click", function () {
    console.log("Vous avez cliqué sur la flêche droite");
    changeSlide(1);
});

/*ETAPE 3 : Voir code HTML pour les bullet points rajouter dans div class = dots*/


/* ETAPE 4 */
/* CHANGER L IMAGE QUAND ON CLIQUE SUR LES FLECHES DANS LE SLIDE*/
const banner = document.getElementById("banner");
const baliseImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

const changeSlide = (direction) => {
    numero = numero + direction;
    if (numero > (slides.length - 1)) { numero = 0; }
    if (numero < 0) { numero = slides.length - 1; }

    updateActiveBullet(numero);

    /*INDIQUER LE CHEMIN DE L IMAGE*/
    baliseImage.src = './assets/images/slideshow/' + slides[numero].image;

    /*SELECTIONNER LE TEXTE DE LA BANNIERE*/
    bannerText.innerHTML = slides[numero].tagLine;
}

/* POUR METTRE A JOUR LE BULLET POINT ACTIF*/
const updateActiveBullet = (index) => {
    const bullets = Array.from(document.querySelectorAll(".dot"));
    bullets.forEach((bullet, bulletIndex) => {
        if (bulletIndex === index) {
            bullet.classList.add("dot_selected");
        } else {
            bullet.classList.remove("dot_selected");
        }
    });
}

/*ETAPE 5 CREER CAROUSSEL AUTOMATIQUE*/
setInterval("changeSlide(1)", 4000);