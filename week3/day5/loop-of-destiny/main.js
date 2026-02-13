const readline = require("node:readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let health;
let energy;
let strength;
let killCount;
let enemyHealth;
let enemyStrength;

function clearScreen() {
  console.clear();
}

function divider() {
  console.log("=====================================");
}

async function pause() {
  await rl.question("\nPress Enter to continue...");
}

async function askAttackOrRest() {
  while (true) {
    console.log("\n Your Move");
    console.log("1) Attack (-2 Energy)");
    console.log("2) Rest (+1 Energy)");
    const res = parseInt(await rl.question("> "));
    if (res === 1 || res === 2) return res;
  }
}

async function askStr(text) {
  while (true) {
    const res = (await rl.question(text)).trim();
    if (res.length > 0) return res;
  }
}

function printStats() {
  divider();
  console.log("PLAYER");
  console.log(`Health   : ${health}`);
  console.log(`Energy   : ${energy}`);
  console.log(`Strength : ${strength}`);
  console.log(`Score    : ${killCount}`);

  divider();
  console.log("ENEMY");
  console.log(`Health   : ${enemyHealth}`);
  console.log(`Strength : ${enemyStrength}`);
  divider();
}

async function runGame() {
  killCount = 0;
  enemyHealth = Math.floor(Math.random() * 10) + 5;
  enemyStrength = Math.floor(Math.random() * 5) + 1;
  strength = Math.floor(Math.random() * 11) + 5;
  health = 200;
  energy = 10;

  clearScreen();
  console.log(" WELCOME TO THE LOOP OF DESTINY \n");

  const name = await askStr("Adventurer, what is your name? ");
  clearScreen();

  console.log(`Welcome, ${name}.\n`);
  console.log("Each turn you may:");
  console.log("- Attack (costs 2 energy)");
  console.log("- Rest (+1 energy)\n");

  await pause();

  while (health > 0) {
    clearScreen();
    printStats();

    const move = await askAttackOrRest();

    if (move === 2) {
      energy += 1;
      console.log("\nYou rest and regain 1 energy.");
    } else if (energy < 2) {
      console.log("\nNot enough energy! You must rest.");
      energy += 1;
    } else if (enemyHealth <= strength) {
      enemyHealth = 0;
      console.log("\nYou strike the final blow!");
      console.log("Enemy defeated!");

      killCount += 1;
      energy += 2;
      health += Math.floor(Math.random() * (10 + killCount));
      strength += Math.floor(Math.random() * (5 + killCount));
    } else {
      enemyHealth -= strength;
      energy -= 2;
      console.log(`\nYou deal ${strength} damage!`);
    }

    if (enemyHealth > 0) {
      health -= enemyStrength;
      console.log(`Enemy hits you for ${enemyStrength} damage!`);
      await pause();
    } else {
      console.log("\nA stronger enemy approaches...");
      enemyHealth =
        Math.floor(Math.random() * (10 * killCount)) + killCount * 10;
      enemyStrength =
        Math.floor(Math.random() * (5 * killCount)) + killCount * 5;
      await pause();
    }
  }

  clearScreen();
  console.log("💀 GAME OVER 💀");
  console.log(`Final Score: ${killCount}`);
  divider();

  rl.close();
}

runGame();
