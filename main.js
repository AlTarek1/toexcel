const first = document.getElementById("first");
const last = document.getElementById("last");
const code = document.getElementById("code");
const phone = document.getElementById("phone");
const firstDOM = document.querySelector(".firstt");
const lastDOM = document.querySelector(".lastt");
const codeDOM = document.querySelector(".codet");
const phoneDOM = document.querySelector(".phonet");

first.addEventListener("input", (e) => {
  firstDOM.innerText = String(e.target.value);
});
last.addEventListener("input", (e) => {
  lastDOM.innerText = String(e.target.value);
});
code.addEventListener("input", (e) => {
  codeDOM.innerText = e.target.value;
});
phone.addEventListener("input", (e) => {
  phoneDOM.innerText = e.target.value;
});
