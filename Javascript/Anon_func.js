// Anonymous function is a function that is held inside a variable.Anonymous function is not a global function as it is held in a variable.

var x= function(){
    console.log("Hello world.I am anonymous!");
}

var y=function(num1,num2){
    console.log(num1+num2);
}

var mooncake=function(name){
    console.log("I will destroy "+name+" and everyone else");
}

// to call the anonymous function,just:(your variable name is the name of the function)
x();
y(1,10);
mooncake("mugabe");

//self invoking functions are functions that automatically runs when the function/html page is done loading
/*(function(){
    anything in here will run automatically when function is done loading
})();*/

(function(){
    console.log("Hello i am self invoking");
})();

// always declare global variables at the start of the code even when there is no value assigned to it. eg var x;
// declaration of a variable always moves to the top of its scope. Declaration and assigning are different