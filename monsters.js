var addMonstersValue = 0;

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
	this.replace = '_',
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

function addMoreMonsters(monster) {
	level[level.length] = monster.value;
	console.log(level.length + ' level length');
	console.log(monster + ' monster');
}


//here will be some monsters using the Monster default for inheritance
var goblinMiner = new Monster();
goblinMiner.message = "'He has a pick!'";
goblinMiner.value = '\'\\G';
goblinMiner.specialLoot = 'pick';
goblinMiner.dropChance = 5;
goblinMiner.name = 'Goblin Miner';


var demon = new Monster();
demon.message = 'A demon';
demon.value = 'D';
demon.damage = 5;
demon.specialLoot = 'hat';
demon.dropChance = 75;
demon.name = 'Demon';

var rock = new Monster();
rock.message = 'Just a rock';
rock.value = 'O';
rock.damage = 0;
rock.move = false;
rock.name = 'Rock';

var demonWizard = new Monster();
demonWizard.message = 'The Demon Wizard!';
demonWizard.value = 'DW`!'
demonWizard.damage = 10;
demonWizard.maxHealth = 10;
demonWizard.health = 10;
demonWizard.name = 'Demon Wizard'
demonWizard.replace = '____'

var bat = new Monster();
bat.message = 'A spooky bat';
bat.value = '~B~';
bat.damage = 5;
bat.maxHealth = 5;
bat.health = 5;
bat.name = 'Bat';

var skeleton = new Monster();
skeleton.message = 'Too spooky';
skeleton.value = 'S';
skeleton.damage = 5;
skeleton.maxHealth = 10;
skeleton.health = 10;
skeleton.name = 'Skeleton';

var vampire = new Monster();
vampire.message = 'Thats no bat!';
vampire.value = 'V';
vampire.damage = 10;
vampire.maxHealth = 10;
vampire.health = 10;
vampire.specialLoot = 'Vampiric Gem';
vampire.specialDrop = 5;
vampire.name = 'Vampire';

var reaper = new Monster();
reaper.message = 'A Reaper';
reaper.value = '\'|R';
reaper.damage = 20;
reaper.maxHealth = 20;
reaper.health = 20;
reaper.specialLoot = 'ticket';
reaper.specialDrop = 100;
reaper.name = 'Reaper';

var monk = new Monster();
monk.message = 'An unarmed monk';
monk.value = 'M';
monk.damage = 1;
monk.maxHealth = 10;
monk.health = 10;
monk.name = 'Monk';

