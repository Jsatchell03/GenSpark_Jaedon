let scores = [7, 14, 11, 14, 18, 8, 5, 8, 0, 0]; // Points Spencer Dinwiddie scored in his last 10 games
let startScores = [7, 14, 11, 14, 18, 8, 5, 8, 0, 0];
const rounds = 5;

for (let i = 0; i < rounds; i++) {
  let choice = Math.floor(Math.random() * 5);

  switch (choice) {
    case 0:
      addEntry();
      break;
    case 1:
      removeEntry();
      break;
    case 2:
      updateEntry();
      break;
    case 3:
      findEntry();
      break;
    case 4:
      sortRecords();
      break;
  }
}

function addEntry() {
  let val = Math.floor(Math.random() * 35);

  scores.push(val);
  console.log(`${val} Added`);
}

function removeEntry() {
  let index = Math.floor(Math.random() * scores.length);
  console.log(`Entry ${index}:${scores[index]} removed`);
  scores.splice(index, 1);
}

function updateEntry() {
  let index = Math.floor(Math.random() * scores.length);
  let newVal = Math.floor(Math.random() * 35);
  console.log(`Entry ${index}:${scores[index]} changed to ${newVal}`);
  scores[index] = newVal;
}

function findEntry() {
  let index = Math.floor(Math.random() * scores.length);
  console.log(`Entry ${index}:${scores[index]} found`);
}

function sortRecords() {
  scores.sort();
  console.log(`Records sorted ${scores}`);
}

console.log(
  `Total number of entries: ${scores.length}\nSum of values: ${scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}\nAverage value: ${scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / scores.length}\nHighest Value: ${Math.max(...scores)}\nLowest Value: ${Math.min(...scores)}\nNumber of scores greater than 10: ${scores.reduce(
    (accumulator, currentValue) => {
      if (currentValue > 10) {
        accumulator += 1;
        return accumulator;
      } else {
        return accumulator;
      }
    },
    0,
  )}`,
);

console.log(`Before ${startScores}`);
console.log(`After ${scores}`);
