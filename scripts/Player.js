/*
 * Player: Class for a player in the grid
 * 
 * The player has a set of attributes which determines its behaviour. These
 * currently include (but are not limited to):
 * - memory: how long the player remembers details about the grid
 * - sightRange: how far the player can see around it
 * - energy: how many moves the player can take before it dies. Energy is
 * increased when the player comes into contact with some food
 */

class Player {
    constructor(nodes, nodeIndex) {
        this.nodes = nodes;
        this.nodeIndex = nodeIndex;

        this.memory = 50;
        this.sightRange = 10;
        this.energy = 10;
        this.rememberedNodes = [];

        this.checkedDirections = [];

        nodes.getNode(nodeIndex).makePlayer();
    }

    move(direction, attempts = 0) {
        if (attempts === 4) {
            return false;
        }
        var nextIndex;
        switch (direction) {
            case 'UP':
                nextIndex = this.nodeIndex - GRID_SIZE;
            case 'DOWN':
                nextIndex = this.nodeIndex + GRID_SIZE;
            case 'LEFT':
                nextIndex = this.nodeIndex - 1;
            case 'RIGHT':
                nextIndex = this.nodeIndex + 1;
        }
        if (this.rememberedNodes.some(nodeIndex => nodeIndex === nextIndex)) {
            const newDirection = 5; // needs some careful path management to avoid getting stuck
            this.move(newDirection, attempts + 1);
        }
        else if (nodes[nextIndex].makePlayer()) {
            this.rememberedNodes.concat(this.nodeIndex);
            this.nodeIndex = nextIndex;
            return true;
        }
        else if (nodes[nextIndex].eat()) {
            this.rememberedNodes = []; // reset remembered path
            return true;
        }
    }

    testMove() {
        this.nodeIndex++;
        console.log(this.nodes.getNode(this.nodeIndex));
        this.nodes.getNode(this.nodeIndex).makePlayer();
    }
};