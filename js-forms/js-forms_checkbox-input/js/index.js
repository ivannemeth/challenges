console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", (event) => {
  event.preventDefault();
  if (event.target.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // --v-- write your code here --v--
  const tosCheckbox = event.target.elements.tos.checked;

  if (tosCheckbox) {
    alert("Form submitted");
  }
});

/*console.log(tosCheckbox.checked);*/

// --^-- write your code here --^--

// eslint-disable-next-line no-alert
