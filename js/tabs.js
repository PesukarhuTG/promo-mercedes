function tabs() {
    const tabBtns = document.querySelectorAll('.design-list__item'); //все кнопки-заголовки
    const tabContent = document.querySelectorAll('.design__descr'); //все описания, соотвествующие кнопкам-заголовкам
    const tabImages = document.querySelectorAll('.design-images'); //все блоки картинок, соотвествующие кнопкам-заголовкам

    tabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener('click', () => { //для каждой кнопки-заголовка при клике

            tabBtns.forEach((elem, idx) => {
                if (elem === tabBtn) {
                    elem.classList.add('design-list__item_active');
                    tabContent[idx].classList.remove('hidden');
                    tabImages[idx].classList.remove('hidden');
                } else {
                    elem.classList.remove('design-list__item_active');
                    tabContent[idx].classList.add('hidden');
                    tabImages[idx].classList.add('hidden');
                }
            })

        })
    });
};

export default tabs;