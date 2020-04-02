import { FieldLabel } from './FiledLabel'

class InputField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.TextBox ;
    value: string;
    render(el: HTMLElement): void {
        let label1 = new FieldLabel(this.label);
        label1.showLabel(el);
        let newInput = document.createElement('input');
        
    }

}

// let firstQuestionLabel = document.getElementById('first-question-label');
// let testDiv = document.getElementById('test');
// console.log(typeof(testDiv));
// let inputTest = new InputField;
// inputTest.label = firstQuestionLabel.innerHTML;
// inputTest.render(testDiv);



