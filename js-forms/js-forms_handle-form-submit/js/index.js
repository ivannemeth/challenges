console.clear();

const form = document.querySelector('[data-js="form"]');
const firstName = document.querySelector("#first-name");
const age = document.querySelector("#age");
const badness = document.querySelector("#badness");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  console.log(formElements.firstName.value);

  const ageBadnessSum = age.value + badness.value;
  const message = `The age-badnes-sum of ${firstName.value} is ${ageBadnessSum}`;
  console.log(message);

  event.target.reset();
  event.target.elements.firstName.focus();
});
