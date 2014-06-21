var potionUsed = false;
var potionCD = 0;
var timeFrozen = false;
//object containing weapon types
var swordObject = {
	fists : {
		name: 'Fists',
		damage: 1000
	},

	woodSword : {
		name: 'Wooden Sword',
		damage: 2
	},

	ironSword : {
		name: 'Iron Sword',
		damage: 4
	},
	diamondSword: {
		name: 'Diamond Sword',
		damage: 10
	},
	spiralSword: {
		name: 'The Space Sword',
		damage: 100
	},
	candySword: {
		name: 'The Candy Sword',
		damage: 75
	},
	beastClawSword: {
		name: 'The Beasts Claw',
		damage: 50
	},
	sharkToothSword : {
		name: 'Shark Tooth',
		damage: 20
	}
}

var armorObject = {
	noArmor : {
		name: 'No Armor',
		reduction: 0
	},
	ironArmor : {
		name: 'Iron Armor',
		reduction: 2
	},
	diamondArmor : {
		name: 'Diamond Armor',
		reduction: 5
	},
	knightsArmor : {
		name: 'Knights Armor',
		reduction: 20
	},
	astronautSuit : {
		name: 'Astronaut Suit',
		reduction: 100
	},
	jailOgreHide : {
		jailOgreHide: 'Jail Ogre Hide',
		reduction: 50
	}
}

//inventory
var inventoryObject = {
	weapon: swordObject.fists,
	armor: armorObject.noArmor,
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
	shipFuel: false
}

var player = {
	damage: swordObject.fists.damage + this.swordEnchant,
	reduction: inventoryObject.armor.reduction + this.armorEnchant,
	armorEnchant: this.reduction * armorEnchantVal,
	swordEnchant: this.damage * swordEnchantVal,
	power: 1,
	demonVisit: false,
	swordHP: false,
	health: 10000.00,
	maxHealth: 10000,
	bigFish: false
}

function fixHP() {
	if (player.health > player.maxHealth) {
		player.health = player.maxHealth;
		updateHealthBar();
	}
    else if (player.health < 0) {
		player.health = 0;
	}
}

function useHealthPotion() {
	if (inventoryObject.healthPotion == 0) {
		$('#error').html('No Health Potions ;-;');
	}
	else if (potionUsed) {
		$('#error').html('Potions are on Cooldown!');
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
			$('#health_potion_button').html('Use HP(' + inventoryObject.healthPotion + ')');
		}
	}
}

function useTeleportPotion() {
	if (inventoryObject.teleportPotion == 0) {
		$('#error').html('No Teleport Potions ;-;');
	}
	else if (potionUsed) {
		$('#error').html('Potions are on Cooldown!');
	}
	else {
		potionUsed = true;	
		potionCD = 20;
		console.log(potionUsed);
		console.log('hello');
		level[i - 1] = '_';
		i = 0;
		level[0] = 'Y';		
	}
}

function useFreezePotion() {
	if (inventoryObject.rune == 0) {
		$('#error').html('No Freeze Potions ;-;');
	}
	else if (potionUsed) {
		$('#error').html('Potions are on Cooldown!');
	}
	else {
		timeFrozen = true;
		frozeTimer = 5;
	}
}
var resetSpellUsed = false;

function resetSpells() {
	if (inventoryObject.rune == 0) {
		$('#error').html('No Freeze Potions ;-;');
	}
	else if (resetSpellUsed) {
		$('#error').html('You can only cast reset once per level!');
	}
	else {
		potionCD = 0;
		potionUsed = false;
		resetSpellUsed = true;
		$('#potionCDText').html('Potion CD: ' + potionCD);
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

function playerInfoUpdate() {
	$('#playerInfo').html("Damage: " + player.damage + " <br>"
						+ "Armor: " + player.reduction + " <br>"
						+ "Max Health: " + player.maxHealth + " <br>")
};

//buys item if you have enough money else error
function itemBuy(item) {
	var itemBought = false;
	if (ectoplasm < itemPrice) {
		storeStatus('Hey! you need more money than that punk');
	}
	else {
		ectoplasm = ectoplasm - itemPrice;
		itemBought = true;
		//removes the item from store if it has a secondary value
	}
	return itemBought;
}

function storeStatus(text) {
	$('#location_text').html(text);
}

/***Store Functionality:
	Takes input based on button clicked for each item, passes into itemBuy(),
which checks if player has enough money, if true, then add the item to inventory/remove
money, if false, then display error. Removes bought sword and shows better sword  ****/
function storeItems(item) {
	switch (item[0]) {
		case "diamondSword":
			this.itemPrice = 10000;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.weapon = swordObject.diamondSword;
				player.damage = swordObject.diamondSword.damage;
				$('#diamond_sword').hide();
				storeStatus('Not made out of blood diamonds but will cause blood~');
			}
			break;
		case "woodSword":
			this.itemPrice = 100;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.weapon = swordObject.woodSword;
				player.damage = swordObject.woodSword.damage;
				$('#iron_sword').show();
				storeStatus('This thing wont do much but its better than fists');
				$('#wood_sword').hide();
			}
			break;
		case "ironSword":
			this.itemPrice = 1000;
			var itemBought = itemBuy(item);
			if(itemBought == true) {
				inventoryObject.weapon = swordObject.ironSword;
				player.damage = swordObject.ironSword.damage;
				storeStatus('Now this will show them');
				$('#iron_sword').hide();
				$('#diamond_sword').show();
			}
			break;
		case "ironArmor":
			this.itemPrice = 500;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.armor = armorObject.ironArmor;
				player.reduction = armorObject.ironArmor.reduction;
				storeStatus('');
				$('#iron_armor').hide();
				$('#diamond_armor').show();
			}
			break;
		case 'diamondArmor':
			this.itemPrice = 5000;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.armor = armorObject.diamondArmor;
				player.reduction - armorObject.diamondArmor.reduction;
				storeStatus('');
				$('#diamond_armor').hide();
			}
			break;
		case "healthPotion":
			this.itemPrice = 50;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.healthPotion++;
				storeStatus('Heres a Healh Potion, hope you wont need it..');
			}
			break;
		case "manaPotion":
			this.itemPrice = 50;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.manaPotion++;
				storeStatus('You know you dont even have mana right?');
			}
			break;
		case "seed":
			this.itemPrice = 500;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.seed++;
				fieldButton.style.display = "inline";
				storeStatus('Gear huh? Might want to checkout the factory.');
			}
			break;
		case "map":
			this.itemPrice = 50;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.map = true;
				$('#mapButton').show();
				$('#mapListing').hide();
				storeStatus('Hey! Dont open that map in my store!');
			}
			break;
		case "battery":
			this.itemPrice = 2000;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.battery++;
				storeStatus('Battery! What could you use this for?');				
			}
			break;
		case "rune":
			this.itemPrice = 1;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.rune = true;
				storeStatus('Magic Rune! It is glowing strangely.');				
			}
	}
}