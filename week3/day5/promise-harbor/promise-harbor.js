function dockShip(shipName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shipName || shipName.trim() === "") {
        reject("Docking failed: Ship name is invalid.");
        return;
      }

      if (Math.random() < 0.3) {
        reject(
          `Docking failed: ${shipName} was denied entry due to rough seas.`,
        );
        return;
      }

      resolve({ shipName, arrivalTime: new Date().toLocaleTimeString() });
    }, 1000);
  });
}

function runHarborSimulation(shipName) {
  dockShip(shipName)
    .then((data) => {
      console.log(`${data.shipName} has arrived at ${data.arrivalTime}.`);
      return { ...data, dockNumber: Math.floor(Math.random() * 10) + 1 };
    })
    .then((data) => {
      console.log(`Assigning ${data.shipName} to Dock #${data.dockNumber}.`);
      return { ...data, status: "Successfully Docked" };
    })
    .then((data) => {
      console.log(`${data.shipName} status: ${data.status}`);
      return data;
    })
    .catch((error) => {
      console.error(`ERROR: ${error}`);
    })
    .finally(() => {
      console.log("Docking attempt complete.\n");
    });
}

runHarborSimulation("Neptune");
runHarborSimulation("Sea Queen");
runHarborSimulation("");
