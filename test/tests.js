// IMPORT MODULES under test here:
import {
    myFunction,
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
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

test('this test should take in three numbers, divide the first by the second,then multiply the rest by the third', (expect) => {
    const expected = 10;
    const actual = divideThenMultiply(8, 4, 5);
    expect.deepEqual(actual, expected);

    const expected2 = 25;
    const actual2 = divideThenMultiply(10, 2, 5);
    expect.deepEqual(actual2, expected2);

    const expected3 = 16;
    const actual3 = divideThenMultiply(24, 3, 2);
    expect.deepEqual(actual3, expected3);
});

test('this test should take three numbers and return them as an array', (expect) => {
    const expected = [8, 4, 5];
    const actual = returnAsAnArray(8, 4, 5);
    expect.deepEqual(actual, expected);

    const expected2 = [10, 9, 8];
    const actual2 = returnAsAnArray(10, 9, 8);
    expect.deepEqual(actual2, expected2);

    const expected3 = [3, 2, 1];
    const actual3 = returnAsAnArray(3, 2, 1);
    expect.deepEqual(actual3, expected3);
});

test('this test should take take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '845';
    const actual = returnAsAString(8, 4, 5);
    expect.deepEqual(actual, expected);

    const expected2 = '911';
    const actual2 = returnAsAString(9, 1, 1);
    expect.deepactual(actual2, expected2);
});
