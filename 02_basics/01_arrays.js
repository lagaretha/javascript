//arrays
//In java script arrays are resizeable and can obtain mix od diff datatypes 
//Arrays ca be copied in two ways shallow copy and deep copy
//Shallow copy: copy whose properties share same references 
//Deep copy: copy whose properties do not share same references

const myArray = [0,1,2,3,4]
const name = ["Akke", "Subu", "Shakti"]    

//Arrays Method
myArray.push(8)
myArray.push(8)/// arrays can add duplicate values
console.log(myArray);

myArray.unshift(9)//adds given value at first
myArray.shift()// remove the elemtent from the first

//slice , splice
// console.log("A", myArray);

const myn1 = myArray.slice(1,3)// slice does't manipulate the ehole array it just slice the given part aof array an print it 
// console.log(myn1);
// console.log(myArray);

const myn2 = myArray.splice(1,3) //splice manipulate the whole array
// console.log("B", myn2);
// console.log(myArray);

const fruits1 = ["apple", "mango", "orange"]
const fruits2 =["grapes", "litchi", "banana"]

// const allfruits = fruits1.concat(fruits2);
// console.log(allfruits);

const all_fruits = [...fruits1, ...fruits2] //spread is used to merge two arrays, we can add more than 2 arrays
console.log(all_fruits);


