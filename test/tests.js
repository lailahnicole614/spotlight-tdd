// IMPORT MODULES under test here:
import {
    myFunction,
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
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
    // const expected2 = '14';
    // const expected3 = '7';

    const actual = multiplyBySeven(4);
    // const actual2 = multiplyBySeven('2');
    // const actual3 = multiplyBySeven('1');

    expect.deepEqual(actual, expected, '7*4');
    // expect.deepEqual(actual2, expected2);
    // expect.deepEqual(actual3, expected3);
});
