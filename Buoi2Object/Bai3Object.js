// bài 3. Viết hàm kiểm tra key có tồn tại trong Object không
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@amela.vn'
// };
// => checkKey('name') => true
// checkKey('study') => false

const user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@amela.vn'
};


const checkKeyExists = (obj,key) => {
    if(typeof key !== 'string')return "invalid parameter"
    if(typeof obj !== 'object' || Array.isArray(obj))return "invalid parameter"
    return obj.hasOwnProperty(key)
}

console.log(checkKeyExists(user,'study'))