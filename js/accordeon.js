function accordeon() {

    const featureLinkButtons = document.querySelectorAll('.feature__link'); //кнопки-заголовки
    const featureSubs = document.querySelectorAll('.feature-sub'); //описание под заголовками
    const featureList = document.querySelector('.feature-list'); //список всех характеристик = родитель

    //начальное скрытие всех характеристик
    const hideContent = () => {
        featureLinkButtons.forEach(item => {
            item.classList.remove('feature__link_active');
        });

        featureSubs.forEach(item => {
            item.classList.add('hidden');
        });
    };

    //показ характеристики, в ES6 можно по умолчанию указать 0 сразу
    const showContent = (i=0) => {
        featureLinkButtons[i].classList.add('feature__link_active');
        featureSubs[i].classList.remove('hidden');
    };

    hideContent();
    showContent();

    //через делегирование реализуем событие клика и открытие характеристик
    featureList.addEventListener('click', (e) => {
        const target = e.target; //определяем на что клик
        const btn = target.closest('button'); //ищем родитель button

        if (target && btn) { //если по тому, что кликнули имеет родителя button

            if (btn.classList.contains('feature__link_active')) { //если кликаем дважды, то скрываем контент
                hideContent();
            } else {
                featureLinkButtons.forEach((item, i) => { //обращаемся к псевдомассиву наших кнопок-заголовков
                    if (btn === item) { //если элемент псевдомасива совпадает с эл-том, куда кликнул пользователь
                        hideContent(); //скрываем все характеристики
                        showContent(i); //отражаем только текущую
                    }
                })
            }
        }
    })
};

export default accordeon;