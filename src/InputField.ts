import { FieldLabel } from './FiledLabel';
import { FieldTypes } from './FieldType';

// class FieldLabel{
//     label: string;
//     constructor(l: string) {
//         this.label =  l;
//     }

//     showLabel(el: HTMLElement): void{
//         el.innerHTML = this.label;
//     }
// }

export class InputField implements Field {
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.TextBox;
    value: string;
    render(el: HTMLElement): void {
        let newDiv = document.createElement('div');
        let newLabel = document.createElement('label');
        let newInput = document.createElement('input');

        let label1 = new FieldLabel(this.label);
        label1.showLabel(newLabel);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
        el.appendChild(newDiv);

    }

}

// let firstQuestionLabel = document.getElementById('first-question-label');
// let testDiv = document.getElementById('test');
// console.log(typeof(testDiv));
// let inputTest = new InputField;
// inputTest.label = firstQuestionLabel.innerHTML;
// inputTest.render(testDiv);



