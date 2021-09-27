function tabs() {

    const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]'); //все кнопки-заголовки по атрибуту
    const tabsContentElems = document.querySelectorAll('[data-tabs-field]'); //все описания-заголовков по атрибуту
    const tabsHeadlingElems = document.querySelectorAll('[data-tabs-headling]'); //все заголовки h2 по атрибуту

    for (let btn of tabsHandlerElems) { //перебор циклом for...of по новому стандарту
        btn.addEventListener('click', () => {

            tabsHandlerElems.forEach((elem) => {

                elem.classList.remove('design-list__item_active');
                btn.classList.add('design-list__item_active');

                tabsContentElems.forEach(content => {
                    if (content.dataset.tabsField === btn.dataset.tabsHandler) { //если атрибут описания совпадает с атрибутом кнопки
                        content.classList.remove('hidden');
                    } else {
                        content.classList.add('hidden');
                    }
                });

                tabsHeadlingElems.forEach(headling => {
                    if (headling.dataset.tabsHeadling === btn.dataset.tabsHandler) { //если атрибут h2 совпадает с атрибутом кнопки
                        headling.classList.remove('hidden');
                    } else {
                        headling.classList.add('hidden');
                    }
                })
            })
        })
    }
};

export default tabs;