# Adele's first TDD Project

Hi Adele! This project contains some scary stuff. It contains the barebones of
a Test Driven Development project for node.js. I believe you have already used
node from the command line to run some JavaScript. This project believe it or
not is essentially the same thing but with proper tooling.

## Installation

Before we begin you need to download this project. To do so simply run this
command in your terminal where you want to create your project:

```
git clone https://bitbucket.org/DrPheltRight/adele adele
```

`git clone` will download the project into the folder `adele/`.

## Tooling

So let's describe what tooling we are using here:

 * Firstly we are using node.js to run JavaScript from the command line instead
   of a browser. This makes it easier to focus on JS rather than the browser,
   HTML and CSS. 

 * Node.js comes with a way of managing projects and dependencies. It's called
   NPM or Node Package Manager and it has a command `npm`. We'll describe using
   NPM and what exactly dependencies are later.

 * In order to practice TDD we need a testing library. The one we are going to
   be using today is called Jasmine. It's the only dependency of our project.
   Again I'll describe Jasmine and TDD in a minute.

There you have it. Node, NPM and Jasmine are the tools we will be using to
execute and test your code today.

## Introduction to files

The easiest way to introduce you to this project is to describe what we've got
already. Obviously you're already partly familiar with the README.md in the root
of this project. You're reading it silly ^__^.

### package.json

The other file contained within this folder is `package.json`. It essentially
explains your project – if you were to open source it – along with defining any
dependencies you require. NPM uses `package.json` files to work out what to
install to get your project working. Take a look, I'll be waiting here.

### `test/`

Next I'll explain the `test/` folder since this is a TDD project and tests come
before your actual library code!

Inside `test/` there is one specification file called `adeleSpec.js`. This file
contains descriptions of how your code should function. Any filename in the
`test/` folder ending in `Spec.js` will be run as a specification when testing
your project. Don't worry about how to test just yet we'll get back to that.

A specification or spec is a type of test. They are used heavily in TDD. Inside
`adeleSpec.js` you will see `describe()` functions. The `describe()` function is
provided by the Jasmine library. Any code within the `describe()` function is
used to describe the string that preceeded the function. I'll explain:

``` js
describe('helloWorld()', function () {
  // describe the helloWorld() function in here
});
```

Inside your descriptions you may nest descriptions of sub components. That is,
smaller parts within a larger set of functionality. Take a person:

``` js
describe('Person', function () {
  describe('personality', function () {
    // describe their personality
  });

  describe('looks', function () {
    // describe their looks
  });
});
```

In `adeleSpec.js` you see we are describing `Adele`. `Adele` is an object with a
method called `.random()`. Inside the `Adele` description we have another
nested description of `.random()`.

So how do we describe something? We describe **it**. Let's go back to our
hello world example from above:

``` js
describe('helloWorld()', function () {
  it('should return "Hello World"', function () {
    // some functions to check if it returns "Hello World"
  });
});
```

You use an `it()` function call within a `describe()` function to describe it!
As with the `describe()` function, `it()` is provided by Jasmine. You usually
start the string given to `it()` with should. The specification above
essentially says:

```
describe helloWorld()
  it should return "Hello World"
```

This enables us to specify how we want our code to work. To actually check if
`helloWorld()` returns `"Hello World"` we need to write an expectation:

``` js
describe('helloWorld()', function () {
  it('should return "Hello World"', function () {
    expect(helloWorld()).toEqual("Hello World");
  });
});
```

So inside the `it()` function we wrote an expectation. We called `helloWorld()`
and gave it's return value to `expect()` and then made the expectation that it's
return value is equal to `"Hello World"`. As before `expect()` and `.toEqual()`
are provided by Jasmine. Don't get too tied down by the syntax. It might look
complicated now but read the code from top to bottom and it really does sound
like standard English!

```
describe helloWorld()
  it should return "Hello World"
    expect the return value of helloWorld() to equal "Hello World"
```

Hopefully I haven't blown your brain too much. Go back and reread this
description of `test/` so far.

Okay? So you're probably still a little confused. Read the contents of
`adeleSpec.js` a couple of times. We are essentially describing a single method
`Adele.random()`. It's a function attached to the `Adele` object. Don't get too
tied down in this detail essentially `Adele.random()` could have easily of been
`adeleRandom()`. I'll go into this a bit more when I describe the `lib/` folder.

So in pseudo code a.k.a. plain English `adeleSpec.js` contains the
specification:

