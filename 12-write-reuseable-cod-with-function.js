/*******      reuseable function       *********************** */
function ourReuseableFunction() {
    console.log("Heyya, World");
}

ourReuseableFunction();
ourReuseableFunction();
ourReuseableFunction();

function reusableFunction(){
    console.log("Hi World!!!");
}

reusableFunction();
reusableFunction();
reusableFunction();


/**** Passing Values to Function with Arguements  ****************************************/
function ourFunctionWithArgs(a,b) {
    console.log(a-b);
}
ourFunctionWithArgs(10,5) //outputs 5

function myFunctionWithArgs(a,b){
    console.log(a+b);
}

myFunctionWithArgs(10,5) //outputs 15

/*** Global Scope and Function ************* */
//Declare your variable here
var myGlobal = 10;

function fun1() {
    //Assign 5 to oopsGlobal Here
    oopsGlobal = 5 //ถ้าใส่ var จะเป็น variable แค่ภายใน แต่ถ้าไม่ใส่จะเป็น global
    console.log({oopsGlobal});
}
//only change code above this line
function fun2(){
    console.log({myGlobal, oopsGlobal});
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log({output});
}

fun1();
fun2();


/*** local scope and fynctions ****************** */
function myLocalScope() {
    var myVar = 5 ;
    console.log({myVarInFunction: myVar});
}
myLocalScope();
// console.log({myVarOutFunction: myVar});


/*** Global vs Local Scope in Functions *********************************************/
var outerWear = "T-Shirt";

function myOutfit(){
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

//Return a Value from a Function with Return 
function minusSeven(num) {
    return num - 7 ;
}

console.log(minusSeven(10));

function timesFive(num){
    return num * 5 ;
}
console.log(timesFive(5));

//Understanding Undefined Value Returned from a Function
var sum = 0;
function addThree(){
    sum = sum + 3;
}
console.log(addThree());
function addFive(){
    sum += 5
}
console.log(addFive());

//Assign with a Returned Value
var changed = 0 ;
console.log({changed});
function change(num){
    return (num + 5) / 3 ;
}
changed = change(10)
console.log({changed});

var processed = 0 ;
console.log({processed});
function processArg(num){
    return (num + 3) / 5;
}
processed = processArg(7)
console.log({processed});






