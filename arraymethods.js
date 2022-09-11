const cats = [
    {name: "Cleo", color: "White", weight: 16, age: 10, price: 1000},
    {name: "Camembert", color: "Black", weight: 10, age: 3, price: 500},
    {name: "Lilly", color: "White", weight: 9, age: 3, price: 300},
    {name: "Bob", color: "Grey", weight: 9, age: 10, price: 100},
    {name: "Na", color: "Grey", weight: 10, age: 4, price: 600},
    {name: "Ehyong", color: "Black", weight: 16, age: 4, price: 200},
]

//returns new array based off function 
//In this case an array of names 
const catNames = cats.map((cat) => {
    return cat.name
});

console.log("cat names", catNames);

//returns boolean
const filteredCats = cats.filter((cat) => {
    return cat.age > 3;
});

console.log("cats older than age of 3", filteredCats);

//returns first element in array that meets this condition
const foundCats = cats.find((cat) => {
    return cat.color === "Grey"
});

console.log("first cat in arraay with grey color", foundCats);

//reduce
//takes price an reduces to a single value 
const totalPrice = cats.reduce((accumulator, value) => {
    return accumulator += value.price;
}, 0);

console.log("totalPrice", totalPrice);

//calls a callback function for each element 
//can access item, index and the array itself
//forEach is less perfomant compared to for loop
//forEach good for executing a function for each an every element in an array
//use forEach when you cannot use any other for loops
cats.forEach((item, index, array) => {
    console.log(item.age);
    //console.log(index);
    //console.log(array);
});

//returns boolean 
//checks array if price is greater than OR equal to 1000
const expensiveCats = cats.some(item => {
    return item.price >= 1000;
});

console.log("expensive cats", expensiveCats);

//returns boolean 
//checks if elements are present in array 
//you can also check if substrings exist in strings
const catsNames = ["cleo", "camem", "bob", "ehyong", "lilly"];
console.log(catsNames.includes("cleo"));

//slices out of array string in new array 
//slices out x amount of elements in array
console.log("slice catNames", catsNames.slice(1));
//you can also grab elments between two indexes
console.log("slice catNames", catsNames.slice(0,1));

console.log("splice catNames", catsNames.splice(1));


catsNames.splice(2,0, "tom")
console.log("bob", catsNames);
