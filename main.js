//global variable init
var ectoplasm = 50000;
var ghostStoreVal = false;
var inverse = false;
var smoke = true;
var blink = false;
var count = 0;
var batteriesUsed = 0;
var blood = 500;
var seedsPlanted = 1;
var batteryOn = true;
var levelActive = false;
var flesh = 0;
var fists, woodSword, ironSword;

function updateHealthBar() {
	$('#hp').html(player.health.toFixed(2) + '/' + player.maxHealth);
	$('#hp').css('width', player.health / player.maxHealth * 100 + '%');
}

function healthRegen() {
	player.health = player.health + 0.25;
}


//loads dom elements & event listeners
window.onload = function() {
	mainLoop();
	locationSwitch(City);
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
	});

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

	//event listener to buy store items
	$('.store_button').click(function() {
		var buttonValue = $(this).attr('value');
		var split = buttonValue.split(',');
		storeItems(split);

	});

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
 		$('#location_ascii').hide();
 		$('#location_text').hide();
 		$(location.special).fadeIn('slow');
 		$('#location_ascii').html(location.ascii).fadeIn('slow');
 		$('#location_text').html(location.text).fadeIn('slow');
}


//generates ectoplasm on click
function ectoplasmClick(num) {
	ectoplasm = ectoplasm + num;
	document.getElementById('ectoplasm').innerHTML = "You have " + ectoplasm + " ectoplasm";
}

//generates ectoplasm overtime, passing in gears placed
function ectoplasmGenerator(num) {
	ectoplasm = ectoplasm + num;
	document.getElementById('ectoplasm').innerHTML = "You have " + ectoplasm + " ectoplasm";
	$('#ecto_gen').html('ectoplasm/s: ' + num);
}

//generatres blood overtime, passing in batteries in use
function bloodGenerator(num) {
	if (num * 2 <= ectoplasm) {
	blood = blood + num*2;
	ectoplasm = ectoplasm - num*2;
	$('#blood').html("You have " + blood + " blood");
	$('#blood_gen').html('blood/s: ' + num*2);
	}
}

//gives option for store once you have 100+ ectoplasm
function ghostStore()  {
	if (ectoplasm > 99) {
		ghostStoreVal = true;
		document.getElementById('storeButton').style.display = "inline";
		return ghostStoreVal;
	}
	return ghostStoreVal;
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

// function smokeAnimate() {
// 	if (smoke == true) {
// 		$('#house1').show();
// 		$('#house2').hide();
// 		$('#factory').show();
// 		$('#factory2').hide();
// 		smoke = false;
// 	}
// 	else {
// 		$('#house2').show();
// 		$('#house1').hide();
// 		$('#factory').hide();
// 		$('#factory2').show();
// 		smoke = true;
// 	}
// }

// function blinkAnimate() {	
// 	if (blink == false) {
// 		$('#shop_keeper_blink').show();
// 		$('#shop_keeper').hide();
// 		blink = true;
// 	}
// 	else {
// 		$('#shop_keeper_blink').hide();
// 		$('#shop_keeper').show();
// 		count = 0;
// 		blink = false;
// 	}
// }

//main game loop, adds resources and hp
function mainLoop() {
	ectoplasmGenerator(seedsPlanted);
	if (player.health < player.maxHealth) {
		healthRegen();
		updateHealthBar();
	}
	fixHP();
	if (batteryOn == true) {
		bloodGenerator(batteriesUsed);
	}
	setTimeout(mainLoop, 1000);
}


var testloop;

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

