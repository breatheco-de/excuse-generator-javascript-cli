# `05` Access Array Values Randomly

So far, we've learned how to generate random integer numbers and accessing to array values by using the position of the element.

Now if we use all that we've learned so far, we can access the random values of our array.

Going back to how we generated random integer numbers between a range before, we had something similar to this:

```js
let randomNumber = Math.floor(Math.random() * upperLimit) + lowerLimit
```

So if we want to use this random number to get a value from an array, then the range of the number should be between 0 and the length of the array -1. The code will look something like this:

```js
let names = ["Hannah", "John", "Alejandro"];
let randomArrayPosition = Math.floor(Math.random() * names.length);
```

And this `randomArrayPosition` that we generated can be used to access an array value.

## 📝 Instructions:

1. Generate a random number that can be used to access a value from the `developers` array.

2. Use that randomly generated position to access a value from the `developers` array and print the value in the console.

## 💡 Hint:

+ Remember the random number used as the position to access a value from the array should be between 0 and the length of the array.
