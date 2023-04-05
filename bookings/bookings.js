 // check if there is a logged in user
let currentUser = localStorage.getItem("Bus_ticket_user");

if (!currentUser) {
  window.location.href = "../auth/login.html";
}

currentUser = JSON.parse(currentUser);

const userModel = new Users();

//Check if user exists in database
if (!userModel.find(currentUser).length) {
  logout();
}

const logout = () => {
  localStorage.removeItem("Bus_ticket_user"); // delete login detail and redirect to login page
  window.location.href = "../auth/login.html";
};


//booking code here
const findSelected = () => { 
  let selected = document.querySelector("input[name = 'radio']:checked").value;
  return selected
};// get value of radio button selected

const generateCode = (length) =>{
  let num = "";
  for(let i = 0;i < length; i++ ){
    num = num.concat(Math.floor(Math.random()*10));
  };
  return num;
};

const handleBooking = (e) => {
  e.preventDefault();

  const  first_name = validateString(
    "first-name",
    document.getElementById("first-name").value,
    "String"
  );
  const last_name = validateString(
    "last-name",
    document.getElementById("last-name")?.value,
    "string"
  );
  const Phone_number = validateNumber(
    "phone-number",
    document.getElementById("phone-number")?.value,
    "string"
  );
  const dateOfBirth = document.getElementById("date_of_birth")
  const errorMess = document.getElementById("error-message");
  errorMess.innerHTML = "";
  let allErrors = [...first_name.errors, last_name.errors, ...Phone_number.errors];

  allErrors = [].concat(...allErrors);
  if (allErrors.length) {
    allErrors.forEach((error) => {
      var p = document.createElement("p");
      p.textContent = error;
      errorMess.appendChild(p);
    });
  } 
  else {
    let booking = [
      `First Name: ${first_name.data}`, 
      `Last Name: ${last_name.data}`, 
      `Phone Number: ${Phone_number.data}`, 
      `Gender: ${findSelected()}`, 
      `Date of Birth: ${dateOfBirth.value} `,
      `Booking Pin: ${generateCode(10)}`
    ];
    console.log(booking)
    localStorage.setItem("booked-details", JSON.stringify(booking))

    swal({
      title: `CONGRATULATION!`,
      text: "You have successfully booked a ticket",
      buttons: "See Details",
      dangerMode: false,
    }).then(function () {
      location.href = "render.html";
    });
  }   
}

