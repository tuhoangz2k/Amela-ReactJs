// Bài 10: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]


const symmetricDifference = (arr1,arr2) => {

    if(!Array.isArray(arr1)||!Array.isArray(arr2)) throw new Error('parameters must are arrays')
    if(arr1.length<2 || arr2.length<2) return [];

    const hasNumber={}
    const newArray=[]
    const subHasNumber={}

    const temp=arr1
    if(arr1.length>arr2.length){
        arr1=arr2
        arr2=temp
    }
    // check value if not exist in hasNumber then add it with value = true
    arr1.forEach((value)=>{
        if(!hasNumber[value])hasNumber[value]=true
        
    })

    // loop arr2 and find value if exist key in hasNumber
    arr2.forEach((value)=>{
        if(!hasNumber[value])newArray.push(value)
        if(!subHasNumber[value])subHasNumber[value]=true
    })
    
    // loop hasNumber if not have key in subHasNumber then push into newArray
    for (const key in hasNumber) {
        if (Object.hasOwnProperty.call(hasNumber, key)) {
            const isExist = subHasNumber[key];
            if(!isExist)newArray.push(Number.parseInt(key));
        }
    }

    return newArray
}

console.log(symmetricDifference([1, 2, 3,9, 16], [1, 2, 4,8]))