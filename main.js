//global varble init
var inverse = false;
var batteryOn = false;
var levelActive = false;
var flesh = 0;

/*********************************************

		Reset, Load, Save Functionality

**********************************************/


//resets the objects back to the default state
function objectReset() {
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
			badEnd_button: false,
			hc: false
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
			parts: false,
			hardcore: false
		}
}

//resets the value of some of the locations back to the original state
function resetLocations() {
	$('.pool_button').show();
	Store.ascii = Store.ascii;
	Main.special = '#main_special';
	Map.special = '#map_special';
	$('#post_lich').hide();
	Wizard.text = 'Hello? Thanks for saving me! I am a pretty good wizard, want me to enchant your gear?';
	Main.text = '';
}

//resets game back to original state
function resetGame() {
	var message = 'This will reset your entire playthrough, this is not reversible, are you sure?  Make sure you refresh the browser window after you reset!';
	if (confirm(message)) {
		objectReset();
		resetLocations();
		saveGame();
		loadGame();
	}
}

function resetGameHC() {
	leaveQuest();
	objectReset();
	resetLocations();
	player.hardcore = true;
	stuffToShow.hc = true;
	saveGame();
	loadGame();
	locationSwitch(Main);
}


//loads the objects from local storage
function loadObjects() {
	var player_data = JSON.parse(atob(localStorage['player_save']));
	player = player_data;
	var inventory_data = JSON.parse(atob(localStorage['inventory_save']));
	inventoryObject = inventory_data;
	var show_data = JSON.parse(atob(localStorage['show_save']));
	stuffToShow = show_data;
}

//loads certain location info based on what the player has done so far
function loadLocation() {
	if (player.fountain) {
		$('.pool_button').hide();
	}
	if (player.money > 1000) {
		$('#click_button').hide();
	}
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

//master load game function, runs everything needed
function loadGame() {
	if (!localStorage['player_save']) return;
	loadObjects();
	showStuff();
	updateWizardButtons();
	equipSword();
	updateResources();
	updateHealthBar();
	loadLocation();	
}

//save game to local storage
function saveGame() {
	localStorage['player_save'] = btoa(JSON.stringify(player));
	localStorage['inventory_save'] = btoa(JSON.stringify(inventoryObject));
	localStorage['show_save'] = btoa(JSON.stringify(stuffToShow));
}

/*******************************************************

		End Reset, Load, and Save functionality

*******************************************************/

/******************************************************

			DOM info, loop calls, event listeners

*******************************************************/


//loads dom elements & event listeners
window.onload = function() {
	loadGame();
	mainLoop();
	saveLoop();
	locationSwitch(Main);



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
		locationCheck(buttonValue);
	});

	//checks location to see if any functions need to be called
	function locationCheck(buttonValue) {
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
	}

	//monk event listener
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

	//wizard event listener
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

	//enchant event listener
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

	//pool event listener
	$('.pool_button').click(function() {
		var buttonValue = $(this).attr('value');
		reflectingPoolChoice(buttonValue);
	})

	//potion event listener
	$('.potion_button').click(function() {
		var buttonValue = $(this).attr('value');
		useHealthPotion();
	});

	//leave event listener
	$('#leave_quest').click(function() {
		leaveQuest();
	});

	//inverse colors listener
	$('#invert_button').click(function() {
		inverseColors();
	});

	//factory event listener
	$('.factory_button').click(function() {
		var buttonValue = $(this).attr('value');
		factoryFunction(buttonValue);
	})
}

/**
sets old location to previous location so that we can return here after
hides all the ids related to location, then sets them to the new location
passed in from the event listener, and fades them back in
**/
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

/*************************************************************
		
				Main, Save, and Quest Loops

**************************************************************/

//main game loop, adds resources and hp
function mainLoop() {
	if (player.health < player.maxHealth) {
		healthRegen();
		updateHealthBar();
	}
	fixHP();

	ectoplasmGenerator(player.gears);
	if (batteryOn == true) {
		bloodGenerator(player.batteries);
	}

	setTimeout(mainLoop, 1000);
}

//save loop, will save every 5 seconds if player isnt in level and shield/berserk are not active
function saveLoop() {
	if (levelActive || shieldUsed || berserkUsed) {
		console.log('cant save in level!');
	}
	else {
		saveGame();
		console.log('game saved!');
	}

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

	activeSpellCheck();	

	if (levelActive == false) {
		potionCD = 0;
		potionUsed = false;
		return;
	}

	setTimeout(function() {
		questLoop(monster);
	}, 500);
}

function totalTimer() {
	player.timer++
	$('#timer').html(player.timer + ' seconds');
}

function HCMode() {
	var message = "Warning!  This will reset your current game and enable hardcore mode.  If you die on hardcore mode, the game will reset!";
	if (confirm(message)) {
		resetGameHC();
	}
}

//checks to see if a spell is active and updates appropriately if active
function activeSpellCheck() {
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
}