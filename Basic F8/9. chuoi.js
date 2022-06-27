/**
                CHUỖI TRONG JAVASCRIPT

1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2.  Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết Code
5. Template string ES6
 */
// 1.
let name0 = 'Siêu nhân' // => vẫn in ra bình thường typpe String
var name1 = new String('Siều nhân')// => vẫn in ra nhưng tạo thêm instance Object
console.log("name",name0)
console.log("name = new string",name1)
// 2. Backslash js
var fullName = 'Hello Mấy \'Cưng\'  \\' //=> in ra: Hello 'mấy cưng' \
console.log("Full name: ",fullName)
console.log(fullName.length) // => độ dài chuỗi 19
// 5. ES6
console.log (`Tôi là ${name0}`)
var myLove = ' Ahihu đồ ngốc!! hi'
/** 
                     LÀM VIỆC VỚI CHUỖI
                (Javascript string methods)
*/
// 1. Lenght
console.log(myLove.length)  // => 15

// 2. Find index
console.log(myLove.indexOf('hi')) // => 1 (A h i)->0 1 2, kh tìm thấy trả về -1
console.log(myLove.indexOf('hi',1)) // => 1 tính từ vị trí hi, hỗ trợ thêm vị trí tìm kiếm
console.log(myLove.lastIndexOf('hi')) // => 16 trả về thằng cuối cùng
console.log(myLove.search('đồ')) // giống như indexof

// 3. Cut string
console.log(myLove.slice(5,8)) // => đồ, trái sang phải
console.log(myLove.slice(-9,-5))// => ngốc, phải sang trái theo thứ tự 0 -1 -2 -3 ...

// 4. Replace
console.log(myLove.replace('hi','ha')) // => đổi ký tự hi đầu tiên thành ha
console.log(myLove.replace(/hi/g,'ha'))// => đổi toàn bộ ký tự hi đầu tiên thành ha thông qua biểu thức chính quy

// 5. Conver to upper case/lower case
console.log(myLove.toLowerCase())// chữ thường
console.log(myLove.toUpperCase())// chữ hoa

// 6.Trim
console.log(myLove.trim())// Loại bỏ khoảng trắng 2 đầu

// 7. Split - cắt chuỗi thành mảng
var arr='A, B, C, D'
console.log(arr.split(', ')) // => ['A','B','C','D']
console.log(myLove.split('')) 
//[' ', 'A', 'h', 'i', 'h', 'u', ' ', 'đ', 'ồ', ' ', 'n', 
//      'g', 'ố', 'c', '!', '!', ' ', 'h', 'i']

// 9. Get ac character by index
const myString = 'Thanh Khoa'
console.log(myString.charAt(4))  // h
console.log(myString.charAt(15)) // ''
console.log(myString[4])         // h
console.log(myString[15])        // underfined (không tìm thấy, không phải type of của nó)
console.log(typeof myString[4])  //string
console.log(typeof myString[15]) // underfined



