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
const dashDiv = document.createElement("div");
divHeader.appendChild(dashDiv);
//Making 2nd dashed line under sections:
const dashBottom = document.querySelectorAll('.intro, .inverse-content');

const dashIntro = document.querySelector('.intro');
const dashDiv2 = document.createElement('div');
dashIntro.appendChild(dashDiv2);

const dashInverse = document.querySelector('.inverse-content');
const dashDiv3 = document.createElement('div');
dashInverse.append(dashDiv3)

//2nd Dashed lines not working here
const dashTop = document.querySelector('.content-pick');
const dashDiv4 = document.createElement('div');
dashTop.prepend(dashDiv4);


console.log(dashInverse, dashTop)


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

//Changing color of initial Header, making it a little bigger, adding color:
header.style.color = '#F8C303';
header.style.fontSize = '5rem'
header.style.textShadow = '-2px -2px 0 black, 2px 0 black, -2px 2px 0 black, 2px 2px 0 black'
header.style.fontWeight = '900'

//Making the header spin:


// Making a dash style for the .dash class:


//Making another dashed line under navigation + color:
divHeader.style.paddingBottom = '10px';
divHeader.style.borderColor = '#E67E22';

dashDiv.style.borderBottom = '2px dashed #E67E22';

images.forEach((item) => {
    item.style.paddingTop = '20px';
});

//Making another dashed line under all sections + color:
dashDiv2.style.borderTop = '2px dashed #E67E22'

dashBottom.forEach((item) => {
    item.style.paddingBottom = '10px';
    item.style.borderBottom = '2px dashed #E67E22';
})

dashDiv3.style.paddingTop = '10px'
dashDiv3.style.borderBottom = '2px dashed #E67E22';
dashDiv3.style.width = '100%'

dashTop.style.paddingTop = '10px';
dashTop.style.borderTop = '2px dashed #E67E22';
dashTop.style.justifyContent = 'center'

dashDiv4.style.alignItems = 'flex-start'
dashDiv4.style.paddingTop = '10px';
dashDiv4.style.width = '100%';
dashDiv4.style.border = '10px dashed #E67E22';

// dashDiv2.style.border = '5px solid'
// dashSections.forEach((item) => {
//     item.style.borderTop = '2px dash #E67E22' 
//     dashDiv2.classList.add('dash')
// dashDiv2.style.borderTop = '2px dash #E67E22 @navigation-border'
//     // item.style.border = '5px solid'
// })

//Event types used:
//Mouseover, mouseout, dblclick, click, keydown
