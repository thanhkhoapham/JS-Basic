/**
Math object
    - Math.PI           số Pi
    - Math.round()      Làm tròn
    - Math.abs()        Giá trị tuyệt đối
    - Math.ceil()       Làm tròn trên
    - Math.floor()      Làm tròn dưới
    - Math.random()     Trả về số ngẫu nhiên nhỏ hơn 1
    - Math.min()        Trả về số bé nhất
    - Math.max()        Trả về số lớn nhất
    ...
 */
console.log("PI: ", Math.PI);
console.log("Round: làm tròn: 1.5: ", Math.round(1.5));
console.log("Giá trị tuyệt đối: -1.5: ", Math.abs(-1.5));
console.log("Làm tròn trên: 1.1: ", Math.ceil(1.1));
console.log("Làm tròn dưới: 1.1: ", Math.floor(1.1));
console.log("Số ngẫu nhiên nhỏ hơn 1:", Math.random(1.1));
console.log("Số ngẫu nhiên:", Math.floor(Math.random() * 10000));
//Tạo số ngẫu nhiên demo game

var random = Math.floor(Math.random() * 5)
var game = Math.floor(Math.random() * 100)
var arr = [
    'Huệ',
    'Hoa',
    'Lan',
    'Vạn Thọ',
    'Hồng'
]
console.log('(Tạo người yêu mỗi F5) người yêu tui: ', arr[random])
console.log(game)

if (game <= 10 && game >= 0) {
    console.log('0-10');
}
else if (game <= 50 && game >= 11) {
    console.log('11-50');
}
else if (game <= 99 && game >= 51) {
    console.log('51-99');
}
else
    console.log('Thành công');

var arrNum = '1 2 3 45 87 8 -9' 
console.log('Số bé nhất: 1 2 3 45 87 8 -9', arrNum.split('',a));