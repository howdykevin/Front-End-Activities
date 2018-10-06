//first entry
function firstNumber(){
    var input=document.querySelector("#num1")
    var num1= input.value;
    return num1;
}

//second entry
function secondNumber(){
    var input1=document.querySelector("#num2")
    var num2=input1.value;
    return num2;
}

//getting the value of selected dropdown
function operator(){
    var root=document.getElementById("dropdown").value;
    // alert(root);
    return root;
}

function calculate(){
    var answerBox=document.querySelector("#answer");
    var number1=firstNumber();
    var number2=secondNumber();
    var operation=operator();
    var total;
    if (operation =="add"){
        total=Number(number1)+Number(number2);
    }
    else if(operation=="minus"){
        total=number1-number2;
    }
    else if(operation == "Divide"){
        total=number1/number2;
    }
    else if(operation =="multiply"){
        total=number1*number2;
    }
    answerBox.innerHTML=total;
    // alert(total);

    // return total;

}


