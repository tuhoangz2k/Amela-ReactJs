// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với 
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

const summation= (number1,number2) => {
    if(typeof number1 !== 'number' || typeof number1 !== 'number') return 'invalid parameter';
    let sum=0;
    for(let i=number1+1; i<number2; i++){
        sum+=i;
    }
    return sum
}

console.log(summation(3,8));