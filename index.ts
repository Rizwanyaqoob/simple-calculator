#! /usr/bin/cnv node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number" , name:"Firstnumber" },
  { message: "Enter second number " , type:"number" , name:"secondnumber"},
  {message : "select one of the operator to perform action",
type :"list",
name:"operator",
choices:["addition", "subtraction","multiplication","division"]
},
]);


//conditional statement
if (answer.operator === "addition"){
  console.log(answer.Firstnumber + answer.secondnumber)
} else if(answer.operator === "subtraction"){
  console.log(answer.Firstnumber - answer.secondnumber)
} else if (answer.operator === "multiplication"){
  console.log(answer.Firstnumber * answer.secondnumber)
} else if (answer.operator === "division"){
  console.log(answer.Firstnumber / answer.secondnumber)
}
