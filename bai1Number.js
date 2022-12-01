// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

const caculateVolumeBall = (radius) => {
    if(typeof radius !== 'number') return 'invalid Radius';
    return( (4 * Math.PI) * (radius*radius)) / 3
}
console.log(caculateVolumeBall(1));