/**
        Kiểu số (Number) trong javascript
1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    - Kiểm tra data type
2. Làm việc với Number
    - To string
    - To fixed
 */


var age=23.52323423423
var PI =3.1413

var otherNumber= new Number(9)
// Hạn chế vì nó tạo ra đối tượng tốn memory, phức tạp => kiểu Object

var result= 20/ 'ABC'
//type number
// return NaN, nhưng type là số không hợp lệ 
console.log(isNaN(result)) //true

// 2. conver số sang string
console.log(typeof age.toString()) // string
//làm tròn toFix()
console.log(age.toFixed())  // 24 
console.log(age.toFixed(2)) // 23.52
