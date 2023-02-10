// Event listener for form submit
document.getElementById("form").addEventListener("submit", function () {
  signInWithUserNameAndPassword();
});

// Event listener for sign-in button
document
  .getElementById("signin-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log(userName, password);
  });

const userNameNode = document.getElementById("username");
const passwordNode = document.getElementById("password");
let userName = "";
let password = "";
userNameNode.addEventListener("change", (e) => {
  userName = e.target.value;
});
passwordNode.addEventListener("change", (e) => {
  password = e.target.value;
});
function signInWithUserNameAndPassword() {
  console.log(`user with  username :${userName} sucessfully logged in`);
}
