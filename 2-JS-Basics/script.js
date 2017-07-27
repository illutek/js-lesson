/**
 * Created by Stefan on 16/07/2017.
 */

// Comment
    /*
var name = 'John';

console.log(name);

var lastName = 'Smith';

console.log(lastName);

var age = 26;

console.log(age);

var ageFull = true

console.log(name + age);

console.log(age + age);

var job, isMarried;


isMarried = false;
job = 'teacher';

console.log(name + ' ' + age + ' ' + job);

var lastName = prompt('What is the last name');

console.log('your last name = ' + lastName);

alert(name + ' ' + age + ' ' + job);


var birthYear = 2016 - 26;
*/

    /*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married');
} else {
    console.log(name + ' is not married jet');
}

isMarried = false;

if (isMarried) {
    console.log('YES');
} else {
    console.log('NO');
*/
 /*
var age = 20;

if (age <= 19) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man');
} else {
    console.log('John is a older man');
}

var job = 'hdfsis';

job = prompt('What does John');

switch (job) {
    case 'driver':
        console.log('He is a driver');
        break;
    case 'teacher':
        console.log('John is a teaser');
        break;
    default:
        console.log('something else');
}

*/

// GAME Height and Age
/*
var marcAge = 26;
var johnAge = 30;
var pietAge = 30;

var marcLength = 177;
var johnLength = 177;
var pietLength = 177;

var marc = marcLength + (5 * marcAge);
console.log(marc + ' score Marc');

var john = johnLength + (5 * johnAge);
console.log(john + ' score John');

var piet = pietLength + (5 * pietAge);
console.log(piet + ' score Piet');

if (marc > john && marc > piet) {
    console.log('Marc is the winner');
} else if (piet > marc && piet > john) {
    console.log('Piet is de winner');
} else if (john > piet && john > marc) {
    console.log('John is the winner!')
} else {
    console.log('All Winners')
}
*/
// Functions
///////////////////////////
/*
function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

function yearOfReterement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement <= 0){
        console.log(name + ' is already retired');
    } else {
        console.log(name + ' retires over ' + retirement + ' years');
    }

}
var name = prompt('Your name');
var yearBirth = prompt('Year of Birth');

// age = calculateAge(age);

//console.log(ageJohn + ' year');

yearOfReterement(name, yearBirth);

*/

// Arrays
////////////////////////////

/*
var john = ['John', 'Smith', 1959, 'Brussel'];

john.push('bleu');
console.log(john);

var index = john.indexOf(1959);
alert('Index' + index);

*/

// Objects
////////////////////////

/*
var john = {
    name: 'John',
    lastname: 'Smith',
    birthyear: 1959,
    color: 'blue'
};

console.log(john);
console.log(john.lastname);
console.log(john['name']);

var xyz = 'color';

console.log(john[xyz]);

john.lastname = 'Miller';

console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane.firstName = 'Janssens';
jane.job = 'teaser';

console.log(jane);
 // v1.0
/*
var john = {
    name: 'John',
    lastname: 'Smith',
    birthyear: 1965,
    color: 'blue',
    family: ['Jane', 'Bob'],
    calculateAge: function () {
           return 2017 - this.birthyear;
    }
};

console.log(john.calculateAge());
*/
// var age = john.calculateAge();
// john.age = age;
// console.log(john);


// v2.0
/*
var john = {
    name: 'John',
    lastname: 'Smith',
    birthyear: 1965,
    color: 'blue',
    family: ['Jane', 'Bob'],
    calculateAge: function () {
        this.age = 2017 - this.birthyear;
    }
};

john.calculateAge();
console.log(john);

*/

// Loops
////////////////////////////////
/*

// for loop
 for (var i = 0; i < 10; i++) {
 console.log(i);
 }

 var names = ['Bob', 'Mary', 'Mark', 'John', 'Peter'];

 for (var i = names.length -1; i >= 0; i--) {
 console.log(names[i]);
 }

 */

// While loop
/*
var names = ['Bob', 'Mary', 'Mark', 'John', 'Peter'];
var i = 0;

// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }


// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 5){
//         break;
//     }
// }

for (var i = 0; i < 10; i++) {

    if (i === 5){
        continue;
    }

    console.log(i);
}

*/

// Code challing 2
//////////////////////////

//var yearsOfBirth = ['1956', '2005', '1970', '2004'];

var years = [1990, 2000, 1979, 2001, 1959];

var ages = [];

for (var i = 0; i < years.length; i++){
    ages[i] = 2017 - years[i];
}

for (i = 0; i < ages.length; i++){
    if (ages[i] > 18) {
        console.log('This person ' + (i + 1) + ' at the age of ' + ages[i] + ' is at full age')
    } else {
        console.log('This person ' + (i + 1) + ' at the age of ' + ages[i] + ' is NOT at full age')
    }
}








