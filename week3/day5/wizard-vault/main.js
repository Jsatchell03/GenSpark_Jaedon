const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let goldCoins;
let rank;
let manaCrystals;
let potionName;
let potionCount;
let vaultSecurityLevel;
let hasKey;
let playerName;

function askNumber(text, min, max, handleResponse) {
  rl.question(text, (res) => {
    let int = parseInt(res);
    if (isNaN(int) || int < min || int > max) {
      askYNQuestion(text, min, max, handleResponse);
    } else {
      handleResponse(int);
    }
  });
}

function askStr(text, handleResponse) {
  rl.question(text, (res) => {
    let input = res.trim();
    if (input === "") {
      askYNQuestion(text, handleResponse);
    } else {
      handleResponse(input);
    }
  });
}

function printStats() {
  let rankTitle;
  if (rank == 0) {
    rankTitle = "Apprentice";
  } else if (rank == 1) {
    rankTitle = "Adept";
  } else {
    rankTitle = "Master";
  }
  console.log(
    `Vault Security: ${vaultSecurityLevel + 1}\nRank: ${rankTitle}\nGold Coins: ${goldCoins}\nMana Crystals: ${manaCrystals}\nPotion Count: ${potionCount}`,
  );
}

function runGame() {
  goldCoins = Math.floor(Math.random() * 100);
  manaCrystals = Math.floor(Math.random() * 100);
  hasKey = Math.random() > 0.5;
  vaultSecurityLevel = Math.floor(Math.random() * 3);
  rank = Math.floor(Math.random() * 3);
  potionCount = 0;
  console.log("Welcome Wizard");
  rl.question(`What's your name? `, (name) => {
    console.log(
      `Hi ${name.trim()}! You have entered the Wizard Vault. Here are your stats: `,
    );
    playerName = name.trim();
    printStats();
    if (hasKey) {
      console.log("You have a key to the vault!");
    }
    askStr("What is the name of your potion? ", (res) => {
      potionName = res;
      askNumber(
        `How many ${potionName} potions would you like to craft? Each spell cost 3 mana crystals and 10 gold coins. `,
        0,
        Number.MAX_SAFE_INTEGER,
        (num) => {
          if (goldCoins < num * 10 && manaCrystals < num * 3) {
            console.log(
              `You don't have enough gold or mana to craft ${num} potions.`,
            );
          } else if (goldCoins < num * 10) {
            console.log(
              `You don't have enough gold to craft ${num} potions. Broke boy.`,
            );
          } else if (manaCrystals < num * 3) {
            console.log(`You don't have enough mana to craft ${num} potions.`);
          } else {
            console.log(`You crafted ${num} potions.`);
            potionCount += num;
            goldCoins -= num * 10;
            manaCrystals -= num * 3;
          }
          printStats();
          if (rank == 2 || (hasKey && vaultSecurityLevel < 2)) {
            console.log("Vault Opened");
          } else {
            console.log("Access Denied");
          }
        },
      );
    });
  });
}

runGame();
