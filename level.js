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

var monster = Object.create({
	"damage": 1,
	"health": 5
})

function battleTime() {
	var enemy = new monster;
	player.health = player.health - this.monster.damage;
	this.monster.health = this.monster.health - player.damage;
	console.log('player: ' + player.health);
	console.log('monster: ' + enemy.health);
	if (player.health == 0) {
		levelActive = false;
	}
	else if (this.monster.health == 0) {
		level[i] = 'Y'
		level[i - 1] ='_';
		this.monster = Object.create(monster);
	}
	else {
		i--;
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
		battleTime();
		
	}
	if (i == levelObject.level2) {
		levelActive = false;
	}
	console.log(i);
}
