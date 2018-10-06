// arrow function
var multiplication = (param1,param2) =>{
    total= param1*param2;
    return total;
    name="Kevin";
}

var hello= () =>{
    greetings="Hello";
}

function ass(a,b){
    return a+b;
}


// trying to access variables outside of arrow function
console.log(multiplication(2,3));
// both name and greetings are private variables
// console.log(name);
// console.log(greetings);
console.log(ass(2,3));