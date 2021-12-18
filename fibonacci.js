
var input=require("readline-sync")
var num=input.questionInt("enter the number: ")
a=0
b=1
c=a+b
console.log(a)
console.log(b)
while(c<=num){
    console.log(c)                       
    a=b
    b=c
    c=a+b
}


