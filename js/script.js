import burger from './burgerMenu.js';
import scrollUp from './scrollUp.js';
import smoothScroll from './smoothScroll.js';
import tabs from './tabs.js';
import accordeon from './accordeon.js';
import modal from './modal.js';
import sendForms from './sendForms.js';

window.addEventListener('DOMContentLoaded', () => {
    burger();
    scrollUp();
    smoothScroll();
    tabs();
    accordeon();
    modal();
    sendForms();
});