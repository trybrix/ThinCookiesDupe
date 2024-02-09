// swiper js
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//menu open close here ---------------
let menu = document.querySelector('.menu-icon');

//open-close menu-icon
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};


// closing menu when click on header link
window.onscroll = () =>{
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
}

//header scroll reveal
const animate = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration:'1500',
  delay:'400',

});


animate.reveal('.nav');
animate.reveal('.home-text',{origin: "left" });
animate.reveal('.home-vid',{origin: "bottom" });
animate.reveal('.flavors-content p, .fvr-box,.team-box,.faq-box,.reviews-box,.slides-frame,.heading h2,.heading p',{interval: 50 });