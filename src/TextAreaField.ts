class TextAreaField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.TextArea;
    value: string;
    render(): void {
        console.log(this.label, this.fieldType);
    }

}