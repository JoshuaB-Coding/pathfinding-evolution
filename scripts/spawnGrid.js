// import { Node } from "./Node";
// import { GRID_SIZE } from "./constants.mjs";

var center = document.createElement('center');

var grid = document.createElement('table');
grid.setAttribute('class', 'grid');

const GRID_SIZE = 20;
const wallProbability = 0.25;

for (var i = 0; i < GRID_SIZE; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < GRID_SIZE; j++) {
        var td = document.createElement('td');

        const isWall = Math.random() > (1 - wallProbability) ? 1 : 0;

        if (isWall) {
            td.setAttribute('class', 'node wallnode');
            td.setAttribute('id', `${i}-${j}-wall`);
        }
        else {
            td.setAttribute('class', 'node normalnode');
            td.setAttribute('id', `${i}-${j}`);
        }

        tr.appendChild(td);
    }
    grid.appendChild(tr);
}

center.appendChild(grid);
document.body.appendChild(center);