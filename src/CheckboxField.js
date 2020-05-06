"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldType_1 = require("./FieldType");
const FiledLabel_1 = require("./FiledLabel");
class CheckboxField {
    constructor(name, label) {
        this.fieldType = FieldType_1.FieldTypes.CheckBox;
        this.name = name;
        this.label = label;
    }
    render(el) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('form-box');
        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', this.name);
        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('name', this.name);
        newCheckbox.setAttribute('id', this.name);
        newCheckbox.setAttribute('checked', '');
        newCheckbox.addEventListener('input', () => {
            this.value = newCheckbox.value;
        });
        let label = new FiledLabel_1.FieldLabel(this.label);
        label.showLabel(newLabel);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newCheckbox);
        el.appendChild(newDiv);
    }
    getValue() {
        return this.value;
    }
}
exports.CheckboxField = CheckboxField;
//# sourceMappingURL=CheckboxField.js.map