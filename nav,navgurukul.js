for (var i=0;i<=100;i++){
    if(i%3==0){
        console.log("nav");
    }
    else if (i%7==0){
        console.log("gurukul");
    }
    else if (i%3==0 && i%7==0){
        console.log("navgurukul")
    }
    else{
        console.log(i)
    }
}