// jshint esversion:10
// Iteration 1: Names and Input

let  hacker1 = 'Cristiano';

console.log(`The driver's name's is ${hacker1}`);

let  hacker2 = 'Norah';

console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the logest name, it has ${hacker1Length} characters`);
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

// Iteration 3: Loops