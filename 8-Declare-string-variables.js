//Example 
var firstName = "Alan" ;
var lastName = "Turing" ;

//only change code below this line


var myFirstName = "Beau";
var myLastName = "jaklsdfja;l" ;




var myStr = "I am a \"double quoted\" string inside \"double quoted\"";
console.log({myStr});



var myStr1 = '<a href="http://www.example.com" target="_blanjk">Link</a>';
console.log({myStr1});



var myStr2 = `<a href="http://www.example.com" target="_blanjk">Link</a>`;
console.log({myStr2});


// escape sequence in strings
/**************
 CODE   OUTPUT
 \'     single quote
 \"     double  quote
 \\     backslash
 \n     newline
 \r     carriage return
 \t     tab
 \b     backspace
 \f     form feed
  ************ */

 var str4 = "Firstline \n\t\\SecondLinr\nThirdLine"
 console.log({str4});

//  concatinate 

var ourStr = "I come first. "  +  "I come second.";

console.log({ourStr});

var myStr5 = "This is the start. " + "This is the end.";
console.log({myStr5});


var ourStr1 = "I come first. ";
ourStr1 += "I come second.";


console.log({ourStr1});

var myStr6 = "This is the first sentence. " ;
myStr6 += "This is the second sentence." ;

console.log({myStr6});



var ourName1 = "freeCodeCamp";
var ourStr1 = "Hello, our name is " + ourName1 + ", how are you?";

var myName1 = "Beau";
var myStr7 = "My name is " + myName1 + " and I am well!"

console.log({ourStr1, myStr7});


//Appending Variables to Strings
var anAdjective = "awesome!";
var ourStr2 = "freeCodeCamp is ";
ourStr2 += anAdjective;

console.log({ourStr2});

var someAdjective = "worthwhile";
var myStr8 = "Learning to code is ";
myStr8 += someAdjective;

console.log({myStr8});


//find length of strings

var firstNameLength = 0 ;
var firstName = "Ada" ;

firstNameLength = firstName.length ;

//setup 
var lastNameLength = 0 ;
var lastName = "Lovelace" ;

//Only change code below this line.

lastNameLength = lastName.length ;

console.log({firstNameLength, lastNameLength});

//Example 
var firstLetterOfFirstName = "" ;
var firstName = "Ada" ;

firstLetterOfFirstName = firstName[0] ;

//Setup 
var firstLetterOfLastName = "" ;
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0] ;

console.log({firstLetterOfFirstName, firstLetterOfLastName});



var myStr11 = "Jello World" ;

myStr11[0] = "H" //Fix Me// อันนี้ทำไม่ได้

console.log({myStr11});

var myStr12 = "Jello World" ;
myStr12 = "Hello World" ;
console.log({myStr12});


//Example 
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

//setup
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
console.log({secondLetterOfFirstName,thirdLetterOfLastName});



var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace" ;
var lastLetterOfLastName = lastName[lastName.length - 1]


console.log({lastLetterOfFirstName,lastLetterOfLastName});


var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3] ;


var lastName = "Lovelace" ;
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

console.log({thirdToLastLetterOfFirstName,secondToLastLetterOfLastName});

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " "  + myVerb +" to the store " + myAdverb + ".";
    return result
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike","slow", "flew", "slowly"));


