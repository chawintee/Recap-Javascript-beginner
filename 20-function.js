//Use Arrow Functions to Write Concise Anonymous Functions

var magic1 = function() {
    return new Date();
}

var magic2 = () => {
    return new Date();
}

const magic3 = () => new Date();


console.log({magic1:magic1()});
console.log({magic2:magic2()});
console.log({magic3:magic3()});

//Write Arrow Functions with Parameters

var myConcat1 = function (arr1, arr2) {
    return arr1.concat(arr2);
}
console.log({myConcat1 : myConcat1([1,2],[3,4,5])});

var myConcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log({myConcat2 : myConcat2([1,2],[3,4,5])});

//Write Higher Order Arrow Function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter( num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntergers = squareList(realNumberArray);
console.log({squaredIntergers});


//Write Higher Order Arrow Functions
const increment1 = (function(){
    return function increment1(number, value = 1) {
        return number + value;
    }
})();
console.log({increment: increment1(5,2)});
console.log({increment: increment1(5)});

