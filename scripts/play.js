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
    constructor() {
        this.memory = 50;
        this.sightRange = 10;
        this.energy = 10;
    }
};

/*
 * Function which creates player and moves it around
 */

var grid = document.getElementById('grid');

var position = [Math.round(Math.random() * GRID_SIZE), Math.round(Math.random() * GRID_SIZE)];
const id = `${position[0]}-${position[1]}`;
var node = document.getElementById(id);
if (node) {
    node.setAttribute('class', 'node playernode');
    node.setAttribute('id', `${position[0]}-${position[1]}-player`);
}

var foodPosition = [Math.round(Math.random() * GRID_SIZE), Math.round(Math.random() * GRID_SIZE)];
const foodId = `${foodPosition[0]}-${foodPosition[1]}`;
var foodNode = document.getElementById(foodId);
if (foodNode) {
    foodNode.setAttribute('class', 'node foodnode');
    foodNode.setAttribute('id', `${position[0]}-${position[1]}-food`);
}

// grid.addEventListener("mouseover", movePlayer);

function movePlayer() {
    const oldId = `${position[0]}-${position[1]}-player`;
    var oldNode = document.getElementById(oldId);
    oldNode.setAttribute('class', 'node defaultnode');
    oldNode.setAttribute('id', `${position[0]}-${position[1]}`);
    // needs to be fixed to avoid jumpy moves
    var hasMoved = false;
    while (!hasMoved) {
        var newPosition = [...position];
        const moveVertical = Math.random() > 0.5;
        if (moveVertical) {
            newPosition[0] += Math.random() > 0.5 ? 1 : -1;
        }
        else {
            newPosition[1] += Math.random() > 0.5 ? 1 : -1;
        }
        const id = `${newPosition[0]}-${newPosition[1]}`;
        var node = document.getElementById(id);
        if (node) {
            position = [...newPosition];
            node.setAttribute('class', 'node playernode');
            node.setAttribute('id', `${position[0]}-${position[1]}-player`);
            hasMoved = true;
        }
        else {
            const foodId = `${newPosition[0]}-${newPosition[1]}-food`;
            var foodNode =  document.getElementById(foodId);
            if (foodNode) {
                position = [...newPosition];
                node.setAttribute('class', 'node playernode');
                node.setAttribute('id', `${position[0]}-${position[1]}-player`);
                hasMoved = true;
            }
        }
    }
};

const coefficients = [0.25, 0.25, 0.25, 0.25];

function bestMove() {

    return 'UP';
};

const button = document.getElementById("playButton");

button.addEventListener("click", movePlayer);