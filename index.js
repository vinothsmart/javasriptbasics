// sync

// function otherFunc() {
//   console.log("we are now inside the function");
//   console.log("fetching the data from the API");
// }

// console.log("start");

// otherFunc();

// console.log("end");

// Async
console.log("start");

setTimeout(() => {
  console.log("we are now in timeout");
}, 2000);

console.log("end");
