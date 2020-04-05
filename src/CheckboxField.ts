import { FieldTypes } from './FieldType';
import { Field } from './Field';

class CheckboxField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.CheckBox;
    value: string;
    render(): void {
        console.log(this.label, this.fieldType);
    }

}