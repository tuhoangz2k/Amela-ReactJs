// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

const sumDivisorOfPositiveNumbersInteger = (n) => {
    if(typeof n !== 'number') return 'invalid parameter';

    let sum=0;

    for(let i=1; i<=n; i++) {
        if(n%i===0) sum+=i;
    }
    return sum
}

console.log(sumDivisorOfPositiveNumbersInteger(10));