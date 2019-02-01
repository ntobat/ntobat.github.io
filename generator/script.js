var activities = [
	'summit a mountain',
	'summit a fourteener',
	'run a marathon',
	'run a race',
	'run a 5k',
	'run a 5k',
	'run a 5k',
	'run a 5k',
	'run a 10k',
	'run a half marathon',
	'rock climb outside',
	'rock climb outside',
	'rock climb outside',
	'try skiing',
	'try skiing',
	'try skiing',
	'try snowboarding',
	'try snowboarding',
	'try snowboarding',
	'snowboard a black diamond',
	'snowboard a double black diamond',
	'ski a black diamond',
	'ski a double black diamond',
	'hike 5 miles in one go',
	'hike 10 miles in one go',
	'hike 20 miles in one go',
	'bike 10 miles in one go',
	'bike 20 miles in one go',
	'bike 50 miles in one go',
	'bike 100 miles in one go',
	'compete in an Iron Man race',
	'ice climb a frozen waterfall',
	'paddle class 3 rapids',
	'paddle class 4 rapids',
	'paddle class 5 rapids',
	'climb in a gym',
	'climb in a gym',
	'climb in a gym',
	'climb a 5.9',
	'climb a 5.9',
	'climb a 5.10',
	'climb a 5.11',
	'climb a 5.12',
	'climb a 5.13',
	'walk on a frozen lake',
	'swim with sharks',
	'skydive',
	'skateboard on a halfpipe',
	'ride a horse',
	'go camping',
	'go camping',
	'go camping',
	'go mountain biking',
	'go mountain biking',
	'go mountain biking',
	'learn how to surf',
	'learn how to surf',
	'surf a ten-foot wave',
	'try water skiing',
	'take a yoga class',
	'do a headstand',
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

var times = [
	"my next birthday",
	"the next presidential election",
	"the end of the year",
	"the end of the day",
	"the end of the month",
	"the end of the week",
	"the next snowfall",
	"the next rainfall",
	"the next full moon",
	"the next new moon",
	"the next lunar eclipse",
	"the next solar eclipse",
	"I go to sleep",
	"I'm too old",
	"I eat breakfast",
	"I eat lunch",
	"I eat dinner",
	"the end of the month",
	"I kick the bucket",
	"I kick the bucket",
	"I kick the bucket",
	"I kick the bucket",
	"I kick the bucket"
];


function newItem(){
	var randomAct = Math.floor((Math.random()) * (activities.length));
	var randomTime = Math.floor((Math.random()) * (times.length));
	document.getElementById("act").innerHTML = activities[randomAct];
	document.getElementById("time").innerHTML = times[randomTime];
};


function TWshare(item){
	var listItem = document.getElementById('shared').textContent;
	var desc = encodeURIComponent("I just added a new item to my bucket list: " + listItem + " Hold me accountable, world!");
	window.open("http://twitter.com/share?url=www.iambuddy.com&text=" + desc + "&hashtags=buddy,climbsomething,buddychallenge,bringabuddy"); 
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
	},600);
};


window.onload = newItem();







