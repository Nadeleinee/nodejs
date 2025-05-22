function asyncWithCallback(callback) {
  setTimeout(() => {
    console.log("1️⃣ Callback: Task done after 1 second");
    callback();
  }, 1000);
}

function asyncWithPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2️⃣ Promise: Task done after 2 seconds");
      resolve();
    }, 2000);
  });
}

function asyncWithNextTick() {
  process.nextTick(() => {
    console.log("3️⃣ process.nextTick: Runs before timeout or I/O");
  });
}

function asyncWithSetImmediate() {
  setImmediate(() => {
    console.log("4️⃣ setImmediate: Runs after current I/O cycle");
  });
}

function asyncWithTimer() {
  setTimeout(() => {
    console.log("5️⃣ setTimeout: Delayed by 500ms");
  }, 500);
}

module.exports = {
  asyncWithCallback,
  asyncWithPromise,
  asyncWithNextTick,
  asyncWithSetImmediate,
  asyncWithTimer
};