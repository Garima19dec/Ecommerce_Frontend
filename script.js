const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
const cart = document.querySelector(".cart-icon")

const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".error-text");
const btn = document.querySelector(".subbtn");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cart.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cart.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

function check(){
  if(email.value.match(regExp)){
    email.style.borderColor = "#27ae60";
    email.style.background = "#eafaf1";
    icon1.style.display = "none";
    icon2.style.display = "block";
    error.style.display = "none";
    btn.style.display = "block";
  }else{
    email.style.borderColor = "#e74c3c";
    email.style.background = "#fceae9";
    icon1.style.display = "block";
    icon2.style.display = "none";
    error.style.display = "block";
    btn.style.display = "none";
  }
  if(email.value == ""){
    email.style.borderColor = "lightgrey";
    email.style.background = "#fff";
    icon1.style.display = "none";
    icon2.style.display = "none";
    error.style.display = "none";
    btn.style.display = "none";
  }
}


// function myFunction() {
//   var input, filter, container, article, h3, i, txtValue;
//   input = document.getElementById("search-icon");
//   filter = input.value.toUpperCase();
//   container = document.getElementsByClassName("cont");
//   article = container.getElementsByTagName("article");
//   for (i = 0; i < article.length; i++) {
//     h3 = article[i].getElementsByTagName("h3")[0];
//     if (h3) {
//       txtValue = h3.textContent || h3.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         article[i].style.display = "";
//       } else {
//         article[i].style.display = "none";
//       }
//     }       
//   }
// }

function myFunction() {
  let input = document.getElementById('search-icon').value
  input=input.toLowerCase();
  let x = document.getElementsByTagName('h3');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="grid";                 
      }
  }
}