function modal() {
    const modalBtns = document.querySelectorAll('.more');
    const modal = document.querySelector('.modal');

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
        })
    });

    //закрытие модального через делегирование
    modal.addEventListener('click', e => {
        const target = e.target;

        if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
            modal.classList.add('hidden');
        }
    })
};

export default modal;