//object containing weapon types
var swordObject = {
	fists : {
		name: 'Fists',
		damage: 1,
		enchant: false
	},

	woodSword : {
		name: 'Wooden Sword',
		damage: 2,
		enchant: false
	},

	ironSword : {
		name: 'Iron Sword',
		damage: 4,
		enchant: false
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
	sin: false,
	ticket: false
}

var player = {
	damage: swordObject.fists.damage,
	health: 75.00,
	maxHealth: 100
}

function fixHP() {
	if (player.health > player.maxHealth) {
		player.health = player.maxHealth;
		updateHealthBar();
	}
}

function useHealthPotion() {
	if (inventoryObject.healthPotion == 0) {
		$('#error').html('No Health Potions ;-;')
	}
	else {
		if (player.health >= player.maxHealth) {
			$('#error').html('You already have full health dont be silly');
		}
		else {		
			player.health = player.health + 35;
			inventoryObject.healthPotion--;
			updateHealthBar();
			inventoryList();
		}
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

function storeStatus(text) {
	$('#store_status').html(text);
}

/***Store Functionality:
	Takes input based on button clicked for each item, passes into itemBuy(),
which checks if player has enough money, if true, then add the item to inventory/remove
money, if false, then display error. Removes bought sword and shows better sword  ****/
function storeItems(item) {
	switch (item) {
		case "woodSword":
			this.itemPrice = 100;
			var itemBought = itemBuy();
			if (itemBought == true) {
				inventoryObject.weapon = swordObject.woodSword;
				player.damage = swordObject.woodSword.damage;
				$('#wood_sword').css('display', 'none');
				$('#iron_sword').show();
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
				$('#rune').hide();
				storeStatus('Magic Rune! It is glowing strangely.');				
			}
	}
}