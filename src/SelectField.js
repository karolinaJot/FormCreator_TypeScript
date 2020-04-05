"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldType_1 = require("./FieldType");
class SelectField {
    constructor() {
        this.fieldType = FieldType_1.FieldTypes.Select;
    }
    render() {
        console.log(this.label, this.fieldType);
    }
}
//# sourceMappingURL=SelectField.js.map