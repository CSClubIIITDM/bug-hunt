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
    // james' friends should be defined
  },
];
const hasFriends = (person) => {
  // return !(person.friends === false);
  return !(person.friends === undefined);
};

const jamesHolden = team[3];
const jamesHasFriends = hasFriends(jamesHolden);
console.log(jamesHasFriends);

