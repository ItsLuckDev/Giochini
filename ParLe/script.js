
function get_word_to_guess() {
    var word_list = ['ABATE', 'ABATI', 'ABBAI', 'ABBIA', 'ABETE', 'ABETI', 'ABILE', 'ABILI', 'ABITI', 'ABITO', 'ABOLI', 'ABUSA', 'ABUSI', 'ABUSO', 'ACETI', 'ACETO', 'ACIDA', 'ACIDE', 'ACIDI', 'ACIDO', 'ACQUA', 'ACQUE', 'ACUTA', 'ACUTE', 'ACUTI', 'ACUTO', 'ADAGI', 'ADDII', 'ADDIO', 'ADIRA', 'ADIRI', 'ADIRO', 'ADITI', 'ADITO', 'ADORA', 'ADORI', 'ADORO', 'ADULA', 'ADULI', 'ADULO', 'ADUNA', 'ADUNI', 'ADUNO', 'AEREA', 'AEREE', 'AEREI', 'AEREO', 'AFONA', 'AFONE', 'AFONI', 'AFONO', 'AFOSA', 'AFOSE', 'AFOSI', 'AFOSO', 'AGILE', 'AGILI', 'AGIRE', 'AGITA', 'AGITI', 'AGITO', 'AGLIO', 'AIUTA', 'AIUTI', 'AIUTO', 'ALCOL', 'ALCUN', 'ALGHE', 'ALITI', 'ALITO', 'ALTRA', 'ALTRE', 'ALTRI', 'ALTRO', 'ALZAI', 'AMACA', 'AMANO', 'AMARA', 'AMARE', 'AMARI', 'AMARO', 'AMATA', 'AMATE', 'AMATI', 'AMATO', 'AMAVA', 'AMAVI', 'AMAVO', 'AMENA', 'AMENE', 'AMENI', 'AMENO', 'AMERA', 'AMERO', 'AMICA', 'AMICI', 'AMICO', 'AMINO', 'AMORE', 'AMORI', 'AMPIE', 'AMPIO', 'AMPLI', 'ANCHE', 'ANDAI', 'ANDAR', 'ANDRA', 'ANDRO', 'ANIMA', 'ANIME', 'ANIMI', 'ANIMO', 'ANNOI', 'ANSIA', 'ANSIE', 'ANTRI', 'ANTRO', 'APICE', 'APICI', 'APPAI', 'APRII', 'ARANO', 'ARARE', 'ARATA', 'ARATE', 'ARATI', 'ARATO', 'ARAVA', 'ARAVI', 'ARAVO', 'ARCHI', 'ARDUA', 'ARDUE', 'ARDUI', 'ARDUO', 'ARERA', 'ARERO', 'ARIDA', 'ARIDE', 'ARIDI', 'ARIDO', 'ARINO', 'ARMAI', 'AROMA', 'AROMI', 'ASCIA', 'ASILI', 'ASILO', 'ASINA', 'ASINE', 'ASINI', 'ASINO', 'ASOLA', 'ASOLE', 'ASPRA', 'ASPRE', 'ASPRI', 'ASPRO', 'ASTRI', 'ASTRO', 'ATOMI', 'ATOMO', 'ATRII', 'ATRIO', 'ATTUA', 'ATTUI', 'ATTUO', 'AUREA', 'AUREE', 'AUREI', 'AUREO', 'AVARA', 'AVARE', 'AVARI', 'AVARO', 'AVERE', 'AVETE', 'AVEVA', 'AVEVI', 'AVEVO', 'AVIDA', 'AVIDE', 'AVIDI', 'AVIDO', 'AVRAI', 'AVREI', 'AVUTO', 'AVVIA', 'AVVII', 'AVVIO', 'BABBI', 'BABBO', 'BACHI', 'BACIA', 'BACIO', 'BADAI', 'BAFFI', 'BAFFO', 'BAGNA', 'BAGNI', 'BAGNO', 'BALIA', 'BALIE', 'BALLA', 'BALLI', 'BALLO', 'BALZA', 'BALZE', 'BALZI', 'BALZO', 'BANCA', 'BANDA', 'BANDE', 'BANDI', 'BARAI', 'BARBA', 'BARBE', 'BARCA', 'BARRA', 'BARRE', 'BASAI', 'BASSA', 'BASSO', 'BASTA', 'BASTI', 'BASTO', 'BATTA', 'BATTE', 'BATTI', 'BATTO', 'BAULE', 'BAULI', 'BAZAR', 'BEATA', 'BEATE', 'BEATI', 'BEATO', 'BECCO', 'BEFFA', 'BEFFE', 'BELLA', 'BELLE', 'BELLI', 'BELLO', 'BELVA', 'BELVE', 'BENDA', 'BENDE', 'BENDI', 'BENDO', 'BEONE', 'BEONI', 'BERCI', 'BERLO', 'BERRA', 'BERRO', 'BERSI', 'BIECO', 'BIMBA', 'BIMBE', 'BIMBI', 'BIMBO', 'BIRRA', 'BIRRE', 'BISCA', 'BISCE', 'BOCCA', 'BOCCE', 'BOCCI', 'BOLLA', 'BOLLE', 'BOLLI', 'BOLLO', 'BOMBA', 'BOMBE', 'BONTA', 'BORDI', 'BORDO', 'BORGO', 'BORIA', 'BORIE', 'BORSA', 'BORSE', 'BOSCO', 'BOTTA', 'BOTTE', 'BOZZA', 'BOZZE', 'BRACE', 'BRACI', 'BRAMA', 'BRAMI', 'BRAMO', 'BRANI', 'BRANO', 'BRAVA', 'BRAVE', 'BRAVI', 'BRAVO', 'BREVE', 'BREVI', 'BRINA', 'BRINE', 'BRODI', 'BRODO', 'BRUCI', 'BRUCO', 'BRUNA', 'BRUNE', 'BRUNI', 'BRUNO', 'BRUTI', 'BRUTO', 'BUCCE', 'BUCHE', 'BUCHI', 'BUFFA', 'BUFFE', 'BUFFI', 'BUFFO', 'BUGIA', 'BUGIE', 'BULBI', 'BULBO', 'BUONA', 'BUONE', 'BUONI', 'BUONO', 'BURLA', 'BURLE', 'BURLI', 'BURLO', 'BURRI', 'BURRO', 'BUSSA', 'BUSSI', 'BUSSO', 'BUSTI', 'BUSTO', 'BUTTA', 'BUTTI', 'BUTTO', 'CACAO', 'CACCE', 'CACCI', 'CADDE', 'CADDI', 'CADRA', 'CAFFE', 'CAGNA', 'CAGNE', 'CALAI', 'CALCI', 'CALCO', 'CALDA', 'CALDE', 'CALDI', 'CALDO', 'CALLI', 'CALLO', 'CALMA', 'CALME', 'CALMI', 'CALMO', 'CALVA', 'CALVE', 'CALVI', 'CALVO', 'CALZA', 'CALZE', 'CALZI', 'CALZO', 'CAMBI', 'CAMPA', 'CAMPI', 'CAMPO', 'CANNA', 'CANNE', 'CANTA', 'CANTI', 'CANTO', 'CAPRA', 'CAPRE', 'CARNE', 'CARNI', 'CARRI', 'CARRO', 'CARTA', 'CARTE', 'CASCO', 'CASSA', 'CASSE', 'CASTA', 'CASTE', 'CASTI', 'CASTO', 'CAUSA', 'CAUSE', 'CAUSI', 'CAUSO', 'CAUTA', 'CAUTE', 'CAUTI', 'CAUTO', 'CAVAI', 'CEDRI', 'CEDRO', 'CELAI', 'CELLA', 'CELLE', 'CENAI', 'CENNI', 'CENNO', 'CENTO', 'CERCA', 'CERCO', 'CERTA', 'CERTE', 'CERTI', 'CERTO', 'CERVI', 'CERVO', 'CESSA', 'CESSI', 'CESSO', 'CESTA', 'CESTI', 'CETRA', 'CETRE', 'CHINA', 'CHINE', 'CHINI', 'CHINO', 'CICCA', 'CICLI', 'CICLO', 'CIECA', 'CIECO', 'CIELI', 'CIELO', 'CIFRA', 'CIFRE', 'CIGLI', 'CIGNI', 'CIGNO', 'CINSE', 'CINTA', 'CINTO', 'CIRCA', 'CIRCO', 'CISTE', 'CISTI', 'CITAI', 'CITTA', 'CLERO', 'CLIMA', 'CLIMI', 'COLAI', 'COLLA', 'COLLE', 'COLLI', 'COLLO', 'COLMA', 'COLME', 'COLMI', 'COLMO', 'COLPA', 'COLPE', 'COLPI', 'COLPO', 'COLSE', 'COLTA', 'COLTI', 'COLTO', 'CONCI', 'CONDI', 'CONIA', 'CONII', 'CONIO', 'CONTA', 'CONTE', 'CONTI', 'CONTO', 'COPIA', 'COPIE', 'COPIO', 'COPRA', 'COPRE', 'COPRI', 'COPRO', 'CORDA', 'CORDE', 'CORNA', 'CORNO', 'CORPI', 'CORPO', 'CORRA', 'CORRE', 'CORRI', 'CORRO'];
    return word_list[Math.floor(Math.random() * word_list.length)].toUpperCase();
}

