//for loop

// for (let i = 0; i <10; i++) {
//     const element = i;
//     console.log(element);
    
// }

let myArray = ["Apple", "mAngo"," bananan"]

// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//break and continue
//while loop and do while loop

//for of loop

const arr = [1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num);
// }

//Maps unique value
const map = new Map()
map.set('In', "India")
map.set('FR', "France")

//console.log(map);

// for (const key of map) {
//     console.log(key);
// }

//for in loops

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb :"Ruby"
}

// for (const key in myObject) {
//    console.log(myObject[key]);
// }

// for each loop

const coding = ["java","js", "python","c","c++"]

// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach((val) =>{
//     console.log(val);
// })

// const values = coding.forEach( (item) => {
//     return item
// })
// console.log(values);

// const myNum = [1, 2, 3, 4 , 5 ,6 ,7 ,8 ]

// const newNum = myNum.filter( (num) => {
//     return num > 4
// })
// console.log(newNum);


// const newNum = myNum.map( (num) => num +10)
// console.log(newNum);

// const newNum = myNum
//                 .map( (num) => num * 10)
//                 .map((num) => num + 1 )
//                 .filter( (num) => num >= 50)

// console.log(newNum);

const num = [1, 2, ,3 ,4 ]


const myTotal = num.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currVal: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);

