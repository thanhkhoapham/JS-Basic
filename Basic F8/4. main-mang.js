/**
1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra data type?
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
 */

/** */
// 1. Mảng có thể chứa bất kỳ dữ liệu gì
var arr = [
    'Java',
    'Kotlin',
    'React',
    15,
    null,
    NaN,
    function () { },
    {},
]
var arr1 = new Array(
    'Java',
    'Kotlin',
    'React',
    15,
    null,
    NaN,
    function () { },
    {},
)// Hạn chế tốn time, memory
console.log(arr)
//Data type
console.log('Type {}:',typeof {})          // Object
console.log('Type []:',typeof [])          // Object
//Check data array
console.log('Check array []: ',Array.isArray([]))  // true
console.log('Check array {}: ',Array.isArray({}))  // false
console.log('Check array new Array(): ',Array.isArray( 
    new Array('A','B')
))                              // true
//lenght
console.log('Lenght: ',arr.length)         //8
//phần tử index
console.log('In vị trí [2]: ',arr[2])             //React