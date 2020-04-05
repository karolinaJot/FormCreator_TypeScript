import './main.scss';
import { InputField } from './InputField';


let form = document.querySelector('form');

let inputTest = new InputField();
inputTest.label = 'Etykieta testowa1'
inputTest.render(form);