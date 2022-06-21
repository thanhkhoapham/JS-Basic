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

//ForEach
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
