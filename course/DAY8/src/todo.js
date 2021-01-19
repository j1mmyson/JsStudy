const toDoform = document.querySelector(".js-toDoForm");
const toDoInput = toDoform.querySelector("input");
const pending = document.querySelector(".js-pending");
const finished = document.querySelector(".js-finished");

const TODOS_LS = "toDos";
const FIN_LS = "finished";

let toDos = [];
let fin = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pending.removeChild(li);
  console.log(li.id);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
function deleteFin(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finished.removeChild(li);
  console.log(li.id);
  const cleanFin = fin.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  fin = cleanFin;
  saveFin();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function saveFin() {
  localStorage.setItem(FIN_LS, JSON.stringify(fin));
}

function handleFinBtn(event) {
  console.log("fin button clicked.");

  const btn = event.target;
  const li = btn.parentNode;
  const temp = li.querySelector("span");
  const text = temp.innerText;

  pending.removeChild(li);
  console.log(li.id);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
  paintToDo(finished, text);
}

function handlePendingBtn(event) {
  console.log("pending button clicked.");

  const btn = event.target;
  const li = btn.parentNode;
  const temp = li.querySelector("span");
  const text = temp.innerText;

  finished.removeChild(li);
  console.log(li.id);

  const cleanFin = fin.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  fin = cleanFin;
  saveFin();
  paintToDo(pending, text);
}

function paintToDo(parent, text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  let newId = 0;

  if (parent.className === "js-pending") {
    newId = toDos.length + 1;
    li.id = newId;
  } else if (parent.className === "js-finished") {
    newId = fin.length + 1;
    li.id = newId;
  }

  span.innerText = text;
  li.appendChild(span);
  delBtn.value = "X";
  delBtn.innerText = "❌";

  if (parent.className === "js-pending") {
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(delBtn);
    const finBtn = document.createElement("button");
    finBtn.innerText = "✅";
    finBtn.addEventListener("click", handleFinBtn);
    li.appendChild(finBtn);
  } else if (parent.className === "js-finished") {
    delBtn.addEventListener("click", deleteFin);
    li.appendChild(delBtn);
    const pendingBtn = document.createElement("button");
    pendingBtn.innerText = "⏪";
    pendingBtn.addEventListener("click", handlePendingBtn);
    li.appendChild(pendingBtn);
  }

  parent.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };
  if (parent.className === "js-pending") {
    toDos.push(toDoObj);
    saveToDos();
  } else if (parent.className === "js-finished") {
    fin.push(toDoObj);
    saveFin();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(pending, currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedPending = localStorage.getItem(TODOS_LS);
  const loadedFinished = localStorage.getItem(FIN_LS);

  if (loadedFinished !== null) {
    console.log(loadedFinished);
    const parsedFin = JSON.parse(loadedFinished);
    parsedFin.forEach(function (fin) {
      paintToDo(finished, fin.text);
    });
  }

  if (loadedPending !== null) {
    console.log(loadedPending);
    const parsedToDos = JSON.parse(loadedPending);
    parsedToDos.forEach(function (toDo) {
      paintToDo(pending, toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoform.addEventListener("submit", handleSubmit);
}

init();
