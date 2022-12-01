
function checkStringExist(str1,str2){
    if(typeof str1 !== "string"||typeof str2 !== "string")return "param is invalid"
    return str1.includes(str2)
}

console.log(checkStringExist('Amela A Beta','B'));