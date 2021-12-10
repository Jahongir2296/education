const tabTopicItem = document.querySelectorAll('.tab-course');
const topicModalContent = document.querySelectorAll('.main-content');
const videoCardExersis = document.querySelectorAll('.video-card__exsesaiz');
const menuTextItem = document.querySelectorAll('.course-menyu__item');

window.addEventListener("DOMContentLoaded", () => {

    for (let i = 0; i < tabTopicItem.length; i++) {
        tabTopicItem[i].addEventListener('click', () => {
            tabTopicItem.forEach((e) => { e.classList.remove('text-active__communication') })
            tabTopicItem[i].classList.add('text-active__communication')
            topicModalContent.forEach((el) => {
                if (!el.classList.contains("hide")) {
                    el.classList.add('hide')


                }
            })
            topicModalContent[i].classList.remove('hide');
            topicModalContent[i].classList.add("tabs__active");
            // tabDastboard[i].classList.add("tabs__active");
        })
    }

    for (let i = 0; i < menuTextItem.length; i++) {
        menuTextItem[i].addEventListener('click', () => {
            menuTextItem.forEach((e) => { e.classList.remove('active-bg') })
            menuTextItem[i].classList.add('active-bg')
                // motivationContentTab.forEach((el) => {
                //     if (!el.classList.contains("hide")) {
                //         el.classList.add('hide')


            //     }
            // })
            // motivationContentTab[i].classList.remove('hide');

            // tabDastboard[i].classList.add("tabs__active");
        })
    }
})