<!--hide-->
# The Excuse Generator CLI (in Javascript)
<!--endhide-->

Disneyland for procrastinators and lazy people.

This project is ideal for avoiding someone annoying; it takes no more than 20 lines of code and can save you for the rest of your life!

## The Goal

We wanted a project that used very little Javascript but still, with a very fun application, the excuse generator takes 20 lines of code, is super simple to understand, and is the perfect first-ish project for any beginner developer.

<how-to-start>
  
## 🌱  How to start this project?

1. Make sure you have a Github account at:  https://github.com
2. We recommend opening this repository using a provisioning tool like [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recommended) or [Gitpod](https://4geeks.com/lesson/how-to-use-gitpod). Alternatively, you can clone it on your local computer using the `git clone` command.

This is the repository you need to open or clone:

```
https://github.com/breatheco-de/excuse-generator-javascript-cli
```

**👉 Please follow these steps on** [how to start a coding project](https://4geeks.com/lesson/how-to-start-a-project).

3. The exercises will start and show the instructions automatically, but if you encounter any issues you can try running them manually by typing in your command line the following:

```bash
$ learnpack start
```
</how-to-start>

## Instructions

Please create a Javascript script that generates an excuse each time it is run.

## Discuss with your classmates the strategy first

How can we generate an excuse? How are sentences built?

![Excuse generator explanation](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/explanation.gif?raw=true)

The idea is to generate each part of the sentence randomly to come up with great excuses!

## Hint

1. Create an `app.py` file with one excuse hard-coded in one variable.
2. The excuse must be in a variable:
```js
excuse = 'The dog eat my homework when I finished'
```
3. Using Javascript, create a function that generates and returns a random excuse with the following structure:
```js
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
```
4. To create a consistent excuse, you have to concatenate one item from each array in the proper order.
5. Print the excuse on the console using the `console.log()` function.

## Technologies

Javascript.

## Fundamentals

This exercise covers the following fundamentals:

1. Running Javascript files.
2. How to work with Arrays.
3. Generating random numbers.
4. Concatenating strings.
5. Using functions (at least a bit).
