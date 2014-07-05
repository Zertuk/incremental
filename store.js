var potionUsed = false;
var potionCD = 0;
var timeFrozen = false;

function updateHealthBar() {
	$('#hp').html(player.health.toFixed(2) + '/' + player.maxHealth);
	$('#hp').css('width', player.health / player.maxHealth * 100 + '%');
}

function healthRegen() {
	player.health = player.health + player.regenVal;
}



var stuffToShow = {
	mapButton: false,
	post_lich: false,
	wood_sword: true,
	iron_sword: false,
	diamond_sword: false,
	iron_armor: true,
	diamond_armor: false,
	mapListing: true,
	pool_use: true,
	den: false,
	wizard_button: false,
	camp_scenario: true,
	camp_use: false,
	man: false,
	figure: false,
	mine: false,
	depths: false,
	tower_map: false,
	upper: false,
	top: false,
	monk_button: false,
	den: false,
	wizard_button: false,
	armory: false,
	throne: false,
	lich: false,
	cabin: false,
	cabin_map: false,
	sewer: false,
	prison: false,
	tunnel: false,
	danger: false,
	laboratory: false,
	hanger: false,
	rest_perm: false,
	cave: false,
	castle: false,
	wizard_home: false,
	forest_map: false,
	lab_map: false,
	phase3: false,
	rocket_launch: false,
	miningPick_item: false,
	staff_item: false,
	lifeGem_item: false,
	hood_item: false,
	miniBear_item: false,
	skull_item: false,
	trollHair_item: false,
	skullStaff_item: false,
	stickySlime_item: false,
	pizza_item: false,
	robe_item: false,
	riotShield_item: false,
	tome_item: false,
	end_button: false,
	badEnd_button: false,
	fountain_buttons: true,
	hc: false
}

function showStuff() {
for (var key in stuffToShow) {
	var obj = stuffToShow[key];
	if (obj) {
		$('#' + key).show();
	}
	else {
		$('#' + key).hide();
	}
}
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
		name: 'Jail Ogre Hide',
		reduction: 50
	}
}

//inventory
var inventoryObject = {
	weapon: swordObject.fists,
	armor: armorObject.noArmor,
	ironArmor: false,
	diamondArmor: false,
	knightsArmor: false,
	jailOgreHide: false,
	astronautSuit: false,
	healthPotion: 10,
	manaPotion: 0,
	seed: 0,
	map: false,
	battery: 0,
	rune: false,
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
	sharkTooth: false,
	tome: false
}

