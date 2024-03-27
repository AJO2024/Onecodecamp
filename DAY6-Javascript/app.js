//array

let fruit = 'Mango'
console.log(fruit);
console.log(typeof(fruit));

let fruits = ["Mango", "Banana", "Apple", "Cherry"];
console.log(fruits);
// access elements
console.log(fruits[2]);
console.log(fruits[7]); //undefined

//length of index
console.log(fruits.length);

//update elements
fruits[1] = 'Avocado'
console.log(fruits);

//adding elements
//add element at the end od the array
fruits.push("Dewberry");
console.log(fruits);


//add element at the beginning of the array
fruits.unshift("Banana");
console.log(fruits)

//deleting elements at the end of the array
fruits.pop();
console.log(fruits);

//deleting elements at the beginning of the array
fruits.shift();
console.log(fruits);

//alphabetical sorting
fruits.sort();
console.log(fruits);

//reverse sort
fruits.reverse();
console.log(fruits);

//search elements
//indexof method
let index = fruits.indexOf('Avocado');
console.log("Index:", index);

//includes method
//checking element is present
fruits.includes("Apple");
console.log("Is Apple in fruits: ", fruits.includes("Apple"));

//join method
fruits.join("-");
console.log("Joined fruits:", fruits.join("-"));

//slice method
let sliced_fruits = fruits.slice(1, 3);
console.log(sliced_fruits);

//splice method
//let spliced_fruits = fruits.splice(0, 2);
//console.log(fruits);

//looping through the elements
//fruits.forEach(function(fruit) {
 //   console.log(fruits);
//});

//For loop
//for (let i = 0; i < fruits.length; i++) {
 //   console.log(fruits[i]);
//}

//reverse for loop
for (let i = fruits.length - 1; i >=0; i--){
    console.log(fruits[i]);
}

//for of loop
for (fruit of fruits){
    console.log(fruit);

}
