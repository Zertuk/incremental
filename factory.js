var batteryDisplay = true;
//master factory function for the event listener, pretty trashy atm
function factoryFunction(value) {
	if (value == 'place_one') {
		plantSeed();
	}
	else if (value == 'place_all') {
		plantAll();
	}
	else if (value == 'use_battery') {
		useBattery();
	}
	else if (value == 'make_flesh') {
		createFlesh();
	}
	if (batteryDisplay == false) {
		batteryEnable();
	}
}

function createFlesh() {
	if ((player.money > 0 ) && (player.gunk > 0)) {
		if (player.money > player.gunk) {
			flesh = player.gunk;
		}
		else {
			flesh = player.money;
		}
		if (flesh > 5000) {
			player.num = 7.5;
		}
		if (flesh > 10000) {
			player.num = 10;
		}
		if (flesh > 50000) {
			player.num = 20;
		}
		if (flesh > 100000) {
			player.num = 30;
		}
		if (flesh > 200000) {
			player.num = 50; 
		}
			player.money = player.money - flesh;
			player.gunk = player.gunk - flesh;
			player.maxHealth = player.maxHealth + Math.round(flesh / player.num);
			flesh = 0;
			player.num = 5;
		if (player.maxHealth > player.maximum) {
			player.maxHealth = player.maximum;
		}
		$('#blood').html('You have ' + player.gunk + ' gunk');
	}
}

//functions associated with the factory, placegears/usebatteries
function plantSeed() {
	if (inventoryObject.seed > 0) {
		player.gears++;
		inventoryObject.seed--;
		$('#seeds_planted').html("Gears Placed: " + player.gears);
	}
	else {
		error.innerHTML = 'you have no gears';
	}
}

function plantAll() {
	if (inventoryObject.seed > 0) {
		player.gears = player.gears + inventoryObject.seed;
		inventoryObject.seed = 0;
		$('#seeds_planted').html("Gears Placed: " + player.gears);
	}
	else {
 		error.innerHTML = 'you have no gears';
 	}
}

function batteryEnable() {
	if (player.gears > 1) {
		$('#batteryButton').css('display', 'inline');
		batteryDisplay = true;
		batteryOn = true;;
	}
}


function useBattery() {
	if (inventoryObject.battery > 0) {
		player.batteries++;
		inventoryObject.battery--;
	}
	else {
 		error.innerHTML = 'you have no batteries';
 	}
}

function turnOffBattery() {
	if (batteryOn == false) {
		batteryOn = true;
		$('#blood_gen').html('gunk/s: ' + player.batteries*2);
		$('#turn_off').html('Turn Off Machine');
	}
	else {
		batteryOn = false;
		$('#blood_gen').html('The machine is off');
		$('#turn_off').html('Turn On Machine');
	}
}

//generates ectoplasm on click
function ectoplasmClick(num) {
	player.money = player.money + num;
	document.getElementById('ectoplasm').innerHTML = "You have " + player.money + " gold";
}

//generates ectoplasm overtime, passing in gears placed
function ectoplasmGenerator(num) {
	player.money = player.money + num*player.extraMoneyGen;
	$('#ecto_gen').html('gold/s: ' + num);
	updateResources();
	hideClickButton();
}

//hides/shows click button if over/under 1000 money
function hideClickButton() {
	if (player.money > 1000) {
		$('#click_button').hide();
	}
	else if (player.money < 1000) {
		$('#click_button').show();
	}
}

//generates blood overtime, passing in batteries placed
function bloodGenerator(num) {
	if (num * 2 <= player.money) {
	player.gunk = player.gunk + num*2;
	player.money = player.money - num*2;
	$('#blood_gen').html('gunk/s: ' + num*2);
	}
}

function updateResources() {
	$('#blood').html('You have ' + player.gunk + ' gunk');
	$('#ectoplasm').html('You have ' + player.money + ' gold');
}
