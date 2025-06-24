// תרגיל 1

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


// תרגיל 2

function secretHolder(secret) {
    return {
        getSecret: function () {
            return secret;
        },
        setSecret: function (newSecret) {
            secret = newSecret;
        }
    };
}

const mySecret = secretHolder("abc");
console.log(mySecret.getSecret());
mySecret.setSecret("123");
console.log(mySecret.getSecret());


// תרגיל 3

function buildFunctions() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
        });
    }
    return arr;
}

const funcs = buildFunctions();
funcs[0](); // should print 0
funcs[1](); // should print 1
funcs[2](); // should print 2