/**
    Array methods:
        forEach()
        every()     :boolean
        some()
        find()
        filter()
        map()
        reduce() : Nhận về giá trị duy nhất
 */
var course = [

    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'Java',
        coin: 250
    },
    {
        id: 3,
        name: 'Kotlin',
        coin: 250
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 100
    },
    {
        id: 5,
        name: 'HTML,css',
        coin: 222
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 333
    }

]

console.log("0. For Each", isFree);
course.forEach(function (course, index) {
    console.log(index, course);
})// duyệt qua từng phần tử

//Ứng dụng thường để kiểm tra điều kiện trước để kích hoạt điều kiện tiếp theo 
// như mở khóa mới sao khi đã hoàn thành khóa cũ
var isFree = course.every(function (course, index) {
    return (!!course.name) || (course.coin === 0);// Kiểm tra các khóa học mà coin = 0.
})
console.log("1. every: Kiểm tra có khóa free nào không!: ", isFree);

//Kiểm tra và trả về 1 obj
var check = course.find(function (course, index) {
    return course.name === 'Ruby';//Kiểm tra khóa học có thì in ra luôn
})
console.log("2.find: Kiểm tra có khóa Ruby!: ", check);

//Kiểm tra tất cả obj
var checkfilter = course.filter(function (course, index) {
    return course.name === 'Ruby';//Kiểm tra khóa học có thì in ra luôn
})
console.log("3.filter: Kiểm tra có những khóa Ruby nào không: ", checkfilter);

function courseHandler(course, index, originArray) {
    //không return trả về số lượng element trong course underfined
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray
    }
}

function courseHandlerName(course) {
    //không return trả về số lượng element trong course underfined
    return `<h2>${course.name}</h2>`;

}

var newCourse = course.map(courseHandler) // Có 3 tham số tùy lựa chọn (item, index, originArray)
console.log("4. Array Object", newCourse)

var newCourse = course.map(courseHandlerName) // Có 3 tham số tùy lựa chọn (item, index, originArray)
console.log("5. Array name", newCourse.join(''))//Nối mảng thnahf string

//Reduce nhận tổng giá coin trong khóa học
var totalCoint = 0;
for (var i of course) {
    totalCoint += i.coin;
}
console.log(`Tổng coin không reduce: ${totalCoint}`);


//origin:course
var i = 0;
function coinTotal(accumlator, currentValue, currentIndex, originArray) {
    i++;
    var total = accumlator + currentValue.coin;
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ ': accumlator, // Giá trị khởi tạo bằng 0
        'Curent': currentValue.coin,
        'Total': total,
        'Index': currentIndex,
        'OriginArray': originArray

    });
    return total;
}
var totalReduce = course.reduce(coinTotal, 0) //Giá trị khởi tạo bằng 0
console.log('Total: ', totalCoint)

var totalES6 = course.reduce((a, b) => a + b.coin,0);
console.log("ES6: ", totalES6);

var i=0;
var totalCoin = course.reduce(function(total,arr){
    i++;console.log(i,total,course);
    return total+arr.coin;
},0)//Init value
console.log("Total reduce: ", totalCoin);

var number = [100,200,100,300,504]
var demoTotal= number.reduce(function(t,num){
    return t+num;
});//Lấy giá trị đầu là 100 nếu không có init
console.log("Total nember: ", demoTotal);