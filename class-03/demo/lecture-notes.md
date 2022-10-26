# Class 03 Lecture Notes

## Arrays

- Data Type // Data Structure **speical type of object**
- A collection or list of elements -> [1, 2, 3, 4]
  - cnan be mixed types of elements -> store strings, booleans, numbers, other arrays

````js
// * Anatomy of an array
//                0     1    2       3
let myArray = ['hello', 4, true, [1, 2, 3]];
let myString = myArray[0];
let myNum = myArray[1];
let myBoolean = myArray[2];
let myNestedArray = myArray[3]; => [1, 2, 3];
let myNestedNum = myArray[3][1]; === let myNestedNum = myNestedArray[1];
````

- Don't have to predetermine the size of the array
- Every element has a position in the array -> called its index
  - Index is Zero based

- Array's have built in methods!
  - `.push()` - allow us to add elements to our array
  - `.pop()`  - allows use to remove the LAST element of our array 
    - `.push()` and `.pop()` make arays First In Last Out (FILO)

- Array Property
  - `.length` - tells you how many elements live in your array

## Loops

### For 

- Great for looping/iterating and doing something a specified number of times
- Great for looping through arrays! (arrays have a length)

```js
// Anatomy of a for loop
for (staring value; conditional; increment) {
  // do some stuff until the conditional is no longer true
}

// example for loop to print contents of an array
//              i < 4
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

### While

- Do something until a condition is no longer true
- Beware of infinite loops!

```js
//  Anatomy of a while loop
while (conditional) {
  // do some stuff until the conditional is no longer true
}
```

### Do...While

- Do something at least once, and then continue until the condition is no longer true
- Beware of infinite loops!

```js
do {
  // do some stuff once and then again until the conditional is false
} while (conditional)
```


