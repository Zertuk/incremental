//telescope interactivity
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
			stuffToShow.forest_map = true;
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

function lightFire() {
	$('#cabin_rest').show();
	$('#location_text').html('The fire is roaring.  You may now rest here freely.');
}

function magicDoor() {
	if (inventoryObject.rune == true) {
		$('#rune_true').css('display', 'inline');
		$('#rune_false').css('display', 'none');
		$('#magic_door').css('color', '#4FE8D6');
	}
	else {
		$('#rune_false').css('display', 'inline-block');
		$('#rune_true').css('display', 'none');
	}
}

function showLab() {
	$('#lab_map').show();
	stuffToShow.lab_map = true;
}

function spaceShipCheck() {
	if (player.parts) {
		$('#phase3').show();
		$('#rocket_launch').show();
		stuffToShow.phase3 = true;
		stuffToShow.rocket_launch = true;
	}
}

//cant visit demon more than once
function noDemon() {
	player.demonVisit = true;
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

function reflectingPoolChoice(poolChoice) {
	if (poolChoice ==  'health') {
		$('#error').html('Your sword now grants life on hit');
		player.swordHP = player.swordHP + 0.25;
	}
	else if (poolChoice == 'power') {
		player.power = player.power + 0.25;
		$('#error').html('Your weapons now deal extra damage');
	}
	else {
		player.freedom = player.freedom + 1;
		$('#error').html('You now gain extra money from monsters');
	}
	player.fountain = true;
	$('.pool_button').hide();
}



//camp stuff ahead
var campCount = 0;


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
	player.confess = true;
}

//raises price based on outcome of scenario, then updates button
function raiseRestPrice() {
	if (player.confess) {
		player.restPrice = player.restPrice * 3;
	}
	else if (player.thief) {
		player.restPrice = player.restPrice * 2
	}
	else {
		player.restPrice = 0;
	}
	$('#rest').html('Rest(' + player.restPrice + ')');
	$('#rest_perm').html('Rest(' + player.restPrice + ')');
}



function cabinRest() {
	player.health = player.maxHealth;
	updateHealthBar();
	$('#location_text').html('You are fully rested');
}

//rest if you have the money to give full hp, otherwise error
function campRest() {
	campgroundAfterScenario();
	if (levelActive) {
		$('#error').html('hey you cant rest in battle!');
		return;
	}
	if (player.money > player.restPrice) {
		player.money = player.money - player.restPrice;
		player.health = player.maxHealth - 1;
		$('#error').html('You are fully rested');
		raiseRestPrice();
	}
	else {
		$('#error').html('You need more money to rest');
	}
}

//just displays the relevant text/buttons depending on how scenario played out
function campgroundAfterScenario() {
	Camp.text = 'The fire is roaring';
	$('#rest_perm').show();
	$('#rest_perm').html('Rest (' + player.restPrice + ')');
	$('#camp_scenario').hide();
	$('#camp_use').show();
	stuffToShow.rest_perm = true;
	if (player.confess) {
		$('#man_text').html('Hey jerk want to rest? <br> Special Price..');		
	}
	else if (player.thief) {
		$('#man_text').show().html('Sorry but someone stole my supplies, Im going <br> to have to charge for you to rest here');
	    $('#confess').show();
	}
	else {
		$('#confess').hide();
		$('#man_text').html('Good to see you again, <br> feel free to rest');
	}
	$('#man_text').show();
	$('#man').show();
}

//stealing is bad okay
//adds the loot to the thieves inventory
//immediately leaves campground
function stealItems() {
	player.gunk = player.gunk + 500;
	player.money = player.money + 5000;
	$('#camp_scenario').hide();
	$('#camp_use').show();
	player.restPrice = 1;
	player.thief = true;
	locationSwitch(Map);
	$('#error').html('You take the items and leave, gained 5000 gold and 500 gunk');
	player.camp = true;
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
		player.camp = true;
		player.restPrice = 0;
	}
	}, 5000);
	
	campCount++;
}

