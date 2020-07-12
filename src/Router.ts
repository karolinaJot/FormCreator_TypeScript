export class Router{
    
    public getParam(): string {
        const query: string = window.location.search.substr(1); 
        const urlParams: URLSearchParams = new URLSearchParams(query); 
        const docId: string = urlParams.get('id') 
        return docId;
    }

    public static setParam(docID: string): void {
        const query: string = 'edit-document.html?'; 
        const urlParams: URLSearchParams = new URLSearchParams(query); 
        urlParams.append('id', docID);
        console.log(urlParams);

    }

}