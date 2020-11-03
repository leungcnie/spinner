let spinnerStates = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 100;

for (const state of spinnerStates) {
  setTimeout(() => {
    process.stdout.write(state);    
  }, delay);
  delay += 200;
}
setTimeout(() => {
  console.log();
}, delay);

// let index = 0;
// let backToStart = 0;

// const spinner = setInterval(() => {
//   if (backToStart === 3) {
//     console.log();
//     return clearInterval(spinner);
//   }
//   if (spinnerStates[index] === spinnerStates[0]) {
//     backToStart++;
//   }
//   process.stdout.write(spinnerStates[index]);
//   index++
// }, 200);