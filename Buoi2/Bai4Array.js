// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

function SumOfDivisorFive(start,end){
    if(typeof start!=='number' || typeof end!=='number')throw new Error('start and end must are numbers')
    
    let sum=0;
    for(let i=start; i<=end; i++){
        if(i%5===0)sum+=i
    }
    return sum
}

console.log(SumOfDivisorFive(0,100))