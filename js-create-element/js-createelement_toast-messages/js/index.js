console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (e) => {
  // Exercise: Append a new entry to the toast messages container
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = "Toast message 2";

  li.classList.add("toast-container__message");
  toastContainer.append(li);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
