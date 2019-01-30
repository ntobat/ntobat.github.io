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

function newItem(){
	var randomAct = Math.floor((Math.random()) * (activities.length));
	var randomLoc = Math.floor((Math.random()) * (locales.length));
	document.getElementById("act").innerHTML = activities[randomAct];
	document.getElementById("act").style.color = "#000";
	document.getElementById("loc").innerHTML = locales[randomLoc];
	document.getElementById("loc").style.color = "#000";
};
window.onload = newItem();