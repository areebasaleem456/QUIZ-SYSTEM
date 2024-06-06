#! /usr/bin/env node

import inquirer from "inquirer"

console.log("=".repeat(70))
console.log("\n\t Welcome to -codewith Areeba- Quiz System")
console.log("=".repeat(70))
console.log("=".repeat(70))
console.log("\n\t LETS START QUIZ\n\t")
console.log("=".repeat(70))

let quiz:
    {
        question_1:string
        question_2:string
        question_3:string
        question_4:string
        question_5:string
    
     } = await inquirer.prompt([
        {
         name:"question_1",
         type:"list",
         message:"What is TypeScript?",
         choices:[
              "a: A programming language",
              "b: A superset of JavaScript",
              "c: A framework for building web applications",
              "d: A tool for debugging JavaScript code"
                ]
       },
       {
           name:"question_2",
           type:"list",
           message:"What is the main purpose of TypeScript?",
           choices:[
                "a: To add new features to JavaScript",
                "b: To improve the performance of JavaScript code",
                "c: To make JavaScript code more maintainable and scalable",
                "d: To convert JavaScript code to Python code"
                   ]
       },
       {
            name:"question_3",
            type:"list",
            message:"What is TypeScript interface?",
            choices:[
                "a: A class that can be instantiated",
                "b: A function that takes an interface as an argument",
                "c: A declaration of a variable's shape and type",
                "d: A module that exports an interface"
                    ]
        },
        {
            name:"question_4",
            type:"list",
            message:"What is the any type in Typescript?",
            choices:[
                "a: A type that represents a number",
                "b: A type that represents a string",
                "c: A type that represents any value",
                "d: A type that represents an object"
               ]
         },
         {
            name:"question_5",
            type:"list",
            message:"Can Typescript code be compiled to JavaScript?",
            choices:[
                "a: Yes",
                "b: No",
                "c: Only if it's written in a specific way",
                "d: Only if it's compiled with a specific flag"
                    ]
         }
])

let score:number=0;
switch(quiz.question_1){
    case "a:A superset of JavaScript":
         console.log("1.CORRECT");
         ++score;
         break;
         default:console.log("1.INCORRECT")
}

switch(quiz.question_2){
    case "c: To make JavaScript code more maintainable and scalable":
         console.log("2.CORRECT");
         ++score;
         break;
         default:console.log("2.INCORRECT")
}

switch(quiz.question_3){
    case "c: A declaration of a variable's shape and type":
         console.log("3.CORRECT");
         ++score;
         break;
         default:console.log("3.INCORRECT")
}

switch(quiz.question_4){
    case "c: A type that represents any value":
         console.log("4.CORRECT");
         ++score;
         break;
         default:console.log("4.INCORRECT")
}

switch(quiz.question_5){
    case "a: Yes":
         console.log("5.CORRECT");
         ++score;
         break;
         default:console.log("5.INCORRECT")
}
console.log(`SCORE: ${score}/5`);

