// Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
// Lưu ý: Truyền dấu phân tách làm đối số.
// getCurrentDate("/") => 17/08/2020

const getCurrentDate=(str:string):string=>{
    const now=new Date();
    const day=now.getDate()
    console.log(now.getDay())
    const month=now.getUTCMonth()+1
    const year=now.getFullYear()
    return `${day}${str}${month}${str}${year}`
}
// console.log(getCurrentDate("/"))


// Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
// getDaysInMonth(8, 2020) => 31
const getDaysInMonth=(month:number,year:number):number=>{
    return new Date(year,month,0).getDate()
}
// console.log(getDaysInMonth(8, 2020))

// Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
const checkIsWeekend=(date: string):boolean => {
    const day= new Date(date).getDay()
    console.log(day)
    return (day===0||day===6)?true:false
}
// console.log(checkIsWeekend('12/17/2022'))

// Bài 4: Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút
    const returnMinutes=():number=>{
        const now=new Date()
        const hour=now.getHours();
        const minutes=now.getMinutes()
        return hour*60+minutes
    }

// Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.
    const computedCrossDayByNow=():number=>{
    const now=new Date().getTime();
    const JanuaryFirst=new Date(new Date().setDate(1)).setMonth(0)
    let totalDay=(now-JanuaryFirst) /60/60/24/1000-1
    return totalDay
}
// console.log(computedCrossDayByNow())

// Bài 6: Viết chương trình JavaScript để tính tuổi.
// calculate_age(new Date(1982, 11, 4))

const calculateAge=(year:number,month:number,day:number):number => {
const now=new Date()
const yearNow=now.getFullYear()
const monthNow=now.getMonth()
const dayNow=now.getDate()
let age=yearNow-year;
if(month>monthNow){
    age--
} else if(month===monthNow&&day>dayNow){
    age--
}
return age
}
// console.log(calculateAge(2000,12,22))

// Bài 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
// let dt = new Date();
// startOfWeek(dt)

const getStartOfWeek = () => {
    const now=new Date()
    const dayNow=now.getDay()
    if(dayNow===1)return now
    console.log(now.getDate())
    const timeNow=now.getTime()
    const crossDay=-(1-dayNow)
    const startOfWeek=new Date(timeNow-(crossDay*1000*60*60*24))
    console.log(timeNow)
    return startOfWeek.getDate()
}

// console.log(getStartOfWeek())

// Bài 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
// dt = new Date();
// endOfMonth(dt);

const getEndOfMonth = (year:number,month:number) => {
    month++
   let newStr= month.toString()
    if(newStr.length===1)newStr=`0${newStr}`
    if(newStr==='13'){
        year++;
        newStr='01'
    }
    const endOfMonth= new Date(`${year}-${newStr}-01`).getTime()-(1000*24*60*60)
    return new Date(endOfMonth)
}
console.log(getEndOfMonth(2022,12))

// Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch
  const  countDownNewYear=():string=>{

    const newYear=new Date(new Date().getFullYear()+1,0,1,0,0,0).getTime()
    const dateNow=new Date().getTime()
    let restTime=newYear-dateNow
    const second=1000
    const minute=second*60
    const hour=minute*60
    const day=hour*24
    const d = Math.floor(restTime / (day));
    const h = Math.floor((restTime % (day)) / (hour));
    const m = Math.floor((restTime % (hour)) / (minute));
    const s = Math.floor((restTime % (minute)) / (second));
    return `second:${s} - minute:${m} - hour:${h} - day:${d}`;

  }
  setInterval(()=>{
    console.log(countDownNewYear())
  },1000)

// Bài 10: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000.
 
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''

// Bài 11. Viết hàm reset data. Input là object. Output là object sau khi được reset 
