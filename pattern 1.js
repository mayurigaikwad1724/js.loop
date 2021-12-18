
var input=require("readline-sync")
var n=input.questionInt("enter the number: ")
string=""
i=1;
while (i<=n){
    j=1
    while(j<=i){
        string+="*"
        j++
    }string+="\n"
    i++
}
console.log(string) 
