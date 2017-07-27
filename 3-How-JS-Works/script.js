///////////////////////////////////////
// Lecture: Hoisting


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
 var a = 'Hello!';
 first();

 function first() {
 var b = 'Hi!';
 second();

 function second() {
 var c = 'Hey!';
 console.log(a + b + c);
 third();
 }
 }

 function third() {
 var d = 'Hello again';
 console.log(a + b + c + d);

 }

 */


// Example to show the differece between execution stack and scope chain

/*
 var a = 'Hello!';
 first();

 function first() {
 var b = 'Hi!';
 second();

 function second() {
 var c = 'Hey!';
 third()
 }
 }

 function third() {
 var d = 'John';
 console.log(a + b + c + d);
 }
 */



///////////////////////////////////////
// Lecture: The this keyword
/*
function calculateAge(year) {
    console.log(2017 - year);
    console.log(this);
}

calculateAge(1959);
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this.name + ' ' + (2017 - this.yearOfBirth));
        console.log(this);

        /*function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1982
}

mike.calculateAge = john.calculateAge;

mike.calculateAge();






