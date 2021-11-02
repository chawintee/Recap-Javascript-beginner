//switch statements
/*
Write a switch statement which tests val and sets answer for the following coditions:
1 = "alpha"
2 - "beta"
3 = "gamma"
4 -  "delta"
*/

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1 : 
            answer = "alpha" ;
            break;
        case 2 : 
            answer = "beta";
            break;
        case 3 : 
            answer = "gamma";
            break;
        case 4 : 
            answer = "delta";
            break;
    }

    return answer ;
}

console.log({caseInSwitch: caseInSwitch(1)});

//Default Option in Switch Statements
function switchOfStuff(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default :
            answer = "stuff"
            break;
    }
    return answer;
}
console.log({switchOfStuff: switchOfStuff("c")});

//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    switch(val){
        case 1: 
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4: 
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7: 
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer
}

console.log({sequentialSizes: sequentialSizes(3)});

//Replacing If Else Chains with Switch
function chainToSwitch(val){
    var answer = "";
    switch(val){
        case "bob" : 
            answer = "Marley";
            break;
        case 42 : 
            answer = "The Answer";
            break;
        case 1 : 
            answer = "There is no #1";
            break;
        case 99 : 
            answer = "Missed me by this much";
            break;
        case 7 : 
            answer = "Ate Nine";
            break;    
    }
    return answer
}

console.log({chainToSwitch: chainToSwitch("bob")});



//Returning Boolean Values from Functions
function isLess(a,b) {
    // if( a < b ){
    //     return true;
    // } else {
    //     return false;
    // }
    return a < b
}

console.log({isLess : isLess(10, 15)});


//Returning Early Pattern from Functions
function abTest(a,b){
    if (a < 0 || b < 0){
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2))
}

console.log({abTest: abTest(-2,2)});

//Counting Cards
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;

    }

    var holdbet = "Hold"
    if(count > 0){
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}

cc(2); cc("K"); cc(10) ; cc('K'); cc('A');
console.log({cc: cc(4)});

