import { MyStorage} from './MyStorage'

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
        // console.log(existingDocIDList);
        localStorage.setItem('docIDList', existingDocIDList.toString());
        console.log(existingDocIDList.toString());

        return `document${timeStamp}`;
    }
    loadDocument(documentID: string): any {
        let retrievedObject: string = localStorage.getItem(documentID);
        return JSON.parse(retrievedObject);
    }

    getDocuments(): string[] {
        let docIDList: string = localStorage.getItem('docIDList');
        if(!docIDList){
            console.log('Go home. There is no ID array.'); 
        }else {
            let existingDocIDList: string[] = docIDList.split(',');
            // console.log(existingDocIDList);
            return existingDocIDList;
        }
    }

}