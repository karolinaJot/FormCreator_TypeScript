import './main.scss';
import { Form } from './Form';



let form = document.querySelector('form');

let newForm = new Form();
newForm.render(form);
newForm.getValue();





