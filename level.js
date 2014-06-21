var gainedLoot = 0;
var questSelected = null;
var level = new Array;
var currentLevelInfo;
var i = 0;
var bearCave = false;


function testing() {
	$('#quest_ascii').css('color', 'red');
	$('.level').css('color', 'purple');
}
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
			level[45] = monster;
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


//function for the player to move, moves player and monster forward if '_'
//otherwise battles the enemy
//stops when player reaches end and gives them their loot 
function moveInLevel(monstertest) {
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
		levelActive = false;
		monstertest.levelFinished = true;
		$('#' + monstertest.levelUnlock).show();
		ectoplasm = ectoplasm + gainedLoot;
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

function roundDamage(monster) {
	if ((monster.damage - player.reduction) < 0) {
		player.health = player.health;
	}
	else {
		player.health = player.health - (monster.damage - player.reduction);
	}
}


//takes in the monster the player is next to as parameter
//then uses the info from this object to battle, taking/giving
//damage until someone dies, dispenses loot if appropriate.
function battleTime(monster) {
	$('#player_stats').html('Player Dmg: ' + player.damage);
	monster.monsterInfo();
	roundDamage(monster);
	monster.health = monster.health - player.damage*player.power;
	i--;
	if (player.health <= 0) {
		levelActive = false;
		$('#error').html('The ' + monster.name + ' killed you rip ;-;');
	}
	else if (monster.health <= 0) {

		level[i - 1] = monster.replace;
		level[i] = 'Y';
		
		monsterDeathSpace = '';
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
	$('#quest').hide();
	levelActive = false;
	resetSpellUsed = false;
	$('#location_div').show();
	level = [0];
	i = 0;
	gainedLoot = 0;
	bearCave = false;
}

//gets quest select from the value of the option selected
//then passes that into the levelObject which uses that value
//as a key which is associated with the levelInfo object
//which contains all of the relevant info to make a level
//also calls the main questLoop using that object
function getQuestSelect(quest) {
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
