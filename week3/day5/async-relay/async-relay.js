function runner(num) {
  console.log(`Runner ${num} starting...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(`Runner ${num} disqualified.`);
        return;
      }
      resolve(`Runner ${num} finished.`);
    }, Math.random() * 1500);
  });
}

let count = 0;
console.time("Race finished in: ");
runner(1)
  .then((msg) => {
    console.log(msg);
    count += 1;
    return runner(2);
  })
  .then((msg) => {
    count += 1;
    console.log(msg);
    return runner(3);
  })
  .then((msg) => {
    count += 1;
    console.log(msg);
    return runner(4);
  })
  .then((msg) => {
    count += 1;
    console.log(msg);
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
    console.log("Failed");
  })
  .finally(() => {
    console.timeEnd("Race finished in: ");
    console.log(`${count} Runners Completed`);
  });
