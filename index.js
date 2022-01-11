function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function namedFn() {
        console.log("this is a named function");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is a test!");
    }
    
}

