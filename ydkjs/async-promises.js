// in api's sometimes a promise is never returned...

// a promise has a fullfillment handler
// it alos has a rejection handler
// once a promise is resolved it stays that way foever. - an immutable vale
// a promise promotes separtion of concerns in that ithe called function is not aware of whats going on.
// the return of a promise that has a new is called the "revealing constructor"