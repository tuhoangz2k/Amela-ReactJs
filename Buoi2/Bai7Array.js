// Bài 7: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
// sample([3, 7, 9, 11]) => 3
// sample([3, 7, 9, 11]) => 9

const randomNumberInArray =(arr) => {
    if(!Array.isArray(arr)) throw new Error("parameter must be an Array")
    if(arr.length < 2)return [];
    if(arr.length===1) return arr[0]

    const radomIndex= Math.floor(Math.random()*arr.length)
    return arr[radomIndex]
}

console.log(randomNumberInArray([3, 7, 9, 11]))