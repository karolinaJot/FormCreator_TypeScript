import { FieldLabel } from './FiledLabel';
import { FieldTypes } from './FieldType';
import { Field } from './Field';


export class InputField implements Field {
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.TextBox;
    value: string;
    render(el: HTMLElement): void {
        let newDiv = document.createElement('div');
        newDiv.classList.add('form-box');
        let newLabel = document.createElement('label');
        let newInput = document.createElement('input');

        let label1 = new FieldLabel(this.label);
        label1.showLabel(newLabel);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
        el.appendChild(newDiv);

    }

}

// let testDiv = document.getElementById('test');
// let testField = new InputField();
// testField.label = 'Etykieta testowa 123'
// testField.render(testDiv);






