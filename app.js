let current, status;
let interval;
let count = 0;
let currentBox = 0;
let arr = [];
let dom = {
  recBtn: "#rec--btn",
  playBtn: "#play--btn",
  resetBtn: "#reset--btn"
};
let eventListeners = function () {
  document.querySelector(dom.recBtn).addEventListener("click", () => {
    status = true;
  });
  document.querySelector(dom.playBtn).addEventListener("click", () => {
    playArray();
  });
  document.querySelector(dom.resetBtn).addEventListener("click", () => reset());
};
let addEffect = function () {
  currentBox += 1;
  document.querySelector("#box" + currentBox).style.transform = "scale(1.2)";
  document.querySelector("#box" + currentBox).style.top = "135%";
  setTimeout(() => {
    document.querySelector("#box" + currentBox).style.transform = "scale(1)";
  }, 250);
};

let playSound = function (id, color) {
  current = id;
  let audio = new Audio(`./sound/key-press-${id}.mp3`);
  audio.play();
  if (status) {
    saveSelected(id);
    count += 1;
    blockArray(count, color);
  } else {}
};

let saveSelected = function (id) {
  if (arr.length >= 10) {
    status = false;
    alert("Max 10 keys");
  } else {
    arr.push(id);
  }
};

let playArray = function () {
  interval = document.querySelector("#input").value;
  currentBox = 0;
  arr.forEach(function (el, index) {
    setTimeout(function () {
      addEffect();
      let audio = new Audio(`./sound/key-press-${el}.mp3`);
      audio.play();
    }, index * interval);
  });
};

let blockArray = function (cnt, color) {
  document.querySelector(`#box${cnt}`).style.display = "block";
  document.querySelector(`#box${cnt}`).style.backgroundColor = `${color}`;
};

let reset = function () {
  let allBox = document.querySelectorAll(".box");
  allBox.forEach(el => {
    el.style.display = "none";
  });
  status = false;
  count = 0;
  arr = [];
};
eventListeners();