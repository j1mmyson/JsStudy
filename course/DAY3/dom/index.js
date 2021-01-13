function handleClick(){
    title.style.color = 'blue';
}

// const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Changed!";
title.style.color = "red";

document.title = 'byungwook';

title.addEventListener("click", handleClick);

// title의 내부정보를 보고싶을 때 
console.dir(title);