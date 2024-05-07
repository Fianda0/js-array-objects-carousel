const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//Creo un ciclo per aggiungere gli elementi in pagina
images.forEach((element, i, array) => {
    document.getElementById('principale').innerHTML += `
    <div class="carta">
    <img class='slide' src='${element.image}' </img>
    <div class="testo"></div>
 </div>`
})


let imgActive;
let slideNext;

// Creazione array con immagine delle slide
let carta = document.getElementsByClassName('carta');
let slideLateral = document.getElementsByClassName('slide-lateral');
let addText = document.getElementsByClassName('testo');

carta[0].classList.add('active')
addText[0].innerHTML = `<h3>${images[0].title}</h3>${images[0].text}`

document.getElementById('next').addEventListener('click', function () {


    // Inizio ciclo for per controllare le immagini
    for (let i = 0; i < carta.length; i++) {

        const slideControl = carta[i]
        const slideL = slideLateral[i]

        // controllo slide se hanno la classe active
        if (slideControl.classList.contains('active')) {
            // se contine ACTIVE lo rimuovo
            slideControl.classList.remove('active')
            slideL.classList.remove('active', 'border-lateral')


            // segno quale array ha la classe ACTIVE
            imgActive = i;

        }
    }

    // seleziono la prossima slide da attivare
    slideNext = imgActive + 1;

    // se mi trovo all'ulitma slide torno alla prima
    if (slideNext == carta.length) {
        slideNext = 0;
    }

    carta[slideNext].classList.add('active')
    addText[slideNext].innerHTML = `<h3>${images[slideNext].title}</h3>${images[slideNext].text}`
    slideLateral[slideNext].classList.add('active', 'border-lateral')


})

// inserisco bottone per passare alla slide precedente

document.getElementById('back').addEventListener('click', function () {


    // Inizio ciclo for per controllare le immagini
    for (let i = 0; i < carta.length; i++) {

        const slideControl = carta[i]
        const slideL = slideLateral[i]


        // controllo slide se hanno la classe active
        if (slideControl.classList.contains('active')) {
            // se contine ACTIVE lo rimuovo
            slideControl.classList.remove('active')
            slideL.classList.remove('active', 'border-lateral')


            // segno quale array ha la classe ACTIVE
            imgActive = i;

        }
    }

    // seleziono la slide precedente da attivare
    slideNext = imgActive - 1;

    // se mi trovo alla prima slide torno all'ultima
    if (slideNext == -1) {
        slideNext = carta.length - 1;
    }

    carta[slideNext].classList.add('active')
    addText[slideNext].innerHTML = `<h3>${images[slideNext].title}</h3>${images[slideNext].text}`
    slideLateral[slideNext].classList.add('active', 'border-lateral')

})

