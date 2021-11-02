//Create String using Template Literals 
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log({greeting});

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
}
function makeList(arr){
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>,
 *   `<li class="text-warning">linebreak</li> ]
 */

const resultDisplayArray = makeList(result.failure);

console.log({resultDisplayArray});

//Write Concise Object Literal Declarations Using Simple Fields
const createPerson1 = (name1, age1, gender1) => {

    return {
        name1 : name1 ,
        age1 : age1, 
        gender1: gender1
    };
};
console.log({createPerson1 : createPerson1("Zodiac Hasbro", 56, "male")});

const createPerson2 = (name2, age2, gender2) => ({name2,age2,gender2});
console.log({createPerson2 : createPerson2("Zodiac Hasbro", 56, "male")});


//Write Concise Declarative Functions
const bicycle = {
    gear: 2 ,
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log({gear: bicycle.gear});

//Use class Syntax to Define a Constructor Function 
var SpaceShuttle1 = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}

var zeus1 = new SpaceShuttle1('Juiter');

console.log({zeus1 : zeus1.targetPlanet});



class SpaceShuttle2 {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus2 = new SpaceShuttle2('Jupiter');

console.log({zeus2 : zeus2.targetPlanet});


function makeClass1(){
    class Vegetable {
        constructor (name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass1();
const carrot = new Vegetable('carrot');
console.log({carrotname: carrot.name});


//Use getters and setters to Control Access to an Object
class Book {
    constructor(author){
        this._author = author; //_author = private variable
    }
    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(updatedAuthor){
        this.author = updatedAuthor;
    }
}

function makeClass2() {
    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp - 32) // when use _ before varible is private varible you cannot access out side scope out side class
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat
}

const Thermostat = makeClass2();
const thermos = new Thermostat(76);
console.log({thermos});
let temp = thermos.temperature;
console.log({temp});
thermos.temperature = 26;
temp = thermos.temperature;
console.log({temp});











