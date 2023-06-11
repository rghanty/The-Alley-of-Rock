const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const beginBtn = document.querySelector('.begin');

let currentSlide = 0;
let totalSlides = slides.children.length;
function prevSlide() {
    currentSlide = currentSlide = (currentSlide + totalSlides - 1) % totalSlides;
    updateSlide();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
}

prevBtn.addEventListener('click', prevSlide);

nextBtn.addEventListener('click', nextSlide);

beginBtn.addEventListener('click',nextSlide);


window.addEventListener('load', () => {
    slides.children[0].classList.add('active');
});



function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * window.innerWidth}px)`;

    if (currentSlide === 0) {
        prevBtn.style.visibility = 'hidden';
    } else {
        prevBtn.style.visibility = 'visible';
    }

    if (currentSlide === totalSlides -1) {
        nextBtn.style.visibility = 'hidden';
    } else {
        nextBtn.style.visibility = 'visible';
    }

    // Add 'active' class to the current slide and its adjacent slides
    for (let i = 0; i < totalSlides; i++) {
        if (i === currentSlide) {
            slides.children[i].classList.add('active');
        } else {
            slides.children[i].classList.remove('active');
        }
    }

    // // Transition from the last slide to the first slide
    // if (currentSlide === totalSlides-1) {
    //     slides.children[0].classList.remove('active');
    //     slides.children[0].style.transform = `translateX(${totalSlides * window.innerWidth}px)`;
    //     setTimeout(() => {
    //         slides.children[0].style.transform = 'none';
    //     }, 0);
    // }
}

const text = " The Alley of Rock.";
const typingSpeed = 80; // Speed in milliseconds between each character

let charIndex = 0;
const typingEffect = document.getElementById('name');
typingEffect.style.fontSize = '50px';
typingEffect.style.fontWeight = '30px';

function typeNextCharacter() {
    if (charIndex < text.length) {
        typingEffect.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeNextCharacter, typingSpeed);
    }
}

typeNextCharacter();

