import { FieldTypes } from './FieldType';
import { Field } from './Field';

class SelectField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.Select;
    value: string;
    render(): void {
        console.log(this.label, this.fieldType);
    }

}