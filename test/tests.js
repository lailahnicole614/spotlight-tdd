// IMPORT MODULES under test here:
import {
    myFunction,
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
} from '../functions.js';
const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.deepEqual(actual, expected, 'true = true');
});

test('this test should add exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';
    const expected2 = 'frogs!!!';
    const expected3 = 'ducks!!!';

    const actual = addExclamationPoints('bunny rabbit');
    const actual2 = addExclamationPoints('frogs');
    const actual3 = addExclamationPoints('ducks');

    expect.deepEqual(actual, expected);
    expect.deepEqual(actual2, expected2);
    expect.deepEqual(actual3, expected3);
});

test('this test should multiply by seven', (expect) => {
    const expected = 28;
    const expected2 = 14;
    const expected3 = 7;

    const actual = multiplyBySeven(4);
    const actual2 = multiplyBySeven(2);
    const actual3 = multiplyBySeven(1);

    expect.deepEqual(actual, expected, '7*4');
    expect.deepEqual(actual2, expected2, '7*2');
    expect.deepEqual(actual3, expected3, '7*1');
});

test('this should multiply a number by twelve and then divide it', (expect) => {
    const expected = 24;
    const actual = multiplyBy12ThenHalve(4);
    expect.deepEqual(actual, expected, 'i multiplied by 12');

    const expected2 = 12;
    const actual2 = multiplyBy12ThenHalve(2);
    expect.deepEqual(actual2, expected2, 'i multiplied by 12');

    const expected3 = 36;
    const actual3 = multiplyBy12ThenHalve(6);
    expect.deepEqual(actual3, expected3, 'i multiplied by 12');
});

test(
    'this test should take in three numbers, divide the first by the second,then multiply the rest by the third'
),
    (expect) => {
        const expected = 10;
        const actual = divideThenMultiply(8, 4, 5);
        expected.deepEqual(actual, expected);
    };
