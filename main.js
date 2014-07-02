//global varble init
var inverse = false;
var count = 0;
var batteryOn = false;
var levelActive = false;
var flesh = 0;
var fists, woodSword, ironSword;

//resets all objects back to original state
function resetGame() {
	var message = 'This will reset your entire playthrough, this is not reversible, are you sure?';
	if (confirm(message)) {
		stuffToShow = {
			mapButton: false,
			post_lich: false,
			wood_sword: true,
			iron_sword: false,
			diamond_sword: false,
			iron_armor: true,
			diamond_armor: false,
			mapListing: true,
			pool_use: true,
			den: false,
			wizard_button: false,
			camp_scenario: true,
			camp_use: false,
			man: false,
			figure: false,
			mine: false,
			depths: false,
			tower_map: false,
			upper: false,
			top: false,
			monk_button: false,
			den: false,
			wizard_button: false,
			armory: false,
			throne: false,
			lich: false,
			cabin: false,
			cabin_map: false,
			sewer: false,
			prison: false,
			tunnel: false,
			danger: false,
			laboratory: false,
			hanger: false,
			rest_perm: false,
			cave: false,
			castle: false,
			wizard_home: false,
			forest_map: false,
			lab_map: false,
			phase3: false,
			rocket_launch: false,
			miningPick_item: false,
			staff_item: false,
			lifeGem_item: false,
			hood_item: false,
			miniBear_item: false,
			skull_item: false,
			trollHair_item: false,
			skullStaff_item: false,
			stickySlime_item: false,
			pizza_item: false,
			robe_item: false,
			riotShield_item: false,
			tome_item: false,
			end_button: false,
			badEnd_button: false
		}

		inventoryObject = {
			weapon: swordObject.fists,
			armor: armorObject.noArmor,
			ironArmor: false,
			diamondArmor: false,
			knightsArmor: false,
			jailOgreHide: false,
			astronautSuit: false,
			healthPotion: 10,
			manaPotion: 0,
			seed: 0,
			map: false,
			battery: 0,
			rune: true,
			sin: false,
			ticket: false,
			bait: false,
			flippers: false,
			shipBase: true,
			shipTop: false,
			shipFuel: false,
			miningPick: false,
			staff: false,
			lifeGem: false,
			hood: false,
			miniBear: false,
			skull: false,
			trollHair: false,
			skullStaff: false,
			stickySlime: false,
			pizza: false,
			robe: false,
			riotShield: false,
			spiralSword: false,
			diamondSword: false,
			ironSword: false,
			woodSword: false,
			beastClaw: false,
			sharkTooth: false,
			tome: false
		}

		player = {
			damage: swordObject.fists.damage,
			reduction: inventoryObject.armor.reduction,
			armorEnchant: this.reduction * this.armorEnchantVal,
			swordEnchant: this.damage * this.swordEnchantVal,
			camp: false,
			power: 1,
			gears: 1,
			batteries: 0,
			money: 0,
			gunk: 0,
			swordEnchantVal: 0,
			armorEnchantVal: 0,
			swordEnchantCost: 1000,
			armorEnchantCost: 1000,
			monkVisit: false,
			postLich: false,
			restPrice: 0,
			thief: false,
			confess: false,
			demonVisit: false,
			swordHP: 0,
			health: 100.00,
			maxHealth: 100,
			bigFish: false,
			regenVal: 0.25,
			freedom: 1,
			num: 5,
			sin_Choosen: false,
			potionCost: 25,
			manaCost: 25,
			gearCost: 200,
			runeCost: 5,
			batteryCost: 2000,
			teleport: false,
			reset: false,
			freeze: false,
			berserk: false,
			shield: false,
			figure: false,
			extraMoneyGen: 1,
			maximum: 100000,
			parts: false
		}
		saveGame();
		$('#error').html('Please refresh the window for the entire reset to work');
	}
}
//load game using local storage, runs necessary functions so that everything is the same it was before quitting
function loadGame() {
	if (!localStorage['player_save']) return;
	var player_data = JSON.parse(atob(localStorage['player_save']));
	player = player_data;
	var inventory_data = JSON.parse(atob(localStorage['inventory_save']));
	inventoryObject = inventory_data;
	var show_data = JSON.parse(atob(localStorage['show_save']));
	stuffToShow = show_data;
	showStuff();
	updateWizardButtons();
	$('#blood').html('You have ' + player.gunk + ' gunk');
	$('#hp').html(player.health + '/' + player.maxHealth);
	if (player.camp) {
		campgroundAfterScenario();
	}
	if (player.postLich) {
		Store.ascii = Store.ascii3;
		Main.special = '#future_special';
		Map.special = '#future_map';
		$('#post_lich').show();
		Wizard.text = 'Wow I havent seen you in awhile!';
		Main.text = 'what happened..?'
	}
}

//save game to local storage
function saveGame() {
	localStorage['player_save'] = btoa(JSON.stringify(player));
	localStorage['inventory_save'] = btoa(JSON.stringify(inventoryObject));
	localStorage['show_save'] = btoa(JSON.stringify(stuffToShow));
}


function updateHealthBar() {
	$('#hp').html(player.health.toFixed(2) + '/' + player.maxHealth);
	$('#hp').css('width', player.health / player.maxHealth * 100 + '%');
}

function healthRegen() {
	player.health = player.health + player.regenVal;
}

