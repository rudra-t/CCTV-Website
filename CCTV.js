const a = document.querySelector("#burger");
a.addEventListener("click", navlink);
function navlink() {
  document.getElementById("navlinks").classList.toggle("change");
}
