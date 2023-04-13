# `06` Concatenate Strings

The best approach for this project is to divide our excuse by it's structure, using an array for each sentence, so we can get a different value for each of them. 

We can divide our excuse by **who** did it, **what** happened, and **when** it happened. If that's the case, we can have an array for different **who** values, another one for different **what** values, and another one for different **when** values. All together will look like this:

```js
let who = ['The dog','My granma','His turtle','My bird'];
let what = ['ate','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
```

With an array for each part of the excuse structure, we can generate many different combinations between them to get more excuses.

Getting back to our problem, we already know how to get random value from an array, but in this case, we need to get a random value from three different arrays, and in order to generate a excuse from these values, we have to put them together in one string, that's exactly when string concatenation comes to action!

## 📝 Instructions:

1. Add this new array next to `developer`:

```js
let jobTitle = ["Software developer", "Technical lead", "Data scientist", "CTO"];
```

2. Get a random value from each of the arrays (`developers` and `jobTitles`) and concatenate together to get a sentence with this structure:

```js
{developer} is our {jobTitle}
```

3. Print the resulting array in the console.

## Expected Output:

```js
"Karla is our CTO"
"Alex is our Technical lead"
"Joe is our Software developer"
```

> Notice that all these are different possible outputs. In your case, you should only print one but as it will be randomly generated, it should be different everytime you build it.

## 💡 Hint:

+ You can concatenate strings by using the `+` or with the backsticks.