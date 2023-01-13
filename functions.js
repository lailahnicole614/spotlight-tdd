export function myFunction() {
    return true;
}
// This function should take a string and add return an new string that adds three exclamation points to the argument.
/* 

Input:

'bunny rabbit'

Output: 

'bunny rabbit!!!'

*/

export function addExclamationPoints(string) {
    return string + '!!!';
}

// This function should take in a number and multiply it by seven

/* 
Input:

4

Output: 

28 
*/
export function multiplyBySeven(num) {
    return num * 7;
}

// This function should take in a number and multiply it by twelve then cut the result in half

/* 
Input:

4

Output: 

24

*/

export function multiplyBy12ThenHalve(num) {
    const multiplyTwelve = num * 12;
    return multiplyTwelve / 2;
}

// This function should take in three numbers, divide the first by the second, then multiply the result by the third

/* 
Input:

8, 4, 5

Output: 

10 (because 8 divided by 4 is 2, times 5 is 10)
*/
export function divideThenMultiply(num1, num2, num3) {
    const divideThenMultiply = (num1 / num2) * num3;
    return divideThenMultiply;
}
// This function should take in three numbers and return those numbers in an array

/* 
Input:

8, 4, 5

Output: 

[8, 4, 5]
*/

export function returnAsAnArray(firstNumber, secondNumber, thirdNumber) {
    const array = [firstNumber, secondNumber, thirdNumber];
    return firstNumber, secondNumber, (thirdNumber = [firstNumber, secondNumber, thirdNumber]);
}

// This function should take in three numbers and return those numbers mushed together as a string

/* 
Input:

8, 4, 5

Output: 

'845'
*/

export function returnAsAString(firstNumber, secondNumber, thirdNumber) {
    return `${firstNumber}${secondNumber}${thirdNumber}`;
}

// This function should take in two numbers and return a greeting announcing that the sum of those numbers is today's lucky number

/* 
Input:

8, 4

Output: 

'Hello! Your lucky number for the day is 12.'
*/

export function makeLuckyGreeting(firstNumber, secondNumber) {
    return firstNumber + secondNumber + 'your lucky number';
}

// This function should take an array and return the second item in the array

/* 
Input:

['kiwi', 'apple', 'orange', 'plum']

Output: 

'apple'

*/

export function getSecondItem(firstItem, secondItem, thirdItem, fourthItem) {
    const array = [firstItem, secondItem, thirdItem, fourthItem];
    return secondItem;
}

// This function should take an array and return the LAST item in the array, no matter the array's length

/* 
Input:

['kiwi', 'apple', 'orange', 'plum']

Output: 

'plum'

*/

// ======================================= STRETCH GOALS ============================================

export function getLastItem(firstItem, secondItem, thridItem, fourthItem) {
    const array = [firstItem, secondItem, thridItem, fourthItem];
    return lastItem;
}

// This function should take a dog object and return an <li> with the name of the dog
/* 
Input:

{name: 'Benny', age: 6}

Output: 

<li>Benny</li>

*/

export function renderDogLI(dog) {
    return true;
}

// This function should take a dog object and return a div with the dog's information
/* 
Input:

{name: 'Benny', age: 6}

Output: 

<div><h1>Benny</h1><p>Benny is 6 years old</p></div>

*/

export function renderDogDiv() {
    return true;
}
