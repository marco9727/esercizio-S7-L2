//crea un contatore che tenga conto del tempo che passa, utilizzando session storage.
//aggiornando la pagina il vaolore prosegue, chiudendo la pagina ovviamente ricomincia.
//il valore del contatore deve aggiornarsi ad ogni secondo

// faccio una funzione che controlla se gia c'è un valore nel session storage per il contatore

function startCounter() {
  const counterValue = sessionStorage.getItem("time_counter");
  //"time_counter" è una chiave utilizzata per salvare e
  //recuperare il valore del contatore nella sessionStorage
  if (!counterValue) {
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
window.onbeforeunload = clearCounterInterval;
