 **7-day DSA learning lesson plan using JavaScript**, focused on **core data structures**. Each day includes:

* 📘 What to learn
* 🧠 Concepts explained
* 💻 Code examples
* 🧪 Practice problems

---

## 🗓️ 7-Day DSA with JavaScript Plan

---

### ✅ **Day 1: Arrays**

**Topics**: Traversal, Insertion, Deletion, Search, Reverse

#### 📘 Learn:

* Array methods: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`
* Looping through arrays (`for`, `forEach`, `map`)

#### 💻 Code Example:

```js
const arr = [1, 2, 3];
arr.push(4);           // [1, 2, 3, 4]
arr.splice(1, 1);      // Remove 2 => [1, 3, 4]
```

#### 🧪 Practice:

* Reverse an array
* Rotate array by `k` positions
* Find the largest/smallest number

---

### ✅ **Day 2: Strings**

**Topics**: String manipulation, substrings, palindrome, anagram

#### 📘 Learn:

* Methods: `split()`, `join()`, `substring()`, `includes()`, `replace()`
* Two pointer technique

#### 💻 Code Example:

```js
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
```

#### 🧪 Practice:

* Check if a string is palindrome
* Count vowels in a string
* Check if two strings are anagrams

---

### ✅ **Day 3: Linked List**

**Topics**: Singly linked list, insert, delete, reverse

#### 📘 Learn:

* How a node works (value + next)
* Traversing a linked list

#### 💻 Code Example:

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
```

#### 🧪 Practice:

* Reverse a linked list
* Find middle of linked list
* Detect loop in linked list

---

### ✅ **Day 4: Stack**

**Topics**: LIFO, using array, valid parentheses

#### 📘 Learn:

* Stack operations: `push`, `pop`, `peek`
* Use cases in expressions, undo operations

#### 💻 Code Example:

```js
function isValid(s) {
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };
  for (let char of s) {
    if ('([{'.includes(char)) stack.push(char);
    else if (stack.pop() !== map[char]) return false;
  }
  return stack.length === 0;
}
```

#### 🧪 Practice:

* Valid parentheses
* Implement stack using array
* Min Stack

---

### ✅ **Day 5: Queue**

**Topics**: FIFO, circular queue, using array

#### 📘 Learn:

* Queue operations: `enqueue`, `dequeue`, `peek`
* Use cases in BFS, printers, buffers

#### 💻 Code Example:

```js
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
}
```

#### 🧪 Practice:

* Implement queue
* First non-repeating character in stream
* Sliding window maximum

---

### ✅ **Day 6: Hash Table (Map)**

**Topics**: Key-value pair, lookup, frequency count

#### 📘 Learn:

* `Map` and `Object` in JS
* Time complexity of operations

#### 💻 Code Example:

```js
const map = new Map();
map.set('a', 1);
console.log(map.get('a')); // 1
```

#### 🧪 Practice:

* Two sum
* Group anagrams
* Frequency of elements

---

### ✅ **Day 7: Set**

**Topics**: Unique values, deduplication

#### 📘 Learn:

* `Set` vs `Array`
* Use cases in duplicates removal, uniqueness

#### 💻 Code Example:

```js
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)]; // [1, 2, 3]
```

#### 🧪 Practice:

* Remove duplicates from array
* Check if all characters in a string are unique
* Intersection of two arrays

---

## 🔄 Daily Routine Suggestion (2–3 hrs/day)

| Time        | Task                                      |
| ----------- | ----------------------------------------- |
| 30 mins     | Learn theory and code examples            |
| 30 mins     | Implement 2–3 variations on your own      |
| 1–1.5 hours | Solve 3–5 problems on LeetCode/HackerRank |

---


