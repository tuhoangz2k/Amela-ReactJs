// Bài 8: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

const randomArray = (arr) => {
    const newArray=[...arr];

    for (let i=0; i<newArray.length;i++) {
        const radomIndex= Math.floor(Math.random()*newArray.length)
        const temp=newArray[radomIndex];
        newArray[radomIndex]=newArray[i]
        newArray[i]=temp;
    }

    return newArray
}

console.log(randomArray([3, 7, 9, 11,5,6]))