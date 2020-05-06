"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocStorage {
    saveDocument(el) {
        let docID = Date.now().toString();
        localStorage.setItem(`document${docID}`, JSON.stringify(el));
        let docIDList = localStorage.getItem('docIDList');
        let existingDocIDList = docIDList ? docIDList.split(',') : [];
        existingDocIDList.push(`document${docID}`);
        localStorage.setItem('docIDList', existingDocIDList.toString());
        return `document${docID}`;
    }
    loadDocument(documentID) {
        let retrievedObject = localStorage.getItem(documentID);
        return JSON.parse(retrievedObject);
    }
    getDocuments() {
        let docIDList = localStorage.getItem('docIDList');
        if (!docIDList) {
            console.log('Go home. There is no ID array.');
        }
        else {
            let existingDocIDList = docIDList.split(',');
            return existingDocIDList;
        }
    }
}
exports.LocStorage = LocStorage;
//# sourceMappingURL=LocStorage.js.map