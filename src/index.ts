import './main.scss';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';
import { CheckboxField} from './CheckboxField';
import { DateField } from './DateField';
import { EmailField } from './EmailField';
import { SelectField } from './SelectField';



let form = document.querySelector('form');

let pytanie1 = new InputField('Pytanie 1', 'Napisz kilka słów o sobie.');
pytanie1.render(form);

let pytanie2 = new TextAreaField('Pytanie 2', 'Opisz swoją największą pasję.');
pytanie2.render(form);

let pytanie3 = new CheckboxField('pytanie 3', 'Czy Twoja pralka często mówi Ci jak masz żyć?');
pytanie3.render(form);

let pytanie4 = new DateField('Pytanie 4', 'Od kiedy nie wychodzisz z domu? Podaj datę.');
pytanie4.render(form);

let pytanie5 = new EmailField('Pytanie 5', 'Podaj swój adres email');
pytanie5.render(form);

let pytanie6 = new SelectField('Pytanie 6', 'Na kogo zagłosujesz w najbliszych wyborach prezydenckich?');
pytanie6.render(form);

