// // hursad
var input=require("readline-sync")
var num=input.questionInt("enter the number: ")
let reminder = 0, sum = 0;
let i = num;      
 while (i > 0) {  
    reminder = i % 10;  
    sum = sum + reminder;  
    i = Math.trunc(i / 10);  
}      
if (num % sum == 0)  
    console.log(num + " is a harshad number");  
else
    console.log(num + " is not a harshad number");  
     
