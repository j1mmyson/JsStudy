const clockContainer = document.querySelector(".js-clock");
const clockText = clockContainer.querySelector("h2");

function getTime(){
    const time = new Date();
    const day = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    clockText.innerHTML = `${hours < 10 ? `0${hours}`:`${hours}`}:\
${minutes < 10 ? `0${minutes}`:`${minutes}`}:\
${seconds < 10? `0${seconds}`:`${seconds}`}`;

}

function init(){
    setInterval(getTime, 1000);
}
getTime();
init();