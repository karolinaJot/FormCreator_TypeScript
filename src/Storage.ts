export interface Storage {
    saveDocument(el: any): string;
    loadDocument(documentID: string): any;
    getDocuments(): string[];
}