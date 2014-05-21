//i really am going to need to split this into multiple files soon
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
var fists, woodSword, ironSword;

function updateHealthBar() {
	$('#hp').html(player.health.toFixed(2) + '/' + player.maxHealth + ' Health');
}

function healthRegen() {
	player.health = player.health + 0.25;
}


//loads dom elements & event listeners
window.onload = function() {
	var reflectingPool = document.getElementById('reflectingPool');
	var store = document.getElementById('store');
	var main = document.getElementById('main');
	var error = document.getElementById('error');
	var inventory = document.getElementById('inventory');
	var fieldButton = document.getElementById('fieldButton');
	var mapButton = document.getElementById('mapButton');


	$('button').click(function() {

		var buttonValue = $(this).val();
		buttonValue = "#" + buttonValue;
		enterMapLocation(buttonValue);
	})
}



//generates ectoplasm on click
function ectoplasmClick(num) {
	ectoplasm = ectoplasm + num*10;
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

function smokeAnimate() {
	if (smoke == true) {
		$('#house1').show();
		$('#house2').hide();
		$('#factory').show();
		$('#factory2').hide();
		smoke = false;
	}
	else {
		$('#house2').show();
		$('#house1').hide();
		$('#factory').hide();
		$('#factory2').show();
		smoke = true;
	}
}
var trainAni = false;
function trainAnimate() {
	if (trainAni == true) {
		$('#train1').show();
		$('#train2').hide();
		trainAni = false;
	}
	else {
		$('#train2').show();
		$('#train1').hide();
		trainAni = true;
	}
}

function blinkAnimate() {	
	if (blink == false) {
		$('#shop_keeper_blink').show();
		$('#shop_keeper').hide();
		blink = true;
	}
	else {
		$('#shop_keeper_blink').hide();
		$('#shop_keeper').show();
		count = 0;
		blink = false;
	}

}


//main game loop, updates 0.5s
window.setInterval(function() {
	if (trainShow == true) {
	trainAnimate();
	}
	ectoplasmGenerator(seedsPlanted);
	if (player.health < player.maxHealth) {
		healthRegen();
		updateHealthBar();
	}
	fixHP();
	// if (count % 2 == 0) {
	// smokeAnimate();
	// }

	// if (count > 14) {
	// 	blinkAnimate();
	// }
	
	if (batteryOn == true) {
		bloodGenerator(batteriesUsed);
	}
	//maybe switch to switch
	if (levelActive) {
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
		$('.level').html(level);
	}
	count++;
}, 750);

