/**
    For loop
 */
for (var i = 0; i <= 3000; i += 200) {
    console.log(`I love you ${i}`);
}
//  Object for
console.log('\n1. For loop: ')
var myArray = ['Demo mang: ', 'Java', 'PHP', 'Dart', 'React']
for (let i = 0; i < myArray.length; i++) {
    console.log(`Phan tu ${i + 1}:`, myArray[i]);
}
// for each
console.log('\n2. For each: ')
for (var key in myArray) {
    console.log(`Phan tu ${(key + 1)}:`, myArray[key]);
}
// Ví dụ tách ký tự trong chuỗi
var chuoi = 'Linh'
for (var i of chuoi) {
    console.log(i);
}
// For/of loop : lấy phần tử, ký tự chuỗi 
// Mảng đối tượng
var myInfo = {
    name: 'Khoa',
    age: 18,
    address: 'Go Vap'
}
console.log('\n3. Trả về key: ')
console.log(Object.keys(myInfo)) // mảng các key: name, age, address
for (var value of Object.keys(myInfo)) {
    console.log(value); // Trả về key
}
console.log('\n4. Trả về value: ')
for (var value of Object.values(myInfo)) {
    console.log(value); // Trả về value
}
console.log('\n5. While(): ')
var j = 0;
while (j < 5) {
    console.log('hello ' + (j + 1));
    j++;
}
console.log('\n5. do(){..} While(): j = ' + j)
do {
    j++;//tăng lên 6 trước - cuối cùng tăng lên 12 thì dừng 
    console.log('hi ' + (j + 1));
} while (j < 11)
// Ứng dụng demo nạp thẻ
console.log('\n6. Demo ứng dụng nạp thẻ:');
var count = 0; var isSuccess = false;
do {
    count++;
    console.log('Nạp lần ' + count);
    //Thành công
    if (false)// thành công: true
        isSuccess = true
    if (count === 3)
        console.log('-----Chúc mừng mất thẻ-----');
} while (!isSuccess && count < 3)
// Continue/Break in loop
console.log('\nContinue/Break in loop');
for (var u = 0; u <= 20; u++) {
    if (u % 2 !== 0) continue;// kkhi u=8 tiếp tục lặp tới 9 thì gặp break
    console.log((u));
    if (u > 7) break;// thời điểm u=9 > 7
}