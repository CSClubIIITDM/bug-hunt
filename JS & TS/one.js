const printNames = (names) => {
  return `We are ${names.toLowerCase()}`;
};
const intro = printNames("krish" + ","+ "bob");  // here "," is missing in the string
console.log(intro);
