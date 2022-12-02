// Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không

const checkDecreaseOdd= (arr) => {
    if(!Array.isArray(arr)) throw new Error('parameters must are arrays')
    if(arr.length<2) return [];

    let temp=arr[0]
    return arr.every((value,index) => {
        if(index===0&&value%2===1)return true;
        if(value%2===0) return false

        const isValueGreateThanTemp=value<temp
        temp=value
        return (isValueGreateThanTemp)
    })
}

console.log(checkDecreaseOdd([9,7,5,3]))