const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let health = 100;
let gold = 50;
let hasTorch = false;
let hasSword = false;
let playerName;
let aura = 0;
function askYNQuestion(text, handleResponse) {
  rl.question(text, (res) => {
    if (res.toLowerCase() != "y" && res.toLowerCase() != "n") {
      askYNQuestion(text, handleResponse);
    } else {
      handleResponse(res.toLowerCase());
    }
  });
}

function printStats() {
  console.log(`Health: ${health}\nGold: ${gold}`);
}

function runGame() {
  health = 100;
  gold = 50;
  hasTorch = false;
  hasSword = false;
  playerName;
  aura = 0;
  console.log("Welcome to the Dragon Cave!");
  rl.question(`What's your name? `, (name) => {
    console.log(`Hi ${name}! You have entered the Dragon Cave.`);
    playerName = name;
    askYNQuestion(
      "You come across a vendor selling chicken tenders. Will you purchase some? (Y/N) ",
      (res) => {
        if (res === "y") {
          gold -= 10;
          health += 10;
          aura == 10;
          console.log(
            "The tenders were delicious. You have gained 10 health. You have spent 10 gold.",
          );
        } else {
          aura -= 10;
          console.log("The vendor will remember that.");
        }
        printStats();
        askYNQuestion(
          "You come across a waste yute. Will you fight him and take his stuff? (Y/N) ",
          (res) => {
            if (res === "y") {
              gold += 5;
              health -= 15;
              aura += 25;
              console.log(
                "He was lowkey strong. You lost 15 health. He only had 5 gold.",
              );
            } else {
              aura -= 15;
              console.log(
                "He called you a bum as you walked by. You lost 15 aura.",
              );
            }
            printStats();
            askYNQuestion(
              "Steve Buscemi is selling torches for 25 gold. He says the dragon is sensitive to fire. Will you buy one? (Y/N) ",
              (res) => {
                if (res === "y") {
                  hasTorch = true;
                  gold -= 25;
                  console.log("Hope he wasn't lying");
                } else {
                  console.log("He was probably lying anyway.");
                }
                printStats();
                askYNQuestion(
                  "A shady man offers to sell you a sword for 40 gold. Will you buy it? (Y/N) ",
                  (res) => {
                    if (res === "y") {
                      if (gold < 40) {
                        gold = 0;
                        health -= 30;
                        console.log(
                          "You don't have enough gold. He stabbed you for wasting his time and took the rest of your gold. You lost 30 health.",
                        );
                      } else if (aura < 0) {
                        gold = 0;
                        health -= 30;
                        console.log(
                          "He said you have no aura then stabbed you and took the rest of your gold. You lost 30 health.",
                        );
                      } else {
                        gold -= 40;
                        health += 10;
                        hasSword = true;
                        console.log(
                          "He said he likes your vibe. He gives you the sword and a potion of healing. You gained 10 health.",
                        );
                      }
                    } else {
                      console.log(
                        "Yeah who even needs a sword to fight a dragon anyways.",
                      );
                    }
                    printStats();
                    askYNQuestion(
                      "There is a strange bottle on the ground labled 'noitoP htlaeH'. Do you drink it? (Y/N) ",
                      (res) => {
                        if (res === "y") {
                          health += 15;
                          console.log("You ganined 15 health.");
                        } else {
                          console.log(
                            "Yeah I wouldn't drink strange potions either.",
                          );
                        }
                        printStats();
                        console.log("You have found the Dragon.");
                        if (
                          health < 30 ||
                          (health < 40 && !hasSword) ||
                          (health < 60 && !hasTorch) ||
                          (!hasSword && !hasTorch && aura < 0)
                        ) {
                          console.log("You lost the dragon killed u :(");
                        } else {
                          console.log(
                            "You win! You defeated the dragon " +
                              playerName +
                              "!",
                          );
                        }
                        askYNQuestion(
                          `Would you like to play again? (Y/N) `,
                          (res) => {
                            if (res === "y") {
                              runGame();
                            }
                          },
                        );
                      },
                    );
                  },
                );
              },
            );
          },
        );
      },
    );
  });
}

runGame();
