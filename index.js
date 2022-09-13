function isPrime(num){
    let result = "Yes";
    for(let i = 0; i<num;i++){
        if(num%i==0){
            result = "No";
        }
    }
    console.log(result);
}