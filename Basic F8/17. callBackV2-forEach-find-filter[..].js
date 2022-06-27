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
console.log(course);//trong prototype có chứa function khoaForEach

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
    console.log(course, index, array);
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

console.log("Lọc coin từ 300",filterCourse);
/**
                Key: value types and refernce types
 */
//Advance

Array.prototype.filterOfKhoaDepTrai = ((callback) => {
    var output = [];

    for(var i in this) {
        if(this.hasOwnProperty(i)){
            var result = callback(this[i], i, this)
            if(result) {
                output.push(this[i]);
            }
        }
    }

    return output;
})

var filterCourseOfKhoa = courseForFilter.filterOfKhoaDepTrai((courseForFilter, index, array) => {
    return courseForFilter.coin > 399;
});
console.log("Lọc coni từ 300 với filter random", filterCourseOfKhoa);