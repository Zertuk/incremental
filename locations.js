function telescope(direction) {
	switch(direction) {
		case 'up': 
			$('#location_ascii').html(Skyscraper.ascii5);
			$('#location_text').html('The moon, sure seems far away');
			break;
		case 'left':
			$('#location_ascii').html(Skyscraper.ascii4);
			$('#location_text').html('The sea! Going for a swim would be nice right now');
			break;
		case 'right':
			$('#location_ascii').html(Skyscraper.ascii2);
			$('#location_text').html('Looks like there is a cabin in the woods over there, should probably check that out');
			$('#forest_map').show();
			break;
		case 'telescope':
			$('#location_ascii').html(Skyscraper.ascii3);
			$('#location_text').html('Wow who left this up here?');
			$('#telescope').show();
			$('#look_left').hide();
			break;
	}
}

function showLab() {
	$('#lab_map').show();
}

function spaceShipCheck() {
	if (inventoryObject.shipBase) {
		$('#phase1').hide();
		$('#phase2').show();
	}
	else if (inventoryObject.shipTop && inventoryObject.shipBase && inventoryObject.shipFuel) {
		$('#phase2').hide();
		$('#phase3').show();
		$('#rocket_launch').show();
	}
}

function flipperCheck() {
	if (inventoryObject.flippers) {
		$('#flipper_on').show();
		$('#location_text').html('Good to go!');
	}
	else {
		$('#error').html('Hey you dont have any flippers!');
	}
}

//camp stuff ahead
var campCount = 0;
var thief;
var confess;
var restPrice;


function searchCamp() {
	$('#steal_items').show();
	Camp.text = 'There is lots of swag here, but no people still';
	$('#location_text').html(Camp.text);
}


//if you confess he charges 3x per return visit
//not a very forgiving man apparently
function campConfess() {
	$('#man_text').html('You took my stuff? Guess <br> You are paying extra!');
	$('#confess_button').hide();
	confess = true;
}

//raises price based on outcome of scenario, then updates button
function raiseRestPrice() {
	if (confess) {
		restPrice = restPrice * 3;
	}
	else if (thief) {
		restPrice = restPrice * 2
	}
	else {
		restPrice = 0;
	}
	$('#rest').html('Rest(' + restPrice + ')');
}



function cabinRest() {
	player.health = player.maxHealth;
	updateHealthBar();
	$('#location_text').html('You are fully rested');
}

//rest if you have the money to give full hp, otherwise error
function campRest() {
	if (ectoplasm > restPrice) {
		ectoplasm = ectoplasm - restPrice;
		player.health = player.maxHealth;
		$('#location_text').html('You are fully rested');
		raiseRestPrice();
		updateHealthBar();
	}
	else {
		$('#error').html('You need more money to rest');
	}

}

//just displays the relevant text/buttons depending on how scenario played out
function campgroundAfterScenario() {
	Camp.text = 'The fire is roaring';
	if (confess) {
		$('#man_text').html('Hey jerk want to rest? <br> Special Price..');		
	}
	else if (thief) {
		$('#man_text').show().html('Sorry but someone stole my supplies, Im going <br> to have to charge for you to rest here');
	    $('#man').show();
	    $('#confess').show();
	}
	else {
		$('#man_text').html('Good to see you again, <br> feel free to rest');
	}
}

//stealing is bad okay
//adds the loot to the thieves inventory
//immediately leaves campground
function stealItems() {
	$('#error').html('You take the items and leave, gained 5000 ectoplasm, 100 blood');
	blood = blood + 100;
	ectoplasm = ectoplasm + 5000;
	$('#camp_scenario').hide();
	$('#camp_use').show();
	restPrice = 1;
	thief = true;
	locationSwitch(Map);
	campgroundAfterScenario();
}

//waiting... 
//onclick hides buttons for 5 seconds, waiting is hard
//you have to wait forever for him to arrive!
function campgroundWait() {
	$('#location_text').html('You are waiting...(be patient)');
	$('#camp_scenario').hide();
	window.setTimeout(function() {
		if (campCount == 0) {
		$('#location_text').html('You waited for thirty minutes and no one showed up');
		$('#camp_scenario').show();
	}
	else if (campCount == 1) {
		$('#location_text').html('Still no one around, you look around and see a lot of supplies');
		$('#camp_scenario').show();
	}
	else if (campCount == 2) {
		$('#location_text').html('The fire is starting to die down');
		$('#camp_scenario').show();
	}
	else {
		$('#location_text').html('You may now use the campers tent to rest, free of charge')
		$('#man').show();
		$('#man_text').show();
		$('#camp_use').show();
		restPrice = 0;
	}
	}, 5000);
	
	campCount++;
}

