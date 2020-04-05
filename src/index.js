"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./main.scss");
const InputField_1 = require("./InputField");
let form = document.querySelector('form');
let inputTest = new InputField_1.InputField();
inputTest.label = 'Etykieta testowa1';
inputTest.render(form);
//# sourceMappingURL=index.js.map