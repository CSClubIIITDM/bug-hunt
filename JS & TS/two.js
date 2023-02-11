const team = [
  {
    name: "alex",
    place: "mars",
    earns: true,
  },
  {
    name: "amos",
    place: "earth",
    earns: true,
  },
  {
    name: "naomi",
    place: "belt",
    earns: true,
  },
  {
    name: "james",
    place: "earth",
    // james' earns value is not defined
    earns: false,
  },
];

const noOfPeopleEarning = (employees) => {
  let total = 0;
  for (const employee of employees) {
    const earns = employee.earns;
    if (earns === false) {
      continue;
    }
    total++;
  }
  return total;
};

const noOfPeopleWhoEarn = noOfPeopleEarning(team);

console.log(noOfPeopleWhoEarn);
