
var user = require("readline-sync")
var num = user.question("enter number")
var a = num
var sum1 = 0
while (num){
    i = 1
    f = 1
    r = num % 10
    while (i<=r){
        f = f*i
        i++
        sum1 = sum1 + f
        num = num(maths.floor(10))
    }
if (sum1==a){
    console.log(num,"storng nuumber")
}else{
    console.log(num,"not strong number")
}
} 