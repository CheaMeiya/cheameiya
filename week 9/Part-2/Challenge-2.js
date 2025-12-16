function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

// Test cases
console.log(reverseArray([14, 15, 16, 20])); // [20, 16, 15, 14]
console.log(reverseArray([5, 4, 3, 2, 1]));  // [1, 2, 3, 4, 5]
console.log(reverseArray([]));               // []
