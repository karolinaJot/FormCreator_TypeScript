"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldType_1 = require("./FieldType");
class DateField {
    constructor() {
        this.fieldType = FieldType_1.FieldTypes.Date;
    }
    render() {
        console.log(this.label, this.fieldType);
    }
}
//# sourceMappingURL=DateField.js.map