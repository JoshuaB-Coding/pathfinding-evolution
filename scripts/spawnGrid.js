import { Node } from "./Node";

var center = document.createElement('center');

var grid = document.createElement('table');
grid.setAttribute('class', 'grid');

const size = 5;

for (var i = 0; i < size; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < size; j++) {
        var td = document.createElement('td');

        if ((i + j) % 2 == 0) {
            td.setAttribute('class', 'node wallnode');
            tr.appendChild(td);
        }
        else {
            td.setAttribute('class', 'node normalnode');
            tr.appendChild(td);
        }
    }
    grid.appendChild(tr);
}

center.appendChild(grid);
document.body.appendChild(center);