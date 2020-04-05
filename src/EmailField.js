"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldType_1 = require("./FieldType");
class EmailField {
    constructor() {
        this.fieldType = FieldType_1.FieldTypes.EMail;
    }
    render() {
        console.log(this.label, this.fieldType);
    }
}
//# sourceMappingURL=EmailField.js.map