// Bài 12: Kiểm tra mảng xem có phải mảng tăng dần hay không

const checkIncreaseArray = (arr) => {
    if(!Array.isArray(arr)) throw new Error('parameters must are arrays')
    if(arr.length<2) return [];
    let temp=arr[0]
    return !(arr.some((value)=>{
       if(value<temp){
        return true
       }else{
         temp=value
        return false
       }
    }))
}

console.log(checkIncreaseArray([1,2,1,3,4]))