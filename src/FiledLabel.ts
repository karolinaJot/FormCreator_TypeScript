export class FieldLabel{
    label: string;
    constructor(l: string) {
        this.label =  l;
    }

    showLabel(el: HTMLElement): void{
        el.innerHTML = this.label;
    }
}