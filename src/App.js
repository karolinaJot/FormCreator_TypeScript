"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./main.scss");
const Form_1 = require("./Form");
class App {
    constructor() {
        this.form = document.querySelector('form');
        this.revButton = document.getElementById('button-rev');
        this.resultContainer = document.getElementById('result');
        let newForm = new Form_1.Form();
        newForm.render(this.form);
        this.revButton.addEventListener('click', () => {
            newForm.getValue(this.resultContainer);
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map