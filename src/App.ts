import './main.scss';
import { Form } from './Form';

export class App {
    form: HTMLElement;
    // revButton: HTMLElement;
    resultContainer: HTMLElement;

    constructor(){
        this.form = document.querySelector('form');
        // this.revButton = document.getElementById('button-rev');
        this.resultContainer = document.getElementById('result');

        let newForm = new Form();
        newForm.render(this.form);
        // this.revButton.addEventListener('click', () => {
        //     newForm.getValue(this.resultContainer);
        // })
    }
}









