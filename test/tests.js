// IMPORT MODULES under test here:
import { myFunction, addExclamationPoints } from '../functions.js';

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
