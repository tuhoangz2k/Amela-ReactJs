// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
// ['aba', 'aa', 'ad', 'c', 'vcd'] thì kết quả trả về ['aba', 'vcd'].

const newArrayWithMaxLength = (arr) => {
    if(!Array.isArray(arr)) throw new Error("parameter must be an Array")
    if(arr.length < 2)return [];
    if(arr.length===1) return [...arr]
    
    let maxLength=0;
    // find maxLength
    arr.forEach((value) => {
        if(value.length>maxLength)maxLength=value.length;
    })

    return arr.filter((value)=>{
        return value.length ===maxLength
    })    
}

console.log(newArrayWithMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))