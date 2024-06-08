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


const handleLogIn = (e) => {
  e.preventDefault();

  const logEmails = validateEmail(
    "Email",
    document.getElementById("log-email")?.value,
    "Email"
  );
  const logPassword = validateString(
    "Password",
    document.getElementById("log-pass")?.value,
    "String"
  );

  const errorMess = document.getElementById("error-message");
  errorMess.innerHTML = "";
  let allErrors = [...logPassword.errors, logEmails.errors];

  allErrors = [].concat(...allErrors);

  if (allErrors.length) {
    allErrors.forEach((error) => {
      let p = document.createElement("p");
      p.textContent = error;
      errorMess.appendChild(p);
    });
  } else {
    const loginData = {
      email: logEmails.data,
      password: logPassword.data,
    };

    console.log(loginData);

    const userModel = new Users();

    const isUser = userModel.find(loginData);
    if (isUser?.length) {
      localStorage.setItem("Bus_ticket_user", JSON.stringify(isUser[0]));
      swal({
        title: `Well done!`,
        text: "Login is successful",
        buttons: "Login",
        dangerMode: false,
      }).then(function () {
        location.href = "../bookings/booking.html";
      });
    } else {
      swal({
        title: `Error!`,
        text: "Email or Password is incorrect. Please try again",
        buttons: "Ok",
        dangerMode: true,
      });
    }
  }
};
