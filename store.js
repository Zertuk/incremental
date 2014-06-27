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
		name: 'The Spiral Drill Sword',
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
		name: 'Shark Tooth Sword',
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
	shipFuel: false,
	miningPick: false,
	staff: false,
	lifeGem: false,
	hood: false,
	miniBear: false,
	skull: false,
	trollHair: false,
	skullStaff: false,
	stickySlime: false,
	pizza: false,
	robe: false,
	riotShield: false,
	spiralSword: false,
	diamondSword: false,
	ironSword: false,
	woodSword: false,
	beastClaw: false,
	sharkTooth: false
}

function itemEquip(item) {
	console.log(item + '  test');
	switch (item) {
		case 'miningPick':
			if (!inventoryObject.miningPick) {
				player.freedom = player.freedom + 0.1;
				inventoryObject.miningPick = true;
			}
			break;
		case 'staff':
			if (!inventoryObject.staff)
				swordEnchantVal = swordEnchantVal + 0.05;
				inventoryObject.staff = true;
			break;
		case 'lifeGem':
			if (!inventoryObject.lifeGem) {
				player.regenVal = player.regenVal + 0.75;
				inventoryObject.lifeGem = true;
			}
			break;
		case 'hood':
			if (!inventoryObject.hood) {
				swordEnchantVal = swordEnchantVal + 0.1;
				inventoryObject.hood = true;
			}
			break;
		case 'miniBear':
			if (!inventoryObject.miniBear) {
				Monster.freedom = Monster.freedom + 0.2;
				inventoryObject.miniBear = true;
			}
			break;
		case 'skull':
			if (!inventoryObject.skull) {
				player.swordHP = player.swordHP + 0.1;
				inventoryObject.skull = true;
			}
			break;
		case 'trollHair':
			if (!inventoryObject.trollHair) {
				armorEnchantVal = armorEnchantVal + 0.1;
				inventoryObject.trollHair = true;
			}
			break;
		case 'skullStaff':
			if (!inventoryObject.skullStaff) {
				swordEnchantVal = swordEnchantVal + 0.05;
				armorEnchantVal = armorEnchantVal + 0.05;
				player.regenVal = player.regenVal + 2.5;
				inventoryObject.skullStaff = true;
			}
		case 'stickySlime':
			if (!inventoryObject.stickySlime) {
				Monster.freedom = Monster.freedom + 0.3;
				inventoryObject.stickySlime = true;
			}
			break;
		case 'pizza':
			if (!inventoryObject.pizza) {
				player.maxHealth = player.maxHealth + 420;
				inventoryObject.pizza = true;
			}
			break;
		case 'robe':
			if (!inventoryObject.robe) {
			player.regenVal = player.regenVal + 5;
			inventoryObject.robe = true;
			}
			break;
		case 'riotShield':
			if (!inventoryObject.riotShield) {
			armorEnchantVal = armorEnchantVal + 0.25;
			inventoryObject.riotShield = true;
			}
			break;
		case 'beastClaw':
			if (!inventoryObject.beastClaw) {
			inventoryObject.beastClaw = true;
			equipSword();
			}
			break;
		case 'spaceSword':
			if (!inventoryObject.spiralSword) {
			inventoryObject.spiralSword = true;
			equipSword();
			}
			break;
		case 'sharkTooth':
			if (!inventoryObject.sharkTooth) {
			inventoryObject.sharkTooth = true;
			equipSword();
			}
			break;
		case 'none':
			break;
	}
}

var player = {
	damage: swordObject.fists.damage,
	reduction: inventoryObject.armor.reduction,
	armorEnchant: this.reduction * armorEnchantVal,
	swordEnchant: this.damage * swordEnchantVal,
	power: 1,
	demonVisit: false,
	swordHP: 0,
	health: 100.00,
	maxHealth: 10000,
	bigFish: false,
	regenVal: 0.25,
	freedom: 1,
	num: 3,
	sinChoosen: false
}

var enchantDmg = 0;
var armorRed = 0;

function swordEnchantDmg() {
	enchantDmg = player.damage * swordEnchantVal;
	return enchantDmg;
}

function armorEnchantRed() {
	armorRed = player.reduction * armorEnchantVal;
	return armorRed;
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
			player.health = player.health + player.maxHealth*0.35;
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
						+ "Sword Enchant: " + Math.round(swordEnchantVal*100) + "%" + "<br>"
						+ "Armor: " + player.reduction + " <br>"
						+ "Armor Enchant: " + Math.round(armorEnchantVal*100) + "%" + "<br>"
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

function equipSword() {
	if (inventoryObject.spiralSword) {
		inventoryObject.weapon = swordObject.spiralSword;
		player.damage = swordObject.spiralSword.damage;
	}
	else if (inventoryObject.beastClaw) {
		inventoryObject.weapon = swordObject.beastClawSword;
		player.damage = swordObject.beastClawSword.damage;
	}
	else if (inventoryObject.sharkTooth) {
		inventoryObject.weapon = swordObject.sharkToothSword;
		player.damage = swordObject.sharkToothSword.damage;
	}
	else if (inventoryObject.diamondSword) {
		inventoryObject.weapon = swordObject.diamondSword;
		player.damage = swordObject.diamondSword.damage;
	}
	else if (inventoryObject.ironSword) {
		inventoryObject.weapon = swordObject.ironSword;
		player.damage = swordObject.ironSword.damage;
	}
	else if (inventoryObject.woodSword) {
		inventoryObject.weapon = swordObject.woodSword;
		player.damage = swordObject.woodSword.damage;
	}
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
				inventoryObject.diamondSword = true;
				equipSword();
				$('#diamond_sword').hide();
				storeStatus('Not made out of blood diamonds but will cause blood~');
			}
			break;
		case "woodSword":
			this.itemPrice = 100;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.woodSword = true;
				equipSword();
				$('#iron_sword').show();
				storeStatus('This thing wont do much but its better than fists');
				$('#wood_sword').hide();
			}
			break;
		case "ironSword":
			this.itemPrice = 1000;
			var itemBought = itemBuy(item);
			if(itemBought == true) {
				inventoryObject.ironSword = true;
				equipSword();
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