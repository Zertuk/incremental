//global variable init
var inverse = false;
var count = 0;
var batteryOn = true;
var levelActive = false;
var flesh = 0;
var fists, woodSword, ironSword;

function updateHealthBar() {
	$('#hp').html(player.health.toFixed(2) + '/' + player.maxHealth);
	$('#hp').css('width', player.health / player.maxHealth * 100 + '%');
}

function healthRegen() {
	player.health = player.health + player.regenVal;
}

//loads dom elements & event listeners
window.onload = function() {
	mainLoop();
	locationSwitch(Wizard);
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
}

//generates ectoplasm overtime, passing in gears placed
function ectoplasmGenerator(num) {
	ectoplasm = ectoplasm + num;
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
	}, 50);
}

//not current being called
function animateLoop() {
	smokeAnimate();
	blinkAnimate();

	setTimeout(animateLoop, 750);
}