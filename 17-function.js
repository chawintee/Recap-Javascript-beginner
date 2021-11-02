//Generate Random Fractions
function randomFraction1(){
    return Math.random()
}
console.log({randomFraction1 :randomFraction1()});

function randomFraction2(){
    return Math.random() * 100
}
console.log({randomFraction2 :randomFraction2()});


//Generate Random Whole Numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

console.log({randomNumberBetween0and19});

function randomWholeNumber(){

    return Math.floor(Math.random()*9);
}

console.log({randomWholeNumber: randomWholeNumber()});

//Generate Random Whole Number within a Range
function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log({ourRandomRange: ourRandomRange(1,9)});

function randomRange1(myMin, myMax){
    return Math.floor((Math.random() * (myMax - myMin + 1))) + myMin;
}

var myRandom1 = randomRange1(5,15);

console.log({myRandom1});

//Use the parseInt Function
function convertToInteger1(str) {
   return parseInt(str);
}

console.log({convertToInteger1: convertToInteger1("56"),Type :typeof(convertToInteger1("56"))});


// Use the parseInt Function with a Radix

function convertToInterger2(str){
    return parseInt(str, 2)
}

console.log({convertToInteger2 : convertToInterger2("10011")});


//Use the Conditional (Ternary) Operator
//Conditon ? statement-if-true : statement-if-false;
function checkEqual1(a,b){
    if(a === b){
        return true;
    } else {
        return false;
    }
}

console.log({checkEqual1 : checkEqual1(1,1)});

function checkEqual2(a,b){
    return a === b ? true : false;
}

console.log({checkEqual2 : checkEqual2(1,1)});

function checkEqual3(a,b){
    return a === b ;
}

console.log({checkEqual3 : checkEqual3(1,1)});

//Use Multiple Conditional (Ternary) Operators
function checkSign1(num) {
    return num > 0 ?  "positive" : num < 0 ? "negative" : "zero" ;
}

console.log({checkSign1 : checkSign1(22)});


