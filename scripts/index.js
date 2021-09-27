//HTML dan tanlabkelindi

let modal = document.querySelector(".bg-modal");
let registraionBtn = document.querySelector(".registration");
let closeBtn = document.querySelector(".close");
let registraionModal = document.querySelector(".modal-registration");
let emailInput = document.querySelector(".emailInput");
let passInput = document.querySelector(".passInput");
let modalRegistration = document.querySelector(".modal-registration");


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


function checkInput() {


    emailInput.addEventListener('keyup', () => {
        if ((emailInput.value == '')) {
            modalRegistration.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('nmadir')
            });
        }
    });

    passInput.addEventListener('keyup', () => {
        console.log(passInput.value)
    })
}

checkInput()



// registraion.addEventListener('click', function() {
//     bgModal.stayle.display = 'block'
// })

// fn()

// function fn() {

// }

// let fn = function() {
//     console.log('dsfsdsdf');
// }