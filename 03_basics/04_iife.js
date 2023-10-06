//Immediately Invoked function expression(IIFE)
//Why we use iife?
//we use iffe to remove the global pollution and which func whiuch will bw immediately execute

(function one() {
    console.log(`DB connected`);
}) ();

((name) => {
    console.log(`DB two ${name}`);
})('Akku')