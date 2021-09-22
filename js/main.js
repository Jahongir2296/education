//HTML dan tanlabkelindi

let modal = document.querySelector(".bg-modal");
let registraionBtn = document.querySelector(".registration");
let closeBtn = document.querySelector(".close");


const openModal = function() {
    modal.classList.add("showModal");
    document.body.style.overflow = "hidden"
};

const closeModal = function() {
    modal.classList.remove("showModal");
    document.body.style.overflow = "initial"

};

registraionBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);



// registraion.addEventListener('click', function() {
//     bgModal.stayle.display = 'block'
// })

// fn()

// function fn() {

// }

// let fn = function() {
//     console.log('dsfsdsdf');
// }