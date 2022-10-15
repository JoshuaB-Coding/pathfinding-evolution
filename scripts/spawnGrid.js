var center = document.createElement('center');

var grid = document.createElement('table');
grid.setAttribute('class', 'grid');
grid.setAttribute('id', 'grid');

const wallProbability = 0; // currently disabled
var nodes = new Nodes();

for (var i = 0; i < GRID_SIZE; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < GRID_SIZE; j++) {
        var td = document.createElement('td');

        const isWall = Math.random() > (1 - wallProbability) ? 1 : 0;

        if (isWall) {
            nodes.addNode(new Node(td, 'WALL'));
        }
        else {
            nodes.addNode(new Node(td, 'DEFAULT'));
        }

        tr.appendChild(td);
    }
    grid.appendChild(tr);
}

center.appendChild(grid);
document.body.appendChild(center);

var player = new Player(nodes, GRID_SIZE * GRID_SIZE / 2 + GRID_SIZE / 2);
nodes.spawnFood();