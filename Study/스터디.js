// 1. Two Sum

// let nums = [3, 3],
//   target = 6;
// let answer = 0;
// for (var i = 0; i < nums.length; i++) {
//   for (var j = 0; j < i; j++) {
//     if (nums[i] + nums[j] === target) {
//       answer = [j, i];
//     }
//   }
// }
// console.log(answer);

// 26. Remove Duplicates from Sorted Array

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// nums = nums.filter((e, i) => {
//   return nums.indexOf(e) === i;
// });
// console.log(nums);

// nums = new Array(...new Set(nums));
// console.log(nums);

// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] === nums[i + 1]) {
//     nums.splice(i, 1);
//     i--;
//   }
// }
// console.log(nums);

// 136. Single Number

// let nums = [4, 1, 2, 1, 2];

// let answer = 0;
// for (var i = 0; i < nums.length; i++) {
//   answer = answer ^ nums[i];
//   console.log(answer);
// }
// console.log(answer);
// console.log(nums.reduce((e, i) => e ^ i, 0));
// nums.sort((a, b) => a - b);
// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] === nums[i + 1]) {
//     i++;
//   } else {
//     console.log(nums[i]);
//   }
// }

// 169. Majority Element

// let nums = [3, 2, 3, 3];
// if (nums.length === 1) {
//   console.log(nums[0]);
// } else {
//   nums.sort((a, b) => a - b);
//   let nums_2 = nums.slice(0, nums.length / 2);
//   let nums_3 = nums.slice(nums.length / 2, nums.length);
//   console.log(nums_3);
//   if (nums_2[0] !== nums_2[-1]) {
//     console.log(nums_3[0]);
//   } else if (nums_3[0] !== nums_3[-1]) {
//     console.log(nums_2[0]);
//   }
// }

// 26. Remove Duplicates from Sorted Array
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let i = 0;
// for (let j = 0; j < nums.length; j++) {
//   if (nums[j] != nums[i]) nums[++i] = nums[j];
// }
// console.log(++i);

// let l;
// let r = 1;
// while (r < nums.length && nums[r] !== nums[r - 1]) {
//   r++;
// }

// l = r;
// r++;

// while (r < nums.length) {
//   if (nums[r] != nums[r - 1]) {
//     nums[l] = nums[r];
//     l++;
//   }
//   r++;
// }
// return l;

// 1. Two Sum recode
// let nums = [3, 3],
//   target = 6;

// let numMap = new Map();

// for (var i = 0; i < nums.length; i++) {
//   let min = target - nums[i];

//   if (numMap.has(min)) {
//     console.log([i, numMap.get(min)]);
//   }
//   numMap.set(nums[i], i);
// }

// let s = "MCMXCIV";
// let symbol = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
// // console.log(s);
// let sum = 0;
// for (var i = 0; i < s.length; i++) {
//   if (symbol[s[i]] < symbol[s[i + 1]]) {
//     sum += symbol[s[i + 1]] - symbol[s[i]];
//     i++;
//   } else {
//     sum += symbol[s[i]];
//   }
// }
// console.log(sum);

// let nums = [1, 2, 3, 4];
// let numsMap = new Map();

// for (var i = 0; i < nums.length; i++) {
//   if (numsMap[nums[i]]) {
//     numsMap[nums[i]]++;
//     console.log(true);
//   } else {
//     numsMap[nums[i]] = 1;
//   }
// }
// console.log(numsMap);

// let nums = [3, 0, 1];
// let arr = [];

// for (var i = 0; i <= nums.length; i++) {
//   arr.push(i);
// }
// console.log(arr.reduce((a, c) => a + c, 0) - nums.reduce((a, c) => a + c, 0));

// let nums = [0, 1, 0, 3, 12];
// let i = 1;
// let j = 0;
// while (i < nums.length) {
//   if (nums[j] === 0 && nums[i] !== 0) {
//     nums[j] = nums[i];
//     nums[i] = 0;
//     j++;
//   } else if (nums[j] !== 0) {
//     j++;
//   }
//   i++;
// }
// console.log(nums);

