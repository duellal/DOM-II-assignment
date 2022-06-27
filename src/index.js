import "./less/index.less";

// Making variables to use:
//Heading spins 360 degrees when mouse goes over or a link is clicked
const header = document.querySelector(".logo-heading");
//Navigation for mouseover effect of bolding
const navLinks = document.querySelectorAll(".nav-link");
//Images for expanding and compressing images:
const images = document.querySelectorAll("img");
//Making another dashed line under navigation:
const divHeader = document.querySelector(".main-navigation");
// const headerDash = document.createElement("div");
const headerDash = document.querySelector(".container.nav-container");
// divHeader.appendChild(headerDash);

console.log(headerDash);

//Mouse over nav bolds the item the cursor is over, when the mouse leaves the item goes back to normal
//Two event types used:
navLinks.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    event.target.style.fontWeight = "bold";
  });

  item.addEventListener("mouseout", (event) => {
    event.target.style.fontWeight = "normal";
  });
});

//When double clicked, images expand. If user used esc key or clicks out of the image, the image will compress back to where it was on the page.
// 3 event types used:
images.forEach((img) => {
  img.addEventListener("dblclick", (event) => {
    event.target.style.transform = "scale(1.75)";
    event.target.style.transition = "transform 0.5s ease";
    event.target.position = "fixed";
  });

  document.addEventListener("click", () => {
    img.style.transform = "initial";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      img.style.transform = "initial";
    }
  });
});

//If zoomed in too much, an alert pops up informing you:
// document.addEventListener("wheel", (event) => {
//   if ((event.target.style.transform = "scale(10)")) {
//     alert("Zoom back out for the best experience.");
//   }
// });

//Changing color of initial Header, making it a little bigger:
header.classList.add("font");

//Making the header spin:

//Making another dashed line under navigation:
headerDash.classList.add("dash");
//Event types used:
//Mouseover, mouseout, dblclick, click, keydown
