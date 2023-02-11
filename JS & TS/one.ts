type User = {
  name: string;
  email: string;
  password: string;
};

const getUser = (): User => {
  const user = {
    name: "user",
    email: "user@gmail.com",
    password: "snvpoj9f",
  };
  return user;
};

const user1 = getUser();
// Print the user1 object
console.log(user1);