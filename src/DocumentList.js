"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocStorage_1 = require("./LocStorage");
class DocumentList {
    getDocumentList() {
        let IDList = new LocStorage_1.LocStorage();
        this.docList = IDList.getDocuments();
    }
    render() {
        let divList = document.getElementById('ID-list');
        divList.innerHTML = this.docList.toString();
    }
}
//# sourceMappingURL=DocumentList.js.map