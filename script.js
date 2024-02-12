const formUser = document.querySelector(".form");
const username = document.querySelector(".input");
const wrapper = document.querySelector(".wrapper");
const text = document.querySelector(".modal-text");
const box = document.querySelector(".box");

let regEX = /^[a-zA-Z0-9]{6,18}$/;

// formUser.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let regEX = /^[a-zA-Z0-9]{6,18}$/;
//   let inputValue = username.value;
//   console.log(inputValue);

//   if (regEX.test(inputValue)) {
//     wrapper.classList.remove("wrapper");
//     wrapper.classList.add("success");
//     text.textContent = "Siz to'gri ma'lumot kiritdingiz";
//   } else {
//     wrapper.classList.remove("success");
//     wrapper.classList.add("wrapper");
//     text.textContent =
//       "Siz 6 va 18 son yoki harf oralig'da ma'lumot kiritishingiz lozim bunda raqam va katta kichik harflar ixtiyoriy";
//   }
//   formUser.reset();
// });

username.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  if (regEX.test(e.target.value)) {
    username.setAttribute("class", "succeess");
  } else {
    username.setAttribute("class", "error");
  }
});
