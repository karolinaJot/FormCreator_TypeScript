import {LocStorage} from './LocStorage'
 
export class DocumentList {
    docList: string[];

    getDocumentList(): void{
        let IDList = new LocStorage();
        this.docList = IDList.getDocuments();
    }

    render(): void {
        let docListContainer = document.getElementById('doc_list');
        if(docListContainer){
            let list: HTMLElement = document.createElement('ul');
            for(let i = 0; i < this.docList.length; i ++){
                let listItem: HTMLElement = document.createElement('li');
                listItem.classList.add('list_item');
                listItem.innerHTML = this.docList[i];
                let spanItem:HTMLElement = document.createElement('span');
                spanItem.classList.add('list_item__delete_doc');
                spanItem.innerHTML = 'Usuń dokument';
                spanItem.addEventListener('click', this.deleteDocument);
                listItem.appendChild(spanItem);
                list.appendChild(listItem); 
            }
            docListContainer.appendChild(list);
        }
       
    }
    private deleteDocument(){
        console.log('usuń wybrany element');
    }


}