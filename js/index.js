
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

const hero = document.querySelector(".home-hero-container");

const images = [
  "/assets/bg1.jpg",
  "/assets/bg2.jpg",
  "/assets/bg3.jpg",
  "/assets/bg4.jpg"
];

let currentIndex = 0;


function changeBackground(index) {
  hero.style.backgroundImage = `url(${images[index]})`;
}


document.querySelector(".right-arrow").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  changeBackground(currentIndex);
});

document.querySelector(".left-arrow").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeBackground(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  changeBackground(currentIndex);
}, 5000);


changeBackground(currentIndex);



