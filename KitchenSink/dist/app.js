/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Ksjsapp.ts":
/*!********************!*\
  !*** ./Ksjsapp.ts ***!
  \********************/
/***/ (() => {

eval("\n//create a variable that contains your name as a value. Name the variable appropriately.\nvar myName = \"Jeff\";\n// Create a constant that contains the number of states in the U.S. and name it appropriately.\nvar numOfStates = 50;\n//Compute the result of adding 5 and 4 and store it in an appropriately named variable.\nvar result = 5 + 4;\nfunction sayHello() {\n    window.alert('Hello World');\n}\nsayHello();\nfunction checkAge(name, age) {\n    if (age < 21) {\n        window.alert(\"Sorry \" + name + \", you aren't old enough to view this page!\");\n    }\n    ;\n}\n;\ncheckAge('Charles', 21);\ncheckAge('Abby', 27);\ncheckAge('James', 18);\ncheckAge('John', 17);\nvar favVeggies = [\"Corn\", \"Broccoli\", \"Celery\", \"Squash\"];\nfor (var i = 0; i <= favVeggies.length; i++) {\n    console.log(favVeggies[i]);\n}\n;\nvar pet = {\n    name: \"Odie\",\n    breed: \"Labradoodle\"\n};\nconsole.log(pet.name, pet.breed);\nvar randos = [\n    {\n        name: \"Paul\",\n        age: 31\n    },\n    {\n        name: \"Trent\",\n        age: 18\n    },\n    {\n        name: \"Odie\",\n        age: 14\n    },\n    {\n        name: \"Caleb\",\n        age: 27\n    },\n    {\n        name: \"Kal\",\n        age: 22\n    }\n];\nfor (var i = 0; i < randos.length; i++) {\n    checkAge(randos[i].name, randos[i].age);\n}\nfunction getLength(word) {\n    return word.length;\n}\n;\nvar wordlength = getLength(\"Hello World\");\nif (wordlength % 2 == 0) {\n    console.log(\"The world is nice and even!\");\n}\nelse {\n    console.log(\"The world is an odd place!'\");\n}\n\n\n//# sourceURL=webpack://kitchensink/./Ksjsapp.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Ksjsapp.ts"]();
/******/ 	
/******/ })()
;