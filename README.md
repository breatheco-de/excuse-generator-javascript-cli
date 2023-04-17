<!--hide-->
# The Excuse Generator CLI (in Javascript)
<!--endhide-->

Disneyland for procrastinators and lazy people. 

This project is ideal {when you are} avoiding someone annoying, it takes no more than 20 lines of code, and it can save you for the rest of your life!

## The Goal

We wanted a project that used very little Python but {is} a very fun application{.  The} excuse generator takes 20 lines of code, is super simple to understand and is the perfect first-ish project for any beginner developer.

## 🌱  How to start this project?

1. Make sure you have a Github account at:  https://github.com
2. We recommend {opening} this reposiory using a provisioning tool like [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recommended) or [Gitpod](https://4geeks.com/lesson/how-to-use-gitpod). Alternatively you can cloning it on your local computer using the `git clone` command. 

This is the repository you need to open or clone:

```
https://github.com/breatheco-de/excuse-generator-javascript-cli
```

**👉 Please follow these steps on** [how to start a coding project](https://4geeks.com/lesson/how-to-start-a-project).


3. The exercises will start and show the instructions automatically but if you encounter any issues you can try running them manually by typing in your command line the following:

```bash
$ learnpack start
```

## Instructions

Please create a python script that generates an excuse each time it is {ran}.

## Discuss with your classmates the strategy first

How can we generate an excuse? How are sentences built?

![Excuse generator explanation](https://github.com/breatheco-de/tutorial-project-excuse-generator-javascript/blob/master/explanation.gif?raw=true)

The idea is to generate each part of the sentence randomly to come up with great excuses!

## Hint

1. Create an `app.py` file with one excuse hard-coded in one variable.
2. The excuse must be in a variable:
```python
excuse = 'The dog eat my homework when I finished'
```
3. Using python, create a function that generates and returns a random excuse with the following structure:
```python
who = ['the dog','my granma','his turtle','my bird']
what = ['eat','pissed','crushed','broked']
when = ['before the class','right in time','when I finished','during my lunch','while I was praying']
```
4. To create a consistent excuse, you have to concatenate one item from each array in the proper order.
5. Print the excuse on the console using the `print` function.


## Technologies

Python.

## Fundamentals

This exercise covers the following fundamentals:

1. Running python files.
2. How to work with Lists (arrays).
3. Generating random numbers.
4. Concatenating strings.
5. Using functions (at least a bit).
