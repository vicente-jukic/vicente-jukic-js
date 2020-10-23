/*********************
JS Excercises Week 4 
**********************/

//****** Variables & Operators ******//

// a)

var firstNumber = 5;
var secondNumber = 9;
var thirdNumber = firstNumber + secondNumber;

console.log(thirdNumber);

// b)

var firstString = 'Hello';
var secondString = 'World';
var thirdString = firstString + ' ' + secondString;

console.log(thirdString);

// c)

var firstName = 'Vicente';
var surname = 'Jukic';
var nameLength = firstName.length + surname.length;

console.log(nameLength);


//****** Strings ******//

// a)

var upperCaseName = 'jennifer aninston'.toUpperCase();

console.log(upperCaseName);

// b)

var firstWholeWord = 'Adaptation'
var firstCharacters = firstWholeWord.substring(0, 5);

console.log(firstCharacters);

// c)

var secondWholeWord = 'Skateboard';
var lastCharacters = secondWholeWord.substring(7, 10);

console.log(lastCharacters);

// d)

var uglyWord = 'aPOcaLyPsE';
var prettyWord = uglyWord.substring(0,1).toUpperCase() + uglyWord.substring(1).toLowerCase();

console.log(prettyWord);

// e)

var spaceddWord = 'Light board';
var spaceIndex = spaceddWord.indexOf(' ');

console.log(spaceIndex);

// f)

var tenLettersWords = 'waterMElon techNOLogy';
var spaceIndex2 = tenLettersWords.indexOf(' ');
var tenLettersWordsUC = tenLettersWords.substring(0,1).toUpperCase() + tenLettersWords.substring(1,spaceIndex2).toLowerCase() + tenLettersWords.substring(spaceIndex2,spaceIndex2+1) + tenLettersWords.substring(spaceIndex2+1, spaceIndex2+2).toUpperCase() + tenLettersWords.substring(spaceIndex2+2).toLowerCase();

console.log(tenLettersWordsUC);


