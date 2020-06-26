import { App } from './App'
import { LocStorage } from './LocStorage'
import { DocumentList } from './DocumentList'

let appTest = new App();
// let locStorageTest = new LocStorage();
// locStorageTest.clearLocalStorage();
// let key1 = locStorageTest.saveDocument('cześć');
// let key2 = locStorageTest.saveDocument('To');
// let key3 = locStorageTest.saveDocument('jest');
// //locStorageTest.saveDocument('test');

// console.log(locStorageTest.loadDocument(key1));
// console.log(locStorageTest.loadDocument(key2));
// console.log(locStorageTest.loadDocument(key3));
//console.log(locStorageTest.loadDocument("document1593203880677"));
//console.log(locStorageTest.loadDocument("document1593203880677"));
// console.log(locStorageTest.loadDocument("document1588776614891"));
// console.log(locStorageTest.loadDocument("document1588776643316"));
// console.log(locStorageTest.loadDocument("document1588776643320"));

// console.log(locStorageTest.getDocuments());

let list = new DocumentList();
list.getDocumentList();
list.render();

