
//Array
//Example 
var ourArray1 = ["John",23];
// Only change code below this line 
var myArray1 = ["Quiency", 1];

//Nested Array
var ourArray2 = [["the universe", 42],["everything", 101010]];

var myArray2 = [["Bulls",23], ["White Sox", 45]];

//Access array

var ourArray3 = [50,60,70];
var ourData1 = ourArray3[0]; //equals 50

console.log({ourData1});

var myArray3  = [50,60,70] ;

var myData1 = myArray3[1]; //equals 60
console.log({myData1});

// Modify Array
var ourArray4 = [18,64,99];
console.log({ourArray4});
ourArray4[1] = 45 //ourArray now equals [ 18, 45, 99 ]. 
console.log({ourArray4});

var myArray4 = [18,64,99];
console.log({myArray4});
myArray4[1] = 55 // myArray now equals [ 18, 55, 99 ]. 
console.log({myArray4});

// Access Multi-Dimensional Array with Indexes
var myArray5 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];


var myData2 = myArray5[2][1] ;
console.log({myData2});

var myData3 = myArray5[3][0][0] ;
console.log({myData3});

// Manipulate Arrays with push()
var ourArray5 = ["Stimpason", "J", "cat"] ;
console.log({ourArray5});
ourArray5.push(["happy", "joy"]);
console.log({ourArray5});
//ourArray now equals [ 'Stimpason', 'J', 'cat', [ 'happy', 'joy' ] ] 

var myArray6 = [["John", 23], ["cat", 2]];
console.log({myArray6});
myArray6.push(["dog",3])
console.log({myArray6});

//Manipulate Arrays with pop()
var ourArray6 = [1,2,3];
console.log({ourArray6});
var removeFromOurArray6 = ourArray6.pop();
console.log({ourArray6,removeFromOurArray6});
// removedFromOurArray now equals 3, and ourArray now equals [1,2]


var myArray7 = [["John", 23], ["cat", 2]];
console.log({myArray7});
var removedFromMyArray7 = myArray7.pop();
console.log({myArray7,removedFromMyArray7});


//Manipulate Arrays with shift()
var ourArray7 = ["Stimpon", "J", ["cat"]];
console.log({ourArray7});
var removedFromOurArray7 = ourArray7.shift();
console.log({ourArray7,removedFromOurArray7});
//now ourArray7: [ 'J', [ 'cat' ] ], removedFromOurArray7: 'Stimpon'
var myArray8 = [["John",23], ["dog", 3]];
console.log({myArray8});
var removedFromMyArray8 = myArray8.shift();
console.log({myArray8,removedFromMyArray8});

//Manipulate Arrays with unshift()
var ourArray8 = ["Stimpson", "J", "cat"];
console.log({ourArray8});
ourArray8.shift();  //ourArray8 now equals ["J", "cat"]
console.log({ourArray8});
ourArray8.unshift("Happy"); 
console.log({ourArray8});//  ourArray8 now equals [ 'Happy', 'J', 'cat' ]


var myArray11 = [["John", 23], ["dog", 3]] ;
console.log({myArray11});
myArray11.shift() // myArray11 now equal [ [ 'dog', 3 ] ]
console.log({myArray11});
myArray11.unshift(["cat", 55]) //myArray11 now equal [ [ 'cat', 55 ], [ 'dog', 3 ] ]
console.log({myArray11});

//shoping list
var myList = [["cereal",3], ["milk", 2], ["bananas",3], ["juice",2], ["eggs",5]];
