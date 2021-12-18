var input=require("readline-sync")
var i=input.questionInt("enter the number: ")
fac=1
while (i>0){
    fac=fac*i
    i--
}
console.log("factorial=",fac)