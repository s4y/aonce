module.exports = function(f) {
    var result;
    var running = false;
    var waiters = [];

    return function(cb) {
        if (result) {
            cb.apply(null, result);
            return;
        }

        waiters.push(cb);

        if (running) { return; }

        running = true;

        f(function(){
            result = arguments;
            waiters.forEach(function(waiter) {
                waiter.apply(null, result);
            });
        });
    }
}
