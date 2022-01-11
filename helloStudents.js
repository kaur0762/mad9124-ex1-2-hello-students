'use strict'

// 1. Read the JSON file into a variable called students
let students = require('./students.json')

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

students.forEach(({firstName , lastName}) => {
    say(`Hello ${firstName} ${lastName}`)
})

function say (message) {
    console.log(message)
}

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 

let counter = 0;
for (const obj of students) {
    if (obj.lastName.startsWith("D"))counter++;
} 

console.log(`Count of last names starting with D is ${counter}`);