import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';
import { CheckboxField} from './CheckboxField';
import { DateField } from './DateField';
import { EmailField } from './EmailField';
import { SelectField } from './SelectField';
import { Field } from './Field';


export class Form{
    
    fieldsArray: Field [] = [];
    
    constructor(){
        let pytanie1 = new InputField('Pytanie 1', 'Napisz kilka słów o sobie.');
        let pytanie2 = new TextAreaField('Pytanie 2', 'Opisz swoją największą pasję.');
        let pytanie3 = new CheckboxField('pytanie 3', 'Czy Twoja pralka często mówi Ci jak masz żyć?');
        let pytanie4 = new DateField('Pytanie 4', 'Od kiedy nie wychodzisz z domu? Podaj datę.');
        let pytanie5 = new EmailField('Pytanie 5', 'Podaj swój adres email');
        let pytanie6 = new SelectField('Pytanie 6', 'Na kogo zagłosujesz w najbliszych wyborach prezydenckich?');

        this.fieldsArray.push(pytanie1);
        this.fieldsArray.push(pytanie2);
        this.fieldsArray.push(pytanie3);
        this.fieldsArray.push(pytanie4);
        this.fieldsArray.push(pytanie5);
        this.fieldsArray.push(pytanie6);
    }
    
    
    
    
    render(el: HTMLElement){
        for(let i = 0; i < this.fieldsArray.length; i ++){
            this.fieldsArray[i].render(el);
        }
    }
    getValue(){
        for(let i = 0; i < this.fieldsArray.length; i ++){
            console.log(this.fieldsArray[i].value)
        }   
    }
}