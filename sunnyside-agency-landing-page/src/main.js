let open = document.getElementById("open"),
  close = document.getElementById("close"),
  menu = document.querySelector(".navbar__menu");

let btn_click = (x, y, z) => {
  x.addEventListener("click", () => {
    x.classList.toggle("hide");
    y.classList.toggle("hide");

    if (z == "fade-in") {
      menu.classList.toggle("fade");
    }
    if (z == "fade-out") {
      menu.classList.toggle("fade");
    }
  });
};

btn_click(open, close, "fade-in");
btn_click(close, open, "fade-out");

// common = (x,y,z) =>{
//   x.addEventListener("click",()=>{
//     x.classList.toggle("hide");
//     y.classList.toggle("hide");

// // defining conditions on if statements
//     if(z== "slide-in"){
//       menu.classList.toggle("slide");
//     }
//     if(z == 'slide-out'){
//       menu.classList.toggle("slide");
//     }

//   })
// }

// // Calling functions here
// common(open,close,"slide-in");
// common(close,open,'slide-out');
