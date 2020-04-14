export class FieldLabel{
    label: string;
    constructor(l: string) {
        this.label =  l;
    }

    showLabel(labelEl: HTMLElement): void{
        labelEl.innerHTML = this.label;

    }
}