"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FiledLabel_1 = require("./FiledLabel");
const FieldType_1 = require("./FieldType");
class InputField {
    constructor(name, label) {
        this.fieldType = FieldType_1.FieldTypes.TextBox;
        this.name = name;
        this.label = label;
    }
    render(el) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('form-box');
        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', this.name);
        let newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('name', this.name);
        newInput.setAttribute('id', this.name);
        newInput.addEventListener('input', () => {
            this.value = newInput.value;
        });
        let label = new FiledLabel_1.FieldLabel(this.label);
        label.showLabel(newLabel);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
        el.appendChild(newDiv);
    }
}
exports.InputField = InputField;
//# sourceMappingURL=InputField.js.map