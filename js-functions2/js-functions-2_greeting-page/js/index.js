console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  let currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour <= 12) {
    return "Good morning";
  } else if (currentHour >= 13 && currentHour <= 18) {
    return "Good afternoon";
  } else if (currentHour >= 19 && currentHour <= 22) {
    return "Good evening";
  }

  return "Good night";
}

function getDayColor() {
  // Code here
  let currentWeekday = new Date().getDay();
  if (currentWeekday == 1) {
    return "darkgrey";
  } else if (currentWeekday >= 2 && currentWeekday <= 5) {
    return "lightblue";
  }
  return "hotpink";
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
