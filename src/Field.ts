import { FieldTypes } from './FieldType';

export interface Field {
    name: string;
    label: string;
    fieldType: FieldTypes;
    value: string;

    render(el:HTMLElement): void; 
}