function itemEquip(item) {
	console.log(item + '  test');
	switch (item) {
		case 'miningPick':
			if (!inventoryObject.miningPick) {
				player.freedom = player.freedom + 0.1;
				inventoryObject.miningPick = true;
				stuffToShow.miningPick_item = true;
			}
			
			break;
		case 'staff':
			if (!inventoryObject.staff) {
				player.swordEnchantVal = player.swordEnchantVal + 0.05;
				inventoryObject.staff = true;
				stuffToShow.staff_item = true;
			}
			
			break;
		case 'lifeGem':
			if (!inventoryObject.lifeGem) {
				player.regenVal = player.regenVal + 0.75;
				inventoryObject.lifeGem = true;
				stuffToShow.lifeGem_item = true;
			}
			
			break;
		case 'hood':
			if (!inventoryObject.hood) {
				player.swordEnchantVal = player.swordEnchantVal + 0.1;
				inventoryObject.hood = true;
				stuffToShow.hood_item = true;
			}
			
			break;
		case 'miniBear':
			if (!inventoryObject.miniBear) {
				player.freedom = player.freedom + 0.2;
				inventoryObject.miniBear = true;
				stuffToShow.miniBear_item = true;
			}

			break;
		case 'skull':
			if (!inventoryObject.skull) {
				player.swordHP = player.swordHP + 0.1;
				inventoryObject.skull = true;
				stuffToShow.skull_item = true;
			}

			break;
		case 'trollHair':
			if (!inventoryObject.trollHair) {
				player.armorEnchantVal = player.armorEnchantVal + 0.1;
				inventoryObject.trollHair = true;
				stuffToShow.trollHair_item = true;
			}
			break;
		case 'skullStaff':
			if (!inventoryObject.skullStaff) {
				player.swordEnchantVal = player.swordEnchantVal + 0.05;
				player.armorEnchantVal = player.armorEnchantVal + 0.05;
				player.regenVal = player.regenVal + 2.5;
				inventoryObject.skullStaff = true;
				stuffToShow.skullStaff_item = true;
			}
			break;
		case 'stickySlime':
			if (!inventoryObject.stickySlime) {
				player.extraMoneyGen = 2;
				inventoryObject.stickySlime = true;
				stuffToShow.stickySlime_item = true;
			}
			else {
				$('#special_loot').html('---');
			}
			break;
		case 'pizza':
			if (!inventoryObject.pizza) {
				player.maxHealth = player.maxHealth + 420;
				inventoryObject.pizza = true;
				player.maximum = 100420;
				stuffToShow.pizza_item = true;
			}
			break;
		case 'robe':
			if (!inventoryObject.robe) {
				player.regenVal = player.regenVal + 5;
				inventoryObject.robe = true;
				stuffToShow.robe_item = true;
			}
			break;
		case 'riotShield':
			if (!inventoryObject.riotShield) {
				player.armorEnchantVal = player.armorEnchantVal + 0.25;
				inventoryObject.riotShield = true;
				stuffToShow.riotShield_item = true;
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
		case 'tome':
			if (!inventoryObject.tome) {
				inventoryObject.tome = true;
				player.regenVal = player.regenVal + 1;
				player.swordHP = player.swordHP + 0.1;
				player.maxHealth = player.maxHealth + 500;
				stuffToShow.tome_item = true;
			}
			break;
		case 'knightsArmor':
			if (!inventoryObject.knightsArmor) {
				inventoryObject.knightsArmor = true;
				equipArmor();
			}
			break;
		case 'jailOgreHide':
			if (!inventoryObject.jailOgreHide) {
				inventoryObject.jailOgreHide = true;
				equipArmor();
			}
			break;
		case 'astronautSuit':
			if (!inventoryObject.astronautSuit) {
				inventoryObject.astronautSuit = true;
				equipArmor();
			}
			break;
		case 'none':
			break;
	}
	showStuff();
}

function equipArmor() {
	if (inventoryObject.astronautSuit) {
		inventoryObject.armor = armorObject.astronautSuit;
		player.reduction = armorObject.astronautSuit.reduction;
	}
	else if (inventoryObject.jailOgreHide) {
		inventoryObject.armor = armorObject.jailOgreHide;
		player.reduction = armorObject.jailOgreHide.reduction;
	}
	else if (inventoryObject.knightsArmor) {
		inventoryObject.armor = armorObject.knightsArmor;
		player.reduction = armorObject.knightsArmor.reduction;
	}
	else if (inventoryObject.diamondArmor) {
		inventoryObject.armor = armorObject.diamondArmor;
		player.reduction = armorObject.diamondArmor.reduction;
	}
	else if (inventoryObject.ironArmor) {
		inventoryObject.armor = armorObject.ironArmor;
		player.reduction = armorObject.ironArmor.reduction;
	}
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



var player = {
	damage: swordObject.fists.damage,
	reduction: inventoryObject.armor.reduction,
	armorEnchant: this.reduction * this.armorEnchantVal,
	swordEnchant: this.damage * this.swordEnchantVal,
	camp: false,
	power: 1,
	gears: 1,
	batteries: 0,
	money: 0,
	gunk: 0,
	swordEnchantVal: 0,
	armorEnchantVal: 0,
	swordEnchantCost: 1000,
	armorEnchantCost: 1000,
	monkVisit: false,
	postLich: false,
	restPrice: 0,
	thief: false,
	confess: false,
	demonVisit: false,
	swordHP: 0,
	health: 100.00,
	maxHealth: 100,
	bigFish: false,
	regenVal: 0.25,
	freedom: 1,
	num: 5,
	sin_Choosen: false,
	potionCost: 25,
	manaCost: 25,
	gearCost: 200,
	runeCost: 5,
	batteryCost: 2000,
	teleport: false,
	reset: false,
	freeze: false,
	berserk: false,
	shield: false,
	figure: false,
	extraMoneyGen: 1,
	maximum: 100000,
	parts: false,
	fountain: false,
	hardcore: false,
	timer: 0
}

var enchantDmg = 0;
var armorRed = 0;

function swordEnchantDmg() {
	enchantDmg = player.damage * player.swordEnchantVal;
	return enchantDmg;
}

function armorEnchantRed() {
	armorRed = player.reduction * player.armorEnchantVal;
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
			player.health = player.health + player.maxHealth*0.2;
			potionUsed = true;
			potionCD = 15;
			inventoryObject.healthPotion--;
			updateHealthBar();
			inventoryList();
			$('#health_potion_button').html('Use HP(' + inventoryObject.healthPotion + ')');
		}
	}
}

