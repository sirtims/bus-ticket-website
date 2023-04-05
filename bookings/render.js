// grabbing booked-details from local storage 
let bookedDetails = JSON.parse(localStorage.getItem("booked-details"));
const bookList = document.getElementById("grabList");

function render(){
   let value = ""
   for(let i = 0; i < bookedDetails.length; i++){
      value += `<li class="book-list">${bookedDetails[i]}</li>  `
   }
   bookList.innerHTML = value
};
render();
const handleHome = (e) => {
   e.preventDefault();
   window.location.href = "../index.html"
}