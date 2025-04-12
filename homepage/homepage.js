let list = document.querySelector(".container__right-list");
let button = document.querySelector(".nav-bar");

// function navList() {
//   list.classList.toggle('nav-list-active');
// }

button.addEventListener("click", function (event) {
  console.log("salom abubakr");
  
  list.classList.toggle('nav-list-toggle')
});