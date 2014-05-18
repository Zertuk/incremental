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
			if (inventoryObject.ticket == true) {
				$('#trainStation').show();
				trainShow = true;
			}
			else {
				$('#error').html('You need a ticket to ues that');
				$('#map').show();
				$(mapLocation).hide();
			}
		}
	}
}
var campCount = 0;

function searchCamp() {
	$('#steal_items').show();
	$('#camp_text').html('There is lots of swag here, but no people still');
}
var thief = false;
function stealItems() {
	$('#error').html('You take the items and leave, gained 5000 ectoplasm, 100 blood');
	blood = blood + 100;
	ectoplasm = ectoplasm + 5000;
	enterMapLocation('#campground');
	thief = true;
}
function campgroundWait() {
	if (campCount == 0) {
		$('#camp_text').html('You waited for thirty minutes and no one showed up');
	}
	else if (campCount == 1) {
		$('#camp_text').html('Still no one around, you look around and see a lot of supplies');
	}
	else {
		$('#camp_text').html('You may now use the campers tent to rest, free of charge')
		$('#man').show();
		$('#man_text').show();
		$('#camp_scenario').hide();
		$('#camp_use').show();
	}
	campCount++;
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