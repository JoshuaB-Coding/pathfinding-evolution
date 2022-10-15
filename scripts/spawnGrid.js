var center = document.createElement('center');

var grid = document.createElement('table');
grid.setAttribute('class', 'grid');
grid.setAttribute('id', 'grid');

const wallProbability = 0.25;
var nodes = [];

for (var i = 0; i < GRID_SIZE; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < GRID_SIZE; j++) {
        var td = document.createElement('td');

        const isWall = Math.random() > (1 - wallProbability) ? 1 : 0;

        if (isWall) {
            nodes.concat(new Node(td, 'WALL'));
            // td.setAttribute('class', 'node wallnode');
            // td.setAttribute('id', `${i}-${j}-wall`);
        }
        else {
            nodes.concat(new Node(td, 'DEFAULT'));
            // td.setAttribute('class', 'node defaultnode');
            // td.setAttribute('id', `${i}-${j}`);
        }

        tr.appendChild(td);
    }
    grid.appendChild(tr);
}

center.appendChild(grid);
document.body.appendChild(center);