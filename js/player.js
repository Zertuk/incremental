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
	health: 50.00,
	maxHealth: 100
}

function updateHealthBar() {
	$('#hp').html(player.health.toFixed(2) + '/' + player.maxHealth + ' Health');
}

function healthRegen() {
	player.health = player.health + 0.25;
}

//updated inventory list for use when navigating to inventory screen
function inventoryList() {
	$('#inventoryItems').html("Health Potions: " + inventoryObject.healthPotion + "<br>"
							+ "Mana Potions: " + inventoryObject.manaPotion + "<br>"
							+ "Seeds: " + inventoryObject.seed + "<br>"
							+ "Weapon: " + inventoryObject.weapon.name + "<br>"
							+ "Batteries: " + inventoryObject.battery );
}
