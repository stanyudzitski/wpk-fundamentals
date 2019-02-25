import nav from './nav';
import { top, footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import './footer.css';
import imageUrl from '../wp-logo.jpg';
import { makeImage } from './make-image';

const button = makeButton('mx-button');
document.body.appendChild(button);

const image = makeImage(imageUrl);
document.body.appendChild(image);

document.body.appendChild(footer);
button.style = makeColorStyle('brown');

button.addEventListener('click', function(e) {
  clickFunction(e);
});

const clickFunction = e => {
  console.log(`Button label is: ${e.target.innerText}`);
};
console.log(nav(), top, makeColorStyle('newColorStyle'));