function labScenario(buttonValue) {
	console.log(buttonValue + ' the value');
	if (buttonValue == 'grab') {
		$('#location_text').html('Oh okay heres a fresh batch for you');
		inventoryObject.shipFuel = true;
	}
	else if (buttonValue == 'pass') {
		$('#location_text').html('But this is a dead end?..');
	}
	else {
		$('#location_text').html('You kill the Chemist in one hit, she was defenseless, you grab the rocket fuel off her corpse');
		inventoryObject.shipFuel = true;
		$('#location_ascii').html(Laboratory.ascii2);
	}
}




var reelCount = 0;
function fishReel() {
	if (caught) {
		$('#location_text').html('Keep reeling!');
		reelCount++;
		if (reelCount > 5) {
			fishCatch();
			reelCount = 0;
		}
	}
	else {
		$('#location_text').html('Nothing on the line');
	}
}

function lootBait() {
	if (inventoryObject.bait) {
		$('#error').html('You already found some bait, leave some for the other anglers!');
	}
	else {
		$('#location_text').html('Hmm found some bait in the bushes!');
		inventoryObject.bait = true;
	}
}
var fishCaught;
var caught = false;

function checkFish() {
	if (player.bigFish) {
		inventoryObject.flippers = true;
		Fish.text = 'Hope those flippers are helping you out, maybe check out the sea?';
		$('#location_text').html('Wow check out that fish! Here you go take these flippers you deserve them!');
	}
	else {
		$('#location_text').html('You are going to have to do better than that if you want these flippers..');
	}

}


function fishCatch() {
	$('#location_ascii').html(Fish.ascii3);
	if (inventoryObject.bait) {
		fishCaught = 20;
	}
	else {
		fishCaught = Math.round(Math.random()*19);
	}

	if (fishCaught < 18) {
		$('#location_text').html('You caught a ' + fishCaught + ' pound fish! Some better bait might make this easier.');
	}
	else {
		$('#location_text').html('Wow! a ' + fishCaught + ' pound fish! That will show the fisherman!');
		player.bigFish = true;
	}
	caught = false;
	$('#reel').hide();
}

function fishCast() {
	$('#reel').show();
	$('#location_ascii').html(Fish.ascii2);
	$('#location_text').html('Waiting...');
	fishCounter();
}

function fishCounter() {
	var random = Math.floor(Math.random()*100);
	console.log(random);
	if (random > 85) {
		fishEncounter();
		return;
	}
	else {
		setTimeout(function() {
			fishCounter();
		}, 500);
	}
}

function fishEncounter() {
	$('#location_ascii').html(Fish.ascii4);
	$('#location_text').html('Reel in quick!');
	caught = true;

}
//some church stuff
var demon = false;
var demonFirst = false;
function enterDemon() {
	if (demon == false) {
		$('#churchInside').hide();
		$('#demon').show();
		demon = true;

	}
	else {
		$('#main').show();
		$('#demon').hide();
		$('#churchInside').hide();
		mainShow = true;
		if (demonFirst == true) {
			$('#error').html('You have already visited the demon wizard, he doesnt have time for repeat visits!');
		}
		demonFirst = true;
	}	
}

function wizardEnchant() {
	var buttonValue = $(this).attr('value');
	switch (buttonValue) {
		case 'damage':

			break;

		case 'heal': 

			break;

		case 'loot':

			break;

		case 'armor':

			break;
	}
}

function wizardQuestion() {
	$('#location_text').html('Ooh arent you the sassy one, how about this, beat me in a battle of wits and I will give you a prize! I am not afraid of losing, Im a pretty good wizard');
}

function monkCheck() {
	if (sinChoosen) {
		console.log('sux');
	}
	else {
		console.log('ok');
	}
}

function lichEncounter(buttonValue) {
	console.log(buttonValue);
	switch (buttonValue) {
		case 'who':
			$('#location_text').html('I am the Lich.');
			$('#location_ascii').html(Lich.ascii3);
			console.log('who');
			break;

		case 'loot':

			break;

		case 'die':
			$('#location_text').html('Fool! You cant defeat me!');
			$('#location_ascii').html(Lich.ascii2);
			$('.lich_button').hide();
			$('#lich_attack').show();
			console.log('die');
			break;
	}
}
var dots;

function lichAttack() {
	$('#location_ascii').html('');
	$('#location_text').html('. . .');
	Main.special = '#future_special';
	Map.special = '#future_map';
	Wizard.text = 'Wow I havent seen you in awhile!';
	Main.text = 'what happened..?'
	$('#lich_attack').hide();
	$('#continue').show();
}




function usePool() {
	$('#poolChoice').css('display', 'none');
	$('#poolYes').css('display', 'inline');
}