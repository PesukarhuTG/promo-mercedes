function burger() {
    const humburgerMenu = document.querySelector('.humburger-menu');
    const menu = document.querySelector('.menu');

    const toggleMenu = () => {
        menu.classList.toggle('menu-active');
        humburgerMenu.classList.toggle('humburger-menu-active');
    };

    humburgerMenu.addEventListener('click', () => toggleMenu());

    window.addEventListener('scroll', () => {
        const clientHeight = document.documentElement.clientHeight; //видимая часть окна устройства

        if (menu.classList.contains('menu-active') //если меню открыто 
            && ((clientHeight / 3) < window.scrollY)) { //и скролл большем чем 1/3 видимой части экрана
            toggleMenu();
        }
    })
}

export default burger;