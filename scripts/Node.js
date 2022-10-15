class Node {
    constructor(element, type) {
        this.element = element;
        this.type = type;

        this.setElementColour();
    }

    reset() {
        this.type = 'DEFAULT';
    }

    makeFood() {
        if (this.type === 'WALL') {
            return false;
        }
        this.type = 'FOOD';
        return true;
    }

    makePlayer() {
        if (this.type === 'WALL') {
            return false;
        }
        this.type = 'PLAYER';
        return true;
    }

    setElementColour() {
        if (this.type === 'DEFAULT') {
            this.element.setAttribute('class', 'node defaultnode');
        }
        else if (this.type === 'WALL') {
            this.element.setAttribute('class', 'node wallnode');
        }
        else if (this.type === 'FOOD') {
            this.element.setAttribute('class', 'node foodnode');
        }
        else {
            this.element.setAttribute('class', 'node playernode');
        }
    }
};