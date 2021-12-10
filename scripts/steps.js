const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const goPayment = document.querySelectorAll('#go-payment');
const paymentModal = document.querySelector('.bg-payment');
const closeBtn = document.querySelectorAll(".close");

goPayment.forEach(item => {
    item.addEventListener("click", () => {
        paymentModal.classList.add("showModal");
        document.body.style.overflow = "hidden"

    })

});
closeBtn.forEach(item => {
    item.addEventListener("click", () => {
        paymentModal.classList.remove("showModal");
        document.body.style.overflow = ""

    })

});

function esc() {
    document.body.addEventListener('keyup', e => {
        if (e.keyCode === 27) {
            paymentModal.classList.remove("showModal");

            document.body.style.overflow = "";

        }
    })
}

esc();

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        // Uncomment in
        //     case you only want to allow
        // for the display of only one collapsed item at a time!

        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
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

});