// let nums1 = [1, 2],
//   nums2 = [1, 1];

// let numMap = new Map();
// let arr = [];

// nums1.forEach((i) => {
//   if (numMap.has(i)) {
//     numMap.set(i, numMap.get(i) + 1);
//   } else {
//     numMap.set(i, 1);
//   }
// });

// nums2.forEach((i) => {
//   if (numMap.has(i)) {
//     if (numMap.get(i) === 1) {
//       numMap.delete(i);
//     } else {
//       numMap.set(i, numMap.get(i) - 1);
//       arr.push(i);
//     }
//   }
// });
// console.log(arr);

// let prices = [7b, 1s, 5, 3, 6, 4];

// let buy = 0; // index
// let sell = 1;
// let max = 0;

// while (buy < prices.length) {
//   if (prices[buy] < prices[sell]) {
//     let diff = prices[sell] - prices[buy]; //-6
//     max = Math.max(max, diff); // 0 > -6
//   } else {
//     buy = sell; // sell 0; buy 1;
//   }
//   sell++; //sell 1; -
// }

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// let maxArea = 0;
// let left = 0;
// let right = height.length - 1;

// while (left < right) {
//   let width = right - left;

//   maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * width);

//   if (height[left] <= height[right]) {
//     left++;
//   } else {
//     right--;
//   }
// }

// var missingNumber = function (nums) {
//   const hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[nums[i]]) {
//       hash[nums[i]]++;
//     } else {
//       hash[nums[i]] = 1;
//     }
//     if (!hash[j]) return j;
//   }
//   for (let j = 0; j <= nums.length; j++) {

//   }
// };

// let n = 2;

// let set = new Set();
// let arr = n;
// while (arr != 1) {
//   let sum = 0;
//   arr
//     .toString()
//     .split("")
//     .forEach((i) => (sum += i * i));
//   if (set.has(sum)) {
//     console.log(false);
//   } else {
//     set.add(sum);
//     arr = sum;
//   }
// }
// console.log(true);

// let s = "rat",
//   t = "car";

// s = s.split("").sort();
// t = t.split("").sort();

// if (s.length != t.length) {
//   console.log(false);
// } else {
//   for (var i = 0; i < s.length; i++) {
//     if (s[i] !== t[i]) {
//       console.log(false);
//     }
//   }
// }
// console.log(true);

// let nums1 = [4, 9, 5],
//   nums2 = [9, 4, 9, 8, 4];

// let maps = new Map();
// let arr = [];

// nums1.forEach((i) => {
//   if (maps.has(i)) {
//     maps.set(i, maps.get(i) + 1);
//   } else {
//     maps.set(i, 1);
//   }
// });

// nums2.forEach((i) => {
//   if (maps.has(i)) {
//     arr.push(i);
//   }
// });
// console.log([...new Set(arr)]);

// let numsSum = [-1, -2, 2, 3, 5, 6, -1, 3];
// let numsMax = [1, -2, 4, 3, 5, 6, -1, 4];
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// let bigMax = nums[0];

// for (var i = 1; i < nums.length; i++) {
//   nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
//   bigMax = Math.max(nums[i], bigMax);
// }
// console.log(bigMax);

// let nums = [0, 2, 3, 4, 6, 8, 9];

// let arr = [];
// for (var i = 0; i < nums.length; i++) {
//   let start = nums[i];
//   while (i < nums.length - 1 && nums[i + 1] - nums[i] == 1) {
//     i++;
//   }
//   if (start != nums[i]) {
//     arr.push(`${start}->${nums[i]}`);
//   } else {
//     arr.push(start.toString());
//   }
// }
// console.log(arr);

// let nums = [1, 2, 3, 1, 2, 3],
//   k = 2;
// var hashMap = new Map();

// for (var i = 0; i < nums.length; i++) {
//   console.log(i - hashMap.get(nums[i]));

