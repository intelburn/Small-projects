//Import readline for STD IO interactions
const readline = require("readline");
//Create an interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
(async ()=>{
    let term = rl.question("What is the term in years? ", answer => {
        return answer
        rl.close();
    });
console.log(term);
});