var secret_word = get_word_to_guess();
//console.log(secret_word);

function checkGuess() {
    var guessInput = document.getElementById("guess");
    var guess = guessInput.value.toUpperCase();

    if (guess.length !== secret_word.length) {
        if (guess == "SHOW WORD" || guess == "SECRET WORD") {
            alert("LA PAROLA SEGRETA È: " + secret_word)
        }

        else alert("Uhm... Prova ad inserire una parola della lunghezza adatta");
        return;
    }

    var result = compareWords(secret_word, guess);
    updateTable(guess, result);

    // Clear the input field
    guessInput.value = "";
}

function compareWords(secret, guess) {
    var result = [];
    for (var i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            result.push("Founded");
        } else if (secret.includes(guess[i])) {
            result.push("Partially Founded");
        } else {
            result.push("Not Founded");
        }
    }
    return result;
}

// Modify the updateTable function to disable input if all td elements have "founded" class
function updateTable(guess, result) {
    var table = document.getElementById("resultTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = guess;

    var allFounded = result.every(function (status) {
        return status === "Founded";
    });

    for (var i = 0; i < guess.length; i++) {
        var cell = row.insertCell(i + 1);
        cell.innerHTML = guess[i];

        // Set background color based on the result for each character
        if (result[i] === "Founded") {
            cell.classList.add("founded");
        } else if (result[i] === "Partially Founded") {
            cell.classList.add("partially-founded");
        } else {
            cell.classList.add("not-founded");
        }
    }

    countRows(allFounded);
}

window.onload = function () {
    var table = document.getElementById("resultTable");
    var headerRow = table.insertRow(0);
    var headerCell = headerRow.insertCell(0);
    headerCell.innerHTML = "Tentativi";

    for (var i = 0; i < secret_word.length; i++) {
        var headerCell = headerRow.insertCell(i + 1);
        headerCell.innerHTML = i + 1;
    }
};


// Modify the countRows function to disable input if all rows have been founded
function countRows(allFounded) {
    var table = document.getElementById("resultTable");
    var rowCount = table.getElementsByTagName("tr").length;

    var guess = document.getElementById("guess");
    if (rowCount >= 6) {
        guess.setAttribute("readonly", "readonly");
        guess.removeAttribute("required");
        var state = document.getElementById("state").innerHTML = "😞 HAI PERSO... 😞"
        var s_word = document.getElementById("s_word").innerHTML = " LA PAROLA ERA: " + secret_word
    }
    if (allFounded) {
        guess.setAttribute("readonly", "readonly");
        guess.removeAttribute("required");
        var state = document.getElementById("state").innerHTML = "⭐ HAI VINTO! ⭐"
    }
}

