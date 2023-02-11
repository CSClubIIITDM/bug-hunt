// Event listener for form submit
document.getElementById("form").addEventListener("submit", function () {
  // Prevent the default action of the event which is to submit the form
  event.preventDefault(); // Prevents the default action of the event which is to submit the form
  signInWithUserNameAndPassword();
});

// Event listener for sign-in button
document
  .getElementById("signin-button")
  .addEventListener("onClick", function (event) {
    event.preventDefault(); // Prevents the default action of the event which is to submit the form
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
