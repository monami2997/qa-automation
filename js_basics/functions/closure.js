function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}


let fn_inner = outer();
fn_inner();

// inner(); // ReferenceError: inner is not defined


function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count; }
    }
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());