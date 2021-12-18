var input=require("readline-sync")
var n=input.questionInt("enter the number: ")
let string="";
i=1
while(i<=n){
    j=n
    while(j>=i){
        string+="*"
        j--
    }string+="\n"
    i++
}
console.log(string)

