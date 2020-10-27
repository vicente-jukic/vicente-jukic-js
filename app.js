/*********************
JS Excercises Week 4 
**********************
Vicente Jukic
**********************/

//****** 1 - Variables & Operators ******//

// a)

var firstNumber = 5;
var secondNumber = 9;
var thirdNumber = firstNumber + secondNumber;

console.log('Excercise 1.a:', thirdNumber);

// b)

var firstString = 'Hello';
var secondString = 'World';
var thirdString = firstString + ' ' + secondString;

console.log('Excercise 1.b:',thirdString);

// c)

var firstName = 'Vicente';
var surname = 'Jukic';
var nameLength = firstName.length + surname.length;

console.log('Excercise 1.c:',nameLength);


//****** 2 - Strings ******//

// a)

var upperCaseName = 'jennifer aninston'.toUpperCase();

console.log('Excercise 2.a:',upperCaseName);

// b)

var firstWholeWord = 'Adaptation'
var firstCharacters = firstWholeWord.substring(0, 5);

console.log('Excercise 2.b:', firstCharacters);

// c)

var secondWholeWord = 'Skateboard';
var lastCharacters = secondWholeWord.substring(7, 10);

console.log('Excercise 2.c:', lastCharacters);

// d)

var uglyWord = 'aPOcaLyPsE'; // Wrote it in an unordered/ugly way to prove the code works
var prettyWord = uglyWord.substring(0,1).toUpperCase() + uglyWord.substring(1).toLowerCase();

console.log('Excercise 2.d:', prettyWord);

// e)

var spaceddWord = 'Light board';
var spaceIndex = spaceddWord.indexOf(' ');

console.log('Excercise 2.e:', spaceIndex);

// f)

var tenLettersWords = 'waterMElon techNOLogy'; // Wrote it in an unordered/ugly way to prove the code works
var spaceIndex2 = tenLettersWords.indexOf(' '); // Wasn't requiered to define this variable but it simplifies the code for the solution

// The code below is pretty long but I wanted to use onley the methods requiered in the excercise
var tenLettersWordsUC = tenLettersWords.substring(0,1).toUpperCase() + tenLettersWords.substring(1,spaceIndex2).toLowerCase() + tenLettersWords.substring(spaceIndex2,spaceIndex2+1) + tenLettersWords.substring(spaceIndex2+1, spaceIndex2+2).toUpperCase() + tenLettersWords.substring(spaceIndex2+2).toLowerCase();

console.log('Excercise 2.f:', tenLettersWordsUC);


//***** 3 - Arrays *****/

// a)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Excercise 3.a:', 'Month 5 =', months[4], 'Month 11 =', months[10]);


// b)

console.log('Excercise 3.b:', months.sort());

// c)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.push('December');
months.unshift('January');

console.log('Excercise 2.c:', months);

// d)

months.shift();
months.pop('December');

console.log('Excercise 2.d:', months)

// e)

console.log('Excercise 2.e:', months.reverse());

// f)

console.log('Excercise 2.f:', months.join('-'));

// g)

monthsMayToNov = months.reverse().slice(4,11);

console.log('Excercise 2.f:', monthsMayToNov);
