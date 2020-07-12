import { FieldTypes } from './FieldType';
import { Field } from './Field';
import { FieldLabel } from './FiledLabel';

export class SelectField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.Select;
    value: string;
    
    numberOfOptions: number;
    render(el: HTMLElement): void {
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

        if(this.value){
            select.value = this.value;
        }
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);

        let label = new FieldLabel(this.label);
        label.showLabel(newLabel);
        div.appendChild(newLabel);
        div.appendChild(select);
        el.appendChild(div);
    }

    getValue(): string{
        return this.value; 
    }

    constructor(name: string, label: string){
        this.name = name;
        this.label = label;
    }

}