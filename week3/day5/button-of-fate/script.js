const blessButton = document.getElementById("bless");
const curseButton = document.getElementById("curse");
const revealButton = document.getElementById("reveal");
const resetButton = document.getElementById("reset");
const fateDisplay = document.getElementById("fateDisplay");
const fateMeter = document.getElementById("fateMeter");
const message = document.getElementById("message");
const hiddenMessage = document.getElementById("hiddenMessage");

let fate = Math.floor(Math.random() * 101);
fateMeter.innerHTML = `Fate Meter: ${fate}`;
if (fate > 50) {
  fateDisplay.innerHTML = "Fate favors you.";
  fateDisplay.setAttribute("class", "good");
} else {
  fateDisplay.innerHTML = "Darkness closes in.";
  fateDisplay.setAttribute("class", "bad");
}

blessButton.addEventListener("click", () => {
  message.innerHTML = "You have been blessed with good fortune";
  fate += 10;
  fateMeter.innerHTML = `Fate Meter: ${fate}`;
  if (fate > 50) {
    fateDisplay.innerHTML = "Fate favors you.";
    fateDisplay.setAttribute("class", "good");
  } else {
    fateDisplay.innerHTML = "Darkness closes in.";
    fateDisplay.setAttribute("class", "bad");
  }
  blessButton.setAttribute("class", "active");
  curseButton.setAttribute("class", "");
  revealButton.setAttribute("class", "");
  resetButton.setAttribute("class", "");
});

curseButton.addEventListener("click", () => {
  message.innerHTML = "You have been cursed with bad fortune";
  fate -= 10;
  fateMeter.innerHTML = `Fate Meter: ${fate}`;
  if (fate > 50) {
    fateDisplay.innerHTML = "Fate favors you.";
    fateDisplay.setAttribute("class", "good");
  } else {
    fateDisplay.innerHTML = "Darkness closes in.";
    fateDisplay.setAttribute("class", "bad");
  }
  blessButton.setAttribute("class", "");
  curseButton.setAttribute("class", "active");
  revealButton.setAttribute("class", "");
  resetButton.setAttribute("class", "");
});

revealButton.addEventListener("click", () => {
  hiddenMessage.setAttribute("class", "");
  blessButton.setAttribute("class", "");
  curseButton.setAttribute("class", "");
  revealButton.setAttribute("class", "active");
  resetButton.setAttribute("class", "");
});

resetButton.addEventListener("click", () => {
  message.innerHTML = "";
  fate = 0;
  fateMeter.innerHTML = `Fate Meter: ${fate}`;
  if (fate > 50) {
    fateDisplay.innerHTML = "Fate favors you.";
    fateDisplay.setAttribute("class", "good");
  } else {
    fateDisplay.innerHTML = "Darkness closes in.";
    fateDisplay.setAttribute("class", "bad");
  }
  hiddenMessage.setAttribute("class", "hidden");
  blessButton.setAttribute("class", "");
  curseButton.setAttribute("class", "");
  revealButton.setAttribute("class", "");
  resetButton.setAttribute("class", "active");
});
