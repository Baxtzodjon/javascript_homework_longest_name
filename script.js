let students = ['baxtzod', 'islom', 'abdumanon', 'xojik', 'aziz'];
let maxLength = 0;
let longestNames = [];

for (let student of students) {
  if (student.length > maxLength) {
    maxLength = student.length;
    longestNames = [student];
  } else if (student.length === maxLength) {
    longestNames.push(student);
  }
}

console.log(`Самые длинные имена: ${longestNames.join(', ')}`); 