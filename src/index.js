// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    let objExchange = {};
    let count = currency;

    if (count <= 0) {
        return {}
    }

    if (count > 0 && count <= 10000) {
        if (count >= 50) {
            objExchange.H = Math.trunc(count / 50);
            count = count % 50;
        }
        if (count >= 25) {
            objExchange.Q = Math.trunc(count / 25);
            count = count % 25;
        }
        if (count >= 10) {
            objExchange.D = Math.trunc(count / 10);
            count = count % 10;
        }
        if (count >= 5) {
            objExchange.N = Math.trunc(count / 5);
            count = count % 5;
        }
        if (count >= 1) {
            objExchange.P = Math.trunc(count / 1);
        }
    }

    if (count > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" }
    }

    return objExchange;
}
