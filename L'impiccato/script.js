// Function to accept the word and return it censored
function acceptWord() {
    const guessW = document.getElementById("guessW");
    const RUSure = window.confirm("La parola selezionata è: " + guessW.value);


    if (RUSure === true) {
        document.getElementById("accW").disabled = true;
        guessW.readOnly = true;

        const wordObj = {
            uncensored: guessW.value.toUpperCase(),
            censored: guessW.value.replace(/./g, "_").toUpperCase()
        };

        // Clear the input field after storing the word
        guessW.value = "";

        return wordObj;
    } else {
        guessW.value = "";
        alert("Nessun problema, scegli con cura!");
        return null;
    }
}

// Function to initialize the game
function startGame() {
    const wordObj = acceptWord();
    if (wordObj) {
        const censoredWordElem = document.createElement('div');
        censoredWordElem.id = "censoredWord";
        censoredWordElem.textContent = wordObj.censored;

        // Store the uncensored word in a data attribute
        censoredWordElem.setAttribute('data-uncensored', wordObj.uncensored);

        // Add the censored word element to the DOM
        document.getElementById("censoredWordContainer").appendChild(censoredWordElem);

        // Attach event listeners to the letter buttons
        document.querySelectorAll("button").forEach(button => {
            if (button.getAttribute('onclick') && button.getAttribute('onclick').includes('checkValue')) {
                // Ensure the old event listener is removed and a new one is attached
                const newButton = button.cloneNode(true);
                newButton.onclick = null;  // Remove any existing event listeners
                button.replaceWith(newButton);
                newButton.addEventListener('click', () => {
                    checkValue(newButton);
                });
            }
        });
    }
}

// Function to check the value of the button clicked and update the censored word
function checkValue(button) {
    console.log("checkValue triggered");  // Log to check if called multiple times

    const letter = button.innerHTML;
    const censoredWordElem = document.getElementById("censoredWord");
    const uncensoredWord = censoredWordElem.getAttribute('data-uncensored');
    let censoredWord = censoredWordElem.textContent.split("");

    let found = false;
    for (let i = 0; i < uncensoredWord.length; i++) {
        if (uncensoredWord[i] === letter) {
            censoredWord[i] = letter;
            found = true;
        }
    }

    if (found) {
        censoredWordElem.textContent = censoredWord.join("");
    } else {
        console.log("Incorrect guess, updating gibbet...");
        updateGibbet();  // Update the gibbet for incorrect guess
    }

    // Disable the button after it's been used
    button.disabled = true;

    // Check if the word is fully revealed
    if (censoredWord.join("") === uncensoredWord) {
        youWin();
        // Optionally reset the game or offer to start a new one
    }
}

// Function to update the gibbet (add parts of the hanged man)
function updateGibbet() {
    const gibbet = document.getElementById("gibbet");
    const parts = [
        '<div class="part vertical"></div>',
        '<div class="part top"></div>',
        '<div class="part head"></div>',
        '<div class="part body"></div>',
        '<div class="part arm left-arm"></div>',
        '<div class="part arm right-arm"></div>',
        '<div class="part leg left-leg"></div>',
        '<div class="part leg right-leg"></div>'
    ];

    const currentParts = gibbet.children.length;

    // Check how many parts are already added
    console.log(`Current parts: ${currentParts}`);

    // Ensure only one part is added per incorrect guess
    if (currentParts < parts.length) {
        gibbet.innerHTML += parts[currentParts];
        console.log(`Added part: ${parts[currentParts]}`);
    }

    // Check if all parts are added, meaning the player has lost
    if (currentParts + 1 === parts.length) {
        youLost();
        // Optionally reset the game or offer to start a new one
    }
}

// Function to show the modal with a "you lost" message
function youLost(word) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const modalSubmessage = document.getElementById('modal-submessage');
    const modalRefreshMessage = document.getElementById('modal-refresh-message');

    modalMessage.textContent = "❌ Hai perso ❌";
    modalRefreshMessage.textContent = "Fai un refresh della pagina (aggiornala) per iniziare un'altra partita";

    modal.style.display = "block"; // Show the modal
}

// Function to show the modal with a "you win" message
function youWin(word) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const modalSubmessage = document.getElementById('modal-submessage');
    const modalRefreshMessage = document.getElementById('modal-refresh-message');

    modalMessage.textContent = "🎉 Hai vinto! 🎉";
    modalRefreshMessage.textContent = "Fai un refresh della pagina (aggiornala) per iniziare un'altra partita";

    modal.style.display = "block"; // Show the modal
}

// Close the modal when the user clicks the close button
document.querySelector('.close-btn').onclick = function() {
    document.getElementById('modal').style.display = "none";
};

// Close the modal when the user clicks outside the modal
window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
};