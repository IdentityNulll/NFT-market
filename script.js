let list = document.querySelector(".container__right-list");
let button = document.querySelector(".nav-bar");
let xmark = document.querySelector(".xmark")

button.addEventListener("click", function () {
  list.classList.toggle('nav-list-toggle')
  xmark.style.display="block"
  xmark.classList.add(".nav-list-toggle")
});

xmark.addEventListener("click", function() {
  list.classList.remove("nav-list-toggle")
  xmark.style.display="none"
})