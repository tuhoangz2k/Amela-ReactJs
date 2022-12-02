// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']

const namesArray=['Nam', 'Hoa', 'Tuấn']

const  sortStudents = (arr) => {
    if(!Array.isArray(arr)) throw new Error("parameter must be an Array")
    if(arr.length < 2)throw new Error('length of the array must great than 0')

    return arr.sort((a,b)=>{
        const newStringA=a[0].toLocaleLowerCase()
        const newStringB=b[0].toLocaleLowerCase()
        
        // convert from string to decode unicode
        return  newStringB.charCodeAt() - newStringA.charCodeAt()
    })
}

console.log(sortStudents(namesArray))