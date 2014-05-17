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
		level[i] = 'G';
	}
}
var gainedLoot = 0;
function Monster() {
	this.health = 5,
	this.damage = 1,
	this.message = 'A mean monster',
	this.loot = function() {
		var lootDropped = Math.round(Math.random()*25);
		ectoplasm = ectoplasm + lootDropped;
		gainedLoot = lootDropped + gainedLoot;
		$('#loot').html('You have gained ' + gainedLoot + ' ectoplasm');
	}
	this.monsterInfo = function() {
		$('#monster_stats').html(this.message +
								'Dmg: ' + this.damage +
								'HP: ' + this.health);
	}
	this.specialDrop = function(item, dropChance) {
		var randomNum = Math.round(Math.random()*100);
		console.log(randomNum);
		if (randomNum < dropChance) {
			$('#special_loot').html('You have found: ' + item);
		}
	}
}
var goblin = new Monster();
goblin.message = 'A scary goblin';

function battleTime() {
	this.goblin.monsterInfo();
	player.health = player.health - this.goblin.damage;
	this.goblin.health = this.goblin.health - player.damage;
	console.log('player: ' + player.health);
	console.log('monster: ' + this.goblin.health);
	if (player.health <= 0) {
		levelActive = false;
		$('#error').html('You have been slain');
	}
	else if (this.goblin.health <= 0) {
		level[i] = 'Y';
		level[i - 1] ='_';
		i++;
		this.goblin.monsterInfo();
		this.goblin.loot();
		this.goblin.specialDrop('axe', 50);
		this.goblin.health = 5;
		console.log(goblin);
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
	if (level[i] == 'G') {
		battleTime();		
	}
	if (i == levelObject.level2) {
		levelActive = false;
	}
	console.log(i);
}
