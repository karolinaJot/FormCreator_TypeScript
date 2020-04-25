import { Storage} from './Storage'

class LocStorage implements Storage{
    // [name: string]: any;
    // length: number;
    // clear(): void {
    //     throw new Error("Method not implemented.");
    // }
    // getItem(key: string): string {
    //     throw new Error("Method not implemented.");
    // }
    // key(index: number): string {
    //     throw new Error("Method not implemented.");
    // }
    // removeItem(key: string): void {
    //     throw new Error("Method not implemented.");
    // }
    // setItem(key: string, value: string): void {
    //     throw new Error("Method not implemented.");
    // }
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