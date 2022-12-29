// Movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
// Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const description = document.querySelector(".info h2");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase button");

// Moving animation event
container.addEventListener("mousemove", (e) => {
  let xPosition = (window.innerWidth / 2 - e.pageX) / 12;
  let yPosition = (window.innerHeight / 2 - e.pageY) / 12;
  card.style.transform = `rotateY(${xPosition}deg) rotateX(${yPosition}deg)`;
});

// Animate IN
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  // Popout
  title.style.transform = "translate3d(0, 0, 150px)";
  sneaker.style.transform = "translateZ(100px) rotateZ(30deg)";
  description.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(100px)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  // Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
