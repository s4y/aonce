# aonce

Run an async function once, no matter how many times it's called.

## Example

```js
var init = aonce(function(cb) {
	// Do some initialization
	results = {};
	cb(results);
});

// Later:

init(function(results) {
	// do something with results
});

// Elsewhere:

init(function(results) {
	// do something else with results
});
