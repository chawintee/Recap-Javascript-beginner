//Iterate with While Loops
var myArray = [];

var i = 0
while (i < 5){
    myArray.push(i);
    i++;
}

console.log({myArray});

//Iterate with For Loops
var ourArray1 = [];

for(var i = 0;i < 5; i++){
    ourArray1.push(i);
}
console.log({ourArray1});

var myArray1 = [];

for (var i = 1; i < 6; i++){
    myArray1.push(i)
}

console.log({myArray1});

//Iterate Odd Numbers with a For Loop
var ourArray2 = [];

for (var i = 0; i < 10; i += 2){
    ourArray2.push(i);
}

console.log({ourArray2});

var myArray2 = [];
for (var i = 1; i < 10 ; i += 2 ){
    myArray2.push(i)
}

console.log({myArray2});

//Count Backwards with a For Loop
var ourArray3 = [];

for (var i = 10 ; i > 1 ; i -= 2){
    ourArray3.push(i);
}

console.log({ourArray3});

var myArray3 = []; 

for (var i = 9 ; i > 0 ; i -= 2){
    myArray3.push(i);
}

console.log({myArray3});

//Iterate Through an Array with a For Loop
var ourArr1 = [9,10,11,12];
var ourTotal1 = 0;

for (var i = 0; i < ourArr1.length; i++){
    ourTotal1 += ourArr1[i];
}

console.log({ourTotal1});


var myArr1 = [2,3,4,5,6];
var myTotal1 = 0;

for(var i = 0; i < myArr1.length; i++){
    myTotal1 += myArr1[i];
}

console.log({myTotal1});

//Nesting For Loops
function multiplyAll(arr){
    var product = 1;
    for (var i = 0; i < arr.length; i ++){
        for(var j = 0; j < arr[i].length ; j++){
            console.log({i,j,arr : arr[i][j]});
                product *= arr[i][j]
                console.log({product});
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log({product});


//Itetate with Do...While Loops
var myArray4 = [];
var i = 10 ;
while (i < 5){
    myArray4.push(i);
    i++;
}
console.log({i,myArray4});

var myArray5 = [];
var i = 10 ;

do  {
    myArray5.push(i);
    i++;
} while(i < 5)

console.log({i,myArray5});

//Profile Lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes":["Pizza","Coding","Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes":["Hogwarts","Magic","Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes":["Intriguing Cases","Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes":["JavaScript","Gaming", "Foxes"]
    }
]


function lookUpProfile(name, prop){
    var properties
    for (var i = 0 ; i < contacts.length ; i++){
        if(contacts[i].firstName === name){
            properties = contacts[i][prop] || "No such property"
            return {name, properties}
        }
    }
    return "No such contact"
}

var data = lookUpProfile("Akira","likes")
var data1 = lookUpProfile("Harry","lastName")
var data2 = lookUpProfile("Sherlock","number")
var data3 = lookUpProfile("Kristian","likes")
console.log({data,data1,data2,data3});



