var button;
var oldButtons ='';
function locationObject() {
	this.questText = 'A default text display here',
	this.ascii = '|===|===|',
	this.text = '',
	this.buttons = '-',
	this.name = 'default location',
	this.specButtons = '',
	this.animate = 500,
	this.createLocButton = function(buttonClass, to, from, type) {
		this.buttons = '<button class = "' + buttonClass + '"' + ' value = "' + to + ',' + from + '">' + type + '</button>';
		this.displayButton();
	}
	this.displayButton = function() {
		console.log(oldButtons);
		$('#testLoc').html(this.buttons + oldButtons);
		oldButtons = this.buttons +''+ oldButtons;
		console.log(this.buttons);
	}
	this.createSelect = function() {
		this.select = '<select id = "' + questId + '">';
	}
$('.location_button, pre').click(function() {
		var buttonValue = $(this).attr('value');
		var split = buttonValue.split(',');
		console.log('test');
		$('#' + split[1]).hide();
		$('#' + split[0]).fadeIn('slow');
		if (split[0] == 'mountain') {
			magicDoor();
		}
		else if (split[0] == 'trainShow') {
			trainTicket();
		}
		else if (split[0] == 'store') {
			$('#store_status').html('You looking to buy?');
		}
		else if (split[0] == '#inventory') {
			inventoryList();
		}
		error.innerHTML = '';
	});
}

function animateAscii() {
	$('#location_ascii').toggle();
	$('#location_ascii2').toggle();

	setTimeout(animateAscii, 500);
}

var Store = new locationObject();
Store.ascii = "\n\
      ////^\\\\\\\\\n\
      | ^   ^ |\n\
     @ (o) (o) @\n\
      |   v   |\n\
      |  ___  |\n\
       \\_____/\n\
     ____|  |____\n\
    /    \\__/    \\\n\
   /              \\\n\
  /\\_/|        |\\_/\\\n\
 / /  |        |  \\ \\\n\
(  |  |        |   > )\n\
 \\ \\  |        |  / /\n\
  \\ \\ |________| / /\n\
   \\ \\|_I_D_I__|/ /\n\
    \\ \\ / I  \\ / /\n\
     \\ /  I   \\ /\n\
     |         |\n\
     |    |    |\n\
     |    |    |\n\
     |    |    |\n\
     |    |    |\n\
     | ## | ## |\n\
     |    |    |\n\
     |    |    |\n\
     |____|____|\n\
     (____(____)\n\
      _| | _| |\n\
  cccC__Cccc___)\n\ ";

Store.ascii2 = "\n\
      ////^\\\\\\\\\n\
      | ^   ^ |\n\
     @ -=- -=- @\n\
      |   v   |\n\
      |  ___  |\n\
       \\_____/\n\
     ____|  |____\n\
    /    \\__/    \\\n\
   /              \\\n\
  /\\_/|        |\\_/\\\n\
 / /  |        |  \\ \\\n\
(  |  |        |   > )\n\
 \\ \\  |        |  / /\n\
  \\ \\ |________| / /\n\
   \\ \\|_I_D_I__|/ /\n\
    \\ \\ / I  \\ / /\n\
     \\ /  I   \\ /\n\
     |         |\n\
     |    |    |\n\
     |    |    |\n\
     |    |    |\n\
     |    |    |\n\
     | ## | ## |\n\
     |    |    |\n\
     |    |    |\n\
     |____|____|\n\
     (____(____)\n\
      _| | _| |\n\
  cccC__Cccc___)\n\ ";

Store.text = 'You looking to buy?';

var Church = new locationObject();
Church.text = 'You walk into the church and it is very dark inside, there is a figure behind the podium yet no sign of anyone else';
Church.ascii = '
          		  ____                                               ____
       . |       /====\         ||                       ||         /====\
      .  |       |====|        =**=          _          =**=        |====|
     .   |       |====|         ||         _( )_         ||         |====|
    .    |                      ||        /_____\        ||
   .     |                 _______________\|   |/__________________
  .      |_______ ________/                | + |                  /____ _____
 .      .       _U_      /                 |___|                 //   _U_
       .         |      /_______________________________________//     |
      .         /|\     |______________________________________|/     /|\
     .   (=========================)     .      . (==========================)
    .    |                         |/|  .       . |                          |
   .     |                         | | .        . |                          |
  .      |_________________________|/|.         . ||------------------------||
     (=========================)  || .          . (==========================|
     |                         |/|  .           . |                          |
     |                         | | .            . |                          |
     |_________________________|/|.             . ||------------------------||
 (=========================)  || .              . (==========================)
 |                         |/|  .               . |                          |
 |                         | | .                . |                          |
 |_________________________|/|.                 . | ________________________ |
 |                        || .                  . ||   -Steve Stewart-      ||';
 