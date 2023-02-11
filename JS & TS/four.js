let team = [
  {
    name: "alex",
    place: "mars",
    salary: 299,
  },
  {
    name: "amos",
    place: "earth",
    salary: 290,
  },
  {
    name: "naomi",
    place: "belt",
    salary: 430,
  },
  {
    name: "james",
    place: "earth",
    salary: 500,
  },
];
const filterBySalary = (peopleArray, threshold = 300) => {
  // return peopleArray.find((person) => person.salary > threshold);
  // pushing all the person with salary > threshold into the list
  list = [];
  peopleArray.forEach((person) => {
    if (person.salary > threshold) {
      list.push(person);
    }
  })
  return list;
};
const filteredTeam = filterBySalary(team, 300);
console.log(filteredTeam);
