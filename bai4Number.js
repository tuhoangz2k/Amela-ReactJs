// Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham 
// số truyền vào.
const sumOfPrimeNumberLessThanEqualParameter = (n) => {
    if(typeof n !== 'number') return 'invalid parameter';
    if(n===2) return 2;
    if(n===3) return 5;
    const primeArr=[]

    
    for(let i=2; i<=n;i++){
        let isPrimeNum=true;

        if(i===2||i===3){
            primeArr.push(i);
            continue;
        }

        // check i is a prime number
        for(let j = 2; j <= Math.sqrt(i); j++) {
            if(i%j===0){
                isPrimeNum=false;
                break;
            };
        }
        // if i is a prime number then push it into the primeArr variable
        if(isPrimeNum) primeArr.push(i);
    }
    
    if(primeArr.length===0) return 0

    return primeArr.reduce((sum,currentValue)=>{
        return sum+currentValue
    },0)    
}

console.log(sumOfPrimeNumberLessThanEqualParameter(11));