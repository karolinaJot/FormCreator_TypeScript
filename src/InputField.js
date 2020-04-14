"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FiledLabel_1 = require("./FiledLabel");
const FieldType_1 = require("./FieldType");
class InputField {
    constructor() {
        this.fieldType = FieldType_1.FieldTypes.TextBox;
    }
    render(el) {
        let newDiv = document.createElement('div');
        let newInput = document.createElement('input');
        let label1 = new FiledLabel_1.FieldLabel(this.label);
        label1.showLabel(newDiv);
        newDiv.appendChild(newInput);
        el.appendChild(newDiv);
    }
}
exports.InputField = InputField;
let testDiv = document.getElementById('test');
let testField = new InputField();
testField.label = 'Etykieta testowa 123';
testField.render(testDiv);
//# sourceMappingURL=InputField.js.map