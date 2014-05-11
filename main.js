//global variable init
var ectoplasm = 0;
var ghostStoreVal = false;
var storeShow = false;
var inventoryShow = false;

var inventoryObject = {
	healthPotion: 0,
	manaPotion: 0,
	seed: 0,
	woodSword: false,
	ironSword: false
}

function inventoryList() {
	$('#inventoryItems').html("Health Potions: " + inventoryObject.healthPotion + "<br>"
							+ "Mana Potions :" + inventoryObject.manaPotion);
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
				inventoryObject.woodSword = true;
			}
			break;
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
	}
}

//loads dom elements
window.onload = function() {

var store = document.getElementById('store');
var main = document.getElementById('main');
var error = document.getElementById('error');
var inventory = document.getElementById('inventory');

}

//main game loop
window.setInterval(function() {

	ectoplasmGenerator(100);

	if (ghostStoreVal == false){
	ghostStore();
	}

}, 500);

