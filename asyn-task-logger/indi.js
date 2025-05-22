const {
  asyncWithCallback,
  asyncWithPromise,
  asyncWithNextTick,
  asyncWithSetImmediate,
  asyncWithTimer
} = require('./task');

console.log("🟢 Starting asynchronous task demo");

asyncWithNextTick();        // Runs immediately after current operation
asyncWithSetImmediate();    // Runs after I/O
asyncWithTimer();           // Runs after 500ms

asyncWithCallback(() => {
  console.log("✅ Callback completed");
});

asyncWithPromise().then(() => {
  console.log("✅ Promise completed");
});

console.log("🟡 Synchronous log - happens first");