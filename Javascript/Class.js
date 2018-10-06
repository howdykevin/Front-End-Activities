class Animal{

    //constructor
    constructor(name){
        this.species='unknown';
        this.name=name;
        this.height=32;
    }

    speak(){
        console.log("Woof");
    }

    rename(name){
        this.name=name;
    }

    // getname(){
    //     return this.name;
    // }

    // heightToCm(){
    //     return this.cms= this.height * 2.5;
    // }
}
// inheritance 
class Cat extends Animal{
    //to change properties from inherited parent class, it is recommended to use functions
    speak(){
        console.log("New sound: meow");
    }

    setSpecies(species){
        this.species=species;
    }
}

// var dog=new Animal('Joey','dog');
// var cms=dog.heightToCm();
// dog.rename('maggie');
// console.log(dog.name);
// dog.speak();
// console.log(cms);

// var cat= new Cat("Ms Snugglepants");
// cat.setSpecies("cat");
// cat.speak();
// cat.rename('Monica');
// console.log(cat)


// practice
class SuperHeroes{
    constructor(name){
        this.name=name;
        this.strength=10;
        this.speed=10;
        this.magic=10;
    }

    damagePoint(){
        this.dmg=this.strength*1.5;
        console.log("Damage given : "+ this.dmg);
    }

    greetings(){
        this.greet="Zhe said: ";
        return this.greet;
        // console.log("Zhe said: ");
    }
}

class Berserker extends SuperHeroes{
    //overriding the parent method
    damagePoint(){
        this.dmg=this.strength*3;
        return this.dmg;
    }

    roar(){
        //super allows one to access properties/methods one parent class above the current class and execute the selected properties/methods alongside the child class's
        // properties/methods.This is part of ES6 features. 
        this.sound=super.greetings()+"Rooaar!!!!";
        // console.log(this.sound);
        return this.sound;
    }
}

class Child extends Berserker{
    whine(){
        console.log(super.roar());
        console.log(this.name+" Fainted");
    }
}

var warrior=new Berserker("Guts");
console.log(warrior);
console.log(warrior.damagePoint());
console.log(warrior.roar());
var jerry=new Child("jerry");
jerry.whine();
// warrior.roar();

// It is recommended to write classes instead of functions in javascripts.Try!!
