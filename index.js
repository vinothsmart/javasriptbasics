// sync

// function otherFunc() {
//   console.log("we are now inside the function");
//   console.log("fetching the data from the API");
// }

// console.log("start");

// otherFunc();

// console.log("end");

// Async
// console.log("start");

// setTimeOut is also called as callback function
// callback function are not Async functions

// setTimeout(() => {
//   console.log("we are now in timeout");
// }, 2000);

// const items = [1, 2, 3, 4, 5];

// // Using Forach inside we arrow function this is callback function
// items.forEach((item) => {
//   console.log(item);
// });

// console.log("end");

// Another Async Javascript function

function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ user: email });
  }, 3000);
}

function getUsersVideos(email, callback) {
  setTimeout(() => {
    callback(["vid1", "vid2", "vid3"]);
  }, 3000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("video description here");
  }, 2000);
}

console.log("start");

const user = loginUser("vino@gmail.com", "12345", (user) => {
  // console.log(user);
  getUsersVideos(user.user, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (detail) => {
      console.log(detail);
    });
  });
});

/**
 * output like this
 * 
 *
 *  start
undefined
{ user: 'vino@gmail.com' }
Need to fix this by callback func
 */

/**
 * Using that callback we fixed
 * start
{ user: 'vino@gmail.com' }
 */

// function randomNum(min, max, callback) {
//   setTimeout(() => {
//     callback(Math.floor(Math.random() * (max - min + 1) + min));
//   }, 2000);
// }

// create a function that generates a random number
// function randomNum(min, max, callback) {
//   setTimeout(() => {
//     callback(Math.floor(Math.random() * (max - min + 1) + min));
//   }, 2000);
// }

// create function to get yesterdays date
// function getYesterday() {
//   const date = new Date();
//   date.setDate(date.getDate() - 1);
//   return date;
// }

// create array of numbers
const numbers = [1, 2, 3, 4, 5];

// create array of 5 names
const names = ["vino", "vinod", "vinodh", "vinodh1", "vinodh2"];

// create an array of objects with id , name and age
const users = [
  { id: 1, name: "vino", age: 30 },
  { id: 2, name: "vinod", age: 25 },
  { id: 3, name: "Kanna", age: 20 },
  { id: 4, name: "Ajitha", age: 25 },
  { id: 5, name: "Vignesh", age: 20 },
];

//order the array of objects by age
const orderedUsers = users.sort((a, b) => {
  return a.age - b.age;
});

// get only people whos name starts with V and order by age ascending
const vinodUsers = users
  .filter((user) => {
    return user.name.startsWith("V");
  })
  .sort((a, b) => {
    return a.age - b.age;
  });
