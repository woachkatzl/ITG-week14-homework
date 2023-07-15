const grades = [];

// Заполняем массив случайными оценками
for (let i = 0; i < 12; i++) {
    grades.push(Math.ceil(Math.random() * 100))
};
console.log(grades);

// Находим средний балл
let gradesSum = 0;
grades.forEach(grade => gradesSum += grade);
const gradesAverage = Math.round(gradesSum / grades.length);
console.log("Средний балл студентов равен " + gradesAverage);

// Находим максимальный и минимальный баллы
const gradesCopy = [...grades];
gradesCopy.sort((a, b) => a - b);
const maxGrade = gradesCopy[gradesCopy.length - 1];
const minGrade = gradesCopy[0];
console.log("Максимальный балл среди студентов равен " + maxGrade);
console.log("Минимальный балл среди студентов равен " + minGrade);

// Считаем количество студентов, получивших положительную оценку
const passingGrades = grades.filter(grade => grade >= 60);
const numberOfPassingStudents = passingGrades.length;
console.log("Количество студентов, получивших положительную оценку: " + numberOfPassingStudents);

// Считаем количество студентов, получивших отрицательную оценку
const failingGrades = grades.filter(grade => grade < 60);
const numberOfFailingStudents = failingGrades.length;
console.log("Количество студентов, получивших отрицательную оценку: " + numberOfFailingStudents);

// Преобразуем числовые оценки в формат буквенных оценок
const letterGrades = grades.map(grade => {
    if (grade >= 80 && grade <= 100) {
        grade = "A";
    } else if (grade >= 60 && grade < 80) {
        grade = "B";
    } else if (grade >= 40 && grade < 60) {
        grade = "C";
    } else if (grade >= 20 && grade < 40) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
});

console.log(letterGrades);
