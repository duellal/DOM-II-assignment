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
//for first set of double dashed lines
const dashIntro = document.querySelector('.intro');
const dashDiv2 = document.createElement('div');
dashIntro.appendChild(dashDiv2);

//for second set of double dashed lines
const dashInverse = document.querySelector('.inverse-content');
const dashDiv3 = document.createElement('div');
dashInverse.append(dashDiv3)

//for last set of double dashed lines
const dashPick = document.querySelector('.content-pick');
const dashDiv4 = document.createElement('div');
dashPick.append(dashDiv4);
const dashPickText = document.querySelectorAll('.content-pick .destination')
dashDiv4.append(dashPickText[0])
dashDiv4.append(dashPickText[1])
dashDiv4.append(dashPickText[2])

// Double dashed lines for footer:
const footer = document.querySelector('footer');
const divFooter = document.createElement('div')
footer.prepend(divFooter)

// For preventDefault to change Sign Up button links to go somewhere:
const btnLinks = document.querySelectorAll('.content-pick .destination .btn')

console.log(footer)


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

//Changing color of initial Header, making it a little bigger, adding color:
header.style.color = '#F8C303';
header.style.fontSize = '5rem'
header.style.textShadow = '-2px -2px 0 black, 2px 0 black, -2px 2px 0 black, 2px 2px 0 black'
header.style.fontWeight = '900'

//Making the header spin - if I have time:


//Making another dashed line under navigation + color:
divHeader.style.paddingBottom = '10px';
divHeader.style.borderColor = '#E67E22';

dashDiv.style.borderBottom = '2px dashed #E67E22';

images.forEach((item) => {
    item.style.paddingTop = '20px';
});

//Making another dashed line under all sections + color:
//1st set of double dashed lines
dashIntro.style.borderBottom = '2px dashed #E67E22';
dashIntro.style.paddingBottom = '10px';
dashDiv2.style.borderTop = '2px dashed #E67E22'

//2nd set of double dashed lines 
dashInverse.style.borderBottom = '2px dashed #E67E22';
dashInverse.style.paddingBottom = '10px';
dashDiv3.style.paddingTop = '10px'
dashDiv3.style.borderBottom = '2px dashed #E67E22';
dashDiv3.style.width = '100%'

//Last set of double dashed lines
dashPick.style.paddingTop = '10px';
dashPick.style.borderTop = '2px dashed #E67E22';

dashDiv4.style.display = 'flex'
dashDiv4.style.justifyContent = 'space-between'
dashDiv4.style.paddingTop = '10px';
dashDiv4.style.width = '100%';
dashDiv4.style.borderTop = '2px dashed #E67E22';

//Footer double dashed lines:
divFooter.style.width = '100%'
divFooter.style.borderTop = '2px dashed #E67E22';
footer.style.paddingTop = '10px'
footer.style.borderTop = '2px dashed #E67E22'

//Changing footer background color and footer text color:
footer.style.backgroundColor = '#090B0F';
footer.style.color = '#4E4F51'
//Event types used:
//Mouseover, mouseout, dblclick, click, keydown

//Styles used: 
//Border, width, padding, color, borderColor, textShadow, fontSize, fontWeight, transform, transition, display, justifyContent

//preventDefault to make links go somewhere:
// Making a class for each button on their divs:
// btnLinks[0].classList.add('one')
// btnLinks[1].classList.add('two')
// btnLinks[2].classList.add('three')

//Adding links to each button:
btnLinks[0].addEventListener('click', () => {
    window.open('https://portal.ehawaii.gov/#visitors', '_blank');
})

btnLinks[1].addEventListener('click', () => {
    window.open('https://www.highlandschamber.org/?_ga-ft=1YkYYn.0.0.0.0.G5Q79N-1PMDd9K.0.0', '_blank')
})

btnLinks[2].addEventListener('click', () => {
    window.open('https://www.igetaway.net/', '_blank')
})



console.log(btnLinks[0])
console.log(btnLinks)