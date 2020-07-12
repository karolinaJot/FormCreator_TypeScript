import './main.scss';
import { Form } from './Form';
import { DocumentList } from './DocumentList'
import { Router } from './Router';
import { LocStorage } from './LocStorage';

export class App {
    form: HTMLElement;

    constructor() {
        this.form = document.querySelector('form');
        
        
        let currentPage: string = window.location.href.toString();
        let editPage: string = 'edit-document';
        let listPage: string = 'document-list';
        let newFormPage: string = 'new-document';

        console.log(currentPage);

        if (currentPage.includes(newFormPage)) {
            let newForm: Form = new Form();
            newForm.render(this.form);
            
        }else if (currentPage.includes(editPage)) {
            let router: Router = new Router();
            let docToEditID:string = router.getParam();
            console.log(docToEditID);
            let locStorage: LocStorage = new LocStorage();
            let docToEdit: Form = locStorage.loadDocument(docToEditID);
            docToEdit.docId = docToEditID;

            docToEdit.render(this.form);
        }








        let docList = new DocumentList();
        docList.getDocumentList();
        docList.render();

    }
}









