// use query Selector to get/change code in the HTML body.Include in the parantheses the id/class/tag where the code is held
main=document.querySelector("#main");
// Writing content into the container with #main id
main.innerHTML="Hello peeps";
// changing the css style through the use of variable.style.cssProperties
main.style.border="2px solid black";
main.style.padding="6px";

body=document.querySelector("body");
body.style.margin="0px";
body.style.background="lightgrey";

// there is no innerHTMl in input as input is a self enclosing tag
input=document.querySelector(".textfield");
// you can change the attributes
input.value="Hi there";
// you cant use margin-top with the hypens.Instead write it out in camelCase. eg marginTop
input.style.marginTop="5px";

// FUnction
function Addition(num1,num2){
    // name=prompt('WHat is your name bitch')
    // alert("HEllo"+name)
    return num1+num2
}

function getname(class_selector){
    var nameElement=document.querySelector(class_selector);
    var name=nameElement.value;

    var newName= name.replace("Foo","Bob");
    return newName;
}

function getFirstName(){
    var name= getname('.name');
    var array= name.split(' ');
    
    return array[0];
}

// var total=Addition(10,50);
// var currentName=getname();
// console.log(currentName)
console.log(getFirstName())

//Events
function changeMainHtml(){
    var main=document.querySelector("#container");
    var sentence1="Hello Thank you for changing me";
    var sentence2="Oh hello again";

    if(main.innerHTML==sentence1){
        main.innerHTML=sentence2;
        main.style.padding="10px";
    }
    else{
        main.innerHTML=sentence1;
        main.style.padding="0px";
    }

    // main.innerHTML="i am changed";
}
