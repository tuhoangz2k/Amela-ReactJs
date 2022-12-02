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
    let minNumberIdx=0
    arr[0]==='0'
    while(arr[minNumberIdx]==='0'&& !isNavigate){
        minNumberIdx++
    }
    if(arr[0]==='0'&& !isNavigate){
        const tmp=arr[minNumberIdx];
        arr[minNumberIdx]=arr[0];
        arr[0]=tmp
    }
    return isNavigate ? Number.parseInt('-'+ arr.reverse().join('')) : Number.parseInt(arr.join(''))
}

console.log(sortNumber(-1100345));