# TufsBot

Un bot per gestire le sessioni di GDR, utility e divertimento 

Link per invitarlo -> [Clicca qui](https://discord.com/api/oauth2/authorize?client_id=706152125826072600&permissions=8&scope=bot)


## Comandi

### &aiuto
Invia la lista dei comandi

### &ping
Restituisce il ping dell'utente che ha lanciato il comando

### &tira
Tira un dado, sintassi possibili:
- d6 // Un dado a 6 facce
- 2d20 // 2 dadi a 20 facce
- 4d% // quattro dadi pecentuale
- 4d100 // 4 dadi da 100
- dF // Dado Fate
- dF.1 // Variante dado Fate
- 4dF // 4 dadi fate
- 3d10! // Esplode i dadi
- 3d10!xn // esplode i dadi indicati da xn. Per le opzioni di x vedi sotto, n è un numero qualunque
- 3d10!!xn // esplode e somma le esplosioni
- 2d6!p // Penetra i dadi (Ritira il massimo e gli toglie 1)
- 2d6!!p // Penetra e somma
- 2d6!pxn / 2d6!!pxn // Penetra il valore indicato da xn
- 2d4dn // Elimina n dadi col valore più basso
- 2d4dln // Come sopra
- 2d4dhn // Elimina n dadi col valore più alto
- 2d4kn // Stessa sintassi di prima, ma tiene invece di eliminare
- d6r // Ritira gli 1
- d6ro // ritira gli 1 e, se fai 1, tira di nuovo
- d6rxn / d6roxn // Come prima, ma il valore da ritirare lo decidi tu
- 5d20xn // Mostra solo i dadi che rientrano nella soglia di xn
- 5d20fxn // Come prima, ma segnala anche i dadi fallimento
- 40d10s / 40d10sa // Ordina i dadi in maniera ascendente
- 40d10sd // Ordina in maniera discendente
- 3d8csxn // Segnala i successi critici dati da xn
- 3d8cfxn // Come sopra ma i fallimenti

Capisce anche la matematica (es. 2d30+2)

#### x 
- = // uguale ad un numero, es =5
- <, > // maggiore o minore di un numero
- <=, >= // maggiore/minore o uguale ad un numero
- != // non uguale

### &iniziativa

- aggiungi {nome} {tiro di dado} // aggiunge {nome} con il valore del {tiro di dado} - devi dargli il valore già tirato, non un tiro da fare
- elimina {nome} // Toglie {nome} dalla tabella
- scambia {posizione1} {posizione2} // scambia le posizioni
- rinomina {nome} {nuovo nome} // rinomina {nome} in {nuovo nome}
- ordine // restituisce la tabella
- pulisci // elimina la tabella

### &lutmeme
Manda un meme di LUT