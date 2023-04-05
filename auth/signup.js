// check if there is a logged in user
let currentUser = localStorage.getItem("Bus_ticket_user");

if (currentUser) {
  currentUser = JSON.parse(currentUser);
  const userModel = new Users();

  //Check if user exists in database and redirect to bookings
  if (userModel.find(currentUser).length) {
    window.location.href = "../bookings/booking.html";
  }
}

const handleSignUp = (e) => {
  e.preventDefault();

  const textEd = validateString(
    "Username",
    document.getElementById("username").value,
    "String"
  );
  const emailEd = validateEmail(
    "Email",
    document.getElementById("email")?.value,
    "Email"
  );
  const passwordEd = validateString(
    "Password",
    document.getElementById("password")?.value,
    "String"
  );
  const errorMess = document.getElementById("error-message");
  errorMess.innerHTML = "";
  let allErrors = [...textEd.errors, emailEd.errors, ...passwordEd.errors];

  allErrors = [].concat(...allErrors);
  if (allErrors.length) {
    allErrors.forEach((error) => {
      var p = document.createElement("p");
      p.textContent = error;
      errorMess.appendChild(p);
    });
  } else { 
    const userData = {
      username: textEd.data,
      email: emailEd.data,
      password: passwordEd.data,
    };

    const userModel = new Users();

    //Check if email or username has been used already
    if (userModel.find({ username: userData.username }).length) {
      swal({
        title: `Error!`,
        text: "Username already exists",
        buttons: "`okay`",
        dangerMode: true,
      });
    } else if (userModel.find({ email: userData.email }).length) {
      swal({
        title: `Error!`,
        text: "Email already exists",
        buttons: "`okay`",
        dangerMode: true,
      });
    } else {
      userModel.create(userData);

      swal({
        title: `Well done!`,
        text: "Sign up is successful",
        buttons: "Login",
        dangerMode: false,
      }).then(function () {
        location.href = "Login.html";
      });
    }
  }
};
