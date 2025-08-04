// ===== HOMEWORK ASSIGNMENT =====
// Grade Calculator for 5 Subjects

console.log("=== Homework: Grade Calculator ===");

// TODO: Step 1 - Declare an array with 5 subject marks
let mark = [66,77,88,90,99]
// TODO: Step 2 - Loop through the array to compute the total
let total = 0;
for (let i = 0; i < 5; i++) {
    total += mark[i];
}
// TODO: Step 3 - Calculate average from the total
let average = total / 5;
// TODO: Step 4 - Use if-else to print the overall grade
// Grade rules: A (90+), B (80–89), C (70–79), F (<70)
let grade;
if (average >= 90) {
    grade = 'A';
} else if (average >= 80) {
    grade = 'B';
} else if (average >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}
console.log("Total Mark:", total);
console.log("Average Mark:", average.toFixed(2));
console.log("Grade:", grade);