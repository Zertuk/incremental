var gainedLoot = 0;
var questSelected = null;
var level = new Array;
var currentLevelInfo;
var i = 0;
var bearCave = false;
var berserkMult = 1;
var shieldMult = 1;
//makes the level, takes in the level length to determine length and the monster
//to determine what monster to fill with, randomly spawns monsters throughout the level array
//also takes in the number of monsters to spawn
function makeLevel(levelInp, monster, monsterCount, specialMonster, specialCount) {
	for (var i = 0; i < levelInp; i++) {
		level[i] = '_';
		if (monster == 'F') {
			level[i] = ' ';
		}
		if (monster == '`') {
			level[40] = monster;
		}
		if (monster == 'o') {
			level[44] = monster;
		}
	}
	for (var j = 0; j < monsterCount; j++) {
		var random = Math.floor(Math.random()*levelInp);
		level[random] = monster;
	}
	for (var j = 0; j < specialCount; j++) {
			var randomSpecial = Math.floor(Math.random()*levelInp);
			level[randomSpecial] = specialMonster;
	}
};

function addMoney() {
	player.money = player.money + gainedLoot;
}

//function for the player to move, moves player and monster forward if '_'
//otherwise battles the enemy
//stops when player reaches end and gives them their loot 
function moveInLevel(monstertest) {
	if (monstertest.monster.name == 'Lich') {
		lichBattle();
	}
	if (monstertest.monster.name == 'Beast') {
		beastCleave();
	}
	var player = 'Y';
	if (level[i] == '_'); {
		level[i] = 'Y';
		level[i - 1] = '_';
		if (monstertest.name == 'underwater') {
			level[i - 1] = ' ';
		}
		i++;
		//moves monster if appropriate
		if (monstertest.monster.move) {
			monsterMove(monstertest.monster.value);
		}
		if (monstertest.specialMonster.move) {
			monsterMove(monstertest.specialMonster.value);
		}
	}
	//why dont i have a master random num function yet
	var random = Math.round(Math.random()*100);
	//these two add more monsters if the random num fits the requirments
	if (random > 90 && monstertest.more) {
		addMoreMonsters(monstertest.monster);
		$('#quest_text').html('A ' + monstertest.monster.name + ' has appeared!');
	}
	else if (random == 1 && monstertest.more) {
		addMoreMonsters(monstertest.specialMonster);
		$('#quest_text').html('A ' + monstertest.specialMonster.name + ' has appeared! How unlucky..');

	}
	//level success, adds loot
	if (i == level.length && levelActive) {
		if (monstertest.text == hanger.text) {
			$('#error').html('You find the space ship top and bottom pieces');

		}
		addMoney();
		levelActive = false;
		monstertest.levelFinished = true;
		$('#' + monstertest.levelUnlock).show();
		monstertest.unlockSave();
		monstertest.levelFinished = true;
		var unlock = monstertest.levelUnlock;
		monstertest.finish = true;
		$('#error').html('Level complete, you may leave and keep anything you found');
	}
	//calls battle function if next space is monster
	else if (level[i] == monstertest.monster.value) {
		battleTime(monstertest.monster);
	}
	else if (level[i] == monstertest.specialMonster.value) {
		battleTime(monstertest.specialMonster);
	}
	$('.level').html(level);
}


var beastCount = 0;
function beastCleave() {
	beastCount++;
	if (beastCount > 45) {
		$('#error').html('The beast is powering a powerful attack! Get ready!');
		$('#level_text').html('The beast is powering a powerful attack! Get ready!');
	}
	if (beastCount > 50) {
		$('#error').html('');
		$('#location_text').html('');
		beastCount = 0;
		if (level[danger.levelLength - 1] == 'Y') {
			player.health = player.health - 10000;
		}
	}
}
var lichCount = 0;
function lichBattle() {
	lichCount++;
	if (lichCount > 56) {
		lichCount = 0;
		$('#error').html('');
		$('#level_text').html('');
		lich.damage = 400;
	}
	else if (lichCount > 46) {
		$('#error').html('The Lich must recover his power, his damage is weakened');
		$('#level_text').html('The lich must recover his power, his damage is weakened');
	}
	else if (lichCount == 46) {
		$('#error').html('The Lich must recover his power, his damage is weakened');
		$('#level_text').html('The lich must recover his power, his damage is weakened');
		if (!shieldUsed) {
			player.health = player.health - 50000;
		}
		lich.damage = 10;
	}
	else if (lichCount > 42) {
		$('#error').html('The Lich is using a powerful wide range attack! Get ready!');
		$('#level_text').html('The Lich is using a powerful wide range attack! Get ready!');
	}
	else if (lichCount > 24)  {
		$('#error').html('');
		$('#level_text').html('');
	}
	else if (lichCount == 24) {
		$('#error').html('');
		$('#level_text').html('');
		if (level[finish.levelLength - 2] == 'Y') {
			player.health = player.health - 50000;
		}
	}
	else if (lichCount > 20) {
		$('#error').html('The Lich is powering a powerful close ranged attack! Get ready!');
		$('#level_text').html('The Lich is powering a powerful close ranged attack! Get ready!');
	}	
}

