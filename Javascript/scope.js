// scope refers to the variables/functions/classes that you have access to.

// global variable.Can be accessed by any functions
var globalVariable=2017;

function test(){
    console.log(globalVariable);
    // without var, you are declaring a global variable. Whenever you are defining a variable, always have a var
    // to signal the scope of the variable
    var localVariable=2028;
}

test();