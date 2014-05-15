//global variable init
var ectoplasm = 50000;
var ghostStoreVal = false;
var inverse = false;
var batteryDisplay = false;
var batteryOn = false;
var smoke = true;
var blink = false;
var count = 0;
var batteriesUsed = 0;
var blood = 0;
var seedsPlanted = 1;
var fists, woodSword, ironSword;

//loads dom elements
window.onload = function() {
	var reflectingPool = document.getElementById('reflectingPool');
	var store = document.getElementById('store');
	var main = document.getElementById('main');
	var error = document.getElementById('error');
	var inventory = document.getElementById('inventory');
	var fieldButton = document.getElementById('fieldButton');
	var mapButton = document.getElementById('mapButton');
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

	ectoplasmGenerator(seedsPlanted);
	if (player.health < player.maxHealth) {
		healthRegen();
		updateHealthBar();
	}
	if (count % 2 == 0) {
	smokeAnimate();
}

	if (count > 14) {
		blinkAnimate();
	}
	
	if (ghostStoreVal == false){
		ghostStore();
	}

	if (batteryDisplay == false){
		batteryEnable()
	}
	if (batteryOn == true) {
		bloodGenerator(batteriesUsed);
	}
	count++;
	console.log(count);
}, 500);

