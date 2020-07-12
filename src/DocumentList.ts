import { LocStorage } from './LocStorage'
import { Router } from './Router'

export class DocumentList {
    docList: string[];

    getDocumentList(): void {
        let IDList = new LocStorage();
        this.docList = IDList.getDocuments();
    }
    private goURL(docID:string):void{
        window.location.href = `edit-document.html?id=${docID}`;

    }

    render(): void {
        let docListContainer = document.getElementById('doc_list');
        if (docListContainer) {
            let list: HTMLElement = document.createElement('ul');
            for (let i = 0; i < this.docList.length; i++) {
                let listItem: HTMLElement = document.createElement('li');
                listItem.classList.add('list_item');
                let docID: string = this.docList[i];
                listItem.innerHTML = docID;
                let spanItem1: HTMLElement = document.createElement('span');
                spanItem1.classList.add('list_item__delete_doc');
                spanItem1.innerHTML = 'Edytuj';
                spanItem1.addEventListener('click', () => {
                        console.log('edytuj' + docID);
                        this.goURL(docID);
                        

                        // 
                        //tutaj dodać kod kótry przekierowuje na nową stronę z opcją edycji
                        //
                });
                listItem.appendChild(spanItem1);

                let spanItem2: HTMLElement = document.createElement('span');
                spanItem2.classList.add('list_item__delete_doc');
                spanItem2.innerHTML = 'Usuń';
                spanItem2.addEventListener('click', () => {
                    // usuwanie dokumentu z localStorage
                    localStorage.removeItem(docID);
                    // usuwanie ID dokumentu z docIDList
                    this.docList.splice(i,1);
                    localStorage.setItem('docIDList', this.docList.toString());
                    spanItem2.parentElement.parentElement.removeChild(listItem)
                });
                listItem.appendChild(spanItem2);
                list.appendChild(listItem);
            }
            docListContainer.appendChild(list);
        }

    }


}