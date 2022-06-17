/**
Callback?
    Là hàm (function) được truyền qua đối số
    khi gọi hàm khác

    1. Là hàm
    2. Được truyền qua đối số
    3. Được gọi lại
    --> function gọi function
 */
function myFunction(param) {
    param('Học porn hud');
}

function myCallback(value){
    console.log('value ', value);
}
 myFunction(myCallback);
///
var courses = [
    'JS',
    'Java',
    'Kotlin',
];

let htmls = courses.map((course) => {
   return `<h2>${course}</h2>`;
});

console.log(htmls.join('\n'));

// Vòng đời của map

Array.prototype.map2 = (callback) => {
    var output = [];
    var arrayLenght = this.length;
    for(var i = 0; i < arrayLenght; ++i) {// for(var i= 0; i < arrayLenght; i++)
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var htmls2 = courses.map2((course) => {
    return `<h2>${course}</h2>`; 
});
console.log("\nVòng đời của map");
courses.map2((course, index) => console.log("Where are you??",course,index));
console.log(htmls.join('\n'));