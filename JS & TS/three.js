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
    friends: ["amos", "naomi"],
  },
];
const hasFriends = (person) => {
  return !(person.friends === false);  // Here ! operator infront of returning value should be removed
};

const jamesHolden = team[3];
const jamesHasFriends = hasFriends(jamesHolden);
console.log(jamesHasFriends);