# Chapter Two: Cards Stacked Against You

Welcome back Adele. How did you find chapter one? Wonderful I hope you wovely
woman :)

This chapter will see you getting to grips with more TDD, more fun and
excitement. You'll be building a deck of playing cards – or more specifically –
you'll be writing code that simulates a deck of playing cards.

## Getting Started

First of all get familiar with the files contained within `lib/` and `test/`.
You will find `deckSpec.js` has a failing test and `deck.js` essentially an
empty object.

To prove we have a failing test go ahead and run `npm test`. There, see, I told
you!

Re-familiarise yourself with `package.json` and if you fancy
[read up on it][npm-package-json] at the NPM documentation site.

## Ace of Spades

Let's get that test passing shall we? Fix the error shown when you run
`npm test`.

Okay, so you went ahead and defined a `Deck.build()` method right? TDD is all
about fixing the error in the prompt when you run the test. Your test passing
is the end goal and each error along the way will help you build the
functionality to make the test pass in a minimal number of steps. There's never
a need to get ahead of ourselves.

``` js
Deck.build = function () {};
```

You should have something like above. Run `npm test`.

Now you should be getting a "Cannot call method 'indexOf' of undefined" error.
This error is caused by the use of `.toContain()` in our test. Essentially,
`.toContain()` is expecting the return value of `Deck.build()` to be an array.

Let's return an array:

``` js
Deck.build = function () {
  return [];
};
```

Now run `npm test`.

You should now get a new error, "Expected [  ] to contain [ 'Spades', 'A' ].".
That's more like it huh? Now we're into the nitty gritty.

Let's get the test passing and not think too much about the implementation yet.

``` js
Deck.build = function () {
  return [
    ['Spades', 'A']
  ];
};
```

## Two of Spades

Simple eh? Okay so let's add another test. We should check for 2 of Spades:

``` js
    it('should contain the 2 of Spades', function () {
      expect(Deck.build()).toContain(['Spades', '2']);
    });
```

Right, let's *cheat* again and add `['Spades', '2']` to the array returned from
`Deck.build()`.

``` js
Deck.build = function () {
  return [
    ['Spades', 'A'],
    ['Spades', '2']
  ];
};
```

Run `npm test` and your tests should now be passing :)

## All of the Spades

This isn't really getting us anywhere so let's step things up a bit. Add the
following test to your `Deck.build()` spec.

```
    it('should contain every card in the Spades suit', function () {
      var deck = Deck.build();
      'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',').forEach(function (value) {
        expect(deck).toContain(['Spades', value]);
      });
    });
```

So now we are looping over all the cards expected to be in the Spades suit. Run
`npm test` and watch you tests fail.

What now? Of course we could statically define all the cards in the `.build()`
method. More simply we could loop over the expected values and build an array
dynamically. Let's do that using the `Array.prototype.map`. Give the docs on
[MDN][mdn-array-map] a quick look over to familiarise yourself with this
function.

Great function huh? The explanation was in the name. The map function iterates
over an array and maps the values of the array to different ones. More simply
`.map()` replaces each value of the array by passing that value as an argument
into the function you provided and setting the return value in it's place.

```js
function prefixHello(name) {
  return 'Hello ' + name;
}
['Luke', 'Adele'].map(prefixHello);
```

Type `node` into the terminal the copy and paste the above code into the command
line. Be sure to hit enter after it's all in. You will see the code executed
immediately. You will see the array returned by `.map()` is
`['Hello Luke', 'Hello Adele']`. You see? The given function `prefixHello` is
given each value of the array and the return values are used to make a new
array. Press `ctrl + c` a couple of times to close `node`.

Now back to our deck of cards. Firstly let's define the valid cards of a `Deck`.

``` js
Deck.values = 'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',');
```

Place this line directly below `var Deck;`. We can use this to `.map()` our
Spades suit into existence. I'll leave it up to you to use `Deck.values.map()`
in `Deck.build()`. Ahhh okay then, here have another clue you lovely lady:

``` js
function spade(value) {
  return ['Spades', value];
}
```

Use this function in conjunction with `Deck.values.map()` to make your tests
pass. Meet you back here :)

Your tests are passing? Great!!

Let's tidy up our tests quickly. Since the first two tests are now redundant by
the third lets remove them. Run `npm test` again and you should have
`1 test, 13 assertions, 0 failures`.

Oh, and whilst we're at it, we can use `Deck.values` in our test instead of
`'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',')`. Test's still passing? Let's continue.

