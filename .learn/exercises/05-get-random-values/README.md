# `05` Get Random Values

In the previos step we were able to get a value from each of the arrays and concatenate them in one string, but that is not exactly what the project is asking for, we need to get the values randomly.

In order to get a random element from the array, we have to generate a random number. The random number generated should be between 0 and the length of the array.

This is how you generate a random number between 0 and a greater number:

```js
let randomNumber = Math.floor(Math.random() * upperLimit);
```

## 📝 Instructions:

1. Generate a random number between 0 and the length of the array `who`.

2. Use that random number to access to an element of the array `who`.

3. Concatenate the random element of `who` with the other elements you generated before.

## Expected Output:

```js
the grandma ate my food before the class
```