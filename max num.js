let c=require("readline-sync")
let num=c.question("enter the number")
var maxi=0;
let list=[]
for(let i=1;i<=num;i++){
    let num=c.question("enter the number: ")
    list.push(num)
}
var maxi=list[0];
for(let j=0;j<list.length;j++){
    if (maxi<list[j]){
        [maxi=list[j]]
    }
}
console.log(maxi)