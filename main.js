
function mergeSort(arr){
    if(!Array.isArray(arr))return 'parameter must is an array';
    if(arr.length===1)return arr;
    const middle=Math.floor(arr.length/2)
    const left=mergeSort(arr.slice(0, middle))
    const right=mergeSort(arr.slice(middle))
    return merge((left),(right))
}

function merge(arrLeft,arrRight){
    const newArr = [];
    let indexLeft=0;
    let indexRight=0;

    while(indexLeft<arrLeft.length&&indexRight<arrRight.length){
        if(arrLeft[indexLeft]>arrRight[indexRight]){
            newArr.push(arrLeft[indexLeft])
            indexLeft++
        } else {
            newArr.push(arrRight[indexRight])
            indexRight++
        }
    }

    return newArr.concat(arrLeft.slice(indexLeft)).concat(arrRight.slice(indexRight))
}



function sortArrayByReduce(arr){
    if(!Array.isArray(arr))throw new Error("parameter must is an array")
    const newArr=arr.reduce((sortArr,currentValue,idx) => {
        sortArr.push(currentValue)
        sortArr.sort((a,b) => {
            return a-b
        })
        return sortArr

    },[])
    
    return newArr
}


console.log(sortArrayByReduce([1,5,3,7,2,4]))


function uppercase(str) {
    if(typeof str !== 'string') throw new Error('parameter must be a string')
    str.trim()
    str.toLocaleLowerCase
    let flag=false;
    for(var i = 0; i < str.length; i++) {
        if(i===0) str[i] = str[i].toUpperCase();
        if(flag){
            str[i] = str[i].toUpperCase();
            console.log(str[i].toUpperCase())
            flag=false
        }
        if(str[i]===' ')flag=true
    }
    return str
}

console.log(uppercase('mot hai ba'))