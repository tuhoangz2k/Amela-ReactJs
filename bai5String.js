// Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'

function repeatString(str,quantity){
    if(typeof str !== 'string' || typeof quantity !== 'number')return 'invalid parameter';
    let newStr='';
    for(let i=0;i<quantity;i++){
        newStr+=`${str}-`
    }
    
    return newStr.slice(0,newStr.length-1);
}
console.log(repeatString('a',10));