function useTeleportPotion() {
	if (inventoryObject.teleportPotion == 0) {
		$('#error').html('No magic runes ;-;');
	}
	else if (potionUsed) {
		$('#error').html('Spells are on Cooldown!');
	}
	else {
		potionUsed = true;	
		potionCD = 15;
		level[i - 1] = '_';
		level[i] = '_';
		i = 0;
		level[0] = 'Y';		
	}
}

function useFreezePotion() {
	if (inventoryObject.rune == 0) {
		$('#error').html('No magic runes ;-;');
	}
	else if (potionUsed) {
		$('#error').html('Spells are on Cooldown!');
	}
	else {
		potionUsed = true;
		potionCD = 10;
		timeFrozen = true;
		frozeTimer = 5;
	}
}
var oldPower;
var berserkUsed = false;
var shieldUsed = false;

function useShield() {
	if (potionUsed) {
		$('#error').html('Spells are on Cooldown!');
	}
	else {
		potionUsed = true;
		shieldUsed = true;
		oldReduction = player.reduction;
		player.reduction = 100000000;
		shieldTimer = 3;
		potionCD = 20;
	}
}

function useBerserk() {
	if (inventoryObject.rune == 0) {
		$('#error').html('No magic runes ;-;');
	}
	else if (potionUsed) {
		$('#error').html('Spells are on Cooldown!');
	}
	else {
		berserkUsed = true;
		oldPower = player.power;
		player.power = player.power*2;
		potionUsed = true;
		potionCD = 15;
		berserkTimer = 5;
	}
}

var resetSpellUsed = false;

function resetSpells() {
	if (inventoryObject.rune == 0) {
		$('#error').html('No magic runes ;-;');
	}
	else if (resetSpellUsed) {
		$('#error').html('You can only cast reset once per level!');
	}
	else {
		potionCD = 0;
		potionUsed = false;
		resetSpellUsed = true;
		$('#potionCDText').html('Potion/Spell CD: ' + potionCD);
	}
}

//updated inventory list for use when navigating to inventory screen
function inventoryList() {
	$('#inventoryItems').html("Health Potions: " + inventoryObject.healthPotion + "<br>"
							+ "Mana Potions: " + inventoryObject.manaPotion + "<br>"
							+ "Gears: " + inventoryObject.seed + "<br>"
							+ "Weapon: " + inventoryObject.weapon.name + "<br>"
							+ "Armor: " + inventoryObject.armor.name + "<br>"
							+ "Batteries: " + inventoryObject.battery );
}

function playerInfoUpdate() {
	$('#playerInfo').html("Damage: " + player.damage + " <br>"
						+ "Sword Enchant: " + Math.round(player.swordEnchantVal*100) + "%" + "<br>"
						+ "Combined Damage: " + Math.round((player.swordEnchantVal*player.damage + player.damage)*player.power) + "<br>"
						+ "Armor: " + player.reduction + " <br>"
						+ "Armor Enchant: " + Math.round(player.armorEnchantVal*100) + "%" + "<br>"
						+ "Combined Armor: " + Math.round(player.armorEnchantVal*player.reduction + player.reduction) + "<br>"
						+ "Max Health: " + player.maxHealth + " <br>"
						+ "Sword Healing: " + player.swordHP*100 + "%" + "<br>"
						+ "Extra Loot Multiplier: " + Math.round((player.freedom*100) -100) + "%");
};

