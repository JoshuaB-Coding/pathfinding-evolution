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

export class Player {
    constructor() {
        this.memory = 50;
        this.sightRange = 10;
        this.energy = 10;
    }
};