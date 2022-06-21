/**
    Vòng lặp lồng nhau - Nested loop
 */

var myArray = [
    [1, 2, 3, 4],
    ['A', 'B', 'C', 'D'],
    [true, false, NaN, null, 0]
]
for (var i = 0; i < myArray.length; i++) {
    console.log(`Mảng con ${(i+1)}:`);
    for (var j = 0; j < myArray[i].length;j++) {
        console.log(`Element: ${myArray[i][j]} in ${i+1} `);
    }
}