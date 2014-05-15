var batteryDisplay = false;
var batteryOn = true;


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
