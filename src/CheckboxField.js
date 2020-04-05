"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldType_1 = require("./FieldType");
class CheckboxField {
    constructor() {
        this.fieldType = FieldType_1.FieldTypes.CheckBox;
    }
    render() {
        console.log(this.label, this.fieldType);
    }
}
//# sourceMappingURL=CheckboxField.js.map