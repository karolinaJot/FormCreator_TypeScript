import { MyStorage} from './MyStorage'
import { Form } from './Form'
import { Field } from './Field'

export class LocStorage implements MyStorage{

    clearLocalStorage(): void {
        localStorage.clear();
    } 
    
    saveDocument(el: any): string {
        let timeStamp: string = Date.now().toString(); 
        localStorage.setItem(`document${timeStamp}`, JSON.stringify(el));
        let docIDList: string = localStorage.getItem('docIDList');
        let existingDocIDList: string[] = docIDList ? docIDList.split(',') : [];
        existingDocIDList.push(`document${timeStamp}`);
        localStorage.setItem('docIDList', existingDocIDList.toString());
        console.log(existingDocIDList.toString());

        return `document${timeStamp}`;
    }
    loadDocument(documentID: string): any {
        let retrievedObject: string = localStorage.getItem(documentID);
        let retrievedDoc: string =  JSON.parse(retrievedObject);

        let newForm: Form = new Form();
        newForm.parse(JSON.parse(retrievedObject) as string);
        return newForm;
    }

    getDocuments(): string[] {
        let docIDList: string = localStorage.getItem('docIDList');
        if(!docIDList){
            console.log('Go home. There is no ID array.'); 
        }else {
            let existingDocIDList: string[] = docIDList.split(',');
            return existingDocIDList;
        }
    }

}