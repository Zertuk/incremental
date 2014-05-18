var gainedLoot = 0;
var questSelected = null;

var level = new Array;
var levelObject = {
	level1: 20,
	level2: 30,
	level3: 10
}



//makes the level, takes in the level length to determine length and the monster
//to determine what monster to fill with, randomly spawns monsters
function makeLevel(levelInp, monster) {
	for (var i = 0; i < levelInp; i++) {
		var random = Math.floor(Math.random()*levelInp);
		level[i] = '_';
		if (random < levelInp / 5){
			level[i] = monster;
		}
	}
};

//default monster object
function Monster() {
	this.health = 5,
	this.damage = 1,
	this.value = 'M',
	this.message = 'A mean monster',
	this.specialLoot = 'nothing',
	this.dropChance = 100,
	this.loot = function() {
		var lootDropped = Math.round(Math.random()*25);
		gainedLoot = lootDropped + gainedLoot;
		$('#loot').html('You have gained ' + gainedLoot + ' ectoplasm');
	}
	this.monsterInfo = function() {
		$('#monster_stats').html(this.message + ':  ' +
								'Dmg: ' + this.damage +
								' HP: ' + this.health);
	}
	this.specialDrop = function(item, dropChance) {
		var randomNum = Math.round(Math.random()*100);
		if (randomNum < dropChance) {
			$('#special_loot').html('You have found: ' + item);
		}
	}
	this.monsterMove = function(levelInp) {
		console.log(this.value);
		for (var g = 0; g < levelInp; g++) {
			if (level[g] == this.value && level[g-1] == '_') {
				level[g-1] = 'G';
				level[g] = '_'
			}
		}
	} 
}

//monster move function, only moves if next val in array is '_'
//takes Monster.value as parameter
function monsterMove(value) {
	for (var g = 0; g < level.length; g++) {
		if (level[g] == value && level[g-1] == '_') {
			level[g - 1] = value;
			level[g] = '_';
		}
	}
}


//here will be some monsters using the Monster default for inheritance
var goblin = new Monster();
goblin.message = "'A scary goblin'";
goblin.value = 'G';
goblin.specialLoot = 'cat';
goblin.dropChance = 50;


var demon = new Monster();
demon.message = 'A demon';
demon.value = 'D';
demon.damage = 5;
demon.specialLoot = 'hat';
demon.dropChance = 75;

//function call to make the level, temporary for testing


//giant mess of a function that needs to be remade, currently only works with goblins, need to fix
//otherwise it updates the hp of both player/monster, exits if one of them dies, kills whole thing if
//player dies, gives loot if monster dies
// function battleTime() {
// 	battle = true;
// 	this.goblin.monsterInfo();
// 	player.health = player.health - this.goblin.damage;
// 	this.goblin.health = this.goblin.health - player.damage;
// 	console.log('player: ' + player.health);
// 	console.log('monster: ' + this.goblin.health);
// 	if (player.health <= 0) {
// 		levelActive = false;
// 		$('#error').html('You have been slain');
// 		battle = false;
// 	}
// 	else if (this.goblin.health <= 0) {
// 		battle = false;
// 		level[i] = 'Y';
// 		level[i - 1] ='_';
// 		i++;
// 		this.goblin.monsterInfo();
// 		this.goblin.loot();
// 		this.goblin.specialDrop('axe', 50);
// 		this.goblin.health = 5;
// 		console.log(goblin);
// 	}
// 	i--;
// }

function battleTime(monster) {
	$('#player_stats').html('Player Dmg: ' +player.damage);
	monster.monsterInfo();
	player.health = player.health - monster.damage;
	monster.health = monster.health - player.damage;
	if (player.health <= 0) {
		levelActive = false;
		$('#error').html('You have been slain');
	}
	else if (monster.health <= 0) {
		level[i] = 'Y';
		level[i - 1] = '_';
		i++;
		monster.monsterInfo();
		monster.loot();
		monster.specialDrop(monster.specialLoot, monster.dropChance);
		monster.health = 5;
	}
	i--;
}
var i = 0;





//function for the player to move, moves player and monster forward if '_'
//otherwise battles the enemy
//stops when player reaches end and gives them their loot 
function moveInLevel(monster) {
	console.log(monster);
	var player = 'Y';
	if (level[i] == '_'); {
		level[i] = 'Y';
		level[i - 1] = '_';
		i++;
		monsterMove(monster.value);	
	}

	if (i == level.length) {
		levelActive = false;
		ectoplasm = ectoplasm + gainedLoot;
		gainedLoot = 0;
		$('#error').html('level over')
	}
	else if (level[i] != '_') {
		battleTime(monster);
	}
}


function levelActive() {
	$('#health_potion_button').html('Use HP(' + inventoryObject.healthPotion + ')');
	i = 0;
	levelActive = true;
	$('#quest').show();

}

function getQuestSelect(quest) {
	questSelected = $(quest).val();
	$(quest).hide();
	loadLevel(questSelected);
}

function loadLevel(questSelected) {
	console.log(questSelected);
	if (questSelected == 'depths') {
		makeLevel(25, demon.value);
	}
	else if (questSelected == 'mines') {
		makeLevel(50, goblin.value);

	}
	levelActive = true;
		$('#quest').show();
		$('#mountain').hide();
}
