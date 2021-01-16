const select = document.querySelector(".country");

function handleChanged(event) {
  localStorage.setItem("country", event.target.value);
}

function loadCountry() {
  const country = localStorage.getItem("country");

  if (country !== null) {
    const selected = document.querySelector(
      "select.country option[value=" + country + "]"
    );
    selected.selected = true;
  }
}

function init() {
  select.addEventListener("change", handleChanged);
  loadCountry();
}

init();
