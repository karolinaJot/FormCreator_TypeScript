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
        newLabel.setAttribute('for', this.name);
        let newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('name', this.name);
        newInput.setAttribute('id', this.name);
        
        newInput.addEventListener('input', () => {
            this.value = newInput.value;
        });

        if(this.value){
            newInput.value = this.value;
        }
       

        let label = new FieldLabel(this.label);
        label.showLabel(newLabel);
        
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
        el.appendChild(newDiv);
    }

    showAnswer(el: HTMLElement, a: string): void{

    }

    getValue(): string{
        return this.value; 
    }

    constructor(name: string, label: string){
        this.name = name;
        this.label = label;
    }
}








