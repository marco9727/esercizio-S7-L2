//crea un contatore che tenga conto del tempo che passa, utilizzando session storage.
//aggiornando la pagina il vaolore prosegue, chiudendo la pagina ovviamente ricomincia.
//il valore del contatore deve aggiornarsi ad ogni secondo

// faccio una funzione che controlla se gia c'è un valore nel session storage per il contatore

function startCounter() {
  const counterValue = sessionStorage.getItem("time_counter");
  //"time_counter" è una chiave utilizzata per salvare e
  //recuperare il valore del contatore nella sessionStorage
  if (!counterValue) {
    // questa è una forma concisa di gestire il caso in cui il valore della sessionStorage
    //potrebbe non esistere o essere vuoto, in modo da fornire un valore di default.
    // La logica è: "Se non c'è un valore (!counterValue è vero), inizializza a 0".
    sessionStorage.setItem("time_counter", 0);
    return 0;
    // stiamo impostando il valore 0 associato alla chiave nella session storage successsivamente
    //con .getItem si ottiene il valore associato a quella chiave che rappresenta i ltempo trascorso
    // nel esempio del contatore
  }
  return parseInt(counterValue);
}

//faccio una funzione dove il counter viene mostrato nel'HTMl
//poi si imposta un intervalklo di 1000 millisecondi utilizzando set interval incrementando il contatore
// lo salva nella session storage e aggiorna html
function updateCounter() {
  const counterElement = document.getElementById("counter");
  let counter = startCounter();
  const interval = setInterval(function () {
    counter++;
    sessionStorage.setItem("time_conuter", counter);
    counterElement.textContent = counter + "secondi";
  }, 1000);
  sessionStorage.setItem("interval", interval);
}
//updateCounter: Questa funzione è responsabile dell'aggiornamento del
//contatore ad ogni secondo. Esegue quanto segue:

//Recupera l'elemento del DOM con l'id 'counter' e l'ID dell'intervallo memorizzato nella
//sessionStorage.

//Chiamando initializeCounter(), ottiene il valore corrente del contatore.

//Utilizza la funzione setInterval per eseguire una callback ogni secondo.
//All'interno di questa callback:

//Incrementa il valore del contatore.

//Salva il nuovo valore della sessionStorage per mantenerlo tra le pagine.

//Aggiorna il testo dell'elemento del DOM con il nuovo valore del contatore.

//Memorizza l'ID dell'intervallo nella sessionStorage per poterlo cancellare successivamente.

//funzione per cancellare l'intervallo alla chiusura della pag.

function clearCounterInterval() {
  const interval = sessionStorage.getItem("interval");
  if (interval) {
    clearInterval(parseInt(interval));
  }
}

// Chiamata alla funzione di aggiornamento al caricamento della pagina
window.onload = updateCounter;

// Chiamata alla funzione di cancellazione dell'intervallo alla chiusura
//della pagina
//onbeforeunload è un evento del browser che si verifica prima che la finestra sia in procinto
//di essere chiusa. utile per eseguire azioni o fornire un messaggio di avviso all'utente prima che
//lasci la pag
//quindi in questo caso fa si che prima che si chiude la pag fa cancellare il timer
window.onbeforeunload = clearCounterInterval;
