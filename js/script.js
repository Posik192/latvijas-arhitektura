
// Karuselī izmantotie attēli un nosaukumi
const images = [
    "images/turaidas-pils.jpg",
    "images/cesu-pils.jpg",
    "images/rigas-doms.jpg",
    "images/melngalvju-nams.jpg",
    "images/rundales-pils.jpg",
    "images/alberta-iela.jpg",
    "images/gaismas-pils.jpg",
    "images/lielais-dzintars.jpg"
];

const titles = [
    "Turaidas pils",
    "Cēsu viduslaiku pils",
    "Rīgas Doms",
    "Melngalvju nams",
    "Rundāles pils",
    "Alberta iela 4",
    "Latvijas Nacionālā bibliotēka",
    "Lielais dzintars"
];

// Sākuma attēla indekss
let index = 0;
let playing = true;

// HTML elementu atlase
const image = document.getElementById("carousel-image");
const caption = document.getElementById("carousel-caption");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const pause = document.getElementById("pause");

// Attēla un nosaukuma atjaunošana
function showImage() {
    image.src = images[index];
    image.alt = titles[index];
    caption.textContent = titles[index];
}

// Nākamais attēls
function nextImage() {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    showImage();
}

// Iepriekšējais attēls
function prevImage() {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    showImage();
}

// Automātiskā pārslēgšana ik pēc 5 sekundēm
showImage();

let timer = setInterval(nextImage, 5000);

// Pogu notikumu apstrāde
next.addEventListener("click", nextImage);
prev.addEventListener("click", prevImage);

// Automātiskās pārslēgšanas apturēšana un atsākšana
pause.addEventListener("click", function() {
    if (playing) {
        clearInterval(timer);
        pause.textContent = "Atsākt";
        playing = false;
    } else {
        timer = setInterval(nextImage, 5000);
        pause.textContent = "Apturēt";
        playing = true;
    }
});
