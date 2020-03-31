class EmailField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.EMail;
    value: string;
    render(): void {
        console.log(this.label, this.fieldType);
    }

}