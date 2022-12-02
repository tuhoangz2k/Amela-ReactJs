// Bài 11: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
// sub_String("dog") => ["d","do","dog","o","og","g"]

const subString = (str) => { 
    const subset = [];
    for (let m = 0; m < str.length; m++) 
    {
      for (let n = m+1; n<str.length+1; n++) 
      {
        subset.push(str.slice(m,n));
      }
    }
    return subset;
}
console.log(subString('dog'))