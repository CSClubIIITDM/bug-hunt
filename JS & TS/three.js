const team = [
  {
    name: "alex",
    place: "mars",
    friends: ["amos", "naomi"],
  },
  {
    name: "amos",
    place: "earth",
    friends: ["james", "naomi"],
  },
  {
    name: "naomi",
    place: "belt",
    friends: ["james", "amos"],
  },
  {
    name: "james",
    place: "earth",
  },
];
const hasFriends = (person) => {
  return !(person.friends === false);
};

const jamesHolden = team[3];
const jamesHasFriends = hasFriends(jamesHolden);
console.log(jamesHasFriends);
