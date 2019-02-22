import { red, blue } from './button-styles.js';

const top = document.createElement('div');
top.innerText = 'top of the footer';
top.style = red;
const bottom = document.createElement('div');
bottom.innerText = 'bottom of the footer';
bottom.style = blue;

const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
