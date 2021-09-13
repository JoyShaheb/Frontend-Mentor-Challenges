let open = document.querySelector(".fa-bars"),
  close = document.querySelector(".fa-times"),
  menu = document.querySelector(".navbar__menu");

open.addEventListener("click", () => {
  open.classList.toggle("hide");
  close.classList.toggle("hide");
  menu.classList.toggle("slide");
});

close.addEventListener("click", () => {
  open.classList.toggle("hide");
  close.classList.toggle("hide");
  menu.classList.toggle("slide");
});
