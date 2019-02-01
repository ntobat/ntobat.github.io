var activities = [
	'summit a mountain',
	'run a marathon',
	'run a race',
	'run a 5k',
	'run a 10k',
	'run a half marathon',
	'rock climb outside',
	'snowboard a black diamond',
	'snowboard a double black diamond',
	'ski a black diamond',
	'ski a double black diamond',
	'hike 5 miles in one go',
	'hike 10 miles in one go',
	'bike 10 miles in one go',
	'bike 20 miles in one go',
	'bike 50 miles in one go',
	'bike 100 miles in one go',
	'compete in an Iron Man race',
	'ice climb a frozen waterfall',
	'surf a ten-foot wave',
	'paddle class 3 rapids',
	'paddle class 4 rapids',
	'paddle class 5 rapids',
	'walk on a frozen lake',
	'swim with sharks',
	'skydive',
	'skateboard on a halfpipe',
	'ride a horse',
	'go camping',
	'learn how to surf',
	'try water skiing',
	'do a handstand',
	'try paddleboarding',
	'do a handstand on a paddle board',
	'go snow shoeing',
	'explore a cave',
	'compete in a triathlon',
	'go bungee jumping',
	'ride in a hot air balloon',
	'learn how to sail',
	'play polo',
	'go SCUBA diving'
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
	"'m 25 years old",
	"'m 30 years old",
	"'m 35 years old",
	"'m 40 years old",
	"'m 45 years old",
	"'m 50 years old",
	"'m 55 years old",
	"'m 60 years old",
	"'m 65 years old",
	"'m 70 years old",
	"'m 75 years old",
	"'m 80 years old",
	"'m 85 years old",
	"'m 90 years old",
	"'m 95 years old",
	"'m 100 years old",
	"'m 105 years old",
	"'m 110 years old",
	" kick the bucket",
	" kick the bucket",
	" kick the bucket",
	" kick the bucket",
	" kick the bucket",
	" kick the bucket"
];


function newItem(){
	var randomAct = Math.floor((Math.random()) * (activities.length));
	var randomAge = Math.floor((Math.random()) * (ages.length));
	document.getElementById("act").innerHTML = activities[randomAct];
	document.getElementById("age").innerHTML = ages[randomAge];
};


function TWshare(item){
	var listItem = document.getElementById('shared').textContent;
	var desc = encodeURIComponent("I just added a new item to my bucket list: " + listItem + " Hold me accountable, world!");
	window.open("http://twitter.com/share?url=www.nicktobat.com&text=" + desc + "&hashtags=buddy,climbsomething,buddychallenge,bringabuddy"); 
};


function copy(){
	document.getElementById('copier').classList.add("copied");
	var listItem = document.getElementById('shared').textContent;
	const el = document.createElement('textarea');
	el.value = listItem;
	el.setAttribute('readonly',true);
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	setTimeout(function(){
		document.getElementById('copier').classList.remove("copied");
	},800);
};


window.onload = newItem();







