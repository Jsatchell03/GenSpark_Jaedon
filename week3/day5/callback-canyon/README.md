# Canyon Traversal Simulation

### How to Run

1. Save the file as callback-canyon.js.
2. Open a terminal in the project directory.
3. Run the program using: `node callback-canyon.js`.


### Features Implemented

- traverseCanyon(actionCallback) runs multiple steps and calls callbacks with updates
- Three callback functions: logger, score tracker, danger detector
- Higher-order function createStepLogger(prefix) that returns a customized logger
- Combined callbacks to show progress, score, and dangers simultaneously
- Step-by-step updates and final result (success/fail) displayed in the console