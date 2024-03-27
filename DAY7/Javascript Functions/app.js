//functions - allow us to write reusable block of code

//defining a function
function greet() {
    console.log("Hello world!");
    console.log("Hello Philippines!");
}

//calling a function
greet();

//Function with Parameter
function greetMe(name) {
    console.log("Hello, ", name);
}
greetMe("AJ"); //argument

//function with return
function sum(a, b) {
    console.log("Log me please.")
    return a + b;
    console.log("Log me again please.")
}
console.log("Sum", sum(5, 8));