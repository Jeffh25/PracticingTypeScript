//create a variable that contains your name as a value. Name the variable appropriately.
var myName = "Jeff";
// Create a constant that contains the number of states in the U.S. and name it appropriately.
var numOfStates = 50;
//Compute the result of adding 5 and 4 and store it in an appropriately named variable.
var result = 5 + 4;
function sayHello() {
    alert('Hello World');
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
    ;
}
;
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var favVeggies = ["Corn", "Broccoli", "Celery", "Squash"];
for (var i = 0; i <= favVeggies.length; i++) {
    console.log(favVeggies[i]);
}
;
var pet = {
    name: "Odie",
    breed: "Labradoodle"
};
console.log(pet.name, pet.breed);
var randos = [
    {
        name: "Paul",
        age: 31
    },
    {
        name: "Trent",
        age: 18
    },
    {
        name: "Odie",
        age: 14
    },
    {
        name: "Caleb",
        age: 27
    },
    {
        name: "Kal",
        age: 22
    }
];
for (var i = 0; i < randos.length; i++) {
    checkAge(randos[i].name, randos[i].age);
}
function getLength(word) {
    return word.length;
}
;
var wordlength = getLength("Hello World");
if (wordlength % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!'");
}
