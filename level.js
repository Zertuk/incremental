var level = new Array;
var levelObject = {
	level1: 20,
	level2: 30,
	level3: 10
}
for (var i = 0; i < levelObject.level2; i++) {
	var random = Math.floor(Math.random()*levelObject.level2);
	if (random < 23) {
	 	level[i] = '_';
	}
	else {
		level[i] = 'E';
	}
}



var i = 0;
var levelActive = true;

function moveInLevel() {
	var player = 'Y';

	if (level[i] == '_'); {
		level[i] = player;
		level[i - 1] = '_';
		i++;
		}
	if (level[i] == 'E') {
		levelActive = false;		
		
	}
	if (i == levelObject.level2) {
		levelActive = false;
	}
	console.log(level);
}
