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

    if (hacker1Length < 1 && hacker2Length < 1) break;

    if (hacker1 === hacker2) {
        console.log(`What?! You both have the same name?`); break;

    } else {

        if (hacker1[i].localeCompare(hacker2[i]) > 0) {
            console.log(`Yo, the navigator goes first definitely.`);
            break; 
        } else {
            console.log(`The driver's name goes first.`);
            break; 
        }
        
    }
}

// Bonus 1

let randomText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare suscipit malesuada. Phasellus laoreet cursus facilisis. Donec pharetra tristique massa vitae euismod. Pellentesque vehicula volutpat auctor. Quisque varius nisi eu tempor suscipit. Sed fringilla dui velit, mollis venenatis odio tempus a. Cras ipsum urna, porta eget venenatis eget, sodales id elit. Maecenas viverra tincidunt felis a tincidunt. Donec et neque non orci varius viverra quis quis tortor. Aliquam euismod sollicitudin turpis, vel ornare nisl sollicitudin ac.

Nulla pulvinar erat at maximus gravida. Maecenas semper lobortis sapien, nec egestas tellus auctor vel. Phasellus malesuada purus quam, quis tristique neque pharetra eget. Mauris fermentum sed velit at venenatis. Suspendisse accumsan augue vitae felis ultrices dignissim. Ut ullamcorper sem quis turpis iaculis, ut vulputate eros commodo. Nullam pulvinar sapien erat, ut pharetra dolor rhoncus vel. Vestibulum vel libero ut felis volutpat eleifend sit amet vitae sem. Cras pulvinar luctus iaculis.

Aliquam cursus, velit rutrum sodales finibus, nisi ante bibendum dui, sit amet hendrerit felis magna vel orci. Pellentesque consequat ante at erat lacinia, eget mattis nisl lobortis. Aliquam erat volutpat. Curabitur augue turpis, egestas id ante a, venenatis eleifend orci. Proin accumsan interdum commodo. Duis bibendum augue ut euismod laoreet. Duis quis consectetur lorem. Curabitur ornare efficitur aliquet. Vestibulum finibus sapien ut dolor pellentesque, cursus varius mi imperdiet.`;

let array1 = randomText.split(' ');


// Bonus 2

