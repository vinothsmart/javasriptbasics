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
  getUsersVideos(user.email, (videos) => {
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
