// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số,
// kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

const newArrayWithElementByDivisionRemainder = (arr) =>{
    if(!Array.isArray(arr)) throw new Error("parameter must be an Array")
    if(arr.length < 2)return [];

    return arr.map((value)=>{
        const remainderNumber=value%2;
        return remainderNumber
    })
}

console.log(newArrayWithElementByDivisionRemainder([2, 1, 3, 4]))