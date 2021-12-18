var arr=["mayuri","mom","dad"]
for(var i=0;i<arr.length;i++){
    a=""
    for (let j=arr[i].length-1;j>=0;j--){
        a+=arr[i][j]
    }
    if (a===arr[i]){
        console.log("it is palindrame")
    }
    else{
        console.log("it is not palindrame")
    }
}