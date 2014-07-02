var lootmessage = 'You have found: ';
//default monster object
function Monster() {
	this.maxHealth = 5,
	this.health = this.maxHealth,
	this.damage = 1,
	this.value = 'M',
	this.message = 'A mean monster',
	this.specialLoot = 'none',
	this.dropChance = -1,
	this.move = true,
	this.replace = '_',
	this.monsterMoney = 1,
	this.loot = function() {
		var lootDropped = 50;
		gainedLoot = Math.floor(lootDropped*this.monsterMoney*player.freedom + gainedLoot);
		$('#loot').html('You have gained ' + gainedLoot + ' gold');
	}
	this.monsterInfo = function() {
		$('#monster_message').html(this.message);
		$('#monster_stats').html(this.name + ':  ' +
								'Dmg: ' + this.damage +
								' HP: ' + this.health + '|' + this.maxHealth);
	};

	this.specialDrop = function(item, dropChance) {
		var randomNum = Math.round(Math.random()*100);
		var lootCheck = this.specialLoot;
		lootCheck = lootCheck.replace(/"/g, "");
		if (randomNum < this.dropChance && inventoryObject[lootCheck] == false) {
			 itemEquip(this.specialLoot);
			 lootmessage = 'You found a(n) ' + this.itemName;
			 $('#special_loot').html(lootmessage);
		}
	}
	//**not currently in use**
	this.monsterMove = function(levelInp) {
		for (var g = 0; g < levelInp; g++) {
			if (level[g] == this.value && level[g-1] == '_') {
				level[g-1] = 'G';
				level[g] = '_'
			}
		}
	}
	//**not currently in use**
	this.monsterHeal = function(val) {
		if (this.health < 10) {
			this.health = this.health + val;
			$('quest_text').html(this.name + ' has healed for ' + val + '!');
			setTimeout(this.monsterHeal, 10000);
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
goblinMiner.damage = 2;
goblinMiner.value = '\'\\G';
goblinMiner.specialLoot = 'miningPick';
goblinMiner.itemName = 'Mining Pick';
goblinMiner.dropChance = 10;
goblinMiner.name = 'Goblin Miner';

var demon = new Monster();
demon.message = 'A demon';
demon.value = 'D';
demon.damage = 5;
demon.name = 'Demon';
demon.monsterMoney = 1.1;

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
demonWizard.monsterMoney = 1.2;
demonWizard.specialLoot = 'staff';
demonWizard.dropChance = 10;
demonWizard.itemName = 'Staff';

var bat = new Monster();
bat.message = 'A spooky bat';
bat.value = '~B~';
bat.damage = 10;
bat.maxHealth = 10;
bat.health = 10;
bat.name = 'Bat';
bat.monsterMoney = 1.3;

var skeleton = new Monster();
skeleton.message = 'Too spooky';
skeleton.value = 'S';
skeleton.damage = 18;
skeleton.maxHealth = 10;
skeleton.health = 10;
skeleton.name = 'Skeleton';
skeleton.monsterMoney = 1.35;

var vampire = new Monster();
vampire.message = 'Thats no bat!';
vampire.value = 'Va';
vampire.damage = 20;
vampire.maxHealth = 20;
vampire.health = 20;
vampire.name = 'Vampire';
vampire.monsterMoney = 1.4;
vampire.specialLoot = 'lifeGem';
vampire.dropChance = 10;
vampire.itemName = 'Life Gem';

var reaper = new Monster();
reaper.message = 'A Reaper';
reaper.value = '\'|R';
reaper.damage = 40;
reaper.maxHealth = 20;
reaper.health = 20;
reaper.name = 'Reaper';
reaper.monsterMoney = 1.6;
reaper.specialLoot = 'hood';
reaper.dropChance = 25;
reaper.itemName = 'Reapers Hood';

var bear = new Monster();
bear.message = 'Just a bear?';
bear.value = 'B';
bear.damage = 25;
bear.maxHealth = 20;
bear.health = 20;
bear.name = 'Bear';
bear.monsterMoney = 1.5;

var dropBear = new Monster();
dropBear.message = 'It fell from above!'
dropBear.value = 'dB';
dropBear.damage = 15;
dropBear.maxHealth = 15;
dropBear.health = 15;
dropBear.name = 'Drop Bear';
dropBear.monsterMoney = 1.5;
dropBear.specialLoot = 'miniBear';
dropBear.dropChance = 15;
dropBear.itemName = 'Mini Drop Bear'

var druid = new Monster();
druid.message = 'Guess those werent just bears';
druid.value = 'dR';
druid.damage = 30;
druid.maxHealth = 40;
druid.health = 40;
druid.name = 'Druid';
druid.monsterMoney = 1.6;

var elderDruid = new Monster();
elderDruid.message = 'Guess those werent just.. old bears';
elderDruid.value = 'EdR';
elderDruid.damage = 45;
elderDruid.maxHealth = 60;
elderDruid.health = 60;
elderDruid.name = 'Elder Druid';
elderDruid.monsterMoney = 1.7;

var undeadKnight = new Monster();
undeadKnight.message = 'A knight! But undead?';
undeadKnight.value = 'UK';
undeadKnight.maxHealth = 50;
undeadKnight.damage = 50;
undeadKnight.health = 50;
undeadKnight.name = 'Undead Knight';
undeadKnight.monsterMoney = 2;
undeadKnight.specialLoot = 'knightsArmor';
undeadKnight.dropChance = 50;
undeadKnight.itemName = 'Knights Armor';

var warlock = new Monster();
warlock.message = 'A warlock under lich control!';
warlock.value = 'W';
warlock.maxHealth = 75;
warlock.health = 75;
warlock.damage = 50;
warlock.name = 'Warlock';
warlock.monsterMoney = 2;
warlock.specialLoot = 'skull';
warlock.dropChance = 10;
warlock.itemName = 'Skull';

var necromancer = new Monster();
necromancer.message = 'He can summon undead!';
necromancer.value = 'N';
necromancer.maxHealth = 50;
necromancer.health = 50;
necromancer.damage = 10;
necromancer.name = 'Necromancer';
necromancer.monsterMoney = 2.5;

var castleTroll = new Monster();
castleTroll.message ='A troll! But in a castle!';
castleTroll.value = 'T';
castleTroll.maxHealth = 100;
castleTroll.health = 100;
castleTroll.damage = 75;
castleTroll.name = 'Castle Troll';
castleTroll.monsterMoney = 3.5;
castleTroll.specialLoot = 'trollHair';
castleTroll.dropChance = 50;
castleTroll.itemName = 'Patch of Troll Hair';

var fish = new Monster();
fish.value = 'F';
fish.name = 'Fish';
fish.replace = ' ';
fish.damage = 50;
fish.maxHealth = 75;
fish.health = 75;
fish.message = 'Just a cute little fish :3';
fish.monsterMoney = 7;

var shark = new Monster();
shark.value = 'c\'^;={';
shark.name = 'Shark';
shark.damage = 100;
shark.health = 100;
shark.maxHealth = 100;
shark.replace = '      ';
shark.message = 'Ahhh a shark!';
shark.monsterMoney = 15;
shark.specialLoot = 'sharkTooth';
shark.dropChance = 75;
shark.itemName = 'Shark Tooth Sword!';

var undeadBear = new Monster();
undeadBear.name = 'Undead Bear';
undeadBear.value = 'UB';
undeadBear.damage = 100;
undeadBear.health = 200;
undeadBear.maxHealth = 200;
undeadBear.message = 'Under a Lich curse!';
undeadBear.replace = '__';
undeadBear.monsterMoney = 7.5;
undeadBear.specialLoot = 'skull';
undeadBear.itemName = 'Skull';
undeadBear.dropChance = 10;

var undeadWolf = new Monster();
undeadWolf.name = 'Undead Wolf';
undeadWolf.value = 'UW';
undeadWolf.damage = 75;
undeadWolf.health = 125;
undeadWolf.maxHealth = 125;
undeadWolf.message = 'Slighly less scary than an Undead Bear';
undeadWolf.monsterMoney = 7;
undeadWolf.specialLoot = 'knightsArmor';
undeadWolf.itemName = 'Knights Armor';
undeadWolf.dropChance = 25;

var undeadWizard = new Monster();
undeadWizard.name = 'Undead Wizard';
undeadWizard.value = '!UWi';
undeadWizard.replace = '____';
undeadWizard.damage = 100;
undeadWizard.maxHealth = 500;
undeadWizard.health = 500;
undeadWizard.message = 'This guy thinks he owns this cabin';
undeadWizard.monsterMoney = 20;
undeadWizard.specialLoot = 'skullStaff';
undeadWizard.dropChance = 75;
undeadWizard.itemName = 'Skull Staff';

var turtle = new Monster();
turtle.name = 'Mutant Turtle';
turtle.message = 'Looks to be in adolescence and adept at combat';
turtle.value = 'Tu';
turtle.replace = '__';
turtle.damage = 60;
turtle.health = 60;
turtle.maxHealth = 60;
turtle.monsterMoney = 8;
turtle.specialLoot = 'pizza';
turtle.dropChance = 10;
turtle.itemName = 'Pizza Slice';

var slime = new Monster();
slime.name = 'Sewer Slime';
slime.value = '|\'\' |'
slime.replace = '_____';
slime.damage = 75;
slime.health = 75;
slime.maxHealth = 75;
slime.message = 'Pretty nasty..';
slime.monsterMoney = 8;
slime.specialLoot = 'stickySlime';
slime.dropChance = 5;
slime.itemName = 'Sticky Slime Chunk';

var rat = new Monster();
rat.name = 'Giant Rat';
rat.value = 'GR';
rat.message = 'Seems oddly wise';
rat.replace = '__';
rat.damage = 150;
rat.health = 75;
rat.maxHealth = 75;
rat.monsterMoney = 8;
rat.specialLoot = 'robe';
rat.dropChance = 25;
rat.itemName = 'Used Robe';

var beast = new Monster();
beast.name = 'Beast';
beast.value = '`';
beast.message =  'How did this even get in here?';
beast.replace = '_';
beast.damage = 250;
beast.health = 1500;
beast.maxHealth = 1500;
beast.move = false;
beast.monsterMoney = 75;
beast.specialLoot = 'beastClaw';
beast.dropChance = 100;
beast.itemName = 'Beast Claw Sword!';

var scientist = new Monster();
scientist.name = 'Undead Scientist';
scientist.value = 'US';
scientist.message = 'Just trying to do research ;-;';
scientist.replace = '__';
scientist.damage = 200;
scientist.health = 150;
scientist.maxHealth = 150;
scientist.monsterMoney = 11;

var jailer = new Monster();
jailer.name = 'Jailer';
jailer.value = 'J';
jailer.message = 'A prison guard';
jailer.damage = 200;
jailer.health = 250;
jailer.maxHealth = 250;
jailer.monsterMoney = 12;
jailer.specialLoot = 'riotShield';
jailer.dropChance = 15;
jailer.itemName = 'Riot Shield';

var jailOgre = new Monster();
jailOgre.name = 'Jail Ogre';
jailOgre.value = 'JO';
jailOgre.message = 'He is huge!';
jailOgre.damage = 250;
jailOgre.health = 250;
jailOgre.maxHealth = 250;
jailOgre.monsterMoney = 13;
jailOgre.specialLoot = 'jailOgreHide';
jailOgre.itemName = 'Ogre Hide Armor';
jailOgre.dropChance = 100;

var rocketScientist = new Monster();
rocketScientist.name = 'Rocket Scientist';
rocketScientist.value = 'RS';
rocketScientist.message = 'Wields a spiral drill';
rocketScientist.damage = 250;
rocketScientist.maxHealth = 250;
rocketScientist.health = 250;
rocketScientist.monsterMoney = 12.5;
rocketScientist.dropChance = 100;
rocketScientist.specialLoot = 'spaceSword';
rocketScientist.itemName = 'Spiral Drill Sword!!';

var astronaut = new Monster();
astronaut.name = 'Astronaut';
astronaut.value = 'A';
astronaut.message = 'Wearing a fancy space suit';
astronaut.damage = 300;
astronaut.maxHealth = 300;
astronaut.health = 300;
astronaut.monsterMoney = 15;
astronaut.specialLoot = 'astronautSuit';
astronaut.dropChance = 30;
astronaut.itemName = 'Astronaut Suit!!';

var lich = new Monster();
lich.name = 'Lich';
lich.value = 'o';
lich.message = 'The Lich!';
lich.damage = 400;
lich.maxHealth = 10000;
lich.health = 10000;
lich.move = false;
lich.monsterMoney = 10000;










