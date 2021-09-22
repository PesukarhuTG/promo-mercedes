function tabs() {

    const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]'); //все кнопки-заголовки по атрибуту
    const tabsContentElems = document.querySelectorAll('[data-tabs-field]'); //все описания-заголовков по атрибуту
    const tabsTitles = document.querySelectorAll('.design__title');

    for (let btn of tabsHandlerElems) { //перебор циклом for...of по новому стандарту
        btn.addEventListener('click', () => {

            tabsHandlerElems.forEach((elem, index) => {

                elem.classList.remove('design-list__item_active');
                btn.classList.add('design-list__item_active');
                tabsTitles[index].classList.toggle('hidden');

                tabsContentElems.forEach(content => {
                    if (content.dataset.tabsField === btn.dataset.tabsHandler) { //если атрибут описания совпадает с атрибутом кнопки-заголовка
                        content.classList.remove('hidden');
                    } else {
                        content.classList.add('hidden');
                    }
                });
            })
        })
    }
};

export default tabs;