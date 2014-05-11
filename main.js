//global variable init
var ectoplasm = 0;
var ghostStoreVal = false;
var storeShow = false;
var woodSword = false;

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
function enterStore() {
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

//buys item if you have enough money
function itemBuy(item) {
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
		case "sword":
			this.itemPrice = 100;
			itemBuy('sword');
			if (itemBought == true) {
				woodSword = true;
			}
			else if (itemBought == false) {
				console.log('false');
			}

			break;
		case "potion":
			this.itemPrice = 50;
			itemBuy(itemPrice);

			break;
	}
}

//loads dom elements
window.onload = function() {

var store = document.getElementById('store');
var main = document.getElementById('main');
var error = document.getElementById('error');

}

//main game loop
window.setInterval(function() {

	ectoplasmGenerator(1);

	if (ghostStoreVal == false){
	ghostStore();
	}

}, 500);

