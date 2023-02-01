// NOTE: You can not use reduce methods to solve this exercise


function countAllPeople() {
  // your code goes here
  let count = 0;
  got.forEach(person => {
    count++;
  });
  return count;
}

function peopleByHouses() {
  // your code goes here
  let houseCount = {};
  data.got.forEach(person => {
    if (houseCount[person.house]) {
      houseCount[person.house] += 1;
    } else {
      houseCount[person.house] = 1;
    }
  });
  return houseCount;
}

function everyone() {
  // your code goes here
  const got = data.got;
  let names = [];
  for (let i = 0; i < got.length; i++) {
    for (let j = 0; j < got[i].people.length; j++) {
      names.push(got[i].people[j].name);
    }
  }
  return names;

}

function nameWithS() {
  // your code goes here
  return got.flatMap(house => house.members)
    .filter(member => member.name.toLowerCase().includes("s"))
    .map(member => member.name);
}

function nameWithA() {
  // your code goes here
  const people = got.map(person => person.name);
  return people.filter(person => person.toLowerCase().includes("a"));
}

function surnameWithS() {
  // your code goes here
  let got = data.got;
  let peopleWithSurnameStartingWithS = got.filter(person => {
    return person.surname.startsWith("S");
  });
  return peopleWithSurnameStartingWithS.map(person => person.name);
}

function surnameWithA() {
  // your code goes here
  let got = data.got;
  let peopleWithSurnameStartingWithA = got.filter(person => {
    return person.surname.startsWith("A");
  });
  return peopleWithSurnameStartingWithA.map(person => person.name);
}

function peopleNameOfAllHouses() {
  // your code goes here
  const houses = {};
  const { characters } = got;
  characters.forEach(person => {
    const { house } = person;
    if (!houses[house]) {
      houses[house] = [];
    }
    houses[house].push(person.name);
  });
  return houses;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
