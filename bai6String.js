// Bài 6. Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseStrin('Hello') => Kết quả trả về là 'olleH'

function reverseStrin(str){
    if(typeof str !== 'string')return 'invalid parameter';
    let newStr =''
    for(let i=str.length-1;i>=0;i--) {
        newStr+=str[i];
    }
    return newStr;
}

console.log(reverseStrin('Hello'));