let grid = document.getElementsByClassName("grid");

const size = 5;

for (var i = 0; i < size; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < size; j++) {
        var td = document.createElement('td');

        if ((i + j) % 2 == 0) {
            td.setAttribute('class', 'node nodewall')
            tr.appendChild(td);
        }
        else {
            td.setAttribute('class', 'node nodestandard');
            tr.appendChild(td);
        }
    }
    grid.appendChild(tr);
}