## 3 suits short of a full deck

Currently we've only got Spades in our deck of cards. We want to add Hearts,
Clubs and Diamonds next. Let's add a new test:

``` js
    it('should contain a full deck', function () {
      var deck = Deck.build();

      ['Spades', 'Hearts', 'Clubs', 'Diamonds'].forEach(function (suit) {
        Deck.values.forEach(function (value) {
          expect(deck).toContain([suit, value]);
        });
      });
    });
```

Run `npm test`. Failing...

You see what changed right? We're now looping over each suit and for each
of those suits we are looping over each value and expecting the deck to contain
the combination.

First let's add an array of suits to `Deck`:

``` js
Deck.suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
```

Place this above the `Deck.values` definition.

Okay, so how do we now loop over each suit and over each value to produce an
array of every card in the deck? You might be reaching for
`Array.prototype.map()` at this point. In fact I just did the same trying to
come up with the code for this next step. No, the answer isn't `.map()` but
let's prove it?

``` js
Deck.build = function () {
  return Deck.suits.map(function (suit) {
    return Deck.values.map(function (value) {
      return [suit, value];
    });
  });
};
```

Run `npm test`. Failing huh? The output of the test is pretty messy so let's
run a simpler example in `node`:

``` js
['A', 'B'].map(function (letter) {
  return [1, 2].map(function (number) {
    return [letter, number];
  });
});
```

Run `node` then copy and paste the code above into your terminal. Look closely
at the output. You will see an array 3 levels deep.

``` js
[[['A', 1], ['A', 2]], [['B', 1, 'B', 2]]]
```

You see, if we used two nested `.map()` calls we would end with each suit being
in it's own subarray of the deck rather than all the cards of all suits being
in the same array.

Close `node` if you haven't already with `ctrl + c`.

## A simpler more repetative solution

Let's get these tests passing, I feel like an easy win although I've got a
concept I really want to introduce you to now.

Get the implementation back to just working for Spades:

``` js
Deck.build = function () {
  return Deck.values.map(function (value) {
    return ['Spades', value];
  });
};
```

Run `npm test`. You should have `2 tests, 65 assertions, 52 failures`.

Okay to move forward we need to first work backwards. Comment out our new test.

Run `npm test`. You should have `1 test, 13 assertions, 0 failures`.

Let's move the `Deck.values.map()` call to a private function called
`buildSuit()`:

``` js
function buildSuit(suit) {
  return Deck.values.map(function (value) {
    return [suit, value];
  });
}
```

And update `Deck.build()`:

``` js
Deck.build = function () {
  return buildSuit('Spades');
};
```

Run `npm test`. They're still passing aren't they ;)

Now uncomment the new test. Run `npm test`. Failing? Good.

So now we have a reusable method, `buildSuit()`. Let's build an array containing
all the suits:

``` js
Deck.build = function () {
  var deck = [];
  deck = deck.concat(buildSuit('Spades'));
  deck = deck.concat(buildSuit('Hearts'));
  deck = deck.concat(buildSuit('Clubs'));
  deck = deck.concat(buildSuit('Diamonds'));
  return deck;
};
```

Run `npm test`. Great! It's all passing. If you aren't familiar with
`Array.prototype.concat` [check out the docs](mdn-array-concat) on MDN.

We're repeating ourselves a little here though aren't we? Let's have a quick
refactor. Using the `Deck.suits` array we defined early we can loop over and
build the deck array we return from `Deck.build()`.

``` js
Deck.build = function () {
  var deck = [];
  Deck.suits.forEach(function (suit) {
    deck = deck.concat(buildSuit(suit));
  });
  return deck;
};
```

Run `npm test`, ahhhh yeah... still passing!

You know what, we could just stop here but I want to introduce you to
`Array.prototype.reduce()`.

First of all let's move the `deck.concat()` logic to it's own private method:

``` js
function addSuitToDeck(deck, suit) {
  return deck.concat(buildSuit(suit));
}
```

So now `Deck.build()` should look like the following:

``` js
Deck.build = function () {
  var deck = [];
  Deck.suits.forEach(function (suit) {
    deck = addSuitToDeck(deck, suit);
  });
  return deck;
};
```

Run `npm test`. All green right?

Let's turn `Deck.build()` into a one liner with the power of `.reduce()`.

``` js
Deck.build = function () {
  return Deck.suits.reduce(addSuitToDeck, []);
};
```

