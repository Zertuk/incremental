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
		$('#monster_message').html(this.message);
		$('#monster_stats').html(this.name + ':  ' +
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
	this.monsterHeal = function(val) {
		if (this.health < 10) {
			this.health = this.health + val;
			console.log('success');
			$('quest_text').html(this.name + ' has healed for ' + val + '!');
			setTimeout(this.monsterHeal, 10000);
		}
		console.log('fail');
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
		if (level[g] == value && level[g-1] == ' ') {
			level[g - 1] = value;
			level[g] = ' ';
		}
	}
}

function addMoreMonsters(monster) {
	level[level.length - 1] = monster.value;
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
demonWizard.value = 'DW`!';
demonWizard.damage = 10;
demonWizard.maxHealth = 10;
demonWizard.health = 10;
demonWizard.name = 'Demon Wizard';
demonWizard.replace = '____';

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
vampire.value = 'Va';
vampire.damage = 10;
vampire.maxHealth = 10;
vampire.health = 10;
vampire.name = 'Vampire';

var reaper = new Monster();
reaper.message = 'A Reaper';
reaper.value = '\'|R';
reaper.damage = 20;
reaper.maxHealth = 20;
reaper.health = 20;
reaper.name = 'Reaper';

var monk = new Monster();
monk.message = 'An unarmed monk';
monk.value = 'M';
monk.damage = 1;
monk.maxHealth = 10;
monk.health = 10;
monk.name = 'Monk';

var bear = new Monster();
bear.message = 'Just a bear?';
bear.value = 'B';
bear.damage = 10;
bear.maxHealth = 20;
bear.health = 20;
bear.name = 'Bear';

var dropBear = new Monster();
dropBear.message = 'It fell from above!'
dropBear.value = 'dB';
dropBear.damage = 15;
dropBear.maxHealth = 15;
dropBear.health = 15;
dropBear.name = 'Drop Bear';

var druid = new Monster();
druid.message = 'Guess those werent just bears';
druid.value = 'dR';
druid.damage = 20;
druid.maxHealth = 30;
druid.health = 30;
druid.name = 'Druid';

var elderDruid = new Monster();
elderDruid.message = 'Guess those werent just.. old bears';
elderDruid.value = 'EdR';
elderDruid.damage = 35;
elderDruid.maxHealth = 50;
elderDruid.health = 50;
elderDruid.name = 'Elder Druid';

var undeadKnight = new Monster();
undeadKnight.message = 'A knight! But undead?';
undeadKnight.value = 'UK';
undeadKnight.replace = '__';
undeadKnight.maxHealth = 50;
undeadKnight.damage = 40;
undeadKnight.health = 50;
undeadKnight.name = 'Undead Knight';

var warlock = new Monster();
warlock.message = 'A warlock under lich control!';
warlock.value = 'W';
warlock.maxHealth = 75;
warlock.health = 75;
warlock.damage = 50;
warlock.name = 'Warlock';

var necromancer = new Monster();
necromancer.message = 'He can summon undead!';
necromancer.value = 'N';
necromancer.maxHealth = 50;
necromancer.health = 50;
necromancer.damage = 10;
necromancer.name = 'Necromancer';

var castleTroll = new Monster();
castleTroll.message ='A troll! But in a castle!';
castleTroll.value = 'T';
castleTroll.maxHealth = 100;
castleTroll.health = 100;
castleTroll.damage = 50;
castleTroll.name = 'Castle Troll';

var fish = new Monster();
fish.value = 'F';
fish.name = 'Fish';
fish.replace = ' ';
fish.damage = 35;
fish.maxHealth = 50;
fish.health = 50;
fish.message = 'Just a cute little fish :3';

var shark = new Monster();
shark.value = 'c\'^;={';
shark.name = 'Shark';
shark.damage = 50;
shark.health = 100;
shark.maxHealth = 100;
shark.replace = '      ';
shark.message = 'Ahhh a shark!';

var undeadBear = new Monster();
undeadBear.name = 'Undead Bear';
undeadBear.value = 'UB';
undeadBear.damage = 75;
undeadBear.health = 200;
undeadBear.maxHealth = 200;
undeadBear.message = 'Under a Lich curse!';
undeadBear.replace = '__';

var undeadWolf = new Monster();
undeadWolf.name = 'Undead Wolf';
undeadWolf.value = 'UW';
undeadWolf.damage = 50;
undeadWolf.health = 100;
undeadWolf.maxHealth = 100;
undeadWolf.replace = '_____';
undeadWolf.message = 'Slighly less scary than an Undead Bear';

var undeadWizard = new Monster();
undeadWizard.name = 'Undead Wizard';
undeadWizard.value = '!UWi';
undeadWizard.replace = '____';
undeadWizard.damage = 100;
undeadWizard.maxHealth = 500;
undeadWizard.health = 500;
undeadWizard.message = 'This guy thinks he owns this cabin';

var turtle = new Monster();
turtle.name = 'Mutant Turtle';
turtle.message = 'Looks to be in adolescence and adept at combat';
turtle.value = 'Tu';
turtle.replace = '__';
turtle.damage = 50;
turtle.health = 75;
turtle.maxHealth = 75;

var slime = new Monster();
slime.name = 'Sewer Slime';
slime.value = '|\'\' |'
slime.replace = '_____';
slime.damage = 60;
slime.health = 75;
slime.maxHealth = 75;
slime.message = 'Pretty nasty..';

var rat = new Monster();
rat.name = 'Giant Rat';
rat.value = 'GR';
rat.message = 'Seems oddly wise';
rat.replace = '__';
rat.damage = 125;
rat.health = 50;
rat.maxHealth = 50;

var beast = new Monster();
beast.name = 'Beast';
beast.value = '`';
beast.message =  'How did this even get in here?';
beast.replace = '_';
beast.damage = 250;
beast.health = 500;
beast.maxHealth = 500;
beast.move = false;

var scientist = new Monster();
scientist.name = 'Undead Scientist';
scientist.value = 'US';
scientist.message = 'f';
scientist.replace = '__';
scientist.damage = 100;
scientist.health = 100;
scientist.maxHealth = 100;

var jailer = new Monster();
jailer.name = 'Jailer';
jailer.value = 'J';
jailer.message = 'A prison guard';
jailer.damage = 125;
jailer.health = 125;
jailer.maxHealth = 125;

var jailOgre = new Monster();
jailOgre.name = 'Jail Ogre';
jailOgre.value = 'JO';
jailOgre.message = 'He is huge!';
jailOgre.damage = 150;
jailOgre.health = 150;
jailOgre.maxHealth = 150;

var rocketScientist = new Monster();
rocketScientist.name = 'Rocket Scientist';
rocketScientist.value = 'RS';
rocketScientist.message = 'f';
rocketScientist.damage = 150;
rocketScientist.maxHealth = 150;
rocketScientist.health = 150;

var astronaut = new Monster();
astronaut.name = 'Astronaut';
astronaut.value = 'A';
astronaut.message = 'A Lich astronaut, he wont give up easy';
astronaut.damage = 200;
astronaut.maxHealth = 200;
astronaut.health = 200;


var lich = new Monster();
lich.name = 'Lich';
lich.value = 'o';
lich.message = 'The Lich!';
lich.damage = 500;
lich.maxHealth = 10000;
lich.health = 10000;
lich.move = false;










