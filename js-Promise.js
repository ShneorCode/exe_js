import { rejects } from 'assert';
import fs from 'fs';
import { resolve } from 'path';
import { promises } from 'timers';


// // תרגיל 1


// function delayedGreet(name, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello: " + name);
//         }, delay)
//     })
// }

// delayedGreet("avi", 2000).then(res => {
//     console.log(res);
// })


// // תרגיל 2

// function readFileContent(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, "utf-8", (err, data) => {
//             if (err) return reject(err);
//             resolve(data);
//         })
//     })
// }

// readFileContent("./file.txt").then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })


// // תרגיל 3
// function randomOperation() {
//     return new Promise((resolve, rejects) => {
//         const random = Math.random();

//         if (random < 0.5) {
//             resolve("Success!");
//         } else {
//             rejects("Failure!");
//         }
//     });
// }

// randomOperation().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// // תרגיל 4

// function raceTimers() {
//     return new Promise((resolve, rejects) => {
//         setTimeout(() => {
//             resolve("Timer A finished!");
//         }, 2000);
//         setTimeout(() => {
//             resolve("Timer B finished!");
//         }, 3000);
//     })
// }

// raceTimers().then(res => {
//     console.log(res);
// })


// // תרגיל 5
// let url = 'https://jsonplaceholder.typicode.com/todos/1';

// function fetchData(url) {
//     fetch(url).then((res) => res.text()) 
//         .then((data) => {
//             console.log(data);     
//         })
//         .catch((err) => {
//             console.error("Error:", err);
//         });
// }

// fetchData(url);


// תרגיל 6
// function waitAll() {
//   const p1 = new Promise(resolve => {
//     setTimeout(() => resolve("First"), 1000);
//   });

//   const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("Second"), 2000);
//   });

//   const p3 = new Promise(resolve => {
//     setTimeout(() => resolve("Third"), 3000);
//   });

//   return Promise.all([p1, p2, p3]);
// }

// waitAll().then(results => {
//   console.log(results);
// });


// // תרגיל 7
// function checkFileExists(path) {
//     return new Promise((resolve, reject) => {
//         fs.access(path, fs.constants.F_OK, (err) => {
//             if (err) reject(false);
//             else resolve(true);

//         })
//     })
// }

// const path = "./log.txt";
// checkFileExists(path).then(res => {
//     console.log("File exists: " + true);
// }).catch(err => {
//     console.log("File exists: " + false);
// })

// תרגיל 8
// function chainedGreetings() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Hi!");
//       resolve();
//     }, 1000);
//   })
//   .then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("How are you?");
//         resolve();
//       }, 2000);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Goodbye!");
//         resolve();
//       }, 1000);
//     });
//   });
// }

// chainedGreetings();

// // תרגיל 9

// const inputPath = "./log00.txt";
// const outputPath = "./log01.txt";

// function processFile(inputPath, outputPath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(inputPath, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         const result = `Word count: ${data.length}`;
//         resolve(result); 
//       }
//     });
//   })
//   .then((processedData) => {
//     return new Promise((resolve, reject) => {
//       fs.writeFile(outputPath, processedData, (err) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve("The operation was successful.");
//         }
//       });
//     });
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });
// }

// processFile(inputPath, outputPath);

// // תרגיל 10

// function getUserTitle(userId) {
//   const url = `https://jsonplaceholder.typicode.com/todos/${userId}`;

//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         console.error(`HTTP error! status: ${response.status}`);
//         return null; 
//       }
//       return response.json();
//     })
//     .then(json => {
//       if (json) {
//         console.log(`User ${userId}'s title: ${json.title}`);
//       } else {
//         console.log('No data to show');
//       }
//     })
//     .catch(err => {
//       console.error('Error:', err.message);
//     });
// }

// getUserTitle(4);