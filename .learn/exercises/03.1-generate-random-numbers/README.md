# `03.1` Generate Random Values

For this project we are using arrays to get different values randomly. 

Let's remind how we can access to array values. Array values can be accessed by using the number of the position, the number of the positions will start from 0, therefore if we want to access to the second element of the array we use the position 1.

Here is an example of how to access array values:

```js
let animals = ["horse", "dog", "cat"];
console.log(animals[1]); // This will print "dog".
```

> Notice that we are using the number `1` between the square brackets `[]` to access to the second position ("dog") of this array `animals`.

Now that we know how to access to array values, let's explain why we chose arrays to generate a random excuse. In Javascript if you want to generate random values, you have to start from generating random numbers, then we can access the values of an array using this random number as the position of the element that will be accessed from the array, and that's how we are going to solve this challenge.

Let's start by generating a random number. We can use the function `Math.random()` which will generate a random number between 0 and 1 (excluding both).

## 📝 Instructions:

1. Generate a random number using the function `Math.random()` and print the number in the console.

## 💡 Hint:

+ Here is more information about the `Math.random()` function: https://www.w3schools.com/js/js_random.asp.