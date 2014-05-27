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


//function for the player to move, moves player and monster forward if '_'
//otherwise battles the enemy
//stops when player reaches end and gives them their loot 
var i = 0;
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
	//why dont i have a master random num function yet jesus
	var random = Math.round(Math.random()*100);
	console.log(random + ' random num');

	if (random > 90) {
		addMoreMonsters(monster);
		$('#quest_text').html('A ' + monster.name + ' has appeared!');
	}
	else if (random == 1) {
		addMoreMonsters(specialMonster);
		$('#quest_text').html('A ' + specialMonster.name + ' has appeared! How unlucky..');

	}
	console.log(addMonstersValue);
	console.log(addMonstersValue % 5);

	if (i == level.length) {
		levelActive = false;
		ectoplasm = ectoplasm + gainedLoot;
		gainedLoot = 0;
		$('#error').html('Level complete, you may leave and keep anything you found');
	}
	else if (level[i] == monster.value) {
		battleTime(monster);
	}
}

function battleTime(monster) {
	$('#player_stats').html('Player Dmg: ' + player.damage);
	monster.monsterInfo();
	player.health = player.health - monster.damage;
	monster.health = monster.health - player.damage;
	i--;
	if (player.health <= 0) {
		levelActive = false;
		$('#error').html('You have been slain');
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

function leaveQuest() {
	$('#quest').hide();
	levelActive = false;
	resetSpellUsed = false;
	$('#main').show();
	i = 0;
	questToHide = '#' + questSelected + '_quest';
	console.log(questToHide);
	console.log(questSelected);
	$(questToHide).hide();
	bearCave = false;
}

function getQuestSelect(quest) {
	questSelected = $(quest).val();
	if (quest == '#church_quest') {
		loadLevelChurch(questSelected);
	}
	else if (quest == '#mountain_quest') {
		loadLevel(questSelected);
	}
	else if (quest == '#tower_quest') {
		loadTowerLevel(questSelected);
	}
	else if (quest == '#bearcave_quest') {
		loadBearLevel(questSelected);
	}
	questLoop();
}


function masterMove() {
	if (questSelected == 'depths') {
		moveInLevel(demon, demonWizard);
	}
	else if (questSelected == 'mines') {
		moveInLevel(goblinMiner, demon);
	}
	else if (questSelected == 'cavern') {
		moveInLevel(rock);
	}
	else if (questSelected == 'approach') {
		moveInLevel(demon, demonWizard);
	}
	else if (questSelected == 'base') {
		moveInLevel(bat, vampire);
	}
	else if (questSelected == 'upper') {
		moveInLevel(skeleton, vampire);
	}
	else if (questSelected == 'top') {
		moveInLevel(skeleton, reaper);
	}
	else if (questSelected == 'cave') {
		moveInLevel(bear, dropBear);
	}
	else if (questSelected == 'den') {
		moveInLevel(druid, elderDruid);
	}
	addMonstersValue++;
}
function dropBearFall() {
	var random = Math.round(Math.random()*100);
	var questText = $('#quest_text');
	if (random > 90) {
		level[i+4] = dropBear.value;
		$(questText).html('A Drop Bear falls from above!');
 	}	
}

var bearCave = false;

function loadBearLevel(questSelected) {
	var questText = $('#quest_text');
	levelActive = true;
	$('#quest').show();
	$('#cavern').hide();
	console.log(questSelected);
	if (questSelected == 'cave') {
		bearCave = true;
		$('#cave_quest').show();
		makeLevel(50, bear.value, 2, dropBear.value, 0);
		$(questText).html('Inside a bears cave');
	}
	else if (questSelected == 'den') {
		$(questText).html('The heart of the bears den!');
		makeLevel(36, druid.value, 2, elderDruid.value, 1);
		$('#den_quest').show();

	}
}



function loadTowerLevel(questSelected) {
	var questText = $('#quest_text');
	levelActive = true;
	$('#quest').show();
	$('#tower').hide();
	console.log(questSelected);
	if (questSelected == 'base') {
		console.log('hello');
		makeLevel(55, bat.value, 5, vampire.value, 1);
		$('#base_quest').show();
		questText.html('The base of the tower');
	}
	else if (questSelected == 'upper') {
		makeLevel(53, skeleton.value, 5, vampire.value, 1);
		$('#upper_quest').show();
		questText.html('The upper level of the tower, the top is near!');

	}
	else if (questSelected == 'top') {
		makeLevel(55, skeleton.value, 5, reaper.value, 1);
		$('#top_quest').show();
		questText.html('The sun is rising in the distance');
	}
	else if (questSelected == 'monk') {
		$('#monk_prequest').show();

	}
}

function loadLevel(questSelected) {
	var questText = $('#quest_text');
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
 	var questText = $('#quest_text');
 	levelActive = true;
 	$('#quest').show();
 	$('#churchInside').hide();
 	if (questSelected == 'approach') {
 		makeLevel(60, demon.value, 5, demonWizard.value, 3);
 		questText.html('There are demons everywhere');
 		$('#approach_quest').show();
 	}
 }
