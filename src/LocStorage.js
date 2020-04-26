"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocStorage {
    constructor() {
        this.docIDList = [];
    }
    saveDocument(el) {
        let docID = Date.now().toString();
        localStorage.setItem(`document${docID}`, JSON.stringify(el));
        this.docIDList.push(`document${docID}`);
        return `document${docID}`;
    }
    loadDocument(documentID) {
        let retrievedObject = localStorage.getItem(documentID);
        return JSON.parse(retrievedObject);
    }
    getDocuments() {
        return this.docIDList;
    }
}
//# sourceMappingURL=LocStorage.js.map