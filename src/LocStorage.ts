import { MyStorage} from './MyStorage'

export class LocStorage implements MyStorage{

    saveDocument(el: any): string {
        let docID = Date.now().toString(); 
        localStorage.setItem(`document${docID}`, JSON.stringify(el));
        let docIDList = localStorage.getItem('docIDList');
        let existingDocIDList = docIDList ? docIDList.split(',') : [];
        existingDocIDList.push(`document${docID}`);
        // console.log(existingDocIDList);
        localStorage.setItem('docIDList', existingDocIDList.toString());
        // console.log(`document${docID}`);

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
            // console.log(existingDocIDList);
            return existingDocIDList;
        }
    }

}