//loads dom elements & event listeners
window.onload = function() {
	loadGame();
	mainLoop();
	saveLoop();
	locationSwitch(Main);
	$('#ascii_text').html(cavern.ascii);

	var reflectingPool = document.getElementById('reflectingPool');
	var store = document.getElementById('store');
	var main = document.getElementById('main');
	var error = document.getElementById('error');
	var inventory = document.getElementById('inventory');
	var fieldButton = document.getElementById('fieldButton');
	var mapButton = document.getElementById('mapButton');

	var locationTo;
	var locationFrom;

 	// event listener to switch location

	$('.location_button, .location_ascii').click(function() {
		if (levelActive) {
			$('#error').html('You must leave quest first');
			return;
		}
		var buttonValue = $(this).attr('value');
		var locationVal = locationObject[buttonValue];
		if (buttonValue == 'DemonWizardElder' && player.demonVisit) {
			$('#error').html('The Demon Wizard Elder does not allow repeat visits');
			return;
		}
		locationSwitch(locationVal);
		if (buttonValue == 'Mountain') {
			magicDoor();
		}
		else if (buttonValue == 'Inventory') {
			inventoryList();
			playerInfoUpdate();
		}
		else if (buttonValue == 'Book') {
			showLab();
		}
		else if (buttonValue == 'DemonWizardElder') {
			noDemon();
		}
		else if (buttonValue == 'Store') {
			storePriceUpdate();
		}
		else if (buttonValue == 'Cabin') {
			spaceShipCheck();
		}
	});

	$('.monk_button').click(function() {
		var buttonValue = $(this).attr('value');
		if (buttonValue == 'greet') {
			monkCheck();
		}
		else {
			$('#greet_monk').hide();
			monkAction(buttonValue);
		}
	})

	$('.wizard_button').click(function() {
		var buttonValue = $(this).attr('value');
		wizardExplain(buttonValue);
	})

	//telescope event listener
	$('.tele_button').click(function() {
		var buttonValue = $(this).attr('value');
		telescope(buttonValue);
	})


	//lich event listener
	$('.lich_button').click(function() {
		var buttonValue = $(this).attr('value');
		lichEncounter(buttonValue);
	})

	$('.enchantButton').click(function() {
		var buttonValue = $(this).attr('value');
		wizardEnchant(buttonValue);
	})

	//event listener to buy store items
	$('.store_button').click(function() {
		var buttonValue = $(this).attr('value');
		var split = buttonValue.split(',');
		storeItems(split);

	});

	$('.pool_button').click(function() {
		var buttonValue = $(this).attr('value');
		reflectingPoolChoice(buttonValue);
	})

	$('.potion_button').click(function() {
		var buttonValue = $(this).attr('value');
		useHealthPotion();
	});

	$('#leave_quest').click(function() {
		leaveQuest();
	});

	$('#invert_button').click(function() {
		inverseColors();
	});

	$('.factory_button').click(function() {
		var buttonValue = $(this).attr('value');
		factoryFunction(buttonValue);
	})
}

var previousLocation = levelInfo;

function locationSwitch(location) {
 		$(previousLocation.special).hide();
 		previousLocation = location;
 		$('#error').html('');
 		$('#location_ascii').hide();
 		$('#location_text').hide();
 		$(location.special).fadeIn('slow');
 		$('#location_ascii').html(location.ascii).fadeIn('slow');
 		$('#location_text').html(location.text).fadeIn('slow');
}

//generates ectoplasm on click
function ectoplasmClick(num) {
	player.money = player.money + num;
	document.getElementById('ectoplasm').innerHTML = "You have " + player.money + " gold";
	if (player.money > 1000) {
		$('#click_button').hide();
	}
}

//generates ectoplasm overtime, passing in gears placed
function ectoplasmGenerator(num) {
	player.money = player.money + num*player.extraMoneyGen;
	document.getElementById('ectoplasm').innerHTML = "You have " + player.money + " gold";
	$('#ecto_gen').html('gold/s: ' + num);
}

//generatres blood overtime, passing in batteries in use
function bloodGenerator(num) {
	if (num * 2 <= player.money) {
	player.gunk = player.gunk + num*2;
	player.money = player.money - num*2;
	$('#blood').html("You have " + player.gunk + " gunk");
	$('#blood_gen').html('gunk/s: ' + num*2);
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

//main game loop, adds resources and hp
function mainLoop() {
	ectoplasmGenerator(player.gears);
	if (player.health < player.maxHealth) {
		healthRegen();
		updateHealthBar();
	}
	fixHP();
	if (batteryOn == true) {
		bloodGenerator(player.batteries);
	}
	setTimeout(mainLoop, 1000);
}

function saveLoop() {
	saveGame();
	setTimeout(saveLoop, 5000);
}

//quest loop, called if level is active
var questLoop = function(monster) {
	if (bearCave) {
		dropBearFall();
	}
	if (timeFrozen == false) {
		moveInLevel(monster);		
	}


	if (timeFrozen) {
		frozeTimer--;
		$('#error').html('Time Frozen: ' + frozeTimer);
		if (frozeTimer == 0) {
			timeFrozen = false;
		}
	}
	if (shieldUsed) {
		shieldTimer--;
		$('#error').html('Shield Left: ' +  shieldTimer);
		if (shieldTimer == 0) {
			shieldUsed = false;
			player.reduction = oldReduction;
		}
	} 
	if (berserkUsed) {
		berserkTimer--;
		$('#error').html('Berserk Left: ' + berserkTimer);
		if (berserkTimer == 0) {
			berserkUsed = false;
			player.power = oldPower;
		}
	}

	if (potionUsed) {
		potionCD--;
		$('#potionCDText').html("Potion Cooldown: " + potionCD);
		if (potionCD == 0) {
			potionUsed = false;
			$('#error').html('');
		}
	}

	if (levelActive == false) {
		potionCD = 0;
		potionUsed = false;
		return;
	}

	setTimeout(function() {
		questLoop(monster);
	}, 500);
}

//not current being called
function animateLoop() {
	smokeAnimate();
	blinkAnimate();

	setTimeout(animateLoop, 750);
}