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


//***** 3 - Arrays *****//

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


//***** 4 - If Else *****//

// a)

var randNumber = Math.random()

console.log('Excercise 4.a:')

if (randNumber > 0.5){
    console.log(randNumber, 'Greater than 0.5');
}else{
    console.log(randNumber, 'Less than 0.5');
}

// b)

age = Math.floor(Math.random() * 101);

console.log('Excercise 4.b:','Age: ' + age);

if (age < 2){
    console.log('Bebe');
}else if (age < 12){
    console.log('Nino');
}else if (age < 19){
    console.log('Adolescente');
}else if (age < 30){
    console.log('Joven');
}else if (age < 60){
    console.log('Adulto');
}else if (age < 75){
    console.log('Adulto Mayor');
}else{
    console.log('Anciano');
}


//***** 5 - For *****//

// a)

var myArray = ['red', 'blue', 'green', 'yellow', 'purple'];

console.log('Excercise 5.a:')

for (var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

// b)

console.log('Excercise 5.b:')

for (var i = 0; i < myArray.length; i++){
    myArray[i] = myArray[i].substring(0,1).toUpperCase() + myArray[i].substring(1);
    console.log(myArray[i]);
}

// c)

var sentence = ''

for (var i = 0; i < myArray.length; i++){
    sentence += myArray[i];
}
console.log('Excercise 5.c:', sentence);

// d)

 var emptyArray = []

 for (var i = 0; i <10; i ++){
     emptyArray[i] = i;
 }

 console.log('Excercise 5.d:', emptyArray);


 //***** 6 - Functions *****//

// a)

 function numSum(x,y){
     return x + y;
 }

 var funcResult = numSum(4,8);

 console.log('Excercise 6.a:', funcResult);

// b)

 function numSum2(x,y){
     if (typeof x != 'number'){
         console.log(x + ' is not a number');
         return NaN;
    }else if (typeof y != 'number'){
        console.log(y + ' is not a number');
        return NaN;
    }else{
        return x + y;
    }
 }

// c)

function validateInteger(x){
    if (x % 1 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(validateInteger(3.2));
console.log(validateInteger(3));

// d)

function numSumRounded(x,y){
    if (typeof x != 'number'){
        console.log(x + ' is not a number');
        return NaN;
   }else if (typeof y != 'number'){
       console.log(y + ' is not a number');
       return NaN;
   }else{
    if (x % 1 != 0){
        console.log(x , 'will be rounded, it is not an integer');
        return Math.round(x);
    }else if (y % 1 != 0){
        console.log(y , 'will be rounded, it is not an integer');
        return Math.round(y);
    }else{
        return x + y;
    }
   }
}

console.log(numSumRounded(2.5,3))

// e)

function isNumber (x) {
    if (typeof x === "number"){
        return x;
    }else{
        console.log(x, 'is not a number');
        return NaN
    }
}



