var speedSpell = false;
var berserkSpell = false;
var fleshSpell = false;
var moneySpell = false;
var envySpell = false;
var expSpell = false;
var prideSpell = false;
var sinChoosen = false;

function speedSpell() {

}

function endBerserk() {
	berserk = false;
	player.damage = player.damage * 0.5;
	console.log(player.damage);
}

function useBerserk() {
	if (potionUsed) {
		$('#error').html('Spells are on Cooldown!');
	}
	else if (potionUsed == false) {
		player.damage = player.damage*2;
		console.log(player.damage)
		potionCD = 10;
		berserk = true;
		setTimeout(endBerserk, 5000);
	}
}

function chooseSin(choice) {
	var message = "You can only pick one and thats what you are going with?";
	if (confirm(message)) {
		switch (choice) {
			case "lust":
				player.freedom = player.freedom + 0.5;
				$('#error').html('You choose Pride. Monsters drop more money');
				break;
			case "gluttony":
				player.regenVal = player.regenVal + 3;
				$('#error').html('You choose Gluttony. You heal faster');
				break;
			case "greed":
				ectoplasm = ectoplasm * 2;
				moneySpell = true;
				$('#error').html('You choose Greed. You gain extra money');
				break;
			case "sloth":
				seedsPlanted = seedsPlanted * 5;
				batteriesUsed = batteriesUsed * 5;
				$('#error').html('You choose Sloth. You generate resources faster');
				break;
			case "wrath":
				swordEnchantVal = swordEnchantVal + 0.25;
				$('#error').html('You choose Wrath. You deal more damage')
				break;
			case "envy":
				player.freedom = player.freedom + 0.1;
				batteriesUsed = batteriesUsed * 2;
				seedsPlanted = seedsPlanted * 2;
				swordEnchantVal = swordEnchantVal + 0.075
				armorEnchantVal = armorEnchantVal + 0.075;
				$('#error').html('You choose Envy. You get a little of everything')
				break;
			case "pride":
				armorEnchantVal = armorEnchantVal + 0.25;
				$('#error').html('You choose pride. You can take more damage now')
				break;
		}
		player.sinChoosen = true;


	}
}
