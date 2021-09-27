function scrollUp() {
    const btnTop = document.querySelector('.btn-top');

    window.addEventListener('scroll', () => {
        const clientHeight = document.documentElement.clientHeight; //видимая часть окна устройства
        const scrollHeight = window.scrollY;

        if (window.scrollY > clientHeight / 4) {
            btnTop.style.display = 'flex';
        } else {
            btnTop.style.display = '';
        }

        console.log(clientHeight, scrollHeight);
    });

    btnTop.addEventListener('click', () => {
        document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
}

export default scrollUp;