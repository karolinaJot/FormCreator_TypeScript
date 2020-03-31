class InputField {
    constructor() {
        this.fieldType = FieldTypes.TextBox;
    }
    render() {
        console.log(this.label, this.fieldType);
    }
}
let inputTest = new InputField;
inputTest.label = 'Imię';
inputTest.render();
//# sourceMappingURL=InputField.js.map