import { MyStorage} from './MyStorage'

class LocStorage implements MyStorage{

    saveDocument(el: any): string {
        let docID = Date.now().toString(); 
        localStorage.setItem(`document${docID}`, JSON.stringify(el));
        let docIDList = localStorage.getItem('docIDList');
        let existingDocIDList = docIDList ? docIDList.split(',') : [];
        existingDocIDList.push(`document${docID}`);
        localStorage.setItem('docIDList', existingDocIDList.toString());

        return `document${docID}`;
    }
    loadDocument(documentID: string): any {
        let retrievedObject = localStorage.getItem(documentID);
        return JSON.parse(retrievedObject);
    }
    getDocuments(): string[] {
        let docIDList = localStorage.getItem('docIDList');
        if(!docIDList){
            console.log('Go home. There is no ID array.'); 
        }else {
            let existingDocIDList = docIDList.split(',');
            return existingDocIDList;
        }
    }

}