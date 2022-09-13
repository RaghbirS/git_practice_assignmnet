let string = "naman";
let reverse = ""
for(let i = string.length-1; i>=0;i--){
    reverse+=string[i]
}

if(string==reverse){
    console.log("Yes")
}
else{
    console.log("No")
}