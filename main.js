//i really am going to need to split this into multiple files soon
//global variable init
var ectoplasm = 50000;
var ghostStoreVal = false;
var storeShow = false;
var inventoryShow = false;
var fieldShow = false;
var mapShow = false;
var poolShow = false;
var inverse = false;
var batteryDisplay = false;
var batteryOn = false;
var batteriesUsed = 0;
var blood = 0;
var seedsPlanted = 10;
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

//object containing weapon types
var swordObject = {
	fists : {
		name: 'Fists',
		damage: 1
	},

	woodSword : {
		name: 'Wooden Sword',
		damage: 2
	},

	ironSword : {
		name: 'Iron Sword',
		damage: 4
	}
}

//inventory
var inventoryObject = {
	weapon: swordObject.fists,
	healthPotion: 0,
	manaPotion: 0,
	seed: 0,
	map: false,
	battery: 0,
	rune: false,
	sin: false
}

var player = {
	damage: swordObject.fists.damage,
	health: 100
}


function updateHealthBar() {
	$('#hp').html(player.health + ' Health');
}
//default is dark, inverse colors on button click
function inverseColors() {
	if (inverse == false) {
		$('body').css('color', 'black');
		$('body').css('background-color', 'white');
		inverse = true;
	}
	else {
		$('body').css('color', 'white');
		$('body').css('background-color', 'black');
		inverse = false;
	}
}

//functions associated with the factory, placegears/usebatteries
function plantSeed() {
	if (inventoryObject.seed > 0) {
		seedsPlanted++;
		inventoryObject.seed--;
		$('#seeds_planted').html("Gears Placed: " + seedsPlanted);
	}
	else {
		error.innerHTML = 'you have no gears';
	}
}

function plantAll() {
	if (inventoryObject.seed > 0) {
		seedsPlanted = seedsPlanted + inventoryObject.seed;
		inventoryObject.seed = 0;
		$('#seeds_planted').html("Geards Placed: " + seedsPlanted);
	}
	else {
 		error.innerHTML = 'you have no gears';
 	}
}

function batteryEnable() {
	if (seedsPlanted > 9) {
		$('#batteryButton').css('display', 'inline');
		batteryDisplay = true;
		batteryOn = true;
	}
}

function useBattery() {
	if (inventoryObject.battery > 0) {
		batteriesUsed++;
		inventoryObject.battery--;
	}
	else {
 		error.innerHTML = 'you have no batteries';
 	}
}

function turnOffBattery() {
	if (batteryOn == false) {
		batteryOn = true;
		$('#blood_gen').html('blood/s: ' + batteriesUsed*2);
		$('#turn_off').html('Turn Off Machine');
	}
	else {
		batteryOn = false;
		$('#blood_gen').html('The machine is off');
		$('#turn_off').html('Turn On Machine');
	}
}

