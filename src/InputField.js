"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FiledLabel_1 = require("./FiledLabel");
class InputField {
    constructor() {
        this.fieldType = FieldTypes.TextBox;
    }
    render(el) {
        let newDiv = document.createElement('div');
        let newLabel = document.createElement('label');
        let newInput = document.createElement('input');
        let label1 = new FiledLabel_1.FieldLabel(this.label);
        label1.showLabel(newLabel);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
        el.appendChild(newDiv);
    }
}
let form = document.querySelector('form');
let inputTest = new InputField();
inputTest.label = 'Etykieta testowa1';
inputTest.render(form);
//# sourceMappingURL=InputField.js.map