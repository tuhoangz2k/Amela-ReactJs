// Bài 5. Cho mảng các user mỗi user có cấu trúc 
// user = {
//     name : string,
//     age : number,
//     isStatus : bool
// }
// Viết function lấy ra những user có tuổi > 25 và isStatus = true
const users=[
    {
        name : "Nguyễn Tiến Đạt",
        age : 33,
        isStatus : true
    },
    {
        name : "Nguyễn Ta",
        age : 24,
        isStatus : true
    },
    {
        name : "Thái Nhất",
        age : 99,
        isStatus : false
    },

    {
        name : "Vũ Ngọc Ngạn",
        age : 33,
        isStatus : true
    },
    {
        name : "Đỗ Tiến Ngạn",
        age : 26,
        isStatus : true
    },
]

const filterUsers = (arr,conditionCallback) => {
    if(!Array.isArray(arr) || typeof conditionCallback!=='function')return "invalid parameter"
    return arr.filter((user)=>{
        return conditionCallback(user)
    })
}

console.log(filterUsers(users,(param)=>{
    return param.age>25 && param.isStatus
}))