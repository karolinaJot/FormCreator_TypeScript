"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InputField_1 = require("./InputField");
const TextAreaField_1 = require("./TextAreaField");
const CheckboxField_1 = require("./CheckboxField");
const DateField_1 = require("./DateField");
const EmailField_1 = require("./EmailField");
const SelectField_1 = require("./SelectField");
const Heading_1 = require("./Heading");
class Form {
    constructor() {
        this.fieldsArray = [];
        this.heading = new Heading_1.Heading('Ankieta w czasach koronawirusa.', 'Nie, to nie jest sondaż wyborczy. To zwykła ankieta. Bądź szczery i prawdziwy, jak zawsze.');
        let pytanie1 = new InputField_1.InputField('Pytanie 1', 'Napisz kilka słów o sobie.');
        let pytanie2 = new TextAreaField_1.TextAreaField('Pytanie 2', 'Opisz swoją największą przygodę, która Ci się przytrafiła podczas kwarantanny.');
        let pytanie3 = new CheckboxField_1.CheckboxField('pytanie 3', 'Czy Twoja pralka często mówi Ci jak masz żyć?');
        let pytanie4 = new DateField_1.DateField('Pytanie 4', 'Od kiedy nie wychodzisz z domu? Podaj datę.');
        let pytanie5 = new EmailField_1.EmailField('Pytanie 5', 'Podaj swój adres email. Z przyjemnością zasypiemy Cię milionem reklam.');
        let pytanie6 = new SelectField_1.SelectField('Pytanie 6', 'Na kogo zagłosujesz w najbliszych wyborach prezydenckich?');
        this.fieldsArray.push(pytanie1);
        this.fieldsArray.push(pytanie2);
        this.fieldsArray.push(pytanie3);
        this.fieldsArray.push(pytanie4);
        this.fieldsArray.push(pytanie5);
        this.fieldsArray.push(pytanie6);
    }
    render(el) {
        this.heading.render(el);
        for (let i = 0; i < this.fieldsArray.length; i++) {
            this.fieldsArray[i].render(el);
        }
    }
    getValue(el) {
        for (let i = 0; i < this.fieldsArray.length; i++) {
            el.innerHTML += this.fieldsArray[i].value + "; ";
        }
    }
}
exports.Form = Form;
//# sourceMappingURL=Form.js.map