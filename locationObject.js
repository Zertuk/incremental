var button;
var oldButtons ='';


var locationObject = {
	Church: Church,
	Store: Store
}

function locationInfo() {
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

var Store = new locationInfo();
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

var Church = new locationInfo();
Church.text = 'You walk into the church and it is very dark inside, there is a figure behind the podium yet no sign of anyone else';
Church.ascii = '\n\
          	  ____                                               ____\n\
       . |       /====\\         ||                       ||         /====\\\n\
      .  |       |====|        =**=          _          =**=        |====|\n\
     .   |       |====|         ||         _( )_         ||         |====|\n\
    .    |                      ||        /_____\\        ||\n\
   .     |                 _______________\\|   |/__________________\n\
  .      |_______ ________/                | + |                  /____ _____\n\
 .      .       _U_      /                 |___|                 //   _U_\n\
       .         |      /_______________________________________//     |\n\
      .         /|\\     |______________________________________|/     /|\\\n\
     .   (=========================)     .      . (==========================)\n\
    .    |                         |/|  .       . |                          |\n\
   .     |                         | | .        . |                          |\n\
  .      |_________________________|/|.         . ||------------------------||\n\
     (=========================)  || .          . (==========================|\n\
     |                         |/|  .           . |                          |\n\
     |                         | | .            . |                          |\n\
     |_________________________|/|.             . ||------------------------||\n\
 (=========================)  || .              . (==========================)\n\
 |                         |/|  .               . |                          |\n\
 |                         | | .                . |                          |\n\
 |_________________________|/|.                 . | ________________________ |\n\
 |                        || .                  . ||   -Steve Stewart-      || \n\ ';


var Camp = new locationInfo();
Camp.text = '';
Camp.ascii = '             |\n\
                          /^\\\n\
                         / : \\             (  (   )\n\
                        /  :  \\           (          )\n\
                       / / : \\ \\        (    (   )  )\n\
    (  )  (  )        /  / :  \\ \\         ( (   )  )  )\n\
   (   ( (    )      / .   : \'   \\\n\
     (   ( )   )    / .   .:  \'   \\                           .\n\
      ( (   )      /   / . :  .    \\                                  .\n\
                  /        :   .    \\                            .\n\
                 /         :    .    \\               .\n\
                /   /  ,   :        \\ \\      .                \'    .  \'\n\
               /      ,    :           \\                  .    .      .\n\
              /            :    \\     . \\  `    .     \'      `\n\
             /   ,     /   :     \'     . \\        \' .          \'  .  \'  \'\n\
            /   ,     \'    :  .   \\     . \\   ,   ,                 .\n\
           /   ,     ,  /  :   ,   \\       \\         \'    .  .` )     ,\n\
          /   /   / ,      |    \\   \'   \\   \\    ,      .       (   )\n\
         /         ,  /    |\\        \'   `   \\                ( ) ( (\n\
        /    ,       /  /  | \\    \\       \\   \\       .     (  ( (   )\n\
       / .             /   |    \\  \\    \\      \\   ,     , \'  .( ) ) (\n\
     .`|.  ,    /          |         \\      \\   |\'.            )( ( ((, )\n\
   .`  /  ,  / /           |          \\    ,    \\  \'.          ))/)\))(\n\
_.`   / _,  /_/        /   |     \\     \\_    \\_  \\   \'.         //\\)\\\\_\n\
\\_,._/_/_\\__/____\\_________|____________\\___/_\\__|_),_/_._____//_/\\\\_\\\\__,_,._\n\
  `\' \'`  ~ \"\'` ^~~^\'`   ~^  \'~~^\'   ^^~~\' \'~~~   `\'\'  \'`  ~\'~~"" \'^"""\'\' ~~ ^"\n\
Artur Gawronski\n\ ';

var Pool = new locationInfo();
Pool.text = ''
Pool.ascii = '                %%%\;       *                      *\n\
   |  %%%\;     %%%~%%%\;               .                     .     *\n\
 # |__/__%%%____/_/~%\;%                           .\n\
     ___%%\;______%%\;%          .            *            *\n\
\" \" /~ %-//  \\ \\__%#%%_-%%\;`\n\
   |  ~%-/_%` \\ \\_/%%#%%`                                            .\n\
#  | %%%#%     \\__/%%#%%\;%`,\n\
  \"| \;%%%\;`                              *                  .\n\
   |                            *                  (\n\
| #|            *        .                                          .\n\
  ||         .                        . .        .\n\
   |                .                ` \' `               *\n\
#  |                             .\'\'\'. \' .\'\'\'.                   *\n\
  \"|  *           .                .. \' \' ..      .\n\
\'  |                         *    \'  \'.\'.\'  \'              .\n\
   |                              .\'\'\'.\'.\'\'\'.\n\
 \" |       .----------.          \' .\'\'.\'.\'\'. \'\n\
   |       |__________|            . . : . .\n\
   |_{}_{}/|__________|\\{}_{}_{} _\'___\':\'___\'_ {}_{}_{}_{}_{}_{}_{}_{}\n\
\' #| || ||/____________\\|| || ||(_____________)|| || || || || || || ||\n\
lc\'\\\"\"\"\"\"\"||          ||\"\"\"\"\"\"\"\"\"\"\"\"(     )\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\n\
\"\"\"\"\"     |            |            _)   (_             .^-^.  ~\"\"~\n\
                         ~\"\"~      (_______)~~\"\"\"~~     \'._.\'\n\
    ~~\"\"~~                     ~\"\"~                     .\' \'.\n\
                                                        \'.,.\'\n\
                                                           `\'`\'\'\n\ ';


var PoolInside = new locationInfo();
PoolInside.text = '';
PoolInside.ascii = '\n\
\n\
                      .      .       .       .\n\
  .   .       .          .      . .      .         .          .    .\n\
         .       .         .    .   .         .         .            .\n\
    .   .    .       .         . . .        .        .     .    .\n\
 .          .   .       .       . .      .        .  .              .\n\
      .  .    .  .       .     . .    .       . .      .   .        .\n\
 .   .       .    . .      .    . .   .      .     .          .     .\n\
    .            .    .     .   . .  .     .   .               .\n\
     .               .  .    .  . . .    .  .                 .\n\
                        . .  .  . . .  . .\n\
                            . . . . . .\n\
                              . . . .\n\
                               I . I\n\
                 _______________III_______________\n\
                /    .       .       .       .    \\n\
               ( ~~~ .  ~~~  .  ~~~  .  ~~~  . ~~~ )\n\
                 \\SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS/\n\
                    \\ ======================= /\n\
                        \\SSSSSSSSSSSSSSSSS/\n\
                     ________\\       /________\n\
                    (=+=+=+=+=+=+=+=+=+=+=+=+=)\n\
                     ~~~~~~~~~~~~~~~~~~~~~~~~~\n\ ';


var Tower = new locationInfo();
Tower.text ='';
Tower.ascii = ' '