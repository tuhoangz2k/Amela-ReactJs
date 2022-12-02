// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3


const findSecondMax= (arr) => {
    if(!Array.isArray(arr)) throw new Error("parameter must be an Array")
    if(arr.length <2)throw new Error('length of the array must great than 0')
    let max
    let secondMax

    if(arr[0]>arr[1]) {
        max=arr[0]
        secondMax=arr[1]
     }else {
        max=arr[1]
        secondMax=arr[0]
    }

    arr.forEach((value)=>{
        if(value < max && value > secondMax) {
            secondMax=value
        } else if(value>max) {
            secondMax=max
            max=value
         }

    })

    return secondMax
}

console.log(findSecondMax([2, 1, 3, 4]))