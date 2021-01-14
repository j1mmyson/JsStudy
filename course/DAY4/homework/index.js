
import "./styles.css";

const body = document.querySelector("body");

console.log(body);

function handleResize() {
  const width = window.innerWidth;

  if (width > 800) {
    body.className = "yellow";
  } else if (width > 400) {
    body.className = "purple";
  } else {
    body.className = "blue";
  }
}

window.addEventListener("resize", handleResize);
