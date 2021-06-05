// jshint esversion:10
// Iteration 1: Names and Input

let  hacker1 = 'Germano';

console.log(`The driver's name's is ${hacker1}`);

let  hacker2 = 'Cristiano';

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
let hacker1Caps = '';

for (let letter of hacker1) {
    hacker1Caps += letter.toUpperCase();
    hacker1Caps += ' ';
}
console.log(hacker1Caps);

let hacker2Reverse = '';

for (let i = hacker2.length; i > 0; i--) {
    hacker2Reverse += hacker2[i - 1];
}

console.log(hacker2Reverse);

for (let i = 0; i < hacker1Length; i++) {

    if (hacker1Length < 2 && hacker2Length < 2) {
        let result = hacker1[i].localeCompare(hacker2[i]);
        
        switch (result) {
            case -1: 
                console.log(`The driver's name goes first.`);
                break;
            case 1: 
                console.log(`Yo, the navigator goes first definitely.`);
                break;
            default:
                console.log(`What?! You both have the same name?`);
        }
        
    } else {
        let result = hacker1[i].localeCompare(hacker2[i]);
        
        switch (result) {
            case -1: 
                console.log(`The driver's name goes first.`);
                return;
            case 1: 
                console.log(`Yo, the navigator goes first definitely.`);
                return;
            default:
                if (i === (hacker1Length-1)) {
                    console.log(`What?! You both have the same name?`);
                    return;
                } else continue;
        }
    }
}