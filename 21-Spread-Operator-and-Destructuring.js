
//Use the Rest Operator with Function Parameters
const sum1 = (function(){
    return function sum1(x,y,z){
        const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    }
})();
console.log({sum1: sum1(1,2,3)});

const sum2 = (function(){
    return function sum2(...args){
        return args.reduce((a, b) => a + b, 0);
    }
})();
console.log({sum2: sum2(1,2,3,4,5)});

//Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2; 
(function() {
    arr2 = arr1; 
    arr1[0] = 'potato';
})();
console.log({arr1,arr2});

const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4; 
(function() {
    arr4 = [...arr3]; 
    arr3[0] = 'potato';
})();
console.log({arr3,arr4});

//Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const {x: a, y: b, z: c} = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
    "use strict";
    const {tomorrow : tempOfTomorrow} = avgTemperatures;

    return tempOfTomorrow;
}

console.log({tempOfTomorrow: getTempOfTmrw(AVG_TEMPERATURES)}); //shuld be 79


//Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
    today : {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";
    const {tomorrow : { max : maxOfTomorrow } } = forecast;

    return maxOfTomorrow;
}

console.log({maxOfTomorrow: getMaxOfTmrw(LOCAL_FORECAST)});

//Use Destructuring Assignment to Assign Variables from Arrays

const [z1, x1, , y1] = [1, 2, 3, 4, 5, 6];
console.log({z1,x1,y1});

let a1 = 8, b1 = 6;
(() => {
    "use strict";
    [a1,b1] = [b1,a1]
})();
console.log({a1,b1});
// Use Destructuring Assignment with the Rest  Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [ , , ...arr5] = list;

    return arr5;
}
const arr5 = removeFirstTwo(source)
console.log({arr5,source});

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max : 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half1 = (function(){
    
    return function half1(stats){
        return (stats.max + stats.min) / 2.0 ;
    }
})();
console.log({stats});
console.log({halfStats1 :half1(stats)});

const half2 = (function(){
    
    return function half2({max, min}){
        return (max + min) / 2.0 ;
    }
})();
console.log({stats});
console.log({halfStats2 :half2(stats)});
