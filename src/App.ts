import './main.scss';
import { Form } from './Form';
import { DocumentList } from './DocumentList'

export class App {
    form: HTMLElement;
    revButton: HTMLElement;
    resultContainer: HTMLElement;
    

    constructor(){
        this.form = document.querySelector('form');
        this.revButton = document.getElementById('button-rev');
        this.resultContainer = document.getElementById('result');

        if(this.form){
            let newForm: Form = new Form();
            
            newForm.render(this.form);
            this.revButton.addEventListener('click', () => {
                 newForm.getValue(this.resultContainer);   
            });
        }
        
        let docList = new DocumentList();
        docList.getDocumentList();
        docList.render();

    }
}









