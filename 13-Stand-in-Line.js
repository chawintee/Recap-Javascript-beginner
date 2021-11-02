//Stand In Line
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log(`Before: ${JSON.stringify(testArr)}`);
console.log(nextInLine(testArr,6));
console.log(`After: ${JSON.stringify(testArr)}`);

//Boolean Value
function welcomeToBooleans() {
    return false; // return true or false => true is on , false is off
}

console.log({welcomeToBooleans: welcomeToBooleans()});

//Use Conditional Logic with If Statements => make decision in code
function ourTrueOrFalse(isItTrue) {
    if(isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}
console.log({ourTrueOrFalse:ourTrueOrFalse(1)});


function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
let resultTrueOrFalse = trueOrFalse(true)
console.log({trueOrFalse:resultTrueOrFalse});

//Comparison with the Equality Operator
function testEqual(val) {
    if (val == 10) {
        return "Equal";
    }
    return "Not Equal";
}

let testEq = testEqual(10)
console.log({testEq});

//comparison with the strict equality opetator
/*
3 === 3   //true
3 === '3' //false
3 == '3'  //true
*/

//Practice Comparing Different Values
function compareEquality(a,b) {
    if(a === b){
        return "Equal";
    }
    return "Not Equal"
}

console.log({compareEquality: compareEquality(10,"10")});
/*
== check value
=== check value and type
*/

//comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99){
        return "Not Equal";
    }
    return "Equal";
}

console.log({testNotEqual: testNotEqual(10)});

//Comparison with the strict inequality operator
function testStrictNotEqual(val) {
    if (val !== 17){
        return "Not Equal";
    }
    return "Equal";
}

console.log({testStrictNotEqual: testStrictNotEqual("17")});

//comparisons with the Logical And Operator
function testGreaterThan(val) {
    if (val > 100){
        return "Over 100";
    }
    if (val > 10){
        return "Over 10";
    }
    return "10 or Under";
}

console.log({testGreaterThan : testGreaterThan(111)});

//comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if(val >= 20){
        return "20 or Over";
    }
    if(val >= 10){
        return "10 or Over";
    }
    return "Less than 10";
}

console.log({testGreaterOrEqual:testGreaterOrEqual(5)});

//comiparison with the less than operator
function testLessThan(val) {
    if (val < 25){
        return "Under 25";
    }

    if (val < 55){
        return "Under 55";
    }
    return "55 or Over";

}

console.log({testLessThan : testLessThan(100)});

//Comparison with the Less Than or Equal To Operator
function testLessOrEqual(val) {
    if(val <= 12) {
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
console.log({testLessOrEqual: testLessOrEqual(25)});

//Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}

console.log({testLogicalAnd: testLogicalAnd(68)});

//Comparisons with the Logical Or Operator

function testLogicalOr(val){
    if (val < 10 || val > 20){
        return "Outside";
    }
    return "Inside";
}
console.log({testLogicalOr : testLogicalOr(0)});

//Else Statements
function testElse(val){
    var result = "";
    if (val > 5 ){
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}
console.log({testElse: testElse(8)});

//Else If Statements
function testElseIf(val) {
    if(val > 10){
        return "Greater than 10";
    } else if (val < 5){
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log({testElseIf: testElseIf(10)});

//Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5){
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log({orderMyLogic: orderMyLogic(3)});

//Chaining If Else Statements
/*
    write chained if/else if statements to fulfill the following coditions:
    num < 5 - return "Tiny"
    num < 10 - return "Small"
    num < 15 - return "Medium"
    num < 20 - return "Large"
    num >= 25 - return "Huge"
*/
function testSize(num){
    if(num < 5){
        return "Tiny";
    } else if (num < 10){
        return "Small";
    } else if (num < 15){
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log({testSize : testSize(20)});


//Golf Code
/*
Strokes         Return
1               "Hole-in-one"
<= par - 2      "Eagle"
par - 1         "Birdie"
par             "Par"
par + 1         "Bogey"
par + 2         "Double Bogey"
>= par + 3      "Go Home!"
*/


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!" ]
function golfScore(par, strokes){
    if (strokes == 1){
        return names[0];
    } else if (strokes <= par - 2){
        return names[1];
    } else if (strokes == par - 1){
        return names[2];
    } else if (strokes == par){
        return names[3];
    } else if (strokes == par + 1){
        return names[4];
    } else if (strokes == par + 2){
        return names[5];
    } else if (strokes >= par + 3){
        return names[6];
    }
}
console.log({golfScore : golfScore(5,4)});