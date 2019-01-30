var activities = [
	'summit a mountain',
	'run a marathon',
	'run a race',
	'rock climb outside',
	'snowboard a black diamond',
	'ski a black diamond',
	'hike 10 miles',
	'surf a ten-foot wave'
];

var locales = [
	'the west coast of the US',
	'the east coast of the US',
	'the Middle East',
	'Hawai\'i',
	'the Eurasian Steppe',
	'the Himalayas'
];

var ages = [
	'25 years old',
	'30 years old',
	'35 years old',
	'40 years old',
	'45 years old',
	'50 years old',
	'55 years old',
	'60 years old',
	'65 years old',
	'70 years old',
	'75 years old',
	'80 years old',
	'85 years old',
	'90 years old',
	'95 years old',
	'100 years old',
	'105 years old',
	'110 years old',
	'dead',
	'dead',
	'dead',
	'dead',
	'dead',
	'dead'
];

function newItem(){
	var randomAct = Math.floor((Math.random()) * (activities.length));
	var randomAge = Math.floor((Math.random()) * (ages.length));
	document.getElementById("act").innerHTML = activities[randomAct];
	document.getElementById("age").innerHTML = ages[randomAge];
};
window.onload = newItem();