import "./less/index.less";

// Making variables to use:
//Heading spins 360 degrees when mouse goes over or a link is clicked
const header = document.querySelector(".logo-heading");
//Navigation for mouseover effect of bolding
const nav = document.querySelectorAll(".nav-link");
//Images for expanding and compressing images:
const images = document.querySelectorAll("img");
console.log(header);

//Mouse over nav bolds the item the cursor is over, when the mouse leaves the item goes back to normal
//Two event types used:
nav.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    event.target.style.fontWeight = "bold";
  });

  item.addEventListener("mouseout", (event) => {
    event.target.style.fontWeight = "normal";
  });
});

//When double clicked, images expand. If user used esc key or clicks out of the image, the image will compress back to where it was on the page.
// ___ event types used:
images.forEach((img) => {
  if ((img.style.transform = "scale(1)")) {
    img.addEventListener("dblclick", (event) => {
      event.target.style.transform = "scale(1.75)";
      event.target.style.transition = "transform 0.5s ease";
    });
  } else {
    img.addEventListener("dblclick", (event) => {
      event.target.style.transform = "scale(1)";
      event.target.style.transition = "transform 0.5s ease";
    });
  }
});
