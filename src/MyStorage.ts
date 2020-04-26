export interface MyStorage {
    saveDocument(el: any): string;
    loadDocument(documentID: string): any;
    getDocuments(): string[];
}