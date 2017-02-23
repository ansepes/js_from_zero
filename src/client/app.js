import 'babel-polyfill';
import Dog from '../shared/dog';

const browerToby = new Dog('Browser Toby!');

document.querySelector('.app').innerHTML = browerToby.bark();
