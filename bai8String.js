// Bài 8: Kiểm tra 1 chuỗi có phải là chuỗi viết hoa hay không?

const checkUpperCase = (str) => {
    if(typeof str !== 'string') return 'invalid parameter';
    for(let i = 0; i < str.length;i++) {
        const decodeStr=str[i].charCodeAt()
        if(decodeStr<41||decodeStr>90)return false;
    }
    return true
}

console.log(checkUpperCase("Da"));