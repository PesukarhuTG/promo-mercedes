function modal() {
    const modalBtns = document.querySelectorAll('.more');
    const modal = document.querySelector('.modal');

    //блокировка скрола при открытии модального окна + устранение скачка верстки
    // 1) при скрытии вертикального скрола 2)запрет перемотки вверх
    const disabledScroll = () => {
        if (document.disableScroll) return;
        const widthScroll = window.innerWidth - document.body.offsetWidth;  //ширина правого скрола
        document.disableScroll = true; //новое свойство в позиции true
        document.body.dbScrollY = window.scrollY; //новое св-во dbScrollY - сколько px проскроллил пользователь

        document.body.style.cssText = `
                position: fixed;
                top: ${-window.scrollY}px;
                left:0;
                right:0;
                width: 100%;
                height: 100vh;
                overflow: hidden;
                padding-right: ${widthScroll}px;
            `;
    };

    const enabledScroll = () => {
        document.disableScroll = false;
        document.body.style.cssText = '';
        window.scroll({
            top: document.body.dbScrollY,
        });
    };

    //открытие модального окна
    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            disabledScroll();
        })
    });

    //закрытие модального через делегирование
    modal.addEventListener('click', e => {
        const target = e.target;

        if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
            modal.classList.add('hidden');
            enabledScroll();
        }
    })

};

export default modal;