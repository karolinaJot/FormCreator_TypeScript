import { FieldTypes } from './FieldType';
import { Field } from './Field';
import { FieldLabel } from './FiledLabel';


export class TextAreaField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.TextArea;
    value: string;
    render(el: HTMLElement): void {
        let newDiv = document.createElement('div');
        newDiv.classList.add('form-box');
        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', this.name);
        let newInput = document.createElement('textarea');
        newInput.setAttribute('name', this.name);
        newInput.setAttribute('id', this.name);


        let label = new FieldLabel(this.label);
        label.showLabel(newLabel);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
        el.appendChild(newDiv);
    }
    constructor(name: string, label: string){
        this.name = name;
        this.label = label;
    }

}