/**
Làm việc với Array : javascript array methods

1. To string
2. Join
3. Pop - Xóa element cuối mảng, trả về phần tử đã xóa
4. Push
5. Shift - Ngược lại pop
6. Unshift - Thêm phần tử mới đầu mảng
7. Splicing
8. Concat - hợp nhất lại 2 mảng
9. Slicing
 */
var arr = [
    'Java',
    'Kotlin',
    'React',
]
// 1.
console.log('1.  Chuyển sang to string (chuỗi): ', arr.toString())// Java,Kotlin,React, type: string
// 2. 
console.log('2.  Join() : ', arr.join('-')) // Java-Kotlin-React
// 3. 
console.log('3.  Xóa phần từ cuối mảng: ', arr.pop()) // Xóa React
// 4. Thêm phần tử cuối mảng
console.log('4.  Thêm phần tử vào mảng: ', arr.push('Hook', 'Javascript'))
console.log('Mảng thêm mới: ', arr)
// 5.
console.log('5.  Xóa phần từ đầu mảng: ', arr.shift()) // xóa sạch sẽ underfined
console.log('Mảng thêm mới: ', arr)
// 6.
console.log('6.  Thêm phần tử mới vào mảng: ', arr.unshift('Java 8', 'JSX'))// Thêm 2 phần tử này vào đầu mảng, tăng lenght
console.log('Mảng thêm mới: ', arr)
// 7.
var arrSplice = [
    'Java',
    'Kotlin',
    'React',
]
arrSplice.splice(1, 2) // xóa mảng tại vị trí 1, xóa đi 2 phần tử
console.log('7.  Splide xóa 2 phần tử sau index 1" ', arrSplice) // Còn lại Java
arrSplice.splice(1, 0, 'JSP')// tại vị trí 1 không xóa chèn vào JSP
console.log('Splide không xóa phần tử sau index 1, chèn JSP vào sau đó: " ', arrSplice)
arrSplice.splice(1, 1, 'JSX', 'TS') // Xóa 2 phần tử sau vị trí 1 (Java) sau đó chèn vào 2 phàn tử mới
console.log('Splide xóa 1 phần tử sau index 1, chèn 2 elements JSX, TS vào', arrSplice)
// 8.
console.log('8.  Hợp nhất hai mảng [' + arr + '] với [' + arrSplice+']', arr.concat(arrSplice))
console.log('Mảng sau khi concat: ',arr)
// 9.
console.log('9.  Slide: ',arr.slice(0))// copy chuỗi
console.log('Slide -2 cắt lấy chuỗi phía sau 2 phần tử: ',arr.slice(-2))