```
describe Adele
  describe Adele.random()
    it should return a number greater than 0
      expect the return value of Adele.random() to be greater than 0
    it should return a number less than 14
      expect the return value of Adele.random() to be less than 14
```

So there we have it. Specifications describe how we expect our code to behave.

### `lib/`

So we've described our code but where the hell is it? Well generally a project
will call it's codebase a library. We therefore use the folder name `lib/`.

Inside you will find one file `adele.js`. This correlates to the specification
name of `adeleSpec.js`. They don't have to match but by matching them up a
developer can easily see which test belongs to which file of code.

So `adele.js` defines two functions, `randomInt()` and `Adele.random()`. The
first is a method that the outside world doesn't need to know about. That's
why it's not called `Adele.randomInt()`. It's actually a function I copy and
pasted from the internet. It takes two parameters a min and a max and returns
a random number between or including the two given. We utilise this *private*
function inside `Adele.random()`. As the spec declares `Adele.random()` should
return a number greater than 0 and less than 14.

The last line in the file `module.exports = Adele;` exports the `Adele` object
out of the file so we can use it elsewhere. In `adeleSpec.js` we import the
`Adele` object to the `Adele` variable with
`var Adele = require('../lib/adele');`. Again don't let these details bog you
down. It's simply a way of using the `Adele` object inside the test file.

So there, a fairly full description of what we've got.

## Getting Started

Okay. So we've described our tooling and introduced all the files in this
project. What's next? We need to install our dependencies with NPM. Up till
now you've only downloaded the project from my BitBucket account. You've not
installed the dependencies defined in `package.json`.