function labScenario(buttonValue) {
	console.log(buttonValue + ' the value');
	if (buttonValue == 'grab') {
		$('#location_text').html('Oh okay heres a fresh batch for you');
		inventoryObject.shipFuel = true;
		player.parts = true;
		('#laboratory').hide();
	}
	else if (buttonValue == 'pass') {
		$('#location_text').html('But this is a dead end?..');
	}
	else {
		$('#location_text').html('You kill the Chemist in one hit, she was defenseless, you grab the rocket fuel off her corpse');
		inventoryObject.shipFuel = true;
		player.parts = true;
		$('#location_ascii').html(Laboratory.ascii2);
		$('#laboratory').hide();
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
		$('#location_text').html('You are going to have to do better than that if you want these flippers. Heres a hint: These fish love the worms that live around the pond');
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
		$('#location_text').html('You caught a ' + fishCaught + ' pound fish! Some better bait might make this easier. I bet the fisherman knows where to look');
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

function wizardEnchant(buttonValue) {
	switch (buttonValue) {
		case 'sword':
			if (enoughMoney(player.swordEnchantCost)) {
				player.swordEnchantVal = player.swordEnchantVal + 0.1;
				player.swordEnchantCost = player.swordEnchantCost * 3;
				$('#enchantDmg').html('Enchant Sword (' + player.swordEnchantCost + ')');
			break;
			}
			break;

		case 'armor': 
			if (enoughMoney(player.armorEnchantCost)) {
				player.armorEnchantVal = player.armorEnchantVal + 0.1;
				player.armorEnchantCost = player.armorEnchantCost * 3;
				$('#enchantRed').html('Enchant Armor (' + player.armorEnchantCost + ')');
			break;
			}
			break;
	}
}

function updateWizardButtons() {
	$('#enchantDmg').html('Enchant Sword (' + player.swordEnchantCost + ')');
	$('#enchantRed').html('Enchant Armor (' + player.armorEnchantCost + ')');
}

function enoughMoney(cost) {
	if (cost > player.money) {
		$('#error').html('Not enough money!');
		return false;
	}
	else {
		player.money = player.money - cost;
		return true;
	}
}

function wizardExplain(buttonValue) {
	console.log(buttonValue + 'wizzz')
	if (buttonValue == 'explain') {
		$('#location_text').html('The Lich killed you.  Or not.  You are here now.. You must have some kind of Lich Curse on you.');
		$('#wizard_time').show();
		$('#wizard_explain').hide();
	}
	else if (buttonValue == 'time') {
		$('#location_text').html('I dont measure time like you I am a wizard.  It has been 0.63 wizard years, a lot sure has changed in that little time! Little for me at least.');
		$('#wizard_help').show();
		$('#wizard_time').hide();
	}
	else if (buttonValue == 'help') {
		$('#wizard_help').hide()
		$('#wizard_explain').show();
		$('#location_text').html('Dont ask me Im just a wizard');

	}

}

function wizardQuestion() {
	$('#location_text').html('Ooh arent you the sassy one, how about this, beat me in a battle of wits and I will give you a prize! I am not afraid of losing, Im a pretty good wizard');
}

function monkCheck() {
	if (player.monkVisit) {
		$('#location_text').html('The monk is no longer here');
		$('#greet_monk').hide();
		$('#location_ascii').html('');
	}
	else if (player.sinChoosen) {
		$('#location_text').html('Thank you for rescuing me, unfortunately I cant teach someone afflicted with the demons mark and have nothing else to offer');
		$('#kill_monk').show();	
	}
	else {
		$('#location_text').html('Thank you for rescuing me, I can teach you the practice of meditation');
		$('#learn_monk').show();
	}
	stuffToShow.cave = true;
	$('#cave').show();
}

function monkAction(buttonValue) {
	if (buttonValue == 'kill') {
		$('#location_ascii').html(Monk.ascii2);
		$('#location_text').html('. . .');
		$('#error').html('There was nothing on his corpse');
		$('#monk_button').hide();
		$('#kill_monk').hide();
	}
	else {
		$('#location_text').html('');
		$('#error').html('You gain +10% armor & sword enchants');
		player.swordEnchantVal = player.swordEnchantVal + 0.1;
		player.armorEnchantVal = player.armorEnchantVal + 0.1;
		$('#learn_monk').hide();
		$('#monk_button').hide();
	}
	player.monkVisit = true;
}

function lichEncounter(buttonValue) {
	switch (buttonValue) {
		case 'who':
			$('#location_text').html('I am the Lich.');
			$('#location_ascii').html(Lich.ascii3);
			break;
		case 'die':
			$('#location_text').html('Fool! You cant defeat me!');
			$('#location_ascii').html(Lich.ascii2);
			$('.lich_button').hide();
			$('#lich_attack').show();
			break;
	}
}

function lichAttack() {
	$('#location_ascii').html('');
	$('#location_text').html('. . .');
	Main.special = '#future_special';
	Map.special = '#future_map';
	Store.ascii = Store.ascii3;
	$('#post_lich').show();
	Wizard.text = 'Wow I havent seen you in awhile!';
	Main.text = 'what happened..?'
	$('#lich_attack').hide();
	$('#continue').show();
	player.postLich = true;
}
