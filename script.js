const pow = (a, n) => {
    let result = 1;

    for (let i = 0; i < n; i++){
        result *= a;
    }

    return result;
};

const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const mult = (a, b) => {
    return a * b;
};

const divition = (a, b) => {
    if(b === 0) {
        return 'null';
    }
    return a / b;
}

module.exports = {
    pow: pow,
    add: add,
    sub: sub,
    mult: mult,
    divition: divition,
}
