"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldType_1 = require("./FieldType");
class TextAreaField {
    constructor() {
        this.fieldType = FieldType_1.FieldTypes.TextArea;
    }
    render() {
        console.log(this.label, this.fieldType);
    }
}
//# sourceMappingURL=TextAreaField.js.map