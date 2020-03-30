interface Field {
    name: string;
    label: string;
    fieldType: FieldTypes;
    value: string;

    render(l:string, f: FieldTypes): void; 
}