// // 1-masala
// function findLongestWord(arr) {
//     let longest = "";
//     arr.forEach(word => {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     });
//     return longest;
// }

// console.log(findLongestWord(["apple", "banana", "cherry", "date"]));

// // 2-masala
// function concatenateStrings(arr) {
//     return arr.join('');
// }

// console.log(concatenateStrings(["hello", " ", "world"]));

// // 3-masala
// function toUpperCaseArray(arr) {
//     return arr.map(element => element.toUpperCase());
// }

// console.log(toUpperCaseArray(["apple", "banana", "cherry"]));

// // 4-masala
// function productOfArray(arr) {
//     let product = 1;
//     arr.forEach(element => {
//         product *= element;
//     });
//     return product;
// }

// console.log(productOfArray([1, 2, 3, 4]));

// // 5-masala
// function sortArray(arr) {
//     return [...arr].sort();
// }

// console.log(sortArray([3, 1, 4, 2]));

// // 6-masala
// function reverseArray(arr) {
//     return [...arr].reverse();
// }

// console.log(reverseArray([1, 2, 3, 4]));

// // 7-masala
// function indexArray(arr) {
//     return arr.map((_, index) => index);
// }

// console.log(indexArray(["a", "b", "c", "d"]));

// // 8-masala
// function findIndex(arr, num) {
//     return arr.indexOf(num);
// }

// console.log(findIndex([1, 2, 3, 4], 3));

// // 9-masala
// function addValueToArray(arr, value) {
//     return arr.map(element => element + value);
// }

// console.log(addValueToArray([1, 2, 3], 5));

// // 10-masala
// function splitPositiveNegative(arr) {
//     let positive = [];
//     let negative = [];
//     arr.forEach(element => {
//         if (element >= 0) {
//             positive.push(element);
//         } else {
//             negative.push(element);
//         }
//     });
//     return { positive, negative };
// }

// console.log(splitPositiveNegative([1, -2, 3, -4, 5]));

// // 11-masala
// function repeatArray(arr, n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         result = result.concat(arr);
//     }
//     return result;
// }

// console.log(repeatArray([1, 2, 3], 3));

// // 12-masala
// function toStringArray(arr) {
//     return arr.map(element => element.toString());
// }

// console.log(toStringArray([1, 2, 3]));

// // 13-masala
// function evenIndexElements(arr) {
//     return arr.filter((_, index) => index % 2 === 0);
// }

// console.log(evenIndexElements(["a", "b", "c", "d", "e"]));

// // 14-masala
// function countOddNumbers(arr) {
//     let count = 0;
//     arr.forEach(element => {
//         if (element % 2 !== 0) {
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countOddNumbers([1, 2, 3, 4, 5]));

// // 15-masala
// function minMaxArray(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     return { min, max };
// }

// console.log(minMaxArray([3, 1, 4, 2, 5]));

// // 16-masala
// function doubleValues(arr) {
//     return arr.map(element => element * 2);
// }

// console.log(doubleValues([1, 2, 3]));

// // 17-masala
// function shuffleArray(arr) {
//     return arr.sort(() => Math.random() - 0.5);
// }

// console.log(shuffleArray([1, 2, 3, 4, 5]));

// // 18-masala
// function addValueToString(arr, value) {
//     return arr.map(element => element + value).join('');
// }

// console.log(addValueToString(["a", "b", "c"], "!"));

// // 19-masala
// function filterStrings(arr) {
//     return arr.filter(element => typeof element === 'string');
// }

// console.log(filterStrings(["a", 1, "b", 2, "c"]));

// // 20-masala
// function countEmptyStrings(arr) {
//     let count = 0;
//     arr.forEach(element => {
//         if (element === '') {
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countEmptyStrings(["", "a", "", "b", ""]));

// // 21-masala
// function reverseElements(arr) {
//     return arr.map(element => element.split('').reverse().join(''));
// }

// console.log(reverseElements(["abc", "def", "ghi"]));

// // 22-masala
// function sqrtArray(arr) {
//     return arr.map(element => Math.sqrt(element));
// }

// console.log(sqrtArray([1, 4, 9, 16]));

// // 23-masala
// function filterNonNegative(arr) {
//     return arr.filter(element => element >= 0);
// }

// console.log(filterNonNegative([1, -2, 3, -4, 5]));

// // 24-masala
// function splitOddEvenIndex(arr) {
//     let oddIndex = [];
//     let evenIndex = [];
//     arr.forEach((element, index) => {
//         if (index % 2 === 0) {
//             evenIndex.push(element);
//         } else {
//             oddIndex.push(element);
//         }
//     });
//     return { oddIndex, evenIndex };
// }

// console.log(splitOddEvenIndex(["a", "b", "c", "d", "e"]));

// // 25-masala
// function factorial(n) {
//     if (n === 0) return 1;
//     let result = 1;
//     for (let i = n; i > 1; i--) {
//         result *= i;
//     }
//     return result;
// }

// function factorialArray(arr) {
//     return arr.map(element => factorial(element));
// }

// console.log(factorialArray([1, 2, 3, 4]));























