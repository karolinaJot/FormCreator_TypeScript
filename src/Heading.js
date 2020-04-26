"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Heading {
    constructor(title, description) {
        this.titleText = title;
        this.descriptionText = description;
        this.titleConteiner = document.createElement('h1');
        this.descriptionConteiner = document.createElement('h3');
        this.titleConteiner.innerHTML = this.titleText;
        this.descriptionConteiner.innerHTML = this.descriptionText;
    }
    render(el) {
        el.appendChild(this.titleConteiner);
        el.appendChild(this.descriptionConteiner);
    }
}
exports.Heading = Heading;
//# sourceMappingURL=Heading.js.map