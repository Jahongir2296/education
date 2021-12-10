const subjectsItem = document.querySelectorAll(".philosophy__link");
const subjectsContentTab = document.querySelectorAll(".philosophy-main");



window.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < subjectsItem.length; i++) {
        subjectsItem[i].addEventListener('click', () => {
            subjectsItem.forEach((e) => { e.classList.remove('active-bg') })
            subjectsItem[i].classList.add('active-bg')
            subjectsContentTab.forEach((el) => {
                if (!el.classList.contains("hide")) {
                    el.classList.add('hide')


                }
            })
            subjectsContentTab[i].classList.remove('hide');

            // tabDastboard[i].classList.add("tabs__active");
        })
    }
})