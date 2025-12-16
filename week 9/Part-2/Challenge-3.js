function averageGrade(grades) {
    if (grades.length === 0) return 0; // Handle empty array

    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }

    return sum / grades.length;
}

// Test cases
console.log(averageGrade([85, 90, 78, 92])); // 86.25
console.log(averageGrade([10, 20, 30]));     // 20
console.log(averageGrade([]));               // 0
