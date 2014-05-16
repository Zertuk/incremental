var mapShow = false;
var mainShow = true;
var trainShow = false;

function enterMapLocation(mapLocation) {
	if (mapShow == false) {
		$(mapLocation).hide();
		$('#map').show();
		mapShow = true;
	}
	else {
		$(mapLocation).show();
		$('#map').hide();
		mapShow = false;
		if (mapLocation == '#mountain') {
			magicDoor();
		}
		if (mapLocation == '#trainShow') {
			trainShow = true;
		}
	}
}

function showTrainStation() {
	if (inventoryObject.ticket == true) {
		$('#trainStation').show();

	}
}

var demon = false;
var demonFirst = false;
function enterDemon() {
	if (demon == false) {
		$('#churchInside').hide();
		$('#demon').show();
		demon = true;

	}
	else {
		$('#main').show();
		$('#demon').hide();
		$('#churchInside').hide();
		mainShow = true;
		if (demonFirst == true) {
			$('#error').html('You have already visited the demon wizard, he doesnt have time for repeat visits!');
		}
		demonFirst = true;
	}
	
}


function usePool() {
	$('#poolChoice').css('display', 'none');
	$('#poolYes').css('display', 'inline');
}

function enterMountain() {

}
//any location from the main screen is displayed using this function
//hides main if mainShow is true and brings up whichever location is choosen
//otherwise hides the location and brings up main if location is shown
//updates inventory and store status text and mapShow if approproiate
function enterMainLocation(location) {
	if (mainShow == true) {
		$(location).show();
		$('#main').hide();
		mainShow = false;
		if (location == '#store') {
			$('#store_status').html('You looking to buy?');
		}
		else if (location == '#inventory') {
			inventoryList();
		}
		else if (location == '#map') {
			mapShow = true;
		}
	}
	else {
		$(location).hide();
		$('#main').show();
		mainShow = true;
	}
	error.innerHTML = '';
}