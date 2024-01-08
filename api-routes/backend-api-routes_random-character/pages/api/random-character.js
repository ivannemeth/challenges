import Chance from "chance";

const chance = new Chance();
export default function handler(request, response) {
  response.status(200).json;

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
  };
}
