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
                listItem.innerHTML = this.docList[i];
                list.appendChild(listItem); 
            }
            docListContainer.appendChild(list);
        }
       
    }


}