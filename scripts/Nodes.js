class Node {
    constructor(element, type) {
        this.element = element;
        this.type = type;

        this.setElementColour();
    }

    reset() {
        this.type = 'DEFAULT';
        this.setElementColour();
    }

    makeFood() {
        if (this.type === 'WALL') {
            return false;
        }
        this.type = 'FOOD';
        this.setElementColour();
        return true;
    }

    makePlayer() {
        if (this.type === 'WALL') {
            return false;
        }
        this.type = 'PLAYER';
        this.setElementColour();
        return true;
    }

    eat() {
        if (this.type !== 'FOOD') {
            return false;
        }
        this.type = 'PLAYER';
        this.setElementColour();
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

class Nodes {
    constructor() {
        this.nodes = [];
        this.hasFood= false;
    }

    addNode(node) {
        // guard for input type
        this.nodes = this.nodes.concat(node);
    }

    getNode(nodeIndex) {
        console.log(this.nodes[nodeIndex]);
        return this.nodes[nodeIndex];
    }

    canPlayerMoveTo(nodeIndex, player) {

        return false;
    }

    spawnFood() {
        if (this.hasFood) {
            return;
        }
        do {
            const nodeIndex = Math.floor(Math.random() * GRID_SIZE * GRID_SIZE);
            if (this.isValidFood(nodeIndex)) {
                this.nodes[nodeIndex].makeFood();
                this.hasFood = true;
            }
        } while (!this.hasFood);
    }

    isValidFood(nodeIndex) {
        const node = this.nodes[nodeIndex];
        if (node.type === 'WALL') {
            return false;
        }
        return true;
    }
}