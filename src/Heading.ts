import { Field } from './Field'

export class Heading{ 
    titleConteiner: HTMLElement;
    descriptionConteiner: HTMLElement;
    titleText: string;
    descriptionText: string;

    constructor(title: string, description: string){
        this.titleText = title;
        this.descriptionText = description;
        this.titleConteiner = document.createElement('h1');
        this.descriptionConteiner = document.createElement('h3');
        this.titleConteiner.innerHTML = this.titleText;
        this.descriptionConteiner.innerHTML = this.descriptionText;
    }
    render(el: HTMLElement): void {
        el.appendChild(this.titleConteiner);
        el.appendChild(this.descriptionConteiner);
    }
}
