import './main.scss';
import { Form } from './Form';



let form = document.querySelector('form');

let newForm = new Form();
newForm.render(form);

let revButton = document.getElementById('button-rev');
let formResults = document.getElementById('result');
revButton.addEventListener('click', function(){
    newForm.getValue(formResults);
});






