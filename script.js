const cursor = document.querySelector('.cursor');
const pokemon_image = document.querySelector('.pokemon-image');
const open_btn = document.querySelector('.open-btn');
const right_pad = document.querySelector('.right');
const display = document.querySelector('.display');
const hinge1 = document.querySelector('.hinge1');
const hinge2 = document.querySelector('.hinge2');
const hinge3 = document.querySelector('.hinge3');
const display1 = document.querySelector('.typewriter1');
const display2 = document.querySelector('.typewriter2');
const pokedex_sound = document.getElementById('pokedex-sound');
const speaker = document.querySelector('.speaker-img');

//Control Buttons
const arrow_up = document.querySelector('#arrow-up');
const arrow_left = document.querySelector('#arrow-left');
const circle = document.querySelector('#arrow-circle');
const arrow_right = document.querySelector('#arrow-right');
const arrow_down = document.querySelector('#arrow-down');

const text1 = "POKEMON : ";
const text2 = "TYPE : ";

let functionIsRunning = false;

const pokemon = [
    {
        name: 'CHARMANDER',
        type: 'FIRE',
        image: 'images/fire_1 1.jpg',
        sound: 'sound/Pokemon Cries - _004 Charmander(MP3_320K).mp3'
    },
    {
        name: 'CHARMELEON',
        type: 'FIRE',
        image: 'images/fire_1 2.jpg',
        sound: 'sound/Pokemon Cries - _005 Charmeleon(MP3_320K).mp3',
    },
    {
        name: 'CHARIZARD',
        type: 'FIRE',
        image: 'images/fire_1 3.jpg',
        sound: 'sound/Pokemon Cries - _006 Charizard(MP3_320K).mp3',
    },
    {
        name: 'MAGBY',
        type: 'FIRE',
        image: 'images/fire_2 1.jpg',
        sound: 'sound/Pokemon Cries - _240 Magby(MP3_128K).mp3',
    },
    {
        name: 'MAGMAR',
        type: 'FIRE',
        image: 'images/fire_2 2.jpg',
        sound: 'sound/Pokemon Cries - _126 Magmar(MP3_320K).mp3',
    },
    {
        name: 'MAGMORTAR',
        type: 'FIRE',
        image: 'images/fire_2 3.jpg',
        sound: 'sound/Pokemon Cries - _467 Magmortar(MP3_320K).mp3',
    },
    {
        name: 'BULBASAUR',
        type: 'GRASS',
        image: 'images/grass_1 1.jpg',
        sound: 'sound/Pokemon Cries - _001 Bulbasaur(MP3_320K).mp3',
    },
    {
        name: 'IVYSAUR',
        type: 'GRASS',
        image: 'images/grass_1 2.jpg',
        sound: 'sound/Pokemon Cries - _002 Ivysaur(MP3_320K).mp3',
    },
    {
        name: 'VENASAUR',
        type: 'GRASS',
        image: 'images/grass_1 3.jpg',
        sound: 'sound/Pokemon Cries - _003 Venusaur(MP3_320K).mp3',
    },
    {
        name: 'TANGELA',
        type: 'GRASS',
        image: 'images/grass_2 1.jpg',
        sound: 'sound/Pokemon Cries - _114 Tangela(MP3_320K).mp3',
    },
    {
        pokemon: 'TANGROWTH',
        type: 'GRASS',
        image: 'images/grass_2 2.jpg',
        sound: 'sound/Pokemon Cries - _465 Tangrowth(MP3_320K).mp3',
    },
    {
        name: 'MAGIKARP',
        type: 'WATER',
        image: 'images/water_1 1.jpg',
        sound: 'sound/Pokemon Cries - _129 Magikarp(MP3_320K).mp3',
    },
    {
        name: 'GYARADOS',
        type: 'WATER',
        image: 'images/water_1 2.jpg',
        sound: 'sound/Pokemon Cries - _130 Gyarados(MP3_320K).mp3',
    },
    {
        name: 'SQUIRTLE',
        type: 'WATER',
        image: 'images/water_2 1.jpg',
        sound: 'sound/Pokemon Cries - _007 Squirtle(MP3_320K).mp3',
    },
    {
        name: 'WARTOTLE',
        type: 'WATER',
        image: 'images/water_2 2.jpg',
        sound: 'sound/Pokemon Cries - _008 Wartortle(MP3_320K).mp3',
    },
    {
        name: 'BLASTOISE',
        type: 'WATER',
        image: 'images/water_2 3.jpg',
        sound: 'sound/Pokemon Cries - _009 Blastoise(MP3_320K).mp3',
    }
]

function typewriterTyping(element, text, index = 0) {
    if(index === 0) {
        element.textContent = "";
    }
    if(index === text.length) {
        return;
    }
    element.textContent += text[index];
    if(index === text.length - 1) {
        return;
    }
    setTimeout(() => typewriterTyping(element, text, index + 1), 400);
}

window.addEventListener('mousemove', a => {
    cursor.style.top = a.pageY + 'px'
    cursor.style.left  = a.pageX + 'px'
});

window.addEventListener('click', () => {
    cursor.classList.toggle('active')
});

open_btn.addEventListener('click', () => {
    open_btn.classList.toggle('active');
    right_pad.classList.toggle('active');
    display.classList.toggle('active');
    hinge1.classList.toggle('active');
    hinge2.classList.toggle('active');
    hinge3.classList.toggle('active');
    pokedex_sound.play();
    typewriterTyping(display1, text1);
    typewriterTyping(display2, text2);
});

let pokemon_index = 0;

function switchPokemon() {
    let currentPokemon = pokemon[pokemon_index];
    typewriterTyping(display1, text1 + currentPokemon.name, 0);
    typewriterTyping(display2, text2 + currentPokemon.type, 0);
    pokemon_image.src = currentPokemon.image;
    pokedex_sound.src = currentPokemon.sound;
    pokedex_sound.play();
    pokemon_index = (pokemon_index + 1) % pokemon.length;
}

circle.addEventListener('click', () => {
    switchPokemon();
});

arrow_left.addEventListener('click', () => {
    switchPokemon();
});