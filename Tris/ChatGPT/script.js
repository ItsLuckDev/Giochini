function tableToButtonArray(tableId, dataArray) {
    var table = document.getElementById(tableId);
    dataArray = [];

    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        var rowData = [];

        for (var j = 0; j < row.cells.length; j++) {
            var buttonContent = row.cells[j].querySelector('button').innerText;
            rowData.push(buttonContent);
        }

        dataArray.push(rowData);
    }

    return dataArray;
}

var turn = 0;

function buttonClick(button) {
    if (turn == 0) {
        button.innerHTML = "X";
        button.disabled = true;
    }

    if (turn == 1) {
        button.innerHTML = "O";
        button.disabled = true;
    }
    turn = 1 - turn;

    var gameField = tableToButtonArray('myTable');

    //gestione delle vittorie
    //righe
    for (let i = 0; i < 3; i++) {
        if ((gameField[i].toString() == "X,X,X")) {
            gameFinished("X");
        }
        else if ((gameField[i].toString() == "O,O,O")) {
            gameFinished("O");
        }
    }


    //colonne
    for (let j = 0; j < 3; j++) {
        if (gameField[0][j] == gameField[1][j] && gameField[1][j] == gameField[2][j] && gameField[2][j] == "X") gameFinished("X");
        if (gameField[0][j] == gameField[1][j] && gameField[1][j] == gameField[2][j] && gameField[2][j] == "O") gameFinished("O");
    }

    //diagonali
    if (gameField[0][0] == gameField[1][1] && gameField[1][1] == gameField[2][2] && gameField[2][2] == "X") gameFinished("X");
    if (gameField[0][0] == gameField[1][1] && gameField[1][1] == gameField[2][2] && gameField[2][2] == "O") gameFinished("O");
    if (gameField[0][2] == gameField[1][1] && gameField[1][1] == gameField[2][0] && gameField[2][0] == "X") gameFinished("X");
    if (gameField[0][2] == gameField[1][1] && gameField[1][1] == gameField[2][0] && gameField[2][0] == "O") gameFinished("O");
}

function gameFinished(symbol) {
    x = document.getElementById("x_points")
    x_to_num = parseInt(x.innerHTML)

    o = document.getElementById("o_points")
    o_to_num = parseInt(x.innerHTML)
    if (symbol == "X") x.innerHTML = x_to_num + 1
    if (symbol == "O") o.innerHTML = o_to_num + 1
}


function newGame() {
    var table = document.getElementById("myTable");

    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];

        for (var j = 0; j < row.cells.length; j++) {
            var button = row.cells[j].querySelector('button');
            button.innerHTML = "&nbsp;";
            button.disabled = false;
        }
    }
}

function setZero(){
    x = document.getElementById("x_points")
    x.innerHTML = 0;
    
    o = document.getElementById("o_points")
    o.innerHTML = 0;

    newGame()
    turn = 0;
}