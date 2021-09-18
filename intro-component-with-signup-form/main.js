/**
 * ! Some functions to save time
 **/

let tag = (tag) => document.getElementsByTagName(tag),
  classes = (classes) => document.getElementsByClassName(classes),
  id = (id) => document.getElementById(id);

/**
 * ! Selecting HTMl elements
 **/

let inputs = tag("input"),
  errorMsg = classes("error"),
  errorIcon = classes("fa-exclamation-circle"),
  form = id("form");

/**
 * ! Colors
 **/

let Red = "hsl(0, 100%, 74%)";
let Green = "hsl(154, 59%, 51%)";

/**
 * ! Event Listener
 **/

form.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(inputs, 0, "First name cannot be blank");
  engine(inputs, 1, "Last name cannot be blank");
  engine(inputs, 2, "Email cannot be blank");
  engine(inputs, 3, "Password cannot be blank");
});

/**
 * ! main sauce of the project
 **/

let engine = (id, serial, message) => {
  if (id[serial].value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    errorIcon[serial].style.opacity = "1";
    id[serial].style.border = `2px solid ${Red}`;
  } else {
    errorMsg[serial].innerHTML = "";
    errorIcon[serial].style.opacity = "0";
    id[serial].style.border = `2px solid ${Green}`;
  }
};
