/**  
    1. forEach
    2. find 
    3. filter
    4. some 
    5. every
    6. reduce
*/

var course = [
    'JS',
    "JSP",
    "JSX",
    "Java",
    "JAV"
];

course.length = 10;
for(var i in course){//Bỏ qua lenght
    console.log(parseInt(i)+1,course[i]);
}

// ===================== ForEach =====================
Array.prototype.khoaForEach = function(callback) {
    for(var i in this) {
        console.log(i);
    }
}
course.khoaForEach((course, index, array) => {
    console.log(course, index, array);
});
console.log("0. ForEach===", course);//trong prototype có chứa function khoaForEach

Array.prototype.khoaForEach = function(callback) {
    for(var i in this) {
        console.log(i, this.hasOwnProperty(i));
    }
}
course.khoaForEach((course, index, array) => {
    console.log(course, index, array);
});// khoaForEach không nằm trong forEach nó nằm ở proto, nên có thể loại bỏ

//Loại bỏ element không thuộc Array
console.log("======Loại bỏ element không thuộc Array");
Array.prototype.khoaForEach((callback) => {
    for(var i in this){
        if(this.hasOwnProperty(i)){
            callback(this[index], index, this)
        }
    }
});
course.khoaForEach((course, index, array) => {
    console.log("1. ",course, index, array);
})

// ===================== Filter =====================
console.log("FILTER");
var courseForFilter = [
    {
        name: "Kotlin",
        coin: 100
    },
    {
        name: "React JS",
        coin: 200
    },
    {
        name: "JavaScript",
        coin: 300
    },
    {
        name: "Java",
        coin: 400
    },
    {
        name: "Git Hub",
        coin: 500
    },
    {
        name: "Porn Hud",
        coin: 600
    }
]
/**
    Không lọc qua array rỗng
 */
var filterCourse = courseForFilter.filter((course, index, array) => {
    return course.coin >= 300;
});

console.log("2. Lọc coin từ 300",filterCourse);
/**
                Key: value types and refernce types
*/
// ===================== some =====================
/**
    Duyệt các phần tử, trả về true/false nếu có ít nhất 1 phần tử thỏa mãn điều kiện
 */
var courseForSome = [
    {
        name: "Kotlin",
        coin: 100,
        status: false,
        progress: true
    },
    {
        name: "React JS",
        coin: 200,
        status: false,
        progress: true
    },
    {
        name: "JavaScript",
        coin: 300,
        status: false,
        progress: true
    }
]

var result = courseForSome.some((course, index, array) => {
    return course.status    //True nếu có ít nhất 1 status true
});

console.log("3. Some:  ", result);

// ===================== every =====================
/**
    Ngược lại với every, trả về true/false nếu tất cả phẩn tử thõa mãn điều kiện
 */

var result = courseForSome.every((course, index, array) => {
    return course.progress === true    //True nếu tất cả progress true
});

console.log("4. Every:  ", result);