//global variable init
var ectoplasm = 0;
var ghostStoreVal = false;
var storeShow = false;
var inventoryShow = false;
var fieldShow = false;
var mapShow = false;
var inverse = false;
var seedsPlanted = 500;
var fists, woodSword, ironSword;

//loads dom elements
window.onload = function() {

var store = document.getElementById('store');
var main = document.getElementById('main');
var error = document.getElementById('error');
var inventory = document.getElementById('inventory');
var fieldButton = document.getElementById('fieldButton');
var mapButton = document.getElementById('mapButton');
var body = document.getElementsByTagName('body')[0];

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
	map: false
	
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


//functions to plant individual or all seeds
function plantSeed() {
	if (inventoryObject.seed > 0) {
		seedsPlanted++;
		inventoryObject.seed--;
		$('#seeds_planted').html("Seeds Planted: " + seedsPlanted);
	}
	else {
		error.innerHTML = 'you have no seeds';
		window.setInterval(function() {
			error.innerHTML = '';
		}, 3000)
	}
}

function plantAll() {
	if (inventoryObject.seed > 0) {
		seedsPlanted = seedsPlanted + inventoryObject.seed;
		inventoryObject.seed = 0;
		$('#seeds_planted').html("Seeds Planted: " + seedsPlanted);
	}
	else {
 		error.innerHTML = 'you have no seeds';
 		window.setInterval(function() {
 			error.innerHTML = '';
 		}, 3000)
 	}
}

function inventoryList() {
	$('#inventoryItems').html("Health Potions: " + inventoryObject.healthPotion + "<br>"
							+ "Mana Potions: " + inventoryObject.manaPotion + "<br>"
							+ "Seeds: " + inventoryObject.seed + "<br>"
							+ "Weapon: " + inventoryObject.weapon.name);
}

//generates ectoplasm on click
function ectoplasmClick(number) {
	ectoplasm = ectoplasm + number*10;
	document.getElementById('ectoplasm').innerHTML = "You have " + ectoplasm + " stuff";
}

//generates ectoplasm overtime
function ectoplasmGenerator(num) {
	ectoplasm = ectoplasm + num;
	document.getElementById('ectoplasm').innerHTML = "You have " + ectoplasm + " stuff";
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

//buys item if you have enough money
function itemBuy() {
	var itemBought = false;

	if (ectoplasm < itemPrice) {
		error.innerHTML = 'not enough money';
		window.setInterval(function() {
			error.innerHTML = '';
		}, 3000)

	}
	else {
		ectoplasm = ectoplasm - itemPrice
		console.log(itemPrice)
		itemBought = true;
	}
	return itemBought;

}

//need to figure out how to add item bought to inv
function storeItems(item) {
	switch (item) {
		case "woodSword":
			this.itemPrice = 100;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.weapon = swordObject.woodSword;
			}
			break;
		case "ironSword":
			this.itemPrice = 1000;
			var itemBought = itemBuy();
			if(itemBought == true) {
				inventoryObject.weapon = swordObject.ironSword;
			}

		case "healthPotion":
			this.itemPrice = 50;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.healthPotion++;
			}
			break;
		case "manaPotion":
			this.itemPrice = 50;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.manaPotion++;
			}
			break;
		case "seed":
			this.itemPrice = 500;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.seed++;
				fieldButton.style.display = "inline";
			}
			break;
		case "map":
			this.itemPrice = 50;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.map = true;
				mapButton.style.display = "inline";
			}
		}
}

//main game loop
window.setInterval(function() {

	ectoplasmGenerator(seedsPlanted);

	if (ghostStoreVal == false){
	ghostStore();
	}


}, 500);

