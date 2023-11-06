let data;
data = [];

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "null":
    console.log("null!");
    break;
  case "number":
    console.log("number!");
    break;
  case "not a number":
    console.log("not a number!");
    break;
  case "string":
    console.log("string!");
    break;
  case "object":
    if (Array.isArray (data)){
    console.log("array!")
    }
    else {
        console.log("object!");
    }
    break;

    }
    break;
}
