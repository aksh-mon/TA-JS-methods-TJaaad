let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
var peopleName = persons.map(person => person.sex);
console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array
var peopleGrade = persons.map(person => person.grade);
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array
var peopleSex = persons.map(person => person.sex);
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
var peopleName = persons.map(person => person.name);
var filteredNames = peopleName.filter(name => name.startsWith('J') || name.startsWith('P'));
console.log(filteredNames);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
var peopleName = persons.map(person => person.name);
var filteredNames = peopleName.filter(name => name.startsWith('A') || name.startsWith('C'));
console.log(filteredNames);
// Log all the filtered male ('M') in persons array
var malePersons = persons.filter(person => person.sex === 'M');
var filteredMales = malePersons.map(person => person.name);
console.log( filteredMales);
// Log all the filtered female ('F') in persons array

var femalePersons = persons.filter(person => person.sex === 'F');
var filteredFemales = femalePersons.map(person => person.name);
console.log(filteredFemales);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
var filteredFemales = persons.filter(person => person.sex === 'F' && (person.name.startsWith('C') || person.name.startsWith('J')));
console.log(filteredFemales);
// Log all the even numbers from peopleGrade array
var peopleGrade = persons.map(person => person.grade);
var evenGrades = peopleGrade.filter(grade => grade % 2 === 0);
console.log(evenGrades);
// Find the first name that starts with 'J' in persons array and log the object
var firstJ = persons.find(person => person.name.startsWith('J'));
console.log(firstJ);
// Find the first name that starts with 'P' in persons array and log the object
var firstJ = persons.find(person => person.name.startsWith('P'));
console.log(firstJ);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
var firstJ = persons.find(person => person.name.startsWith('J') && person.grade > 10 && person.sex === 'F');
console.log(firstJ);
// Filter all the female from persons array and store in femalePersons array
var femalePersons = persons.filter(person => person.sex === 'F');
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
var MalePersons = persons.filter(person => person.sex === 'M');
console.log(MalePersons);
// Find the sum of all grades and store in gradeTotal
var peopleGrade = persons.map(person => person.grade);
var gradeTotal = peopleGrade.reduce((acc, grade) => acc + grade, 0);
console.log(gradeTotal);
// Find the average grade
var peopleGrade = persons.map(person => person.grade);
var gradeTotal = peopleGrade.reduce((acc, grade) => acc + grade, 0);
var averageGrade = gradeTotal / peopleGrade.length;
console.log(averageGrade);

// Find the average grade of male
var malePersons = persons.filter(person => person.sex === 'M');
var maleGrades = malePersons.map(person => person.grade);
var maleGradeTotal = maleGrades.reduce((acc, grade) => acc + grade, 0);
var averageMaleGrade = maleGradeTotal / maleGrades.length;
console.log(averageMaleGrade);

// Find the average grade of female
var femalePersons = persons.filter(person => person.sex === 'F');
var femaleGrades = femalePersons.map(person => person.grade);
var femaleGradeTotal = femaleGrades.reduce((acc, grade) => acc + grade, 0);
var averageFemaleGrade = femaleGradeTotal / femaleGrades.length;
console.log(averageFemaleGrade);

// Find the highest grade
var peopleGrade = persons.map(person => person.grade);
var highestGrade = Math.max(...peopleGrade);
console.log(highestGrade);
// Find the highest grade in male
var malePersons = persons.filter(person => person.sex === 'M');
var maleGrades = malePersons.map(person => person.grade);
var highestMaleGrade = Math.max(...maleGrades);
console.log(highestMaleGrade);

// Find the highest grade in female
var femalePersons = persons.filter(person => person.sex === 'F');
var femaleGrades = femalePersons.map(person => person.grade);
var highestFemaleGrade = Math.max(...femaleGrades);
console.log(highestFemaleGrade);
// Find the highest grade for people whose name starts with 'J' or 'P'
var filteredPersons = persons.filter(person => person.name.startsWith('J') || person.name.startsWith('P'));
var filteredGrades = filteredPersons.map(person => person.grade);
var highestFilteredGrade = Math.max(...filteredGrades);
console.log(highestFilteredGrade);
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
var peopleGrade = persons.map(person => person.grade);
var sortedPeopleGrade = peopleGrade.sort((a, b) => a - b);
console.log(sortedPeopleGrade);

// Yes, elements of peopleGrade got changed after sorting. To preserve the original array, you can create a copy of it.

// Sort the peopleGrade in descending order
var peopleGrade = persons.map(person => person.grade);
var sortedPeopleGrade = peopleGrade.sort((a, b) => b - a);
console.log(sortedPeopleGrade);

// Yes, elements of peopleGrade got changed after sorting. To preserve the original array, you can create a copy of it.

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
var peopleGrade = persons.map(person => person.grade);
var sortedPeopleGrade = [...peopleGrade].sort((a, b) => b - a);
console.log(sortedPeopleGrade);
// Sort the array peopelName in ascending `ABCD..Za....z`
var peopleName = persons.map(person => person.name);
var sortedPeopleName = peopleName.sort();
console.log(sortedPeopleName);
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
var peopleName = persons.map(person => person.name);
var sortedPeopleName = [...peopleName].sort();
console.log(sortedPeopleName);