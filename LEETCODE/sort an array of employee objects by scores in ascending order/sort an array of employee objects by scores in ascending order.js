const prompt = require('prompt-sync')();

let employees = [];
let numberOfEmployees = parseInt(prompt('Enter the number of employees: '));

for (let i = 0; i < numberOfEmployees; i++) {
    let name = prompt(`Enter name of employee ${i + 1}: `);
    let dob = prompt(`Enter date of birth of employee ${i + 1} (e.g., Dec 15, 2007): `);
    let score = parseInt(prompt(`Enter score of employee ${i + 1}: `));
    employees.push({ name, dob, score });
}

employees.sort((a, b) => a.score - b.score);

employees.forEach((e) => console.log(`${e.name} - ${e.score}`));