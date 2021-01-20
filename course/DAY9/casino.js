
const playBtn = document.querySelector(".playBtn");
const range = document.querySelector(".range");
const guess = document.querySelector(".guess");
const rangeText = document.querySelector(".rangeText");

function handleRangeChange(event){
    const r = event.target.value;
    rangeText.innerHTML = `Generate number between 0 and ${r}`;
}

function handlePlayBtnClick(event){
    const result = document.querySelector(".result");
    const correct = document.querySelector(".correct");
    const randInt = Math.floor(Math.random() * range.value);
    result.innerHTML = `You choose ${guess.value}, Machine choose ${randInt}.`;
    if (parseInt(guess.value) === randInt){
        correct.innerHTML = "You Win!";
    }else{
        correct.innerHTML = "You Lose!";
    }
}



function init(){
    rangeText.innerHTML = `Generate number between 0 and ${range.value}`;
    playBtn.addEventListener("click", handlePlayBtnClick);
    range.addEventListener("input", handleRangeChange);
}

init();