// Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

function repeatString(str){
    if(typeof str !== 'string')return 'invalid parameter';
    let newStr='';
    for(let i=0;i<10;i++){
        newStr+=`${str}-`
    }
    
    return newStr.slice(0,newStr.length-1);
}
console.log(repeatString('a'));