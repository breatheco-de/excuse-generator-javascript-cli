# `03.2` Generate Random Values

In the previous step we learned how to generate a random number between 0 and 1 (Exclunding both). In order to get a number that can be used to access array values, it should be an integer and the number should be between 0 and the length of the array - 1 (It's the length - 1 because the positions starts from 0 instead of 1).

### Generate random number between a range:

We know how to get random numbers, now let's add an improvement to it and get only random numbers between a specific range (Between two numbers). In order to do that, we have to multiply the random number by the upper limit of the range and sum to this result the lower limit of the range. Here is an example:

```js
// We are going to generate a random number between 1 and 10.
let randomNumber = (Math.random() * 10) + 1
console.log(randomNumber) // This will print a random number between 1 and 10 but with decimals. e.g.: 3.435
```

### Convert a float number into an integer:

In order to convert a float number (A number with decimals) into an integer, we can use the function `Math.floor()`, which will get only the integer part of the number. Here is an example of how it works:

```js
let myFloatNumber = 23.567324;
let myIntegerNumber = Math.floor(myFloatNumber);
console.log(myIntegerNumber); // This will print 23
```

### Generate a random integer number between a range:

Now that we know how to generate a random number between a specific range and convert a float number into an integer, then we are now able to generate a random number that can be used to access array values. This is how all together would look like:

```js
let randomNumber = Math.floor(Math.random() * upperLimit) + lowerLimit
```

> If you replace the upperLimit and lowerLimit by the limits of your range, then you will be able to generate a random integer number that belongs to the range.

## 📝 Instructions:

1. Generate a random integer number between 0 and 4.

## 💡 Hint:

+ If the lowerLimit is 0, then you don't have to sum anything.