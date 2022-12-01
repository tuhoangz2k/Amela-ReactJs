
// Bài 3. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.

function repeatString(str){
    if(typeof str !== 'string')return 'invalid parameter';
    let newStr=str
    return newStr.repeat(10);
}

console.log(repeatString('a'));