
// const favFood = "grapes";

// const foodThoughts = function () {

// 	console.log("Original favourite food: " + favFood);

// 	const favFood = "sushi";

// 	console.log("New favorite food: " + favFood);
// };

// foodThoughts();


// Function Iteretion

// var canada = () => {
// 	console.log("cold")
// }
// function india() {
// 	console.log("warm")
// }

// canada()
// india()

// function marry(person1, person2) {
// 	console.log('arguments')
// 	return `${person1} is now married to ${person2}`
// }

// console.log(marry("Tim", "Tina"))


// function paramOfSafar (height, weight, skills, gf) {
// 	console.log('arguments: ', arguments)
// 	return `Safar's height is: ${height}, and his weight is: ${weight}, skills are: ${skills}, has a gf: ${gf}`
// }

// console.log(paramOfSafar("180", "85", "programming", "no"))


// function marry2(...args) {
// 	console.log('arguments', args);
// 	console.log(Array.from(arguments));
// 	return `${args[0]} is now married to ${args[1]}`
// }

// marry2('Tim', "Tina")

// var canada = () => {
// 	console.log('cold');
// }

// function india() {
// 	console.log(arguments)
// 	console.log('warm');
// }

// canada()
// india()


// function two() {
// 	var isValid;
// }

// function one() {
// 	var isValid = true;
// 	two();
// }

// var isValid = false;
// console.log(one())

// function findName() {
// 	var b = 'b';
// 	return printName();
// }

// function printName() {
// 	var c = 'c';
// }

// function sayMyName() {
// 	var a = 'a';
// 	return findName();
// }

// console.log(sayMyName())





// function loop() {
// 	for(let i = 5; 5 < 5; i++){
// 		console.log(i);
// 	}
// 	console.log('final', i)
// }

// loop()

// IFFE


// const obj = {
// 	name: 'Safar',
// 	sing: function() {
// 		return 'Helloo ' + this.name;
// 	},
// 	signAgain(){
// 		return this.sign() + '!';
// 	}
// }
// console.log(obj.sing())



function importantPerson() {
	console.log(this.name+'!');
}

const name = "Sunny";
const obj1 = {
	name: 'Cassy',
	importantPerson: importantPerson
}

const obj2 = {
	name: 'Jacob',
	importantPerson: importantPerson
}
obj1.importantPerson()

// const helpToPeople = {
// 	how: 'By Giving them enough money',
// 	helpingway: function() {
// 		return "WE have to help to people through " + this.how;
// 	}
// }

// console.log(helpToPeople.helpingway())

// const a = function() {
// 	console.log("a",this)
// 	const b = function() {
// 		console.log("b",this)
// 		const c = {
// 			hi: function() {
// 				console.log("c", this)
// 		}}
// 		c.hi()
// 	}
// 	b()
// }

// a()









const character = {
	name: 'Simon',
	getCharacter() {
	  return this.name;
	}
};

const giveMeTheCharacterNOW = character.getCharacter;
var char = character.this;
  //How Would you fix this?
console.log('?',giveMeTheCharacterNOW(), char); //this should return 'Simon' bud doesn't