function roundDamage(monster) {
	armorEnchantRed();
	if ((monster.damage - player.reduction - armorRed) < 0) {
		player.health = player.health + player.swordHP;
	}
	else {
		player.health = player.health - (monster.damage - player.reduction - armorRed) + player.swordHP;
	}
}

//takes in the monster the player is next to as parameter
//then uses the info from this object to battle, taking/giving
//damage until someone dies, dispenses loot if appropriate.
function battleTime(monster) {
	armorEnchantRed();
	swordEnchantDmg();
	$('#player_stats').html('Player Dmg: ' + Math.round(player.power * (player.damage + enchantDmg)) + ' | Armor: ' + Math.round(player.reduction + armorRed));
	monster.monsterInfo();
	roundDamage(monster);

	monster.health = monster.health - Math.round((player.damage + enchantDmg)*player.power);
	i--;
	if (player.health <= 0) {
		levelActive = false;
		monster.health = monster.maxHealth;
		$('#error').html('The ' + monster.name + ' killed you rip ;-;');
		$('#error2').html('The ' + monster.name + ' killed you rip ;-;');
		if (player.hardcore) {
			alert('You have died on hardcore mode! Game will now reset ;-;  To turn off hardcore, go to \'About\' and click \'Reset Game\'');
			resetGameHC();
			player.hardcore = true;
		}

	}
	else if (monster.health <= 0) {

		level[i - 1] = monster.replace;
		level[i] = 'Y';
		i++;
		monster.monsterInfo();
		monster.loot();
		monster.specialDrop(monster.specialLoot, monster.dropChance);
		monster.health = monster.maxHealth;
	}
	monster.monsterInfo();	
}


//leave quest, resets all quest related variables & shows/hide correct areas
function leaveQuest() {
	if (levelActive) {
		$('#error').html('You abandon your quest, leaving anything found behind')
	}
	if (berserkUsed) {
		player.power = oldPower;
		berserkUsed = false;
		
	}
	if (shieldUsed) {
		player.reduction = oldReduction;
		shieldUsed = false;
	}
	$('#quest').hide();
	$('#error2').html('');
	levelActive = false;
	resetSpellUsed = false;
	$('#location_div').show();
	level = [0];
	i = 0;
	gainedLoot = 0;
	bearCave = false;
	beastCount = 0;
	lichCount = 0;
	$('#monster_stats').html('---');
	$('#monster_message').html('---');
	$('#loot').html('---');
	$('#special_loot').html('---');
}

//gets quest select from the value of the option selected
//then passes that into the levelObject which uses that value
//as a key which is associated with the levelInfo object
//which contains all of the relevant info to make a level
//also calls the main questLoop using that object
function getQuestSelect(quest) {
	$('#error').html('');
	$('#error2').html('');
	questSelected = $(quest).val();
	currentLevelInfo = levelObject[questSelected];
	loadLevel(currentLevelInfo)
	questLoop(currentLevelInfo);
}

//random chance to spawn a dropBear monster a few steps in front of
//the players position, only runs while bearCave is true.
//if it is true then it is run through the questLoop
//made false in leave quest after level
function dropBearFall() {
	var random = Math.round(Math.random()*100);
	var questText = $('#quest_text');
	if (random > 90) {
		level[i+4] = dropBear.value;
		$(questText).html('A Drop Bear falls from above!');
 	}
}

//function to load all levels, takes in levelInfo object as parameter with
//everything needed to form the level & show/hide the correct areas
function loadLevel(levelInfo) {
 	levelActive = true;
 	var questName = levelInfo.name
 	var questAscii = '#' + questName + '_quest';
 	$('#quest_ascii').html(levelInfo.ascii);
 	$('#quest').show();
 	$('#location_div').hide();
 	$('#quest_text').html(levelInfo.text);
 	if (levelInfo.name == 'cave') {
		bearCave = true;
	}
 	makeLevel(levelInfo.levelLength, levelInfo.monster.value, levelInfo.monsterNum, levelInfo.specialMonster.value, levelInfo.specialMonsterNum);
}
