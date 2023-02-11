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
  return peopleArray.filter((person) => person.salary > threshold);
};
const filteredTeam = filterBySalary(team, 300);
console.log(team, filteredTeam);
