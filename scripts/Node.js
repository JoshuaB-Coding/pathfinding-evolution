export class Node {
    constructor() {
        this.type = 5;
        this.element = ''
    }

    appendTo(parent) {
        parent.appendChild(this.element);
    }
};