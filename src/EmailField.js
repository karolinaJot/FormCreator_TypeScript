"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldType_1 = require("./FieldType");
const FiledLabel_1 = require("./FiledLabel");
class EmailField {
    constructor(name, label) {
        this.fieldType = FieldType_1.FieldTypes.EMail;
        this.name = name;
        this.label = label;
    }
    render(el) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('form-box');
        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', this.name);
        let newInput = document.createElement('input');
        newInput.setAttribute('type', 'email');
        newInput.setAttribute('name', this.name);
        newInput.setAttribute('id', this.name);
        newInput.setAttribute('pattern', '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
        newInput.setAttribute('required', '');
        newInput.addEventListener('input', () => {
            this.value = newInput.value;
        });
        let label = new FiledLabel_1.FieldLabel(this.label);
        label.showLabel(newLabel);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
        el.appendChild(newDiv);
    }
    getValue() {
        return this.value;
    }
}
exports.EmailField = EmailField;
//# sourceMappingURL=EmailField.js.map