function smoothScroll() {
    const menuLinks = document.querySelectorAll('.menu-list__link'); //все элементы меню
    const scrollIcon = document.querySelectorAll('.main__scroll'); //доп элемент скрола
    const newArray = [...menuLinks, ...scrollIcon]; //объединение в один массив

    newArray.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const idName = e.target.getAttribute('href').substr(1);

            document.getElementById(idName).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    });
};

export default smoothScroll;