//buys item if you have enough money else error
function itemBuy(item) {
	var itemBought = false;
	if (player.money < itemPrice) {
		storeStatus('Hey! you need more money than that punk');
	}
	else {
		player.money = player.money - itemPrice;
		itemBought = true;
		//removes the item from store if it has a secondary value
	}
	return itemBought;
}

function storeStatus(text) {
	$('#location_text').html(text);
}

//updates the cost on the button of the store items if it scales
function storePriceUpdate() {
	$('#battery_buy').html(player.batteryCost);
	$('#rune_buy').html(player.runeCost);
	$('#hp_buy').html(player.potionCost);
	$('#gear_buy').html(player.gearCost);
	$('#mana_buy').html(player.manaCost);
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
				stuffToShow.diamond_sword = false;
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
				stuffToShow.iron_sword = true;
				storeStatus('This thing wont do much but its better than fists');
				$('#wood_sword').hide();
				stuffToShow.wood_sword = false;
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
				stuffToShow.iron_sword = false;
				stuffToShow.diamond_sword = true;
			}
			break;
		case "ironArmor":
			this.itemPrice = 500;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.ironArmor = true;
				equipArmor();
				storeStatus('Better than nothing I guess');
				$('#iron_armor').hide();
				stuffToShow.iron_armor = false;
				$('#diamond_armor').show();
				stuffToShow.diamond_armor = true;
			}
			break;
		case 'diamondArmor':
			this.itemPrice = 5000;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.diamondArmor = true;
				equipArmor();
				storeStatus('This took 9 diamonds to make, dont ruin it!');
				$('#diamond_armor').hide();
				stuffToShow.diamond_armor = false;
			}
			break;
		case "healthPotion":
			this.itemPrice = player.potionCost;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				player.potionCost = player.potionCost + Math.floor(player.potionCost/5);
				inventoryObject.healthPotion++;
				storeStatus('Heres a Healh Potion, hope you wont need it..');
			}
			break;
		case "manaPotion":
			this.itemPrice = player.manaCost;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				player.manaCost = player.manaCost + Math.floor(player.manaCost/5);
				inventoryObject.manaPotion++;
				storeStatus('You know you dont even have mana right?');
				if (inventoryObject.manaPotion > 10) {
					storeStatus('Really. I am telling you the truth, these are worthless to you');
					if (inventoryObject.manaPotion > 20) {
						storeStatus('Your determination to be a magic user inspires me ;-;  Please, take this tome, maybe it can help you');
						itemEquip('tome');
					}
				}
			}
			break;
		case "seed":
			this.itemPrice = player.gearCost;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.seed++;
				player.gearCost = player.gearCost + Math.floor(player.gearCost/7);
				storeStatus('Gear huh? Might want to checkout the factory.');
			}
			break;
		case "map":
			this.itemPrice = 50;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.map = true;
				$('#mapButton').show();
				stuffToShow.mapButton = true;
				$('#mapListing').hide();
				stuffToShow.mapListing = false;
				storeStatus('Hey! Dont open that map in my store!');
			}
			break;
		case "battery":
			this.itemPrice = player.batteryCost;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				player.batteryCost = player.batteryCost + Math.floor(player.batteryCost/5);
				$('#')
				inventoryObject.battery++;
				storeStatus('Battery! What could you use this for?');				
			}
			break;
		case "rune":
			this.itemPrice = player.runeCost;
			var itemBought = itemBuy(item);
			if (itemBought == true) {
				inventoryObject.rune = true;
				storeStatus('Magic Rune! It is glowing strangely.');
				player.runeCost = player.runeCost + Math.floor(player.runeCost/5);				
			}
	}
	storePriceUpdate();
}