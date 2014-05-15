var mapShow = false;
var mainShow = true;

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