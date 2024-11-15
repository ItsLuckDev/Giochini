import random
word_list = ['ABATE', 'ABATI', 'ABBAI', 'ABBIA', 'ABETE', 'ABETI', 'ABILE', 'ABILI', 'ABITI', 'ABITO', 'ABOLI', 'ABUSA', 'ABUSI', 'ABUSO', 'ACETI', 'ACETO', 'ACIDA', 'ACIDE', 'ACIDI', 'ACIDO', 'ACQUA', 'ACQUE', 'ACUTA', 'ACUTE', 'ACUTI', 'ACUTO', 'ADAGI', 'ADDII', 'ADDIO', 'ADIRA', 'ADIRI', 'ADIRO', 'ADITI', 'ADITO', 'ADORA', 'ADORI', 'ADORO', 'ADULA', 'ADULI', 'ADULO', 'ADUNA', 'ADUNI', 'ADUNO', 'AEREA', 'AEREE', 'AEREI', 'AEREO', 'AFONA', 'AFONE', 'AFONI', 'AFONO', 'AFOSA', 'AFOSE', 'AFOSI', 'AFOSO', 'AGILE', 'AGILI', 'AGIRE', 'AGITA', 'AGITI', 'AGITO', 'AGLIO', 'AIUTA', 'AIUTI', 'AIUTO', 'ALCOL', 'ALCUN', 'ALGHE', 'ALITI', 'ALITO', 'ALTRA', 'ALTRE', 'ALTRI', 'ALTRO', 'ALZAI', 'AMACA', 'AMANO', 'AMARA', 'AMARE', 'AMARI', 'AMARO', 'AMATA', 'AMATE', 'AMATI', 'AMATO', 'AMAVA', 'AMAVI', 'AMAVO', 'AMENA', 'AMENE', 'AMENI', 'AMENO', 'AMERA', 'AMERO', 'AMICA', 'AMICI', 'AMICO', 'AMINO', 'AMORE', 'AMORI', 'AMPIE', 'AMPIO', 'AMPLI', 'ANCHE', 'ANDAI', 'ANDAR', 'ANDRA', 'ANDRO', 'ANIMA', 'ANIME', 'ANIMI', 'ANIMO', 'ANNOI', 'ANSIA', 'ANSIE', 'ANTRI', 'ANTRO', 'APICE', 'APICI', 'APPAI', 'APRII', 'ARANO', 'ARARE', 'ARATA', 'ARATE', 'ARATI', 'ARATO', 'ARAVA', 'ARAVI', 'ARAVO', 'ARCHI', 'ARDUA', 'ARDUE', 'ARDUI', 'ARDUO', 'ARERA', 'ARERO', 'ARIDA', 'ARIDE', 'ARIDI', 'ARIDO', 'ARINO', 'ARMAI', 'AROMA', 'AROMI', 'ASCIA', 'ASILI', 'ASILO', 'ASINA', 'ASINE', 'ASINI', 'ASINO', 'ASOLA', 'ASOLE', 'ASPRA', 'ASPRE', 'ASPRI', 'ASPRO', 'ASTRI', 'ASTRO', 'ATOMI', 'ATOMO', 'ATRII', 'ATRIO', 'ATTUA', 'ATTUI', 'ATTUO', 'AUREA', 'AUREE', 'AUREI', 'AUREO', 'AVARA', 'AVARE', 'AVARI', 'AVARO', 'AVERE', 'AVETE', 'AVEVA', 'AVEVI', 'AVEVO', 'AVIDA', 'AVIDE', 'AVIDI', 'AVIDO', 'AVRAI', 'AVREI', 'AVUTO', 'AVVIA', 'AVVII', 'AVVIO', 'BABBI', 'BABBO', 'BACHI', 'BACIA', 'BACIO', 'BADAI', 'BAFFI', 'BAFFO', 'BAGNA', 'BAGNI', 'BAGNO', 'BALIA', 'BALIE', 'BALLA', 'BALLI', 'BALLO', 'BALZA', 'BALZE', 'BALZI', 'BALZO', 'BANCA', 'BANDA', 'BANDE', 'BANDI', 'BARAI', 'BARBA', 'BARBE', 'BARCA', 'BARRA', 'BARRE', 'BASAI', 'BASSA', 'BASSO', 'BASTA', 'BASTI', 'BASTO', 'BATTA', 'BATTE', 'BATTI', 'BATTO', 'BAULE', 'BAULI', 'BAZAR', 'BEATA', 'BEATE', 'BEATI', 'BEATO', 'BECCO', 'BEFFA', 'BEFFE', 'BELLA', 'BELLE', 'BELLI', 'BELLO', 'BELVA', 'BELVE', 'BENDA', 'BENDE', 'BENDI', 'BENDO', 'BEONE', 'BEONI', 'BERCI', 'BERLO', 'BERRA', 'BERRO', 'BERSI', 'BIECO', 'BIMBA', 'BIMBE', 'BIMBI', 'BIMBO', 'BIRRA', 'BIRRE', 'BISCA', 'BISCE', 'BOCCA', 'BOCCE', 'BOCCI', 'BOLLA', 'BOLLE', 'BOLLI', 'BOLLO', 'BOMBA', 'BOMBE', 'BONTA', 'BORDI', 'BORDO', 'BORGO', 'BORIA', 'BORIE', 'BORSA', 'BORSE', 'BOSCO', 'BOTTA', 'BOTTE', 'BOZZA', 'BOZZE', 'BRACE', 'BRACI', 'BRAMA', 'BRAMI', 'BRAMO', 'BRANI', 'BRANO', 'BRAVA', 'BRAVE', 'BRAVI', 'BRAVO', 'BREVE', 'BREVI', 'BRINA', 'BRINE', 'BRODI', 'BRODO', 'BRUCI', 'BRUCO', 'BRUNA', 'BRUNE', 'BRUNI', 'BRUNO', 'BRUTI', 'BRUTO', 'BUCCE', 'BUCHE', 'BUCHI', 'BUFFA', 'BUFFE', 'BUFFI', 'BUFFO', 'BUGIA', 'BUGIE', 'BULBI', 'BULBO', 'BUONA', 'BUONE', 'BUONI', 'BUONO', 'BURLA', 'BURLE', 'BURLI', 'BURLO', 'BURRI', 'BURRO', 'BUSSA', 'BUSSI', 'BUSSO', 'BUSTI', 'BUSTO', 'BUTTA', 'BUTTI', 'BUTTO', 'CACAO', 'CACCE', 'CACCI', 'CADDE', 'CADDI', 'CADRA', 'CAFFE', 'CAGNA', 'CAGNE', 'CALAI', 'CALCI', 'CALCO', 'CALDA', 'CALDE', 'CALDI', 'CALDO', 'CALLI', 'CALLO', 'CALMA', 'CALME', 'CALMI', 'CALMO', 'CALVA', 'CALVE', 'CALVI', 'CALVO', 'CALZA', 'CALZE', 'CALZI', 'CALZO', 'CAMBI', 'CAMPA', 'CAMPI', 'CAMPO', 'CANNA', 'CANNE', 'CANTA', 'CANTI', 'CANTO', 'CAPRA', 'CAPRE', 'CARNE', 'CARNI', 'CARRI', 'CARRO', 'CARTA', 'CARTE', 'CASCO', 'CASSA', 'CASSE', 'CASTA', 'CASTE', 'CASTI', 'CASTO', 'CAUSA', 'CAUSE', 'CAUSI', 'CAUSO', 'CAUTA', 'CAUTE', 'CAUTI', 'CAUTO', 'CAVAI', 'CEDRI', 'CEDRO', 'CELAI', 'CELLA', 'CELLE', 'CENAI', 'CENNI', 'CENNO', 'CENTO', 'CERCA', 'CERCO', 'CERTA', 'CERTE', 'CERTI', 'CERTO', 'CERVI', 'CERVO', 'CESSA', 'CESSI', 'CESSO', 'CESTA', 'CESTI', 'CETRA', 'CETRE', 'CHINA', 'CHINE', 'CHINI', 'CHINO', 'CICCA', 'CICLI', 'CICLO', 'CIECA', 'CIECO', 'CIELI', 'CIELO', 'CIFRA', 'CIFRE', 'CIGLI', 'CIGNI', 'CIGNO', 'CINSE', 'CINTA', 'CINTO', 'CIRCA', 'CIRCO', 'CISTE', 'CISTI', 'CITAI', 'CITTA', 'CLERO', 'CLIMA', 'CLIMI', 'COLAI', 'COLLA', 'COLLE', 'COLLI', 'COLLO', 'COLMA', 'COLME', 'COLMI', 'COLMO', 'COLPA', 'COLPE', 'COLPI', 'COLPO', 'COLSE', 'COLTA', 'COLTI', 'COLTO', 'CONCI', 'CONDI', 'CONIA', 'CONII', 'CONIO', 'CONTA', 'CONTE', 'CONTI', 'CONTO', 'COPIA', 'COPIE', 'COPIO', 'COPRA', 'COPRE', 'COPRI', 'COPRO', 'CORDA', 'CORDE', 'CORNA', 'CORNO', 'CORPI', 'CORPO', 'CORRA', 'CORRE', 'CORRI', 'CORRO']

secret_word = word_list[random.randint(1, len(word_list))].upper()
offuscated_word = ["_" for _ in secret_word]

#print(secret_word)
print("\n" , offuscated_word , "\n")

for  attempt in range(1, 6):

    print("\nTENTATIVO N: " + str(attempt))
    guess = str(input("Inserirsci la parola: ").strip()).upper()

    #check if every letter of guess is equal to every letter of the secret word
    for i in range(min(len(secret_word), len(guess))):
        if(guess[i] == secret_word[i]):
            #print("guess: " + guess[i] + " - " + "secret_word: " + secret_word[i] + " - Funge")
            offuscated_word[i] = guess[i]
        
    print(offuscated_word)
    
    #turn enumeration
    if(len(guess) > len(offuscated_word)):
        if(attempt > 1):
            attempt = attempt - 1
    else:
        print("\nTENTATIVO N: " + str(attempt))

    #win condition
    if(guess == secret_word):
        print("HAI VINTO!")
        break
    #exit condition
    if(guess == "EXT"): 
        print('\n LA PAROLA ERA: "' + secret_word + '"')
        break

else: #lost condition
    print('\nHAI PERSO! LA PAROLA ERA: "' + secret_word + '"')
