import nav from './nav';
import { top } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';

const button = makeButton('mx-button');
document.body.appendChild(button);

button.addEventListener('click', function(e) {
  clickFunction(e);
});

const clickFunction = e => {
  console.log(`Button label is: ${e.target.innerText}`);
};
console.log(nav(), top, makeColorStyle('newColorStyle'));
