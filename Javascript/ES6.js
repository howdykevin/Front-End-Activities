//constant is a variable that will never be reassigned
//let is just another way to define variables similar to var. let is reassignalble.

//both const and let is scoped to the closest curly brackets.

//var on the other hand is not restraint to curly brackets.var is scoped to a function and will be hoisted to the top.

const name="Kevin";

if(name=="Kevin"){
    //this will give an error as constant variable cannot be reassigned
    // const name="Boob";
    //variable
    var bitch="Mario";
    //let 
    let luigi="Halo";
    //let can be accessed within curly brackets.
    console.log(luigi);
}
else{
    //do smthing
}

//var variables are accessible outside of curly brackets. It is not accessible outside of a function.
console.log(bitch);

function hello(){
    var age=20;
}
//this will return an error as age is a private variable and cannot be accessed outside of function.
// console.log(age);

//let variables cannot be accessible outside of curly brackets.
//this will give an error
// console.log(luigi);