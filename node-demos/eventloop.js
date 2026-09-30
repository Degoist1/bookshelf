console.log("1. Start");

setTimeout(() => {
  console.log("4. setTimeout (0 ms)");
}, 0);

setImmediate(() => {
  console.log("5. setImmediate");
});

Promise.resolve().then(() => {
  console.log("3. Promise");
});

process.nextTick(() => {
  console.log("2b. nextTick");
});

console.log("2. End of script");