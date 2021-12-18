const a = require("readline-sync")
var l = a.questionInt("enter the number: ")
let b = "";
for (let i =1;i<=l;i++){
    for (let j=1; j<=l;j++){
        b+=i;
    }
    b+="\n";
}
console.log(b) 