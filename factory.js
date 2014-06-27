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
	if ((ectoplasm > 0 ) && (blood > 0)) {
		if (ectoplasm > blood) {
			flesh = blood;
		}
		else {
			flesh = ectoplasm;
		}
			ectoplasm = ectoplasm - flesh;
			blood = blood - flesh;
			console.log(flesh);
			player.maxHealth = player.maxHealth + Math.round(flesh / player.num);
			flesh = 0;
			player.num = player.num + 0.2;
	}
}

//functions associated with the factory, placegears/usebatteries
function plantSeed() {
	if (inventoryObject.seed > 0) {
		seedsPlanted++;
		inventoryObject.seed--;
		$('#seeds_planted').html("Gears Placed: " + seedsPlanted);
	}
	else {
		error.innerHTML = 'you have no gears';
	}
}

function plantAll() {
	if (inventoryObject.seed > 0) {
		seedsPlanted = seedsPlanted + inventoryObject.seed;
		inventoryObject.seed = 0;
		$('#seeds_planted').html("Geards Placed: " + seedsPlanted);
	}
	else {
 		error.innerHTML = 'you have no gears';
 	}
}

function batteryEnable() {
	if (seedsPlanted > 9) {
		$('#batteryButton').css('display', 'inline');
		batteryDisplay = true;
		batteryOn = true;
	}
}


function useBattery() {
	if (inventoryObject.battery > 0) {
		batteriesUsed++;
		inventoryObject.battery--;
	}
	else {
 		error.innerHTML = 'you have no batteries';
 	}
}

function turnOffBattery() {
	if (batteryOn == false) {
		batteryOn = true;
		$('#blood_gen').html('blood/s: ' + batteriesUsed*2);
		$('#turn_off').html('Turn Off Machine');
	}
	else {
		batteryOn = false;
		$('#blood_gen').html('The machine is off');
		$('#turn_off').html('Turn On Machine');
	}
}
