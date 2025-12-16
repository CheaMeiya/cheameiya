function countChar(text, char) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count++;
        }
    }
    return count;
}

// Test cases
console.log(countChar("hello world", "o")); // 2
console.log(countChar("aaa bbb a", "a"));   // 4
console.log(countChar("abc", "d"));         // 0
