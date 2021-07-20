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

/***/ "./diceybiz.ts":
/*!*********************!*\
  !*** ./diceybiz.ts ***!
  \*********************/
/***/ (() => {

eval("\n// I Do What I Want XP\n// let generateDie = document.createElement('button')\n// generateDie.textContent = 'Create Die'\n// document.body.appendChild(generateDie)\nvar buttonBox = document.getElementById(\"buttonBox\");\nvar createDie = document.getElementById(\"createDie\");\nvar rollDice = document.createElement(\"button\");\nvar getSum = document.createElement(\"button\");\nvar container = document.createElement(\"main\");\nvar counter = 0;\nvar max = 6;\nvar min = 1;\nvar diceArr = [];\nvar randomColor = Math.floor(Math.random() * 16777215).toString(16);\nrollDice.id = \"rollIt\";\nrollDice.textContent = \"Roll Dice\";\ncontainer.id = \"dieBox\";\ngetSum.id = \"sumItUp\";\ngetSum.textContent = \"Get Sum\";\nbuttonBox.append(rollDice);\nbuttonBox.append(getSum);\ndocument.body.append(container);\ncreateDie.addEventListener(\"click\", function () {\n    new Die();\n    counter++;\n});\nrollDice.addEventListener(\"click\", function () {\n    diceArr.forEach(function (die) { die.roll(); });\n    // this.roll;\n    //loop over array and tell everything in the array to roll\n    //for (let i = 0; i < diceArr.length; i++){\n    // diceArr.push(\"#die\".val)\n    //}\n    // let randomNum = Math.floor(Math.random() * (max - min) + min);\n    // diceArr.innerText = randomNum\n    // console.log(\"#die\")\n});\ngetSum.addEventListener(\"click\", function () {\n    var sum = 0;\n    diceArr.forEach(function (die) { return sum += die.value; });\n    alert(sum);\n});\nvar Die = /** @class */ (function () {\n    function Die() {\n        var _this = this;\n        this.div = document.createElement(\"div\");\n        this.div.id = \"die\";\n        this.div.className = counter;\n        // this.div.style.backgroundColor = 'beige'\n        this.div.style.height = \"100px\";\n        this.div.style.width = \"100px\";\n        container.append(this.div);\n        this.roll();\n        this.value = Math.floor(Math.random() * 6 + 1);\n        this.div.innerText = this.value;\n        this.div.style.color = \"#\" + randomColor;\n        //google how to push something into an array\n        diceArr.push(this);\n        console.log(diceArr);\n        //normal func won't work here with the \"This\" keyword\n        this.div.addEventListener(\"click\", function () {\n            _this.roll();\n            // diceArr.push(this.value);\n        });\n    }\n    Die.prototype.roll = function () {\n        var randomNum = Math.floor(Math.random() * (max - min) + min);\n        this.value = randomNum;\n        this.getChar();\n        this.div.innerText = this.value;\n    };\n    Die.prototype.getChar = function () {\n        if (this.value === 1) {\n            this.char = \"⚀\";\n        }\n        else if (this.value === 2) {\n            this.char = \"⚁\";\n        }\n        else if (this.value === 3) {\n            this.char = \"⚂\";\n        }\n        else if (this.value === 4) {\n            this.char = \"⚃\";\n        }\n        else if (this.value === 5) {\n            this.char = \"⚄\";\n        }\n        else {\n            this.char = \"⚅\";\n        }\n    };\n    return Die;\n}());\n// class\n\n\n//# sourceURL=webpack://diceybiz/./diceybiz.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./diceybiz.ts"]();
/******/ 	
/******/ })()
;