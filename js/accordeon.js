function accordeon() {

    const btns = document.querySelectorAll('.feature__link'); //кнопки-заголовки
    const lists = document.querySelectorAll('.feature-sub'); //описание под заголовками
    
    btns.forEach((btn) => { //перебираем все кнопки

        btn.addEventListener('click', () => { //к каждой кнопке подключаем обработчик

            btns.forEach((btnItem, idx) => {
                
                if (btnItem === btn) {
                    btnItem.classList.toggle('feature__link_active');
                    lists[idx].classList.toggle('hidden');
                } else {
                    btnItem.classList.remove('feature__link_active');
                    lists[idx].classList.add('hidden');
                }
            })
        })
    });
};

export default accordeon;