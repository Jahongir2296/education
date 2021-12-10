//HTML dan tanlabkelindi

const modal = document.querySelector(".bg-modal");
const registraionBtn = document.querySelector(".registration");
const closeBtn = document.querySelectorAll(".close");
const registraionModal = document.querySelector(".modal-registration");
const emailInput = document.querySelector(".emailInput");
const passInput = document.querySelector(".passInput");
const modalRegistration = document.querySelector(".modal-registration");
const card = document.querySelector('.card__content');
const loginBtn = document.querySelectorAll('.login');
const loginModal = document.querySelector(".bg-login");
const haveAccount = document.querySelector(".have-account");
const noAccount = document.querySelector('.no-account');
const forgetPassword = document.querySelector(".forget-password");
const forgetModal = document.querySelector(".bg-forget");
const newPassord = document.querySelector(".bg-new_password");
const forgetBtn = document.querySelector("#forget-btn");
const backLoginModal = document.querySelector(".back-login");




registraionBtn.addEventListener("click", () => {
    console.log('clicked', modal)
    modal.classList.add("showModal");
    document.body.style.overflow = "hidden"

    fetchComments()
});

function fetchComments() {
    fetch('https://jsonplaceholder.typicode.com/comments?limit=10')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
}

closeBtn.forEach(item => {
    item.addEventListener("click", () => {
        modal.classList.remove("showModal");
        document.body.style.overflow = ""
        loginModal.classList.remove("showModal");
        document.body.style.overflow = ""
        forgetModal.classList.remove("showModal");
        newPassord.classList.remove("showModal");
        paymentModal.classList.remove("showModal");
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
            registraionBtn.style.outline = "none";
            loginModal.classList.remove("showModal");
            loginBtn.style.outline = "none";
            forgetModal.classList.remove("showModal");
            loginBtn.style.outline = "none";
            newPassord.classList.remove("showModal");
            paymentModal.classList.remove("showModal");
            document.body.style.overflow = "";

        }
    })
}

esc();

loginBtn.forEach(item => {
    item.addEventListener("click", () => {
        loginModal.classList.add("showModal");
        document.body.style.overflow = "hidden"
    })
});


modal.addEventListener("click", (a) => {
    if (a.target === modal) {
        loginModal.classList.remove("showModal");
        document.body.style.overflow = "hidden"
    }
})



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

const swiper = new Swiper('.swiper', {


    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
forgetPassword.addEventListener('click', () => {
    forgetModal.classList.add("showModal");
    document.body.style.overflow = "hidden"
    loginModal.classList.remove("showModal");
});

forgetBtn.addEventListener("click", () => {
    newPassord.classList.add("showModal");
    document.body.style.overflow = "hidden"
    forgetModal.classList.remove("showModal");
    console.log(1);
});

backLoginModal.addEventListener("click", () => {
    forgetModal.classList.remove("showModal");
    loginModal.classList.add("showModal");
    document.body.style.overflow = "hidden"
});

// goPayment.forEach(item => {
//     item.addEventListener("click", () => {
//         newPassord.classList.add("showModal");
//         document.body.style.overflow = "hidden"
//     })

// });

//akkardionvar 
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         this.classList.toggle("accardion-active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// };

const form = document.getElementById('check-form');

form.addEventListener('focus', (event) => {
    event.target.style.border = '#229A87';
}, true);

form.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);