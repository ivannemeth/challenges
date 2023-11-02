console.log("HERE WE ARE");

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
	*/

// --v-- write your code here --v--

const title = "This is the title";
const text = "blablabla";
let numberOfLikes = 24;
const userName = "Ivan Nemeth";
const isReported = true;

const MediaPost = [title, text, numberOfLikes, userName, isReported];

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

// Option 1: console.log each const

//console.log("title:", title); etc

//Option 2: consol.log in one line separated by commas and ""

//console.log("title:", title, "", "text:", text, "", "likes:", numberOfLikes); etc

//Option 3: console.log as an array
console.log("mediapost", MediaPost);
console.log("likes", numberOfLikes + 1);

// --^-- write your code here --^--
