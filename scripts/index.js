//HTML dan tanlabkelindi

const modal = document.querySelector(".bg-modal");
const registraionBtn = document.querySelector(".registration");
const closeBtn = document.querySelectorAll(".close");
const registraionModal = document.querySelector(".modal-registration");
const emailInput = document.querySelector(".emailInput");
const passInput = document.querySelector(".passInput");
const modalRegistration = document.querySelector(".modal-registration");
const card = document.querySelector('.card__content');
const loginBtn = document.querySelector('.login');
const loginModal = document.querySelector(".bg-login");
const haveAccount = document.querySelector(".have-account");
const noAccount = document.querySelector('.no-account');




registraionBtn.addEventListener("click", () => {
    modal.classList.add("showModal");
    document.body.style.overflow = "hidden"
});

closeBtn.forEach(item => {
    item.addEventListener("click", () => {
        modal.classList.remove("showModal");
        document.body.style.overflow = ""
        loginModal.classList.remove("showModal");
        document.body.style.overflow = ""
    })

});

modal.addEventListener("click", (a) => {
    if (a.target === modal) {
        modal.classList.remove("showModal");
        document.body.style.overflow = "hidden";
    }
})

function esc() {
    document.body.addEventListener('keyup', e => {
        if (e.keyCode === 27) {
            modal.classList.remove("showModal");
            document.body.style.overflow = "hidden";
            registraionBtn.style.outline = "none";
        }
    })
}

esc();

loginBtn.addEventListener("click", () => {
    loginModal.classList.add("showModal");
    document.body.style.overflow = "hidden"

});


modal.addEventListener("click", (a) => {
    if (a.target === modal) {
        loginModal.classList.remove("showModal");
        document.body.style.overflow = "hidden"
    }
})

function escLogin() {
    document.body.addEventListener('keyup', e => {
        if (e.keyCode === 27) {
            loginModal.classList.remove("showModal");
            document.body.style.overflow = "hidden";
            loginBtn.style.outline = "none";
        }
    })
}

escLogin();

haveAccount.addEventListener("click", () => {
    modal.classList.remove("showModal");
    document.body.style.overflow = ""
    loginModal.classList.add("showModal");
    document.body.style.overflow = "hidden"
});

noAccount.addEventListener("click", () => {
    loginModal.classList.remove("showModal");
    document.body.style.overflow = ""
    modal.classList.add("showModal");
    document.body.style.overflow = "hidden"
});

// slider

const firstCard = document.querySelector("#first-card");
const secondCard = document.querySelector("#second-card");
const thirdCard = document.querySelector("#third-card");
const sliderFirst = document.querySelector("#slider-firs");
const sliderSecond = document.querySelector("#slider-second");
const sliderThird = document.querySelector("#slider-third");
const cardsBtn = document.querySelector(".sliad-show_btn")


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}