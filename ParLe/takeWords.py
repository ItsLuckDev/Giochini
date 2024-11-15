file_input = "input.txt"
file_output = "output.txt"
parole_di_5_lettere = []

contatore_parole = 0

# Leggi il file di input
with open(file_input, 'r') as file:
    # Leggi ogni linea del file
    for linea in file:
        # Trova tutte le parole di 5 lettere (escludendo caratteri speciali come "-")
        parole = linea.split()
        for parola in parole:
            parola_pulita = parola.strip(".,;:!?()[]{}")
            if len(parola_pulita) == 5 and parola_pulita.isalpha():
                parole_di_5_lettere.append(parola_pulita.upper())
                contatore_parole += 1

                # Esci dal ciclo quando hai raggiunto le 500 parole
                if contatore_parole == 500:
                    break
        if contatore_parole == 500:
            break

# Scrivi la lista nel file di output come stringa JavaScript
with open(file_output, 'w') as file:
    file.write("var listaParole = [" + ", ".join(map(lambda x: "'" + x + "'", parole_di_5_lettere)) + "];")
