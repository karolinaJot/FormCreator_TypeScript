import { FieldTypes } from './FieldType';

export interface Field {
    name: string;
    label: string;
    fieldType: FieldTypes;
  

    render(el:HTMLElement): void; 
    getValue(): string;
}