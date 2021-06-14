// import module from '../script.js';

const script = require('../script');
const pow = script.pow;
const add = script.add;
const sub = script.sub;
const mult = script.mult;
const div = script.divition;

// const pow = module.pow;
// const add = module.add;

describe('Функция pow()', () => {
    it('должна возвращать 9 при аргументах (3, 2)', () => {
        expect(pow(3,2)).toBe(9);
    })
})

describe('Функция add()', () => {
    it('должна возвращать 5 при аргументах (3, 2)', () => {
        expect(add(3,2)).toBe(5);
    })
})

describe('Функция вычитание sub()', () => {
    it('должна возвращать 9 при аргументах (3, 2)', () => {
        expect(sub(3,2)).toBe(1);
    })
})

describe('Функция умножение mult()', () => {
    it('должна возвращать 9 при аргументах (3, 2)', () => {
        expect(mult(3,2)).toBe(6);
    })
})

describe('Функция деление div()', () => {
    it('должна возвращать 9 при аргументах (3, 2)', () => {
        expect(div(6,2)).toBe(3);
    }),

    it ('должна возвращать null div(a, b) при аргументе b=0', () => {
        expect(div(3,0)).toBe('null');
    })
})
