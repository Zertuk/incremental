var gainedLoot = 0;
var questSelected = null;

var level = new Array;

//makes the level, takes in the level length to determine length and the monster
//to determine what monster to fill with, randomly spawns monsters
function makeLevel(levelInp, monster, monsterCount, specialMonster, specialCount) {
	for (var i = 0; i < levelInp; i++) {
		level[i] = '_';
	}
	for (var j = 0; j < monsterCount; j++) {
		var random = Math.floor(Math.random()*levelInp);
		level[random] = monster;
	}
	for (var j = 0; j < specialCount; j++) {
			var randomSpecial = Math.floor(Math.random()*levelInp);
			level[randomSpecial] = specialMonster;
			console.log(j);
	}
};

//default monster object
function Monster() {
	this.maxHealth = 5,
	this.health = this.maxHealth,
	this.damage = 1,
	this.value = 'M',
	this.message = 'A mean monster',
	this.specialLoot = 'nothing',
	this.dropChance = 0,
	this.move = true,
	this.loot = function() {
		var lootDropped = Math.round(Math.random()*25);
		gainedLoot = lootDropped + gainedLoot;
		$('#loot').html('You have gained ' + gainedLoot + ' ectoplasm');
	}
	this.monsterInfo = function() {
		$('#monster_stats').html(this.message + ':  ' +
								'Dmg: ' + this.damage +
								' HP: ' + this.health + '|' + this.maxHealth);
	};

	this.specialDrop = function(item, dropChance) {
		var randomNum = Math.round(Math.random()*100);
		if (randomNum < dropChance) {
			 var lootMessage;
			 lootmessage = 'You have found: ' + item + ' ';
			 lootmessage = lootmessage + ' ' + item;
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
var goblinMiner = new Monster();
goblinMiner.message = "'A goblin miner, he has a pick!'";
goblinMiner.value = '\'\\G';
goblinMiner.specialLoot = 'pick';
goblinMiner.dropChance = 5;


var demon = new Monster();
demon.message = 'A demon';
demon.value = 'D';
demon.damage = 5;
demon.specialLoot = 'hat';
demon.dropChance = 75;


var rock = new Monster();
rock.message = 'Just a rock';
rock.value = 'O';
rock.damage = 0;
rock.move = false;

var demonWizard = new Monster();
demonWizard.message = 'The Demon Wizard!';
demonWizard.value = 'DW`!'
demonWizard.damage = 10;
demonWizard.maxHealth = 10;
demonWizard.health = 10;

var bat = new Monster();
bat.message = 'A spooky bat';
bat.value = '~B~';
bat.damage = 5;
bat.maxHealth = 5;
bat.health = 5;

var skeleton = new Monster();
skeleton.message = 'Too spooky';
skeleton.value = 'S';
skeleton.damage = 5;
skeleton.maxHealth = 10;
skeleton.health = 10;

var vampire = new Monster();
vampire.message = 'Thats no bat!';
vampire.value = 'V';
vampire.damage = 10;
vampire.maxHealth = 10;
vampire.health = 10;
vampire.specialLoot = 'Vampiric Gem';
vampire.specialDrop = 5;

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


var i = 0;





//function for the player to move, moves player and monster forward if '_'
//otherwise battles the enemy
//stops when player reaches end and gives them their loot 
function moveInLevel(monster, specialMonster) {
	var player = 'Y';
	if (level[i] == '_'); {
		level[i] = 'Y';
		level[i - 1] = '_';
		i++;
		if (monster.move) {
			monsterMove(monster.value);
		}
		if (specialMonster) {
			monsterMove(specialMonster.value);
			if (level[i] == specialMonster.value) {
				battleTime(specialMonster);
			}
		}
	}

	if (i == level.length) {
		levelActive = false;
		ectoplasm = ectoplasm + gainedLoot;
		gainedLoot = 0;
		$('#error').html('Level complete, you may leave and keep anything you found')
	}
	else if (level[i] == monster.value) {
		battleTime(monster);
	}
}

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
		monster.health = monster.maxHealth;
	}
	monster.monsterInfo();
	i--;
}


// function levelActive() {	
// 	i = 0;
// 	levelActive = true;
// 	$('#quest').show();
// 	$('#health_potion_button').html('Use HP(' + inventoryObject.healthPotion + ')');
// 	mineBackground()

// }

function leaveQuest() {
	$('#quest').hide();
	levelActive = false;
	$('#main').show();
}

function getQuestSelect(quest) {
	questSelected = $(quest).val();
	$(quest).hide();
	if (quest == '#church_quest') {
		loadLevelChurch(questSelected);
	}
	else if (quest == '#mountain_quest') {
		loadLevel(questSelected);
	}
	else if (quest == '#tower_quest') {
		loadTowerLevel(questSelected);
	}
}

var questText = $('#quest_text');

function loadTowerLevel(questSelected) {
	levelActive = true;
	$('#quest').show();
	$('#tower').hide();
	console.log(questSelected);
	if (questSelected == 'base') {
		console.log('hello');
		makeLevel(65, bat.value, 5, vampire.value, 1);
		$('#base_quest').show();
		questText.html('The base of the tower');
	}
	else {
		console.log('ok')
	}
}

function loadLevel(questSelected) {
	levelActive = true;
	$('#quest').show();
	$('#mountain').hide();

	if (questSelected == 'depths') {
		makeLevel(60, demon.value, 5, demonWizard.value, 1);
		$('#depths_quest').show();
		questText.html('The bottom of the mine');
	}
	else if (questSelected == 'mines') {
		makeLevel(50, goblinMiner.value, 5, demon.value, 5); 
		$('#mine_quest').show();
		questText.html('There are goblin miners everywhere!');
	}
	else if (questSelected == 'cavern') {
		makeLevel(50, rock.value, 5);
		$('#cavern_quest').show();
		questText.html('Wow it is a mess in here, rocks laying in the path');
	}
 }

 function loadLevelChurch(questSelected) {
 	levelActive = true;
 	$('#quest').show();
 	$('#churchInside').hide();
 	if (questSelected == 'approach') {
 		makeLevel(60, demon.value, 5, demonWizard.value, 3);
 		questText.html('There are demons everywhere');
 		$('#approach_quest').show();
 	}
 }
