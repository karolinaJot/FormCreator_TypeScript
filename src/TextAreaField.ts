import { FieldTypes } from './FieldType';
import { Field } from './Field';

class TextAreaField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.TextArea;
    value: string;
    render(): void {
        console.log(this.label, this.fieldType);
    }

}