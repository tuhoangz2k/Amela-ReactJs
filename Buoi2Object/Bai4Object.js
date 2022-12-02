// bài 4. Viết hàm kiểm tra Object có độ dài bao nhiêu
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@amela.vn'
// };
// => getLengthObject(user) => 3

const lengthOfKeys = (obj) => {
    if(typeof obj !== 'object' || Array.isArray(obj))return "invalid parameter"
    const keysArr=Object.keys(obj);
    return keysArr.length
}

const user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@amela.vn',
    sex:"male",
};

console.log(lengthOfKeys(user))