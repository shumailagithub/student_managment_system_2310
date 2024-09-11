#! /usr/bin/env node
import inquirer from "inquirer";
// Student managment system
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([{
        type: "input",
        name: "student",
        message: "Enter Student Name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["MS.Office", "HTML", "JavaScript", "TypeScript", "python"]
    }]);
const tutionFee = {
    "MS.Office": 20000,
    "HTML": 25000,
    "JavaScript": 30000,
    "TypeScript": 35000,
    "python": 10000
};
console.log(`\nTution Fees: ${tutionFee[answer.courses]}-\n`);
console.log(`Balance: ${myBalance}\n`);
let pamentType = await inquirer.prompt([{
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "EasyPaisa", "JazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        },
    }]);
console.log(`\nyou Select payment method ${pamentType.payment}\n`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(pamentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([{
            name: "Select",
            type: "list",
            message: "What would you like to do next",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.Select === "View Status") {
        console.log("\n*****Status*****\n");
        console.log(`Student Name: ${ans.student}\n`);
        console.log(`Student ID: ${randomNumber}\n`);
        console.log(`Course Enrolled: ${answer.courses}\n`);
        console.log(`Tution Fees Paid: ${paymentAmount}\n`);
        console.log(`Balance: ${myBalance += paymentAmount}\n`);
    }
    else {
        console.log("\nExiting Student Managment System\n");
    }
}
else {
    console.log(`"Invalid Amount due to course\n`);
}
