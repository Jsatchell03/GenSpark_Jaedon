let darkMode = false;
let fontSize = 12;
let highlight = false;
let details = false;
const mainContainer = document.getElementById("main-container");
const darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", toggleDarkMode);
let darkModeStatus = document.getElementById("dark-mode-status").innerHTML;
let highlightStatus = document.getElementById("highlight-status").innerHTML;
let fontStatus = document.getElementById("font-size-status").innerHTML;
const detailsList = document.getElementById("details").classList;
let detailsStatus = document.getElementById("details-status").innerHTML;
document
  .getElementById("toggle-details-btn")
  .addEventListener("click", toggleDetails);
document
  .getElementById("highlight-btn")
  .addEventListener("click", toggleHighlight);
document
  .getElementById("decrease-font-btn")
  .addEventListener("click", decreaseFontSize);
document
  .getElementById("increase-font-btn")
  .addEventListener("click", increaseFontSize);
document.getElementById("reset-btn").addEventListener("click", reset);

function toggleDarkMode() {
  if (darkMode) {
    darkMode = false;
    mainContainer.classList.remove("dark");
    darkModeStatus = "Dark Mode: OFF";
  } else {
    darkMode = true;
    mainContainer.classList.add("dark");
    darkModeStatus = "Dark Mode: ON";
  }
}

function increaseFontSize() {
  fontSize += 2;
  mainContainer.setAttribute("style", `font-size: ${fontSize}px;`);
  fontStatus = `Font Size ${fontSize}px`;
}
function decreaseFontSize() {
  fontSize -= 2;
  mainContainer.setAttribute("style", `font-size: ${fontSize}px;`);
  fontStatus = `Font Size ${fontSize}px`;
}
function toggleHighlight() {
  if (highlight) {
    highlight = false;
    mainContainer.classList.remove("highlight");
    highlightStatus = "Highlight: OFF";
  } else {
    highlight = true;
    mainContainer.classList.add("highlight");
    highlightStatus = "Highlight: ON";
  }
}

function toggleDetails() {
  if (details) {
    details = false;
    detailsList.add("hidden");
    detailsStatus = "Details: Hidden";
  } else {
    details = true;
    detailsList.remove("hidden");
    detailsStatus = "Details: Visible";
  }
}

function reset() {
  darkMode = false;
  mainContainer.classList.remove("dark");
  darkModeStatus = "Dark Mode: OFF";
  fontSize = 12;
  mainContainer.setAttribute("style", `font-size: ${fontSize}px;`);
  fontStatus = `Font Size ${fontSize}px`;
  highlight = false;
  mainContainer.classList.remove("highlight");
  highlightStatus = "Highlight: OFF";
  details = true;
  detailsList.remove("hidden");
  detailsStatus = "Details: Visible";
}
