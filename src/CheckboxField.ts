import { FieldTypes } from './FieldType';
import { Field } from './Field';
import { FieldLabel } from './FiledLabel';

export class CheckboxField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.CheckBox;
    private value: string;
    render(el: HTMLElement): void {
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

        let label = new FieldLabel(this.label);
        label.showLabel(newLabel);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newCheckbox);
        el.appendChild(newDiv);
    }

    getValue(): string{
        return this.value; 
    }
    constructor(name: string, label: string){
        this.name = name;
        this.label = label;
    }

}