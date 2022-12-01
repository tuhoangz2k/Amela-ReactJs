// Bài 6: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số 
// nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). 
// Ví dụ với tham số 53751 thì kết quả là 13557.

const sortNumber = (n) => {
    if(typeof n !== 'number') return 'invalid parameter';
    let isNavigate=false;
    if(n<0) isNavigate =true
    const arr= n.toString().split('');
    if(isNavigate) arr.shift();
    arr.sort((a, b) => {
        const newA=Number.parseInt(a);
        const newB=Number.parseInt(b);
        return newA-newB
    })

    return isNavigate ? Number.parseInt('-'+ arr.join('')) : Number.parseInt(arr.join(''))
}

console.log(sortNumber(-53751));