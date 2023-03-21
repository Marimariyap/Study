// function BubbleSort(array){
//     for(var i=0; i<array.length; i++){
//         let swap;
//         for(var j=0; j<array.length; j++){
//             if(array[j] > array[j + 1]){
//                 swap= array[j];
//                 array[j]= array[j + 1];
//                 array[j + 1]= swap;
//             }
//         }
//         console.log(`${i}회전 : ${array}`);
//         if(!swap){
//             break;
//         }
//     }
//     return array;
// }
// console.log(BubbleSort([5, 4, 3, 2, 1]));
console.log("거품정렬");

// function InsertionSort(array){
//     for(var i=0; i<array.length; i++){
//         let cur= array[i];
//         let left= i - 1;

//         while(left>=0 && array[left] > cur){
//             array[left + 1] = array[left];
//             left--;
//         }
//         array[left + 1]= cur;
//         console.log(`${i}회전 : ${array}`);
//     }
//     return array;
// }
// console.log(InsertionSort([5, 4, 3, 2, 1]));
console.log("삽입정렬");

// function SelectionSort(array) {
//   for (var i = 0; i < array.length; i++) {
//     let minIndex = i;
//     for (var j = 0; j < array.length; j++) {
//       if (array[minIndex] > array[j]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       let swap = array[minIndex];
//       array[minIndex] = array[i];
//       array[i] = swap;
//     }
//     console.log(`${i}회전 : ${array}`);
//   }
//   return array;
// }
// console.log(SelectionSort([5, 4, 3, 2, 1]));
console.log("선택정렬");

// const quickSort = function (arr) {
//     if (arr.length <= 1) return arr;

//     const pivot = arr[0];
//     const left = [];
//     const right = [];

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] <= pivot) left.push(arr[i]);
//       else right.push(arr[i]);
//     }

//     const lSorted = quickSort(left);
//     const rSorted = quickSort(right);
//     return [...lSorted, pivot, ...rSorted];
//   };

// const arr = [4, -1, 0, -8, 0, 8, 91];
// console.log(quickSort(arr));
console.log("퀵정렬");

// function a(n) {
//   if (n <= 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   }
//   return a(n - 1) + a(n - 2);
// }

// function generateFibonaccis(n) {
//   var fib = [1, 1];
//   for (var i = 2; i < n; i++) {
//     fib[i] = fib[i - 2] + fib[i - 1];
//   }
//   return fib;
// }
// var fib = generateFibonaccis(15);
// console.log(fib.join(" "));
console.log("피보나치 수열");

// function binary_search(array, n) {
//   let lower_bound = 0;
//   let upper_bound = array.length - 1;

//   while (lower_bound <= upper_bound) {
//     let midpoint = (upper_bound + lower_bound) / 2;
//     let mid_search = array[midpoint];

//     if (n === mid_search) {
//       return midpoint;
//     } else if (n < mid_search) {
//       upper_bound = midpoint - 1;
//     } else if (n > mid_search) {
//       lower_bound = midpoint + 1;
//     }
//   }
//   return null;
// }
// console.log(binary_search([3, 4, 5, 6, 7, 8, 9], 6));
console.log("이진 검색");

// function a(array) {
//   let step = 0;
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       step++;
//       if (i !== j && array[i] === array[j]) {
//         return true;
//       }
//     }
//   }
//   console.log(step);
//   return false;
// }
// a([1, 5, 3, 9, 4]);
console.log("O(n^2)");

// let array = [3, 5, 8];
// let ex = [];
// for (var i = 0; i < array.length; i++) {
//   console.log(ex[array[i]]);
//   if (ex[array[i]] === 1) {
//     console.log(true);
//     console.log(ex[array[i]]);
//   }
// }
// console.log(false);
console.log("O(n^2) => O(n)");
