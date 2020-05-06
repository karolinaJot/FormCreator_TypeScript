import {LocStorage} from './LocStorage'
 
export class DocumentList {
    docList: string[];

    getDocumentList(): void{
        let IDList = new LocStorage();
        this.docList = IDList.getDocuments();
    }

    render(): void {
        let divList = document.getElementById('ID-list');
        // divList.classList.add('list-table');  !!!!! dodać style!!!
        divList.innerHTML = this.docList.toString();  // dodać sposób wyśtwietlania
        
    }


}