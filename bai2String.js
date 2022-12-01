function shortenString(str){
    if(typeof str !== 'string')return 'invalid parameter';
    if(str.length<=8)return str;
    let newStr=str.slice(0,8)+'...';
   return newStr
}

console.log(shortenString('Xin chào các bạn'));