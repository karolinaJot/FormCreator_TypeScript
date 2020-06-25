import { FieldTypes } from './FieldType';
import { Field } from './Field';
import { FieldLabel } from './FiledLabel';

export class EmailField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.EMail;
    value: string;
    
    render(el: HTMLElement): void {
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

        let label = new FieldLabel(this.label);
        label.showLabel(newLabel);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
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