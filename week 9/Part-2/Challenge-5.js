function countWords(sentence) {
    if (sentence.trim() === "") return 0; // Handle empty or whitespace-only string
    return sentence.trim().split(/\s+/).length;
}

// Test cases
console.log(countWords("hello world"));           // 2
console.log(countWords("this is the best day"));  // 5
console.log(countWords("a bb ccc ddddddd e"));    // 5
