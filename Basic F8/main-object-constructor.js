/**
    Object constructor
 */

function User(firstName, lastName, avartar) {
    this.firstName = firstName;
    this.lastName = lastName;
    User.avartar = avartar; // ~~ thay cho this
    this.getName = function(){
        return `${this.lastName} ${this.firstName}`
    }
}

var author = new User('Khoa', 'Thanh', 'Avatar')
var customer = new User('Linh', 'Ngo', 'Avatar')

console.log('1. Author: ', author)
console.log('2. Customer: ', customer)

//type
console.log('3. Mô tả constructor (Object constructor): ', author.constructor);
console.log('4. Boolean: ', author.constructor === User);
//Add thêm fields
author.title = 'Hello world!!'
customer.class = 'K13'
console.log('5. Author: ', author)
console.log('6. Customer: ', customer)
//Thông qua function
console.log('7. Gọi qua function trong object: ',author.getName());


/**
    Prototype - nguyên mẫu (Basic)
    Sử dụng khi nào?
*/
function User1(firstName, lastName, avartar) {
    this.firstName = firstName;
    this.lastName = lastName;
    User.avartar = avartar; 
    this.getName = function(){
        return `${this.lastName} ${this.firstName}`
    }
}

console.log('1a. Author - prototype(id): ', author)
// Thay đổi thuộc tính của constructor
User1.lastName = 'Hello may cung!!!'