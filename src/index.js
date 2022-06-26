import "./less/index.less";

// Making variables to use:
//Heading spins 360 degrees when mouse goes over or a link is clicked
const header = document.querySelector(".logo-heading");
//Navigation for mouseover effect of bolding
const nav = document.querySelectorAll(".nav-link");
//Images for expanding and compressing images:
const images = document.querySelectorAll("img");
const scale = document.querySelector(".scale");
console.log(scale);

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
// 2 out of 3 event types used:
images.forEach((img) => {
  img.addEventListener("dblclick", (event) => {
    event.target.style.transform = "scale(1.75)";
    event.target.style.transition = "transform 0.5s ease";
    event.target.position = "fixed";
  });

  document.addEventListener("click", () => {
    img.style.transform = "initial";
    img.style.transition = "transform 0.5s ease";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      img.style.transform = "initial";
    }
  });
});

//If zoomed in too much, an alert pops up informing you:
document.addEventListener("wheel", (event) => {
  if ((document.style.transform = "scale(3)")) {
    window.alert("Zoom back out for the best experience.");
  }
});

//Event types used:
//Mouseover, mouseout, dblclick, click
