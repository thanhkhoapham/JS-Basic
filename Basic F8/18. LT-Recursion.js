/**
    Đệ quy

Khi sử dụng đệ quy:
    Loop tốn CPU
    Đệ quy tốn RAM
 */

var array = ['a', 'b', 'c', 'a', 'b', 'c', 'd', 'd', 'e'];
console.log("1. Set: ",new Set(array));
console.log("2. Set với ES6", [...(new Set(array))]);

/**
    1. Xác định điểm dừng
    2. Logic handle => Tạo ra điểm dừng
 */

function deQuy(num) {
    num --;
    if(num < 0) {
        // Dừng 
        // ...
        return;
    }
    deQuy(num);
}
deQuy(10)

//Count down
console.log("1. Count down: ");
function countDown(num) {
    if(num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(3);
//Loop: 
function loop(start, end, callback) {
    if(start < end) {
        callback(start);
        return loop(start +1, end, callback);
    }
}

var array = ['Javascript', 'PHP', 'Evatale'];
console.log("3. Loop: In mảng nhưng kh sử dụng các hàm có sẵn");
loop(0, array.length, function(index){
    console.log(array[index]);
});
/**
Bài toán tính giai thừa
    3 * 2 * 1 = ..
    100 * 99 * 98 *..* 1 =0
 */
console.log("4. Bài toán tính giai thừa: 10 * 9 *..* 1 = ..");

const giaiThua = (number) => {
    let output = 1;
    for(let i = number; i > 0; i--){

        output *= i;
    }
    return output;
}
console.log("10!: ", giaiThua(10));

//Đệ quy
const giaiThuaAvande = (num) => {
    if(num > 0)
        return num * giaiThuaAvande(num - 1);
    return 1;
}

console.log("100!: ", giaiThuaAvande(100));