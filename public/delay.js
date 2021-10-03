var key='delay';
let saveddelay = localStorage.getItem (key);
var delay = saveddelay ? saveddelay : 500;

function save(val) {
	delay = val;
	document.getElementById('delayStr').innerText = val;
	localStorage.setItem (key, val);
}

function play(val) {
	if (val) setTimeout ( function() { play(0)}, val);
	else {
		inscore.postMessageStrI ("/ITL/scene/score", "play", 1);
	}
}

function stop(val) {
	if (val) setTimeout ( function() { stop(0) }, val);
	else {
		inscore.postMessageStrI ("/ITL/scene/score", "play", 0);
		inscore.postMessageStrI ("/ITL/scene/score", "vdate", 0);
	}
}

function pause(val) {
	if (val) setTimeout ( function() { pause(0) }, val);
	else {
		inscore.postMessageStrI ("/ITL/scene/score", "play", 0);
	}
}
