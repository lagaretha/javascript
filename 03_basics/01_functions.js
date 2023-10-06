function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("A");
}

// sayMyName // function refrence 
// sayMyName()  //function execution

sayMyName()

function addTwoNumber(num1 , num2) {
    let result = num1+num2
    return result
}
// addTwoNumber(4,6)
// console.log("Result: " ,result);

function logInUserMsg(username){
    return `${username} just logged in `
}

// console.log(logInUserMsg("Akansha"));

// function calculateCartPrice(val1,val2 ,...num1){
//     return num1
// }

// console.log(calculateCartPrice(300,400,200,6 , 7 ))

const user = {
    name: "Akku",
    price: 99
}

function haldleObject(anyobject){
    console.log(`Username is ${anyobject.name} and the price is ${anyobject.price}`);
}
haldleObject(user)