const tabDastboard = document.querySelectorAll("#btn-tab_menyu");
const tabInfo = document.querySelectorAll("#tab-contnet");
const motivationTabItem = document.querySelectorAll(".motivation-tab_item");
const motivationContentTab = document.querySelectorAll(".main__motivation");

window.addEventListener("DOMContentLoaded", () => {

    for (let i = 0; i < tabDastboard.length; i++) {
        tabDastboard[i].addEventListener('click', () => {
            tabDastboard.forEach((e) => { e.classList.remove('text-active') })
            tabDastboard[i].classList.add('text-active')
            tabInfo.forEach((el) => {
                if (!el.classList.contains("hide")) {
                    el.classList.add('hide')


                }
            })
            tabInfo[i].classList.remove('hide');
            tabInfo[i].classList.add("tabs__active");
            // tabDastboard[i].classList.add("tabs__active");
        })
    }

    for (let i = 0; i < motivationTabItem.length; i++) {
        motivationTabItem[i].addEventListener('click', () => {
            motivationTabItem.forEach((e) => { e.classList.remove('active-bg'), e.classList.remove('active-bg') })
            motivationTabItem[i].classList.add('active-bg')
            motivationContentTab.forEach((el) => {
                if (!el.classList.contains("hide")) {
                    el.classList.add('hide')


                }
            })
            motivationContentTab[i].classList.remove('hide');

            // tabDastboard[i].classList.add("tabs__active");
        })
    }
})