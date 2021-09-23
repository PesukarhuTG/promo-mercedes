import smoothScroll from './smoothScroll.js';
import tabs from './tabs.js';
import accordeon from './accordeon.js';
import modal from './modal.js';

window.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    tabs();
    accordeon();
    modal();
});