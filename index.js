const cowsay = require("cowsay");
const wilder = require ("./information");
console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));


console.log(`${wilder.name} ${wilder.campus}`);