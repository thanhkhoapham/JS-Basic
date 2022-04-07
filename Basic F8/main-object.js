/**
    Object
 */

var myInfo = {
    name: 'Khoa',
    address: 'Ha Noi, VN',
    'phone-number': '451254' // cach nhau - thi bo trong ''
}

myInfo['e-mail'] = 'khoa@thanh.com'
myInfo.fax = '54512545'

console.log('0. Object: ', myInfo);

var mykey = 'address'
var ageKey = 'age'
var myInfo2 = {
    name: 'Khoa',
    address: 'Ha Noi, VN',
    'phone-number': '451254', // cach nhau - thi bo trong ''
    [ageKey]: 18 //không dùng [] sẽ ngầm định là field là ageKey
}
console.log('1. Lấy 1 thuộc tính property \'name\': ', myInfo.name)
console.log('2. Lấy thuộc tính thông qua [\'name\']: ', myInfo['address'])
console.log('3. Lấy thuộc tính thông qua [\'mykey\']: ', myInfo['mykey'])//sẽ đi tìm trong object nên in ra underfined
console.log('4. Lấy thuộc tính thông qua mykey: ', myInfo[mykey])

// Nhận thuộc tính thông qua biến
console.log('5. Lấy thuộc tính thông qua property age(18) ? ageKey(18) : ', myInfo2)
// Xóa field 
delete myInfo2['phone-number']
delete myInfo2.address
console.log('6. Xóa field phong-number, address:', myInfo2)
//Thông qua funtion
var myInfo3= {
    name: 'Khoa',
    address: 'Ha Noi, VN',
    'phone-number': '451254' ,
    getName: function() {
        return this.name; // ~~ myInfo3.name
    }
}
console.log('7.Thông qua funtion: ', myInfo3.getName())
console.log('type: ',typeof myInfo3)
console.log('type: ',typeof myInfo3.getName())
console.log('type: ',typeof myInfo3.getName)
/**
    Function ---> Phương thức / method
    Others   ---> thuộc tính / property
 */