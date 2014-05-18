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
var battle = false;

function battleTime() {
	battle = true;
	this.goblin.monsterInfo();
	player.health = player.health - this.goblin.damage;
	this.goblin.health = this.goblin.health - player.damage;
	console.log('player: ' + player.health);
	console.log('monster: ' + this.goblin.health);
	if (player.health <= 0) {
		levelActive = false;
		$('#error').html('You have been slain');
		battle = false;
	}
	else if (this.goblin.health <= 0) {
		battle = false;
		level[i] = 'Y';
		level[i - 1] ='_';
		i++;
		this.goblin.monsterInfo();
		this.goblin.loot();
		this.goblin.specialDrop('axe', 50);
		this.goblin.health = 5;
		console.log(goblin);
	}
	i--;

}

var i = 0;
var levelActive = true;
var monsterMoveVal = false;

function moveInLevel() {
	var player = 'Y';
	
	if (level[i] == '_'); {
		level[i] = 'Y';
		level[i - 1] = '_';
		i++;
		monsterMove();	
	}
	if (level[i] == 'G') {
		battleTime();
	}
	if (i == levelObject.level2) {
		levelActive = false;
		ectoplasm = ectoplasm + gainedLoot;
		console.log(gainedLoot);
		gainedLoot = 0;
		console.log(gainedLoot);
	}
	console.log(level[i + 1]);
	console.log(i);
	console.log(battle);

	
}

function monsterMove() {
	monsterMoveVal = true;
	for (var g = 0; g < levelObject.level2; g++) {
		if (level[g] == 'G' && level[g-1] != 'Y' && level[g-1] != 'G') {
			level[g - 1] = 'G';
			level[g] = '_';
			console.log(g);
		}
	}
	monsterMoveVal = false;
}
