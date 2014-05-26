var speedSpell = false;
var berserkSpell = false;
var fleshSpell = false;
var moneySpell = false;
var envySpell = false;
var expSpell = false;
var prideSpell = false;

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
			//causes player to gain extra exp
			case "lust":
				inventoryObject.sin = 'lust';
				expSpell = true;
				break;
			//causes player to gain extra hp when making flesh
			case "gluttony":
				inventoryObject.sin = 'gluttony';
				fleshSpell = true;
				break;
			//causes player to gain extra ectoplasm/blood
			case "greed":
				inventoryObject.sin = 'greed';
				ectoplasm = ectoplasm * 2;
				moneySpell = true;
				break;
			//grants the speed up spell to the player, which increases speed
			case "sloth":
				inventoryObject.sin = 'sloth';
				speedSpell = true;
				break;
			//grants the berserk ability to the player, which makes them do more damage
			case "wrath":
				inventoryObject.sin = 'wrath';
				berserkSpell = true;
				break;
			//grants the envy spell to the player, which causes them to 
			case "envy":
				inventoryObject.sin = 'envy';
				envySpell = true;
				break;
			//grants pride spell to the player, which causes them to take less damage when they are low hp
			case "pride":
				inventoryObject.sin = 'pride';
				prideSpell = true;
				break;
		}
		enterDemon();
		console.log(inventoryObject.sin);
	}
}
