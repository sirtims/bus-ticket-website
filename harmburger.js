const harmburgerContainer = document.querySelector(".harmburger-container")
const harmburger = document.querySelector(".buger")
harmburgerContainer.addEventListener('click', ()=>{
   
   const links = document.querySelector('.burger-link')
   const harmburger1 = document.querySelector('.harmburger1')
   const harmburger2 = document.querySelector('.harmburger2')
   const harmburger3 = document.querySelector('.harmburger3')
   links.classList.toggle('add')
   harmburger1.classList.toggle('toggle')
   harmburger2.classList.toggle('toggle')
   harmburger3.classList.toggle('toggle')

   
})


