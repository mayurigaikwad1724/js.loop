// var anum = require("readline-sync")
// var i = 1
// var sum = 0
// while(i<=10){
//     a = anum.questionInt("enter number")
//     sum = a + sum
//     console.log(sum)
//     i++
// }

var sum=0
for(var i=1;(i<=10);i++){
    var anum = require("readline-sync")
    a = anum.questionInt("enter number")
    sum = a + sum
}
console.log(sum) 