import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

title.style.display = 'inline-block';

const superEventHandler = {
  handleClick: function () {
    title.innerHTML = "Clicked!";
    title.style.color = colors[0];
  },
  handleEnter: function () {
    title.innerHTML = "Mouse Entered!";
    title.style.color = colors[1];
  },
  handleLeave: function () {
    title.innerHTML = "Mouse is gone!";
    title.style.color = colors[2];
  },
  handleResize: function () {
    title.innerHTML = "Resized!";
    title.style.color = colors[3];
  },
  handleRightClick: function () {
    title.innerHTML = "Right Clicked!";
    title.style.color = colors[4];
  }
};
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
window.addEventListener("click", superEventHandler.handleClick);
window.addEventListener("resize", superEventHandler.handleResize);
title.addEventListener("mouseenter", superEventHandler.handleEnter);
title.addEventListener("mouseleave", superEventHandler.handleLeave);
