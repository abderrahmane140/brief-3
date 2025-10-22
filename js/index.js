const hero = document.querySelector(".home-container");


const images = [
  "/assets/bg1.jpg",
  "/assets/bg2.jpg",
  "/assets/bg3.jpg",
  "/assets/bg4.jpg"
]

let currentIndex = 0;

function changeBackground(){
    currentIndex = (currentIndex + 1) % images.length;
    hero.style.backgroundImage = `url(${images[currentIndex]})`
}


setInterval(changeBackground, 5000);