//when we make objects using constructer then it is known as singleton
//Object.create //singleton object

//object literals
const mySymbol = Symbol("key1`")

const user = {
    name: "Akansha",
    age : 18,
    email: "akku@google.com",
    [mySymbol]: "mykey1"  //to use a symbol in a object
}

// console.log(user.name); //to access object
// console.log(user["name"]); //to access object
// console.log(user[mySymbol]);

user.greeting = function(){
    console.log("Hello Users");
}

user.greeting1 = function(){
    console.log(`Hello ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting1());