//   if (hashMap.has(nums[i])) {
//     if (Math.abs(i - hashMap.get(nums[i])) <= k) {
//       return true;
//     } else {
//       hashMap.set(nums[i], i);
//       console.log(hashMap);
//     }
//   } else {
//     hashMap.set(nums[i], i);
//   }
//   //   console.log(hashMap);
// }
// return false;

// let nums = [1, 1];

// let maps = new Map();
// let nums2 = [];
// let arr = [];

// for (var i = 1; i <= nums.length; i++) {
//   nums2.push(i);
// }

// nums.forEach((i) => {
//   if (maps.has(i)) {
//     maps.set(i, maps.get(i) + 1);
//   } else {
//     maps.set(i, 1);
//   }
// });

// nums2.forEach((i) => {
//   if (!maps.has(i)) {
//     arr.push(i);
//   }
// });
// console.log(arr);

// let g = [1, 2, 3],
//   s = [3];

// g.sort((a, b) => a - b);
// s.sort((a, b) => a - b);

// let child = 0;
// let cookie = 0;

// while (child < g.length && cookie < s.length) {
//   if (s[cookie] >= g[child]) {
//     child += 1;
//     cookie += 1;
//   } else {
//     cookie += 1;
//   }
// }
// console.log(child);

// let nums = [1, 1, 0, 1, 1, 1];

// nums.push(0);
// let count = 0;
// let max = 0;
// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] === 1) {
//     count++;
//   } else {
//     max = Math.max(max, count);
//     count = 0;
//   }
// }
// console.log(max);

// let timeSeries = [1, 2],
//   duration = 2;

// let arr_1 = [];
// if (duration != 0) {
//   for (var i = 0; i < timeSeries.length; i++) {
//     let j = timeSeries[i] + (duration - 1);
//     arr_1.push(timeSeries[i], j);
//   }
//   console.log(new Set(arr_1).size);
// } else {
//   console.log(arr_1.length);
// }

// let nums1 = [4, 1, 2],
//   nums2 = [1, 3, 4, 2];

// for (let i = 0; i < nums1.length; i++) {
//   let j = nums2.indexOf(nums1[i]);
//   let nextGreater = -1;
//   while (++j < nums2.length) {
//     if (nums2[j] > nums1[i]) {
//       nextGreater = nums2[j];
//       break;
//     }
//   }
//   nums1[i] = nextGreater;
// }
// console.log(nums1);

// let words = ["Hello", "Alaska", "Dad", "Peace"];

// let row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
// let row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
// let row3 = ["z", "x", "c", "v", "b", "n", "m"];
// let answer = [];

// words.forEach((w) => {
//   let i = w.toLowerCase().split("");
//   console.log(i);

//   if (
//     i.every((j) => row1.includes(j)) ||
//     i.every((j) => row2.includes(j)) ||
//     i.every((j) => row3.includes(j))
//   ) {
//     answer.push(w);
//   }
// });
// console.log(answer);

// let score = [10, 3, 8, 9, 4];

// let copy = [...score];
// copy.sort((a, b) => b - a);
// console.log(copy);

// for (var i = 0; i < copy.length; i++) {
//   if (copy[0] === score[i]) {
//     score[i] = "Gold Medal";
//   } else if (copy[1] === score[i]) {
//     score[i] = "Silver Medal";
//   } else if (copy[2] === score[i]) {
//     score[i] = "Bronze Medal";
//   } else {
//     score[i] = copy.indexOf(score[i]) + 1;
//   }
// }
// console.log(score);

// let s = "   fly me   to   the moon  ";
// s = s.trim().split(" ").at(-1).length;
// console.log(s);

// let nums = [6, 2, 6, 5, 1, 2];

// nums.sort((a, b) => a - b);
// console.log(nums);
// let answer = 0;
// for (var i = 0; i < nums.length; i++) {
//   if (i % 2 === 0) {
//     answer += nums[i];
//   }
// }
// console.log(answer);

let strs = ["flower", "flow", "flight"];

console.log(strs.sort());