//updated inventory list for use when navigating to inventory screen
function inventoryList() {
	$('#inventoryItems').html("Health Potions: " + inventoryObject.healthPotion + "<br>"
							+ "Mana Potions: " + inventoryObject.manaPotion + "<br>"
							+ "Seeds: " + inventoryObject.seed + "<br>"
							+ "Weapon: " + inventoryObject.weapon.name + "<br>"
							+ "Batteries: " + inventoryObject.battery );
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

//leave/enter store on button click
function enterStore(inp) {
	if (storeShow == true) {
		store.style.display = "none";
		main.style.display = "inline";
		storeShow = false;
	}
	else {
		store.style.display = "inline";
		main.style.display = "none";
		storeShow = true;
	}
	error.innerHTML = '';
}
//yeah def need to make these into a single func
function enterInventory() {
	if (inventoryShow == true) {
		inventory.style.display = "none";
		main.style.display = "inline"
		inventoryShow = false;
		
	} 
	else {
		inventoryList();
		inventory.style.display = "inline";
		main.style.display = "none";
		inventoryShow = true;
	}
}
//wow im still doing it this way instead of fixing it  rip
function enterField() {
	if (fieldShow == true) {
		field.style.display = "none";
		main.style.display = "inline"
		fieldShow = false;
		
	} 
	else {
		field.style.display = "inline";
		main.style.display = "none";
		fieldShow = true;
	}
	error.innerHTML = '';
}

//here we go again lol
function enterMap() {
	if (mapShow == true) {
		map.style.display = "none";
		main.style.display = "inline";
		mapShow = false;
	}
	else {
		map.style.display = "inline";
		main.style.display = "none";
		mapShow = true;
	}
}

//i am a monster
function enterPool() {
	if (poolShow == true) {
		reflectingPool.style.display = "none";
		map.style.display = "inline";
		poolShow = false;
	}
	else {
		reflectingPool.style.display = "inline";
		map.style.display = "none";
		poolShow = true;
	}
}

function usePool() {
	$('#poolChoice').css('display', 'none');
	$('#poolYes').css('display', 'inline');

}

function storeStatus(text) {
	$('#store_status').html(text);
}

//buys item if you have enough money else error
function itemBuy() {
	var itemBought = false;
	if (ectoplasm < itemPrice) {
		storeStatus('Hey! you need more money than that punk');
	}
	else {
		ectoplasm = ectoplasm - itemPrice;
		itemBought = true;
	}
	return itemBought;
}

/*store functionality, takes input based on button clicked for each item
passes into itemBuy() which checks if player has enough money, if true
then add the item to inventory/remove money, if false, then display error*/
function storeItems(item) {
	switch (item) {
		case "woodSword":
			this.itemPrice = 100;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.weapon = swordObject.woodSword;
				player.damage = swordObject.woodSword.damage;
				$('#wood_sword').css('display', 'none');
				storeStatus('This thing wont do much but its better than fists');
			}
			break;
		case "ironSword":
			this.itemPrice = 1000;
			var itemBought = itemBuy();
			if(itemBought == true) {
				inventoryObject.weapon = swordObject.ironSword;
				player.damage = swordObject.ironSword.damage;
				$('#iron_sword').css('display', 'none');
				storeStatus('Now this will show them');
			}
			break;
		case "healthPotion":
			this.itemPrice = 50;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.healthPotion++;
				storeStatus('Heres a Healh Potion, hope you wont need it..');
			}
			break;
		case "manaPotion":
			this.itemPrice = 50;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.manaPotion++;
				storeStatus('Heres your Mana Potion');
			}
			break;
		case "seed":
			this.itemPrice = 500;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.seed++;
				fieldButton.style.display = "inline";
				storeStatus('Gear huh? Might want to checkout the factory.');
			}
			break;
		case "map":
			this.itemPrice = 50;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.map = true;
				mapButton.style.display = "inline";
				$('#mapListing').css('display', 'none');
				storeStatus('Hey! Dont open that map in my store!');
			}
			break;
		case "battery":
			this.itemPrice = 2000;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.battery++;
				storeStatus('Battery! What could you use this for?');				
			}
			break;
		case "rune":
			this.itemPrice = 1;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.rune = true;
				storeStatus('Magic Rune! It is glowing strangely.');				
			}
	}
}


function magicDoor() {
	if (inventoryObject.rune == true) {
		$('#rune_true').css('display', 'inline');
		$('#rune_false').css('display', 'none');
	}
	else {
		$('#rune_false').css('display', 'inline-block');
		$('#rune_true').css('display', 'none');
	}
}
var mountainShow = false;
function gotoMountain() {
	if (mountainShow == true) {
		$('#mountain').hide();
		$('#map').show();
		mountainShow = false;
	}
	else {
		$('#mountain').show();
		$('#map').hide();
		mountainShow = true;
		magicDoor();
	}
}

function enterMountain() {

}

function chooseSin(choice) {
	var message = "You can only pick one and thats what you are going with?";
	if (confirm(message)) {
		switch (choice) {
			case "lust":
				inventoryObject.sin = 'lust';
				break;
			case "gluttony":
				inventoryObject.sin = 'gluttony';
				break;
			case "greed":
				inventoryObject.sin = 'greed';
				break;
			case "sloth":
				inventoryObject.sin = 'sloth';
				break;
			case "wrath":
				inventoryObject.sin = 'wrath';
				break;
			case "envy":
				inventoryObject.sin = 'envy';
				break;
			case "pride":
				inventoryObject.sin = 'pride';
				break;
		}
	}
}

//main game loop, updates 0.5s
window.setInterval(function() {

	ectoplasmGenerator(seedsPlanted);
	updateHealthBar();

	if (ghostStoreVal == false){
		ghostStore();
	}

	if (batteryDisplay == false){
		batteryEnable()
	}
	if (batteryOn == true) {
		bloodGenerator(batteriesUsed);
	}
	console.log(player.damage);

}, 500);

