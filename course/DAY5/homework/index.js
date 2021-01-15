// import "style.css";

// You're gonna need this
// const NINE_HOURS_SECONDS = 32400000;
const dDayContainer = document.querySelector(".d-day");
const dDayText = dDayContainer.querySelector("h3");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const now = new Date();
  const ms = getGap(now, xmasDay);
  const dDay = convertTime(ms);
  dDayText.innerHTML = dDay;
}

function getGap(start, end) {
  return end - start;
}

function convertTime(ms) {
  const totalSec = Math.floor(ms / 1000);
  const day = Math.floor(totalSec / (3600 * 24));
  const hour = Math.floor((totalSec - day * 3600 * 24) / 3600);
  const min = Math.floor((totalSec - day * 3600 * 24 - hour * 3600) / 60);
  const sec = totalSec - day * 24 * 3600 - hour * 3600 - min * 60;

  return timeToString(day, hour, min, sec);
}

function timeToString(day, hours, minutes, seconds) {
  return `${day}d\
  ${hours < 10 ? `0${hours}` : `${hours}`}h\
  ${minutes < 10 ? `0${minutes}` : `${minutes}`}m\
  ${seconds < 10 ? `0${seconds}` : `${seconds}`}s`;
}

function init() {
  setInterval(getTime, 1000);
}
getTime();
init();
