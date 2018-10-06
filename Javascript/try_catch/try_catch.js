//try catch finally. To allow handling of errors.
// in a try catch code do not nest try catch code within each other

try{
    //code in here
    var name=prompt("What's your name");
    if(name =="kevin"){
        //you can throw a new error which will be processed in the catch block
        throw "kingdom_come";
    }
    else if(name != "secret"){
        throw "unknown_user";

    }
    else{
        alert("You can come in");
    }
}catch(error){
    if(error=="unknown_user"){
        document.querySelector("#test").innerHTML="Sorry you are no longer signed in";
    }
    else if(error=="kingdom_come"){
        document.querySelector("#test").innerHTML="Your king has arrived!";
    }
    else{
        document.querySelector("#test").innerHTML=error.message;
    }
    console.log(error,error.message);

}finally{
    // finally is run regardless of what happens in the try and catch code block
    document.querySelector('#test').innerHTML+="<br />Try/catch/finally was run";
}
