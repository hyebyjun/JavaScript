// let arr = [30, "배열", true]

// document.write(arr[0],"<br>")
// document.write(arr[1],"<br>")
// document.write(arr[2],"<br>")

// for (let i=0;i<arr.length;i++) {
//     document.write(arr[i],"<br>")
// }

// for (i in arr) {
//     document.write(arr[i],"<br>")
// }

let arr_1 = ['구디역', '사당역', '방배역', '강남역'];
let arr_2 = ['신사역', '압구정역', '광화문역'];

// 방법1
// for (i in arr_1) {
//     document.write(arr_1[i],"<br>")
// }

// // 방법2
// function printArr() {
//     document.write(arr_1)
// }

// arr_1.forEach(printArr) // 근데 왜 4번 나오냐

let result = arr_1.join('-');
document.write(result, '<br>');
document.write(typeof result, '<br>');
document.write(typeof arr_1, '<br>');

document.write(arr_1.sort(), '<br>');
// 근데 난 아직도 sort(arr_1)과의 차이를 몰겟다
document.write(arr_1.reverse(), '<br>');
