
const fruits = [
  {
    title: "MANGOES",
    desc: "The sweet and tropical king of fruits",
    bg: "images/mango.jpg"
  },
  {
    title: "PINEAPPLE",
    desc: "Juicy and refreshing tropical fruit",
    bg: "images/pineapple.jpg"
  },
  {
    title: "STRAWBERRY",
    desc: "Red, sweet and full of vitamin C",
    bg: "images/strawberry.jpg"
  },
  {
    title: "RED APPLE",
    desc: "Crunchy and slightly sour taste",
    bg: "images/apple.jpg"
  }
];
const slider = document.querySelector(".slider");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const thumbsBox = document.getElementById("thumbs");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let current = 0;
function update() {
  slider.style.backgroundImage = `url(${fruits[current].bg})`;
  titleEl.textContent = fruits[current].title;
  descEl.textContent = fruits[current].desc;
  thumbsBox.innerHTML = "";
  for (let i = 1; i < fruits.length; i++) {
    const index = (current + i) % fruits.length;
    const thumb = document.createElement("div");
    thumb.className = "thumb";
    thumb.style.backgroundImage = `url(${fruits[index].bg})`;
    thumb.addEventListener("click", () => goTo(index));
    thumbsBox.appendChild(thumb);
  }
}
function goTo(index) {
  current = index;
  update();
}
function next() {
  current = (current + 1) % fruits.length;
  update();
}
function prev() {
  current = (current - 1 + fruits.length) % fruits.length;
  update();
}
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
update();
setInterval(next, 4000);