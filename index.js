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

// setTimeOut is also called as callback function
// callback function are not Async functions

// setTimeout(() => {
//   console.log("we are now in timeout");
// }, 2000);

const items = [1, 2, 3, 4, 5];

// Using Forach inside we arrow function this is callback function
items.forEach((item) => {
  console.log(item);
});

console.log("end");
