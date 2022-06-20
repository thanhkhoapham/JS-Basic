
//Chap 1:--------------------------- Toán tử --------------------------

//-------So sanh
var a = 0.1
var b = 0.2
if (a + b === 0.3)
    alert('co cai nich')
else {
    alert('Chinh xac: ' + a + " + " + b + ' = ' + (a + b) + ' :)')
    console.log(a + b)

    if ((a > 0 && b > 0) || a > 0 || b > 0)
        alert('True')
    else
        alert('false')
}
//----------------Toan tu so hoc
//-----------Cong, tru, nhan, chia, luy thua, chia lay du
/**var a = 2
var b = 3
a + b = 5
a - b =-1
a ** b = a ^ b -> 8
a / b 2 / 3
a % b chia lay du 2
*/
console.log(a % b) //  ---> 2
if (a % 2 !== 0)
    alert('Chann')
else
    alert('le')


// --- Tang, giam gia tri
//      a++,a--, a+=1, a=a+1

// -----------------Toan tu ++,--
// ---------Tien to, hau to (Prefix, postfix)
var a = 5
var output = a++;
console.log('out: ' + output)
console.log('a: ' + a)
//  ++a: Cộng 1 cho a, trả về a=a+1
//  a++: copy a=5, +1 cho a -> a=7, trả về a=7
var number = 6
var out = number++ + --number
6 + 6
//  trả về 6 sau đó ms tăng lên 7 khi đó --number gặp tiền tố nên 7-1 trả về 6
var a = 5
var number = ++a * 2 - a-- * 2
console.log(number)


//------------Toán tử gán
/**
Toán tử         Ví dụ           Tương đương
=               x = y             x = y
+=              x += y            x = x + y
-=              x -= y            x = x - y
*=              x *= y            x = x * y
/=              x /= y            x = x / y
**=             x **= y           x = x ** y
 */

//---------------Toán tử chuỗi\


// So sánh chuỗi giống nhau

var chuoia = 'chuoi 1'
var chuoib = 'chuoi 1'
if (chuoia == chuoib) {
    console.log('đúng dồi')
}
else {
    console.log('Sai bé ơi!!')
}


//Boolean

var booA = 12 < 11.1
if (booA)
    console.log(true)
else
    console.log(false)


//Toan tu logic
/**
1.      &&  - And
2.      ||  - Or
3.      !   - Not
 
 
//Kiểu dữ liệu trong Javascript
 
1. Dữ liệu nguyên thủy
    - Number
    - String
    - Boolean
    - Underfined
    - Null
    - Symbol
2. Dữ liệu phức tạp - Complex Data
    - Funtion: chứa phương thức thuộc tính
    - Object:
 */


//----String
var fullname = ' Thanh khoa \' ' //=>  Thanh khoa '
var fullname = " Thanh khoa \' "
//----Boolean
var boo = true
//----Underfined
var age;  //???
//Null
var isNull = null;   //nothing
//Symbol
var id = Symbol('id'); //unique
var id2 = Symbol('id');//unique
console.log(id === id2)   //false
console.log(id)         //Symbol(id)
//Funtion
var myFuntion = function (mes) {
    alert('hello may cung!!' + mes)
}
myFuntion('  Ahihi')
//Object
var myObject = {
    name: 'Khoa',
    age: 18,
    address: 'Go Vap',
    myFuntion: function () {
        alert('Hello ahihuhuhu')
    },
};
console.log('MyObject', myObject) //conmment thg MyObject do roi
var myArray = [
    'Java', 'Kotlin', 'React', 'C#'
];
console.log(myArray)


//Kiểm tra kiểu dữ liệu

var a = 12
var b = 'String everthing!!'
var c = Symbol('id');
var d = null
console.log(typeof a)  // => number
console.log(typeof b)
console.log(typeof c)
console.log(typeof d) // =>Object
// function, object



//Chap 2:--------------------------- Toán tử --------------------------x
/**
 ===  : so sanh value va type
 !==
 */
//Câu điều kiện và phép so sánh
/**
6 value trong so sánh
   0
   ''
   null
   underfined
   NaN
   false
 */
//----Toán tử và   &&   -----

var a = 1; var b = 2
var result = a < b && a < 0
console.log(result) // => a < 0 là false nên log ra false
var result = 'a' && 'b' && 'c'
console.log(result) // => in ra c

var result = null && 'a' && 'c'
console.log(result)// =>lấy ra null lưu vào result

var result = 'a' && 'b' && NaN
console.log(result)// =>lấy ra null lưu vào result

var result1 = 'a' && NaN && 'c'
var result = 'a' && 'b' && 'c'

if (result1)
    console.log('Điều kiện đúng')
else
    console.log('Điều kiện sai')// =>Lấy ra giá trị NaN lưu vào result - nằm trong 6 value trên nên trả false

if (result)
    console.log('Điều kiện đúng')// =>Không có giá trị thuộc 6 value trên nên lấy ra giá trị c lưu vào result trả true
else
    console.log('Điều kiện sai')


//------Toán tử hoặc  ||  -------
var result = 'A' || 'B' || 'C'
var result1 = null || 0 || 'C'

if (result)
    console.log("Điều kiện đúng")//Không có trong 6 giá trị trên lấy A 
else
    console.log("Điều kiện sai")

if (result)
    console.log("Điều kiện đúng")
else
    console.log("Điều kiện sai")//Không có giá trị đúng trả về false
console.log('Result: ',result) // => A
console.log('Result 1: ',result1)// => C
