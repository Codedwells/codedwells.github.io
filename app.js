const nav = document.getElementById("nav-bar");
const cards = document.getElementsByClassName("project-card");
const buttons = document.getElementsByClassName("nav-btn");
const emoji = document.querySelector(".left-comment");

// Navbar shadow

const checkScroll = () => {
  if (window.scrollY < 110) {
    nav.classList.add("nav-shadow");
    nav.classList.remove("nav-border");
  } else if (window.scrollY > 110) {
    nav.classList.remove("nav-shadow");
    nav.classList.add("nav-border");
  }
};
window.addEventListener("scroll",checkScroll,false);

//sidebar

const sidebar = document.querySelector("#sidebar");
const hamburger = document.querySelector(".hamburger");
var count = 0;
const showSidebar = (e) => {
  if (count == 0) {
    hamburger.src = `./src/icons/menu-vertical.png`;
    count++;
  } else if (count == 1) {
    hamburger.src = `./src/icons/circled-menu-100.png`;
    count--;
  }
  sidebar.classList.toggle("show-sidebar");
};
// Projects Carousel


const handleSubmit = () => {
  alert("Feature to be added soon. Thanks for visiting.");
};

const autoCaurosel = () => {
  for (let card of cards) {
    if (card.classList.contains("card1")) {
      card.classList.remove("card1");
      card.classList.add("card2");
    } else if (card.classList.contains("card2")) {
      card.classList.remove("card2");
      card.classList.add("card3");
    } else if (card.classList.contains("card3")) {
      card.classList.remove("card3");
      card.classList.add("card4");
    } else {
      card.classList.remove("card4");
      card.classList.add("card1");
    }
  }
};

let timeout;
(setTimeouts = () => {
  timeout = setInterval(autoCaurosel, 3000);
})();

const handleShift = (e) => {
  let start = 0;
  let stop = 4;

  clearInterval(timeout);
  if (e.target.classList.contains("back")) {
    for (let card of cards) {
      if (card.classList.contains("card1")) {
        card.classList.remove("card1");
        card.classList.add("card4");
      } else if (card.classList.contains("card2")) {
        card.classList.remove("card2");
        card.classList.add("card1");
      } else if (card.classList.contains("card3")) {
        card.classList.remove("card3");
        card.classList.add("card2");
      } else {
        card.classList.remove("card4");
        card.classList.add("card3");
      }
    }
  }

  if (e.target.classList.contains("forward")) {
    for (let card of cards) {
      if (card.classList.contains("card1")) {
        card.classList.remove("card1");
        card.classList.add("card2");
      } else if (card.classList.contains("card2")) {
        card.classList.remove("card2");
        card.classList.add("card3");
      } else if (card.classList.contains("card3")) {
        card.classList.remove("card3");
        card.classList.add("card4");
      } else {
        card.classList.remove("card4");
        card.classList.add("card1");
      }
    }
  }
  setTimeout(setTimeouts, 8000);
};

for (let btn of buttons) {
  btn.addEventListener("click", handleShift);
}

// extras
const changeEmoji = () => {
  let randomEmoji = 512 + Math.floor(Math.random() * 7);
  if (window.innerWidth <= 480) {
    emoji.innerHTML = `Leave me some feedback &#128${randomEmoji}; &#128071;&#127997;`;
  } else {
    emoji.innerHTML = `Leave me some feedback &#128${randomEmoji}; &#128071;&#127997;`;
  }
};

setInterval(changeEmoji, 2000);
