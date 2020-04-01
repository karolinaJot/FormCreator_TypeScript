class InputField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.TextBox ;
    value: string;
    render(el: HTMLElement): void {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = this.label;
        el.appendChild(newDiv);
    }

}

let firstQuestionLabel = document.getElementById('first-question-label');
let testDiv = document.getElementById('test');
console.log(typeof(testDiv));
let inputTest = new InputField;
inputTest.label = firstQuestionLabel.innerHTML;
inputTest.render(testDiv);

