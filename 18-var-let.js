//Differences Between the var and let Keywords
let catName = "Quincy";
console.log({catName});
let quote;

catName = "Beau";
console.log({catName});

function catTalk(){
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

    return quote
}

console.log({catTalk : catTalk()});

//CompareScopes of the var and let Keywords
//var declair globaly or localy is declared inside function
//let block statement or expression that it was declared in

function checkScope1(){
    "use strict";
    var i = "function scope";
    if(true){
        var i = "block scope";
        console.log("Var Block scope i is: ", i);
    }
    console.log("Var Function scope i is: ", i);
    return i;
}
checkScope1()

function checkScope2(){
    "use strict";
    let j = "function scope";
    if(true){
        let j = "block scope";
        console.log("let Block scope j is: ", j);
    }
    console.log("let Function scope j is: ", j);
    return j;
}
checkScope2()

function checkScope3(){
    "use strict";
    // let k = "function scope";
    if(true){
        var k = "block scope";
        console.log("let Block scope k is: ", k);
    }
    console.log("let Function scope k is: ", k);
    return k;
}
checkScope3()

function checkScope4(){
    "use strict";
    // let l = "function scope";
    if(true){
        let l = "block scope";
        console.log("let Block scope l is: ", l);
    }
    // console.log("let Function scope l is: ", l);//error
    return undefined;
}
checkScope4()


// Declare a Read-Only Variable with the const Keyword
function printManyTimes1(str){
    "use strict"

    var sentence = str + " is cool!";

    sentence = str + " is amazing!";

    for(var i = 0; i < str.length; i += 2){
        console.log(sentence);
    }
    console.log("-----------------------------------");
}
printManyTimes1("freeCodeCamp")


function printManyTimes2(str){
    "use strict"

    let sentence = str + " is cool!";

    sentence = str + " is amazing!";

    for(var i = 0; i < str.length; i += 2){
        console.log(sentence);
    }
    console.log("-----------------------------------");
}
printManyTimes2("freeCodeCamp")

function printManyTimes3(str){
    "use strict"

    const SENTENCE = str + " is cool!";

    // sentence = str + " is amazing!";

    for(let i = 0; i < str.length; i += 2){
        console.log(SENTENCE);
    }
    console.log("-----------------------------------");
}
printManyTimes3("freeCodeCamp")


//Mutate an Array Declared with const
const s = [5, 7, 2];
console.log({s});
function editInPance(){
    "use strict";

    // s = [2, 5, 7]; // Error
    s[0] = 2 ;
    s[1] = 5 ;
    s[2] = 7 ;
}
editInPance();
console.log({s});

//Prevent Object Mutation 
function freezeObj1() {
    "use strict";
    const MATH_CONSTANTS1 = {
        PI1: 3.14
    }

    try {
        MATH_CONSTANTS1.PI1 = 99 ; // change cannot prevent
    } catch( ex ){
        console.log({ex});
    }
    return MATH_CONSTANTS1.PI1;
}

const PI1 = freezeObj1();

console.log({PI1});


function freezeObj2() {
    "use strict";
    const MATH_CONSTANTS2 = {
        PI2: 3.14
    }

    Object.freeze(MATH_CONSTANTS2); //cannot change value of variable

    try {
        MATH_CONSTANTS2.PI2 = 99 ; //can not change because Object.freeze(MATH_CONSTANTS2);
    } catch( ex ){
        console.log({ex});
    }
    return MATH_CONSTANTS2.PI2;
}

const PI2 = freezeObj2();

console.log({PI2});
