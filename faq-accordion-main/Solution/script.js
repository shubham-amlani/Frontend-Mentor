const plus_icons = document.getElementsByClassName("icon-plus");
const minus_icons = document.getElementsByClassName("icon-minus");
const accordion = document.querySelector(".accordion");
// console.log(plus_icons);

function reveal(event) {
  this.classList.toggle("hidden");
  this.nextElementSibling.classList.toggle("open");
  this.parentNode.nextElementSibling.classList.toggle("hidden");
  const height = parseFloat(getComputedStyle(accordion).height);
  accordion.style.height = `${height + 60}px`;
}

function close(event) {
  this.classList.toggle("open");
  this.previousElementSibling.classList.toggle("hidden");
  this.parentNode.nextElementSibling.classList.toggle("hidden");
  const height = parseFloat(getComputedStyle(accordion).height);
  accordion.style.height = `${height - 60}px`;
}

for (let i = 0; i < plus_icons.length; i++) {
  plus_icons[i].addEventListener("click", reveal);
}

for (let i = 0; i < minus_icons.length; i++) {
  minus_icons[i].addEventListener("click", close);
}
