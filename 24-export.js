//Understand the Differences Between import and require

export const capitalizeStrings = str => str.toUpperCase();


//Use export to Reuse a Code Block 

const capitalizeStrings = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);

}

export {capitalizeStrings };

export const foo = "bar";
export const bar = "foo";

//Create an Export Fallback with export default

export default function subtract(x,y) {return x - y}