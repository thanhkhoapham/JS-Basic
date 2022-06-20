//------------------------------ Ham co ban-----------------------
//-------alert
let fullName = 'Pham Thanh Khoa'
let age = ": 26 tuoi"
alert(fullName + ' ' + age)

//------console
console.log('Hello World!!')
console.warn(fullName)
console.error(age)


//------comfirm - Bat cua so thong bao co ok va cancel
confirm('Xác nhận đủ tuồi!!')

//------prompt - bat len cua xo, co input (giong aler + input)
prompt("Xác nhận tuổi!!")

//------setTimeout - set time thong bao sau 5s
setTimeout(function () {
     alert('Thong bao')
 }, 5000)



//------setInterval -  set dinh ky theo thoi gian, chay lien tuc
setInterval(() => {
     console.log('Khoa dep trai gap ' + Math.random())
 }, 1000)



