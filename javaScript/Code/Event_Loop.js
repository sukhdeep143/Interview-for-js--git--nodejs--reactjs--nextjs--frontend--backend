// What will be the output of the following code? Explain how the JavaScript event loop handles this.

console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');


// Start
// End
// Promise
// Timeout

// 1️⃣ First, understand the types of tasks
// ✅ Synchronous code runs immediately, line by line.
// ✅ setTimeout is a macrotask (goes in the macrotask queue).
// ✅ Promise.then is a microtask (goes in the microtask queue).

// JavaScript runs:

// All synchronous code first.

// Then all microtasks.

// Then one macrotask, and repeats.
// 2️⃣ Step by step execution
// ▶️ Line 1:

// 
// 
// 
// console.log('Start');
// ✅ Synchronous → runs immediately.
// ✅ Output so far:

// sql
// 
// 
// Start
// ▶️ Line 2-4:

// 
// 
// 
// setTimeout(() => {
//   console.log('Timeout');
// }, 0);
// ✅ setTimeout schedules its function in the macrotask queue.
// ✅ It does NOT run now.

// It’s like saying: “Hey, run this later after other things are done.”

// ▶️ Line 5-7:

// 
// 
// 
// Promise.resolve().then(() => {
//   console.log('Promise');
// });
// ✅ A resolved promise schedules .then in the microtask queue.
// ✅ It also does NOT run now.

// But microtasks run sooner than macrotasks!

// ▶️ Line 8:

// 
// 
// 
// console.log('End');
// ✅ Synchronous → runs immediately.
// ✅ Output so far:

// sql
// 
// 
// Start
// End
// Now, synchronous code is finished!
// ✅ Event loop checks for microtasks.
// ✅ It runs all microtasks before macrotasks.

// ▶️ Microtask queue:

// The Promise's .then → runs now.

// 
// 
// 
// console.log('Promise');
// ✅ Output so far:

// sql
// 
// 
// Start
// End
// Promise
// ▶️ Macrotask queue:

// setTimeout → now it runs.

// 
// 
// 
// console.log('Timeout');
// ✅ Final output:

// sql
// 
// 
// Start
// End
// Promise
// Timeout
// ✅ Final Explanation in one line:
// JavaScript runs:
// 1️⃣ All synchronous code first → Start, End
// 2️⃣ Then all microtasks → Promise
// 3️⃣ Then macrotasks → Timeout

// ✅ OUTPUT
// sql
// 
// 
// Start
// End
// Promise
// Timeout