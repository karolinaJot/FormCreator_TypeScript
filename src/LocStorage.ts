import { MyStorage} from './MyStorage'

class LocStorage implements MyStorage{

    docIDList: string[] = []; 
    saveDocument(el: any): string {
        let docID = Date.now().toString(); 
        localStorage.setItem(`document${docID}`, JSON.stringify(el));
        this.docIDList.push(`document${docID}`);
        return `document${docID}`;
    }
    loadDocument(documentID: string): any {
        let retrievedObject = localStorage.getItem(documentID);
        return JSON.parse(retrievedObject);
    }
    getDocuments(): string[] {
        return this.docIDList;
    }

}