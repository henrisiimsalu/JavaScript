// spread operators = ...allows an iterable 
// such as an array or string to be expanded 
// into seperate elements (unpacks the elements)

let fruits = ["apple","orange", "banana"];
let vegetables = ["carrots","celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(fruits);


// rest parameters = (...rest) allow a function work with 
// a variable number of arguments by bundling them into an array

//spread = expands an array into seperate elements
//rest = bundles seperate elements into an array

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob","Squarepants", "III")

console.log(fullName)