Run `npm test` and you should be passing still. Next I'll go into a little
more detail about reducers.

## Reducers

Now pardon my excitement but this has got to be one of the most powerful, fun
and exciting functions I've ever come across. You can basically implement
programming languages with this function.

I'll give you a quick example of how you can use `.reduce()` to find the
largest number in an array:

``` js
function findLargest(largest, number) {
  if (number > largest) {
    return number;
  } else {
    return largest;
  }
}
[20, 55, 4, 97, 31].reduce(findLargest);
```

Run `node` then copy and paste this code into the terminal. You'll see `97`
correctly given as the largest number.

How did this work? Well the function is called against every value in the array.
The value from the array is the second parameter of the function, in this case
`number`. The first parameter `largest` is the return value of the previous
call to the `findLargest`.

When I said the first parameter is the return value of the previous call to
`findLargest` I sort of lied. On the first call, `largest` will in fact be the
first value of the array and `number` will be the second. That is unless you
provide a starting value for largest like so:

``` js
function findLargest(largest, number) {
  if (number > largest) {
    return number;
  } else {
    return largest;
  }
}
[20, 55, 4, 97, 31].reduce(findLargest, 0);
```

When providing a default value for `largest` – in this case `0` – the first
call to `findLargest` will pass in `0` for the `largest` argument and `number`
will be the first value of the array.

Let's use another example, this time we want to transform an array of names into
an array of names containing the letter `'L'`.

``` js
function namesWithLetterL(namesWithL, name) {
  if (/l/i.test(name)) {
    namesWithL.push(name);
  }

  return namesWithL;
}
['Luke', 'James', 'Adele'].reduce(namesWithLetterL, []);
```

Run `node` then copy and paste this into the terminal. You should see a shorter
array with just `'Luke'` and `'Adele'` in it since `'James'` doesn't include the
letter `'L'`. We called `.reduce()` with two arguments, the first being the
reducer function `namesWithLetterL()`, the second a starting value for the
`namesWithL` parameter.

Your head is probably scrambled by now so I'm gonna suggest you stew over
the `Array.prototype.reduce` try the [explanation on MDN][mdn-array-reduce].
Play around with this function in the `node` REPL. If you are wondering what a
REPL is I suggest you [read up][REPL] on it.

Okay so now you are super awesome with `Array.prototype.reduce()`. Or maybe not.
It really doesn't matter. The fact you tried to learn it is all that matters.
Over your career always come back to the things you don't understand but never
beat yourself up for not understanding them. Walk away from the problem for an
hour, day, week, month or whatever. Coming back to a problem after any period
of time will provide you with more clarity than you can ever imagine.

## Back to the game

Okay so after that little tangent let's recap where we are at. We have a `Deck`
object that has one public method, `.build()`. It returns an array of arrays,
each sub array containing two strings, the first dicating the suit, the second
dictating the value.

Run your tests with `npm test`.

At this point you should have 1 test, 52 assertions and 0 failures. Commit
your work with the following commands:

```
git add lib/deck.js test/deckSpec.js
git commit -m "Implement `Deck.build()`"
```

# Homework

Your homework will include writing tests that will ensure the decks produced
expected usage are documented and enforced.

## Task One

Write a test to describe using [`Array.prototype.shift()`][mdn-array-shift] to
deal a single card. You should test the fact that the deck array will be one
card less.

*You should not need to update your implementation when you add this test.*

Once you have completed this task commit the changes with the following commands:

```
git add test/deckSpec.js
git commit -m "Describe using `.shuffle()` on deck produced by `Deck.build()`"
```

## Task Two

Add the following test to `deckSpec.js`.

``` js
    it('should return a randomised deck', function () {
      var deck1 = Deck.build();
      var deck2 = Deck.build();
      expect(deck1).not.toEqual(deck2);
    });
```

Run `npm test`. You should have 2 tests, 53 assertions and 1 failure.

Now using the following private function I found on [stackoverflow][so-knuth]
get this test passing.

``` js
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
```

Finished? Run `npm test`. All your tests passing? Time to commit!

```
git add lib/deck.js
git add test/deckSpec.js
git commit -m "Update `Deck.build()` so that it shuffles the deck it returns"
```

[npm-package-json]: https://www.npmjs.org/doc/json.html
[mdn-array-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[mdn-array-concat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
[mdn-array-reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[mdn-array-shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[REPL]: http://nodejs.org/api/repl.html
[so-knuth]: http://stackoverflow.com/a/12646864/317829
