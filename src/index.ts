import { App } from './App'
import { LocStorage } from './LocStorage'
import { DocumentList } from './DocumentList'

let appTest = new App();
let locStorageTest = new LocStorage();
locStorageTest.saveDocument('cześć');
locStorageTest.saveDocument('To');
locStorageTest.saveDocument('jest');
locStorageTest.saveDocument('test');

console.log(locStorageTest.loadDocument("document1588776485158"));
console.log(locStorageTest.loadDocument("document1588776546280"));
console.log(locStorageTest.loadDocument("document1588776546284"));
console.log(locStorageTest.loadDocument("document1588776614886"));
console.log(locStorageTest.loadDocument("document1588776614889"));
console.log(locStorageTest.loadDocument("document1588776614891"));
console.log(locStorageTest.loadDocument("document1588776643316"));
console.log(locStorageTest.loadDocument("document1588776643320"));

console.log(locStorageTest.getDocuments());

let list = new DocumentList();
list.getDocumentList();
list.render();