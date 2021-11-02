//Understand the Differences Between import and require
import subtract, { capitalizeStrings } from "./24-export";

const cap = capitalizeStrings("hello!");
console.log({cap});

//Use * to Import Everything from a File 
import * as capitalizeStrings from "capitalize_strings";

//Import a Default Export 
import subtract from "math_functions"
subtract(7,4)