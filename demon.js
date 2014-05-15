function chooseSin(choice) {
	var message = "You can only pick one and thats what you are going with?";
	if (confirm(message)) {
		switch (choice) {
			case "lust":
				inventoryObject.sin = 'lust';
				break;
			case "gluttony":
				inventoryObject.sin = 'gluttony';
				break;
			case "greed":
				inventoryObject.sin = 'greed';
				ectoplasm = ectoplasm * 2;
				break;
			case "sloth":
				inventoryObject.sin = 'sloth';
				break;
			case "wrath":
				inventoryObject.sin = 'wrath';
				break;
			case "envy":
				inventoryObject.sin = 'envy';
				break;
			case "pride":
				inventoryObject.sin = 'pride';
				break;
		}
		enterDemon();
		console.log(inventoryObject.sin);
	}
}
