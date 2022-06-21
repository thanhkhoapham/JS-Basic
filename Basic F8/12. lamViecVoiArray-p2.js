/**
    Array methods:
        forEach()
        every()     :boolean
        some()
        find()
        filter()
        map()
        reduce() : Nhận về giá trị duy nhất
            Reduce là một phương thức sẵn có được sử dụng
            để thực thi một hàm lên các phần tử của mảng (từ trái sang phải)
            với một biến tích lũy để thu về một giá trị duy nhất.
            Là một phương thức quan trọng hay sử dụng trong lập trình hàm.
        includes method: kiểm tra chuỗi ? TRUE : FLASE
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


var totalES6 = course.reduce((a, b) => a + b.coin, 0);
console.log("ES6: ", totalES6);

var i = 0;
var totalCoin = course.reduce(function (total, arr) {
    i++; console.log(i, total, course);
    return total + arr.coin;
}, 0)//Init value
console.log("Total reduce: ", totalCoin);

var number = [100, 200, 100, 300, 504]
var demoTotal = number.reduce(function (t, num) {
    return t + num;
});//Lấy giá trị đầu là 100 nếu không có init
console.log("Total nember: ", demoTotal);

//Includes method
var title = "Hello kotlin"
var arr = ['Anh', 'Ông', 'Em', 'Ú', 'Ì']
console.log("6. Include: ", title.includes('kotlin', 0));
//5-3 = 2 nắt đầu từ vị trí 2: Em
console.log("Array: ", arr.includes('Em', -3));
// bắt đầu từ vị trí nào, mặc định là 0

//  Flat - "Làm phẳng" mảng từ Depth aray - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]; // có thêm mảng nhỏ bên trong

var flatArray = depthArray.reduce(function (flatOut, depthItem) {
    return flatOut.concat(depthArray);
}, []);
console.log("Làm phẳng mảng depth: ", flatArray);
//  Demo reduce
var topics = [
    {
        topic: "30-04-2022",
        courses: [
            {
                id: 1,
                title: "Ở nhà ngủ"
            },
            {
                id: 2,
                title: "Chơi game"
            }
        ]
    },
    {
        topic: "01-05-2022",
        courses: [
            {
                id: 3,
                title: "Code"
            },
            {
                id: 4,
                title: "Đi tán gái"
            }
        ]
    }
]
var newCourse = topics.reduce(function (course, topic) {
    return course.concat(topic.courses);
}, []);
console.log("Mảng mới: ", newCourse);

//  Map newCourse ra html(demo)
var htmls = newCourse.map(function (course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>${course.id}</p>
        </div>
    `;
});
console.log(htmls.join(''));

//Method include
var title = 'A complete log of this run can be found in'
console.log("Kiểm tra chuỗi - include: ", title.includes('this run'));
var arr = ['Ai', 'Bik', 'Cut']
console.log('Kiểm tra phần từ mảng: ', arr.includes('Bik',-2))// 3 - 2 = 1 index là 1

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

