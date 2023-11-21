console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const r2d2 = data.results[2];
      //console.log(data);
      //console.log(data.results[6]);
      console.log(r2d2.eye_color);
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}

fetchData();
