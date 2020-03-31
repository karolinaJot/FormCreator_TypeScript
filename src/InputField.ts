class InputField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.TextBox ;
    value: string;
    render(): void {
        console.log(this.label, this.fieldType);
    }

}

let inputTest = new InputField;
inputTest.label = 'Imię';
inputTest.render();

