function isPrime(num){
    let result = "Yes";
    for(let i = 2; i<num;i++){
        if(num%i==0){
            result = "No";
        }
    }
    console.log(result);
}