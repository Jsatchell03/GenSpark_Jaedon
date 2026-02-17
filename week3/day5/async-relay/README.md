# Async Relay Race Simulation

### How to Run
1. Save the file as async-relay.js.
2. Open a terminal in the project directory.
3. Run the program using: `node relayRace.js`
4. Watch the race progress and results in the console.

### Features Implemented
- runner(num) returns a Promise that resolves after a random delay
- 10% chance a runner is disqualified (Promise rejection)
- Sequential relay using chained .then() calls
- Error handling with .catch() to stop the race on failure
- Race timing measured with console.time() / console.timeEnd()
- Tracks and displays how many runners successfully completed the race