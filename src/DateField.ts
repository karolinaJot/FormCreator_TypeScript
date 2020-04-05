import { FieldTypes } from './FieldType';
import { Field } from './Field';

class DateField implements Field{
    name: string;
    label: string;
    fieldType: FieldTypes = FieldTypes.Date;
    value: string;
    render(): void {
        console.log(this.label, this.fieldType);
    }

}