// Bài 7. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau,
// không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. 
// Ví dụ 'Race car' trả về true, 'hello world' trả về false.

const checkBalancedString=(str) => {
    if(typeof str !== 'string')return 'invalid parameter';
    let newStr=str.toLowerCase();
    let newString=''
    for(let i=newStr.length-1;i>=0;i--) {
        newString+=newStr[i];
    }
    return newStr.includes(newString)
}

console.log(checkBalancedString('racecar'));