In order to install the dependencies contained within `package.json` you first
need to install node.js and NPM on your machine. You can find the latest copy
of node.js and NPM on [nodejs.org](http://nodejs.org). Follow the install
instructions, I'll be here waiting.

Okay, so let's just test to see if you installed node correctly. Run the
following command from your terminal:

```
node --version
```

This should tell you the version of node.js you installed. If not somethings
broke and you should check to see if you install it properly.

Now you've got node installed which comes with NPM, you can install your
dependencies. From within the `adele/` directory where you installed this project you should run the command:

```
npm install
```

This will download the Jasmine dependency into `node_modules/`. Treat this
folder as a magic folder and don't touch it or look into it too much.

Right, so let's run our tests! To run our Jasmine specifications we can use the
command `jasmine-node` like so:

```
node_modules/.bin/jasmine-node test/
```

*Ensure you are in the `adele/` project folder when running these commands.*

You should see some output saying `2 tests, 2 assertions, 0 failures`.
Everything should be green and awesome! Well done you!

The command we ran is a bit long winded and I added a test script to the
`package.json` file (line 10 if you're interested) to shorten this to:

```
npm test
```

Bit shorter and easier to remember huh? If you want to run your tests always
use `npm test` in the project folder.

### Writing your first test

This is where shit gets real. You are now going to write a test. It is going to
fail. Why? Because when you write a test the code to make it pass should not
exist. Therefore when you run your test it will fail! We'll make it pass later.

The next piece of functionality we want to write is a function to return a
random suit. That's a suit from a standard pack of playing cards. In case you
didn't know these are hearts, spades, diamonds and clubs. We'll call this
function `Adele.randomSuit()`.

Go ahead and add the following specification to your existing description
of `Adele`:

``` js
  describe('.randomSuit()', function () {
    it('should return a suit', function () {
      var validSuits = ['hearts', 'spades', 'diamonds', 'clubs'];
      expect(validSuits).toContain(Adele.randomSuit());
    });
  });
```

Here we are saying we expect the `validSuits` array to contain the suit returned
from `Adele.randomSuit()`.

Now run your tests with `npm test`.

You should see a failure. It should say the method hasn't been defined. So
let's go and define it. Go and add the following code below the definition of
`Adele.random()` in `lib/adele.js`:

``` js
Adele.randomSuit = function () {
};
```

Now run your tests with `npm test`.

You should see a different failure now. It should tell you it expected `false`
to be `true`. This is because the expectation inside `expect()` is returning
`false` when we said we expected it to be `true`.

So let's write the body of the function:

``` js
Adele.randomSuit = function () {
  var suits = ['hearts', 'spades', 'diamonds', 'clubs'];
  return suits[randomInt(0, 3)];
};
```

Now run your tests with `npm test`.

Your tests should all be green again! The implementation worked 8-). Try
changing things around in the implementation of `Adele.randomSuit()` and running
your tests. After every save you should run your tests.

After playing about a bit ensure your tests are passing and then commit your
changes to git with the following commands:

```
git add lib/adele.js test/adeleSpec.js
git commit -m "Implement Adele.randomSuit()"
```

### Writing your second test

Next we want to implement a function that returns an array. The first item
of the array should be a valid suit. The second should be a random number
between 1 and 13.

Add the following test to your description of `Adele`:

``` js
  describe('.randomCard()', function () {
    it('should return an array of length 2', function () {
      expect(Adele.randomCard().length).toEqual(2);
    });
  });
```

Run your tests with `npm test`.

They should fail. You haven't implemented the function yet! Go ahead and define
the function below `Adele.randomCard()` in `lib/adele.js`.

``` js
Adele.randomCard = function () {
};
```

Run your tests with `npm test`.

They should fail now because you cannot read the property `.length` of the
value returned from `Adele.randomCard()`. That's because we aren't returning
anything from `Adele.randomCard()`!! Let's return an empty array and see what
happens. Update your function:

``` js
Adele.randomCard = function () {
  return [];
};
```

Run your tests with `npm test`.

You should now get the failure that 0 should be 2. That's because we are
returning an empty array so it's length will be 0. Let's put two bogus values
into the array and return that:

``` js
Adele.randomCard = function () {
  return ['hello', 'adele'];
};
```

Run your tests with `npm test`.

Our tests pass, whoop! Let's go home now. Oh wait, you probably are home. And
wait a second, `Adele.randomCard()` doesn't return a random card at all!

Let's write another test to get us closer to what we want. I take it you can
guess where to put this statement:

``` js
    it('should return an array whose first value is a valid suit', function () {
      var validSuits = ['hearts', 'spades', 'diamonds', 'clubs'];
      var card = Adele.randomCard();
      expect(validSuits).toContain(card[0]);
    });
```

Run your tests with `npm test`.

You should see a failure saying it expected the validSuits array to contain
`'hello'`. Obviously they don't because `'hello'` isn't a valid suit. Let's
update our implementation of `Adele.randomCard()` to use `Adele.randomSuit()`
to return an array that passes our test:

```js
Adele.randomCard = function () {
  return [Adele.randomSuit(), 'adele'];
};
```

Run your tests with `npm test`.

Okay awesome they should be passing now!! We still aren't where we want to be
yet though. Let's write a test to ensure the second item in the array returned
from `Adele.randomCard()` is a number greater than 0.

``` js
    it('should return an array whose second value is greater than 0', function () {
      var card = Adele.randomCard();
      expect(card[1]).toBeGreaterThan(0);
    });
```

It's now up to you to get this test passing. You should use `Adele.random()`
to get the random number. That's all I'm saying.

Run your tests with `npm test`.

Okay so it's passing now? Write another test to provide that the second value
returned from `Adele.randomCard()` is less than 14.

Run your tests with `npm test`.

So it's still passing right? Great. That's because `Adele.random()` already
implements this expectation.

At this point you should have 7 tests, 7 assertions and 0 failures. Commit
your work with the following commands:

```
git add lib/adele.js test/adeleSpec.js
git commit -m "Implement Adele.randomCard()"
```

## Homework

### Task One

Implement `Adele.randomValue()`:

``` js
  describe('.randomValue()', function () {
    it('should return a valid card value', function () {
      var validValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      expect(validValue).toContain(Adele.randomValue());
    });
  });
```

If your tests pass commit your results with:

```
git add lib/adele.js test/adeleSpec.js
git commit -m "Implement Adele.randomValue()"
```

### Task Two

Update your specification of `Adele.randomCard()` to expect the second value
of the array to be a valid value from `Adele.randomValue()` rather than a random
number from `Adele.random()`.

Now run your tests.

They should be failing since you haven't updated `Adele.randomCard()` yet. Now
update `Adele.randomCard()` to use `Adele.randomValue()` instead of
`Adele.random()`.

Now run your tests.

If your tests pass commit your results with:

```
git add lib/adele.js test/adeleSpec.js
git commit -m "Update Adele.randomCard() to use Adele.randomValue()"
```

### Task Three

Okay so now `Adele.random()` is completely useless. Let's remove it. Start by
removing the tests for `Adele.random()`. You should remove the entire
`describe()` block for `.random()`.

Run your tests.

They should still be passing since we've only removed tests.

Now remove the definition of `Adele.random()`.

Run your tests.

They should still be passing. If they fail check to see if you deleted more
than just `Adele.random()`.

If your tests pass commit your results with:

```
git add lib/adele.js test/adeleSpec.js
git commit -m "Remove Adele.random() since no longer used"
```
