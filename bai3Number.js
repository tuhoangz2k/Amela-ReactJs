// Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

const checkIsPrimeNumber = (n) => {
    if(typeof n !== 'number') return 'invalid parameter';
    if(n===2||n===3)return true

    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i===0)return false
    }

    return true
}

console.log(checkIsPrimeNumber(99));