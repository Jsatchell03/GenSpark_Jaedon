const readline = require("node:readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function clearScreen() {
  console.clear();
}

async function pause() {
  await rl.question("\nPress Enter to continue...");
}

async function chooseFunction() {
  while (true) {
    console.log("\n Choose Utility Function");
    console.log("1) Calculate Total With Tax");
    console.log("2) String To Title Case");
    console.log("3) Check If Integer Is Prime");
    console.log("4) Check If String Is Palindrome");
    console.log("5) Close");

    const res = parseInt(await rl.question("> "));
    clearScreen();

    if (res >= 1 && res <= 5) return res;
  }
}

async function askStr(text) {
  while (true) {
    console.log(text);
    const res = (await rl.question(">")).trim();
    clearScreen();
    if (res.length > 0) return res;
  }
}

async function askInt(text, min, max) {
  while (true) {
    console.log(text);
    const res = parseInt((await rl.question(">")).trim());
    clearScreen();
    if (res > min && res <= max) return res;
  }
}

async function askFloat(text, min, max) {
  while (true) {
    console.log(text);
    const res = parseFloat((await rl.question(">")).trim());
    clearScreen();
    if (res > min && res <= max) return res;
  }
}

function calculateTotalWithTax(total, taxRate) {
  return total + (taxRate / 100) * total;
}

function strToTitle(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
}

function isPrime(num) {
  if (num <= 1 || (num > 2 && num % 2 == 0)) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  for (let i = 3; i * i < num; i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function isPalindrome(str) {
  cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  for (let i = 0; i < Math.floor(cleanStr.length); i++) {
    if (cleanStr.charAt(i) != cleanStr.charAt(cleanStr.length - i - 1)) {
      return false;
    }
  }

  return true;
}

async function run() {
  clearScreen();
  let quitLoop = false;
  while (!quitLoop) {
    const choice = await chooseFunction();
    switch (choice) {
      case 1:
        const total = await askFloat(
          "Enter the pre-tax total",
          0,
          Number.MAX_SAFE_INTEGER,
        );
        const taxRate = await askFloat("Enter the tax rate", 0, 1000);
        console.log(`Result: ${calculateTotalWithTax(total, taxRate)}`);
        await pause();
        break;
      case 2:
        const str = await askStr("Enter string");
        console.log(`Result: ${strToTitle(str)}`);
        await pause();
        break;
      case 3:
        const num = await askInt(
          "Enter number",
          Number.MIN_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER,
        );
        console.log(
          `Result: ${isPrime(num) ? `${num} is prime` : `${num} is not prime`}`,
        );
        await pause();
        break;
      case 4:
        const input = await askStr("Enter string");
        console.log(
          `Result: ${isPalindrome(input) ? `${input} is a palindrome` : `${input} is not a palindrome`}`,
        );
        await pause();
        break;
      case 5:
        quitLoop = true;
    }
    clearScreen();
  }

  rl.close();
}

run();
