// Global variable to track the player's turn
let playerSign = true;

function generateField() {
    var field = document.getElementById("gameField");

    for (let i = 0; i < 3; i++) {
        var row = document.createElement("tr"); // generate row

        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("td"); // change var to let
            cell.className = "td_game";
            cell.onclick = function () {
                move(cell); // Assign move function as click handler
                // getCell(cell); // Gets the current cell
            };
            row.appendChild(cell); // append cell to row
        }
        field.appendChild(row); // append row to field
    }
    getClassification();
}

// Example move function
function move(c) {
    // Check if the cell is already filled
    var whoIsPlaying;
    if (c.innerHTML == "") {
        if (playerSign) {
            c.innerHTML = "X";
            whoIsPlaying = c.innerHTML;
        } else {
            c.innerHTML = "O";
            whoIsPlaying = c.innerHTML;
        }
        // Toggle player sign for the next move
        playerSign = !playerSign;
    }

    // check if the current player has won the game
    if (winCondition()) {
        document.getElementById("overlay").style.display = "block"; //if the user has won nobody can play anymore
        //alert("Player " + whoIsPlaying + " Has Won!");

        // Set the text for the winner and show the banner
        let winnerText = document.getElementById('winnerText');
        winnerText.innerHTML = whoIsPlaying + " has won the game!";
        document.getElementById('winnerBanner').classList.remove('hidden');

        if (whoIsPlaying == "X") document.getElementById("Xpoints").innerHTML++;
        if (whoIsPlaying == "O") document.getElementById("Opoints").innerHTML++;

    }

}

function winCondition() {
    let element = document.getElementsByTagName("td");
    // rows
    if (situation(element, 0, 1, 2)) return true;
    else if (situation(element, 3, 4, 5)) return true;
    else if (situation(element, 6, 7, 8)) return true;

    // columns
    else if (situation(element, 0, 3, 6)) return true;
    else if (situation(element, 1, 4, 7)) return true;
    else if (situation(element, 2, 5, 8)) return true;

    // diagonals
    else if (situation(element, 0, 4, 8)) return true;
    else if (situation(element, 2, 4, 6)) return true;

    // else return -1; // tie code

}

function situation(array, a, b, c) {
    // A, B, C contains the array with the respective position (a, b, c)
    var A = array[a].innerHTML, B = array[b].innerHTML, C = array[c].innerHTML;
    if (A == "" || B == "" || C == "") return false;
    else if (A == B && A == C && B == C) return true;

}

function resetGame(code) {
    function reMatch() {
        // make every cell empty
        let element = document.getElementsByClassName("td_game");
        for (let i = 0; i < element.length; i++) {
            element[i].innerHTML = "";
        }

        // hide winner
        document.getElementById('winnerBanner').classList.add('hidden'); // remove the winnerBanner
        document.getElementById("overlay").style.display = "none"; // the game is now playable again
    }

    function reStart() {
        if (confirm("Sei sicuro di voler ricominciare la partita?")) {
            document.getElementById("Xpoints").innerHTML = 0;
            document.getElementById("Opoints").innerHTML = 0;
            reMatch();
        }
    }

    if(code == "resAll") reStart();
    else if(code == "resMatch") reMatch();
}

window.onload = generateField;

function getClassification() {
    fetch("data.json")
      .then(response => response.json())  // Parses the JSON from the response
      .then(data => {
        const tableBody = document.getElementById("player-list");  // Target the tbody element
        tableBody.innerHTML = "";  // Clear any existing rows
  
        data.forEach(player => {
          const row = document.createElement("tr");  // Create a new row
          const nameCell = document.createElement("td");  // Create a cell for the name
          const pointsCell = document.createElement("td");  // Create a cell for the points
  
          nameCell.textContent = player.name;  // Set the name text
          pointsCell.textContent = player.points;  // Set the points text
  
          row.appendChild(nameCell);  // Add the name cell to the row
          row.appendChild(pointsCell);  // Add the points cell to the row
          tableBody.appendChild(row);  // Add the row to the table body
        });
      })
      .catch(error => console.error("Error loading classification data:", error));
  }
  
  
