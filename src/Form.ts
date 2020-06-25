import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';
import { CheckboxField} from './CheckboxField';
import { DateField } from './DateField';
import { EmailField } from './EmailField';
import { SelectField } from './SelectField';
import { Heading } from './Heading';
import { Field } from './Field';
import { LocStorage } from './LocStorage';


export class Form{
    
    fieldsArray: Field [] = [];
    heading: Heading;

    constructor(){
        this.heading = new Heading('Ankieta w czasach koronawirusa.', 'Nie, to nie jest sondaż wyborczy. To zwykła ankieta. Bądź szczery i prawdziwy, jak zawsze.');
        let pytanie1 = new InputField('Pytanie 1', 'Napisz kilka słów o sobie.');
        let pytanie2 = new TextAreaField('Pytanie 2', 'Opisz swoją największą przygodę, która Ci się przytrafiła podczas kwarantanny.');
        let pytanie3 = new CheckboxField('pytanie 3', 'Czy Twoja pralka często mówi Ci jak masz żyć?');
        let pytanie4 = new DateField('Pytanie 4', 'Od kiedy nie wychodzisz z domu? Podaj datę.');
        let pytanie5 = new EmailField('Pytanie 5', 'Podaj swój adres email. Z przyjemnością zasypiemy Cię milionem reklam.');
        let pytanie6 = new SelectField('Pytanie 6', 'Na kogo zagłosujesz w najbliszych wyborach prezydenckich?');

        this.fieldsArray.push(pytanie1);
        this.fieldsArray.push(pytanie2);
        this.fieldsArray.push(pytanie3);
        this.fieldsArray.push(pytanie4);
        this.fieldsArray.push(pytanie5);
        this.fieldsArray.push(pytanie6);
    }

    save(): string{
        let locStorage = new LocStorage();
        let docID: string = locStorage.saveDocument(this);
        return docID;
    }
    private goURL(){
        window.location.href = 'index.html';
    }
    
    render(el: HTMLElement){
        this.heading.render(el);
        for(let i = 0; i < this.fieldsArray.length; i ++){
            this.fieldsArray[i].render(el);
        }

        let divBtn = document.createElement('div');
        divBtn.classList.add('form-box');
        let cancelBtn = document.createElement('button');
        cancelBtn.innerHTML = 'Wstecz';
        cancelBtn.addEventListener('click', () =>{
            this.goURL();
        });
        divBtn.appendChild(cancelBtn);

        let sendBtn = document.createElement('button');
        sendBtn.innerHTML = 'Zapisz';
        sendBtn.addEventListener('click', () => {
            this.save();
            this.goURL();
        })
        divBtn.appendChild(sendBtn);
        el.appendChild(divBtn);
    }
    getValue(el: HTMLElement){
        for(let i = 0; i < this.fieldsArray.length; i ++){
            el.innerHTML += this.fieldsArray[i].value + "; ";  
        }  
    } 
}