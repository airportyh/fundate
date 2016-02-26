# fundate

This library grew out of some frustration of using moment.js. Moment.js is a very helpful library, but this is an attempt to explore the possiblity that a date library with a better API - for me, at least - could exist.

This library is a work in progress and is far from feature parity with moment.js.

## The Frustrations

I will list the afore mentioned frustrations:

* the need to wrap date objects with moments
* moment objects do not display nicely when rendered in the console either in the repl or with `console.log()`
* the moment manipulation APIs like add and subtract modify the target moment, but I prefer an immutable API
* moment.js is seen as the de-facto date library in the JS community. It has a large code base. I believe that it is because of this that some tend to learn the moment way over understanding how plain JS dates work, which has caused - as I've observed in some code bases - some superstitious code.

## Approaches / Design Principles

The principles behind this project are:

* the library will work with the native JS Date object, rather than with some wrapper object
* this library will use a functional style rather than an object oriented style. It will not support a chainable or "fluent" API style.
* all date manipulation APIs will return a new date object rather than modify the existing one
* small API surface area, yet feature rich enough to be useful across different types of projects
* small and manageable code base

## Code

For now, to see some code, please read the tests.
