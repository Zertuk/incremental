function trainTicket() {
	if (inventoryObject.ticket == true) {
		$('#trainStation').toggle();
	}
	else {
		$('#error').html('You need a ticket to ues that');
	}
}

//camp stuff ahead
var campCount = 0;
var thief;
var confess;
var restPrice;


function searchCamp() {
	$('#steal_items').show();
	$('#camp_text').html('There is lots of swag here, but no people still');
}

//if you confess he charges 3x per return visit
//not a very forgiving man apparently
function campConfess() {
	$('#man_text').html('You took my stuff? Guess <br> You are paying extra!');
	confess = true;
}

//raises price based on outcome of scenario, then updates button
function raiseRestPrice() {
	if (confess) {
		restPrice = restPrice * 3;
	}
	else if (thief) {
		restPrice = restPrice * 2
	}
	else {
		restPrice = 0;
	}
	$('#rest').html('Rest(' + restPrice + ')');
}

//rest if you have the money to give full hp, otherwise error
function campRest() {
	if (ectoplasm > restPrice) {
		ectoplasm = ectoplasm - restPrice;
		player.health = player.maxHealth;
		$('camp_text').html('You are fully rested');
		raiseRestPrice();
		updateHealthBar();
	}
	else {
		$('#error').html('You need more money to rest');
	}

}

//just displays the relevant text/buttons depending on how scenario played out
function campgroundAfterScenario() {
	$('#camp_text').html('The fire is roaring')
	if (confess) {
		$('#man_text').html('Hey jerk want to rest? <br> Special Price..');
		
	}
	else if (thief) {
		$('#man_text').show().html('Sorry but someone stole my supplies, Im going <br> to have to charge for you to rest here');
	    $('#man').show();
	    $('#confess').show();
	}
	else {
		$('#man_text').html('Good to see you again, <br> feel free to rest');
	}
}

//stealing is bad okay
//adds the loot to the thieves inventory
//immediately leaves campground
function stealItems() {
	$('#error').html('You take the items and leave, gained 5000 ectoplasm, 100 blood');
	blood = blood + 100;
	ectoplasm = ectoplasm + 5000;
	$('#camp_scenario').hide();
	$('#camp_use').show();
	restPrice = 1;
	enterMapLocation('#campground');
	thief = true;
	campgroundAfterScenario();
}

//waiting... 
//onclick hides buttons for 5 seconds, waiting is hard
//you have to wait forever for him to arrive!
function campgroundWait() {
	$('#camp_text').html('You are waiting...(be patient)');
	$('#camp_scenario').hide();
	window.setTimeout(function() {
		if (campCount == 0) {
		$('#camp_text').html('You waited for thirty minutes and no one showed up');
		$('#camp_scenario').show();
	}
	else if (campCount == 1) {
		$('#camp_text').html('Still no one around, you look around and see a lot of supplies');
		$('#camp_scenario').show();
	}
	else if (campCount == 2) {
		$('#camp_text').html('The fire is starting to die down');
		$('#camp_scenario').show();
	}
	else {
		$('#camp_text').html('You may now use the campers tent to rest, free of charge')
		$('#man').show();
		$('#man_text').show();
		$('#camp_use').show();
		restPrice = 0;
	}
	}, 5000);
	
	campCount++;
}


//some church stuff
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