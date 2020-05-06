"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldType_1 = require("./FieldType");
const FiledLabel_1 = require("./FiledLabel");
class SelectField {
    constructor(name, label) {
        this.fieldType = FieldType_1.FieldTypes.Select;
        this.name = name;
        this.label = label;
    }
    render(el) {
        let div = document.createElement('div');
        div.classList.add('form-box');
        let newLabel = document.createElement('label');
        let select = document.createElement('select');
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        let option3 = document.createElement('option');
        option1.innerHTML = 'Pablo Escobar';
        option2.innerHTML = 'Batman-Mroczny Rycerz';
        option3.innerHTML = 'Kubuś Puchatek';
        option1.setAttribute('value', option1.innerHTML);
        option2.setAttribute('value', option2.innerHTML);
        option3.setAttribute('value', option3.innerHTML);
        select.addEventListener('input', () => {
            this.value = select.value;
        });
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        let label = new FiledLabel_1.FieldLabel(this.label);
        label.showLabel(newLabel);
        div.appendChild(newLabel);
        div.appendChild(select);
        el.appendChild(div);
    }
    getValue() {
        return this.value;
    }
}
exports.SelectField = SelectField;
//# sourceMappingURL=SelectField.js.map