// Bài 1. Viết hàm để lấy danh sách các key của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@amela.vn'
// };
// => name,age,email

const takeKeysObject= (obj) => {
    if(typeof obj !== 'object' || Array.isArray(obj))return "invalid parameter"
    const keysArr=Object.keys(obj)
    return keysArr
}

const user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@amela.vn'
};

console.log(takeKeysObject(user))