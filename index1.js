const savedValueElement = document.getElementById(`savedValue`);

function check() {
  const savedValue = localStorage.getItem(`user_name`);
  if (savedValue) {
    savedValueElement.textContent = savedValue;
  } else {
    savedValueElement.textContent = `nessun valore salvato`;
  }
}

function saveToLocalStorage() {
  const nameValue = document.getElementById(`nameInput`).value;
  if (nameValue.trim() !== ` `) {
    localStorage.setItem("user_name", nameValue);
    check();
    alert("Nome salvato con successo!");
    nameInput.value = ` `;
  } else {
    alert(`inserisci un nome valido`);
  }
}

function removeFromLocalStorage() {
  localStorage.removeItem("user_name");
  check();
  alert("Nome rimosso con successo!");
}

window.onload = check;
