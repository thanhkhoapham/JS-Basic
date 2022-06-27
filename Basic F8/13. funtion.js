/**
1. Hàm 
    - Một khối mã
2. 
    - Loại hàm
    - Tự định nghĩa
3. 
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
4. Tạo hàm đầu tiên
5. Arguments: chỉ gọi trong function
*/

function showInfo(mes) {
    alert('Hello funtion: ' + mes)
}
showInfo('Ahihi')

function showFuntion() {
    console.log(arguments)
}
console.log('Arguments:  ')
showFuntion('Log1', 'Log2', 'Log3') // Lưu zo mảng arguments
console.log(1, 2, 3, 4, 5, 6)

function writeLog() {
    var myString = ''
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}
writeLog('Log 1', 'Log 2', 'Log 3')
//Return funtion
var isconfirm = confirm('HEllO?')
console.log('Giá trị confirm: ',isconfirm) // OK:Cancel ? true:false
function demo(a, b) {
    alert('HHH')
    a + b;
    // return [a,b]
    // return a+b;
}
demo(1, 2)
// Định nghĩa function
function showMessage(){
    function showMessage2(){
        console.log('Messages 2')
    }
    showMessage2()
}
showMessage()

