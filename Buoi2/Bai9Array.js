// Bài 9: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]

const similarity = (arr1, arr2) => {
    if(!Array.isArray(arr1)||!Array.isArray(arr2)) throw new Error('parameters must are arrays')
    if(arr1.length<2 || arr2.length<2) return [];

    const hasNumber={}
    const newArray=[]
    
    // check value if not exist in hasNumber then add it with value = true
    arr1.forEach((value)=>{
        if(!hasNumber[value])hasNumber[value]=true
    })

    // loop arr2 and find value if exist key in hasNumber
    arr2.forEach((value)=>{
        if(hasNumber[value])newArray.push(value)
    })
    
    return newArray

}

console.log(similarity([1, 2, 3], [1, 2, 4]))