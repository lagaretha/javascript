const promiseOne = new Promise(function (resolve, reject){
    //Do an asyn task 
    //DB calls, cryptography, network
    setTimeout(function (){
        console.log('Asyn task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Akku", email: "akku@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "akaa", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolver or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

fetch('url')