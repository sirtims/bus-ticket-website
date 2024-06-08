// grabbing booked-details from local storage 
let bookedDetails = JSON.parse(localStorage.getItem("booked-details"));
const bookList = document.getElementById("grabList");

function render(details){
   let value = ""
   for(let i = 0; i < details.length; i++){
      value += `<li class="book-list">${details[i]}</li>  `
   }
   bookList.innerHTML = value
};
render(bookedDetails);
const handleHome = (e) => {
   e.preventDefault();
   window.location.href = "../index.html"
}