//takes players choice and asks them to confirm, then applies their choice affects and player.sinChoosen becomes true for the monk encounter
function chooseSin(choice) {
	var message = "You can only pick one and thats what you are going with?";
	if (confirm(message)) {
		switch (choice) {
			case "lust":
				player.freedom = player.freedom + 0.5;
				$('#error').html('You choose lust. Monsters drop more money');
				break;
			case "gluttony":
				player.regenVal = player.regenVal + 3;
				$('#error').html('You choose Gluttony. You heal faster');
				break;
			case "greed":
				player.money = player.money * 2;
				$('#error').html('You choose Greed. You gain extra money');
				break;
			case "sloth":
				player.gears = player.gears + 3;
				player.batteries = player.batteries + 3;
				$('#error').html('You choose Sloth. You generate resources faster');
				break;
			case "wrath":
				player.swordEnchantVal = player.swordEnchantVal + 0.25;
				$('#error').html('You choose Wrath. You deal more damage')
				break;
			case "envy":
				player.freedom = player.freedom + 0.1;
				player.batteries = player.batteries + 1;
				player.gears = player.gears + 1;
				player.swordEnchantVal = player.swordEnchantVal + 0.075
				player.armorEnchantVal = player.armorEnchantVal + 0.075;
				$('#error').html('You choose Envy. You get a little of everything')
				break;
			case "pride":
				player.armorEnchantVal = player.armorEnchantVal + 0.25;
				$('#error').html('You choose pride. You can take more damage now')
				break;
		}
		player.sinChoosen = true;
		$('#choiceWrap').hide();
	}
}
