//crea un contatore che tenga conto del tempo che passa, utilizzando session storage.
//aggiornando la pagina il vaolore prosegue, chiudendo la pagina ovviamente ricomincia.
//il valore del contatore deve aggiornarsi ad ogni secondo

function startCounter() {
  let counterValue = sessionStorage.getItem("counter");
  if (!counterValue) {
    counterValue = 0;
  }
  return parseInt(counterValue);
}

//Questa funzione controlla se esiste già un valore di contatore nella
//sessionStorage. Se non c'è, imposta il valore del contatore a 0.
//La funzione restituisce poi il valore del contatore convertito in un numero intero.

// Funzione per aggiornare il contatore e visualizzarlo nella pagina
function updateCounter() {
  let counter = startCounter();
  document.getElementById(
    "counter"
  ).textContent = `Tempo trascorso: ${counter} secondi`;
  counter++;
  sessionStorage.setItem("counter", counter);
}

//Questa funzione aggiorna il contatore. Chiama initializeCounter per ottenere il valore
//attuale del contatore, quindi aggiorna il contenuto del div "counter" nella pagina e
//incrementa il contatore di 1. Infine, salva il nuovo valore del contatore nella
//sessionStorage.

// Chiamare la funzione di aggiornamento ogni secondo
setInterval(updateCounter, 1000);

// Esegui l'aggiornamento iniziale
updateCounter();
