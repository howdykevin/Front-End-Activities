//creating an object.Objects are key value pairs
var person={
    name:"Elon Musk",
    age:45,
    tech:['Paypal','SpaceX','HyperLoop','Tesla'],
    Changename: function(new_name){
        this.name=new_name;
        return this;
    },
    Changeage: function(new_age){
        this.age=new_age;
        return this;
    }
};

person.Changename("John Newman");
person.Changeage(65);

//instead of using functions to change the variables in a class, you can also override it
person.age=30;
//you can also add new properties to an object like so:(you can either use . or do smthing similar like array)
person.children=2;
//array addition of properties
person['married']=true;

console.log(person.name+" is "+person.age+" years old and has started "+person.tech.join(", "));
// console.log(person);


//Practice making objects
var ninja={
    name:"Naruto",
    age:35,
    married:true,
    Abilities:["Rasengan","Thousand Clone jitsu","Talk no jitsu","Ninetails"],
    //writing anonymous function
    attack: function(){
        return "Rasengan dmg 50";
    },
};
//changing current object value
ninja.married=false;
//adding properties to object
ninja["partner"]="Sasuke";
console.log(ninja);
console.log(ninja.attack());