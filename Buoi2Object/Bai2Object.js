// Bài 2. Viết hàm để lấy danh sách các value của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@amela.vn'
// };
// => 'Nguyễn Tiến Đạt',25,'support@amela.vn'


const takeValuesObject= (obj) => {
    if(typeof obj !== 'object' || Array.isArray(obj))return "invalid parameter"
    return Object.values(obj)
}

const user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@amela.vn'
};

console.log(takeValuesObject(user))