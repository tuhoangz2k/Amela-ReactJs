// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1

 const checkIsArray = (arr) => {
    if(!Array.isArray(arr)) throw new Error("parameter must be an Array")
}

module.exports =checkIsArray

const findMin = (arr) => {
    checkIsArray(arr)
    if(arr.length<1)return []
    if(arr.length===1)return arr[0]

    let min = arr[0]
    arr.forEach((value)=>{
        if(value<min)min = value;
    })
    return min;
}

console.log(findMin([2, 1, 3]))