function levelInfo() {
	this.name = 'none',
	this.monsterNum = 5,
	this.specialMonsterNum = 0,
	this.levelLength = 50
	this.levelFinished = false;
	this.more = true;
  this.levelFinished = false;
  this.unlockSave = function() {
    this.saveShow = true;
  }
}

//all level info storage, accessed with the levelObject via key
/*
----------REFERENCE ASCII.TXT TO SEE UNESCAPED ASCII FOR MOST----------
*/

function testing(stuff) {
  stuffToShow.stuff = true;
}
var approach = new levelInfo();
approach.name = 'approach';
approach.monster = demon;
approach.specialMonster = demonWizard;
approach.levelLength = 60;
approach.specialMonsterNum = 3;
approach.text = 'There are demons everywhere!';
approach.levelUnlock = 'figure';
approach.unlockSave = function() { stuffToShow.figure = true };
approach.ascii = '  ___________________________________________________________\n\
                             \\    /\n\
            _\|\|_              \|  \|            _\|\|_\n\
           \|_  _\|             \|  \|           \|_  _\|  \n\
        \^    \|\|     \^         \|  \|        \^    \|\|     \^  \n\
      __\|____\|\|_____\|__       \|  \|      __\|____\|\|_____\|__  \n\
     \|                 \|     /____\\    \|                 \|\n\
\n\
<p class = "level">\n\ ';

var cavern = new levelInfo();
cavern.more = false;
cavern.name = 'cavern';
cavern.monster = rock;
cavern.specialMonster = rock;
cavern.text = 'Wow it is a mess in here, rocks laying in the path';
cavern.ascii = '\n\
\\__                                      \n\
   \\___________   \n\
       \\/ \\/   \\__ \n\
        "  "      \\________________ \n\
                      \\/  ""   \\/  \\_______________\n\
          \n\
\<p class \= "level"\>\</p\>\n\
\n\ ';
cavern.levelUnlock = 'mine';
cavern.unlockSave = function() { stuffToShow.mine = true };

var mine = new levelInfo();
mine.name = 'mine';
mine.monster = goblinMiner;
mine.specialMonster = demon;
mine.specialMonsterNum = 0;
mine.text = 'Goblin miners are flooding the halls';
mine.levelUnlock = 'depths';
mine.unlockSave = function() { stuffToShow.depths = true };
mine.ascii = '____________________________________________________\n\
\n\
      \$            \$\$          \$\$     \$       \n\
 ____\$\$\$_\'\\-o_____\|\$\$\$\|__o-/\'_\$\$\$\$___\$\$\$_____________\n\
 \n\
\<p class \= "level"\>\</p\>\n\
 ====================================================\n\
 \|\\/\|        \|\\/\|        \|\\/\|        \|\\/\|        \|\\/\|\n\
 \|/\\\|        \|/\\\|        \|/\\\|        \|/\\\|        \|/\\\|\n\
 \|\\/\|        \|\\/\|        \|\\/\|        \|\\/\|        \|\\/\|\n\ ';


var depths = new levelInfo();
depths.name = 'depths';
depths.levelUnlock = 'tower_map';
depths.unlockSave = function() { stuffToShow.tower_map = true };
depths.monster = demon;
depths.specialMonster = demonWizard;
depths.specialMonsterNum = 1;
depths.text = 'The bottom of the mine';
depths.levelLength = 60;
depths.ascii = '\n\
\|                                                   _.-`           \'\=\|\n\
\|                                               _.-`               \'\=\|\n\
\|                                           G.-`                   \'\=\|\n\
\|                                        .-`                       \'\=\|\n\
\|                $                   _.-`             $            \'\=\|\n\
\|______G______G_$$$______G________.-`______________G_$$$___________\'\=\|\n\
\|                                                                  \'\=\|\n\
\|                       `           `                     `        \'\=\|\n\
\|                                             `                    \'\=\|\n\
\|        `                         `                               \'\=\|\n\
\|                      `                            `              \'\=\|\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
\<p class \= \'level\'\>\</p\>/\=/\|\n\ ';

var base = new levelInfo();
base.name = 'base';
base.monster = bat;
base.specialMonster = vampire;
base.levelLength = 55;
base.specialMonsterNum = 1;
base.text = 'The base of the tower';
base.levelUnlock = 'upper';
base.unlockSave = function() { stuffToShow.upper = true };
base.ascii = '_______________________________________________________________\n\
\n\
   __       __       __       __       __       __       __\n\
  \|__\|     \|__\|     \|__\|     \|__\|     \|__\|     \|__\|     \|__\|\n\
\n\
\n\
\<p class \= \"level\"\>\</p\>,--\|\n\ ';

var upper = new levelInfo();
upper.name = 'base';
upper.monster = skeleton;
upper.specialMonster = vampire;
upper.levelLength = 53;
upper.specialMonsterNum = 1;
upper.text = 'The upper level of the tower, the top is near!';
upper.levelUnlock = 'top';
upper.unlockSave = function() { stuffToShow.top = true };
upper.ascii = '\n\
 ____      ____      ____      ____      ____      ______      _____\n\
\|    \|____\|    \|____\|    \|____\|    \|____\|    \|____\|    \'\=\|____\|     \|\n\
                                                       \'\=\|          \|\n\
                                                       \'\=\|          \|\n\
                                                       \'\=\|          \|\n\
                                                       \'\=\|          \|\n\
                                                       \'\=\|          \|\n\
\<p class \= \"level\"\>\</p\>\'\=\|          \|\n\ ';

var top = new levelInfo();
top.name = 'top';
top.monster = skeleton;
top.monsterNum = 4;
top.specialMonster = reaper;
top.specialMonsterNum = 2;
top.levelLength = 55;
top.text = 'The sun is rising in the distance';
top.levelUnlock = 'monk_button';
top.unlockSave = function() { stuffToShow.monk_button = true };
top.ascii = '\n\
\n\
\n\
\n\
                         \|\n\
                     \\       /\n\
                       .-\'-.\n\
                  --  /     \\  --\n\
\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\n\
                                                         o\n\
                                                         ^\n\
\<p class \= \"level\"\>\n\ ';

var cave = new levelInfo();
cave.name = 'cave';
cave.monster = bear;
cave.specialMonster = dropBear;
cave.monsterNum = 2;
cave.text = 'Inside a bears cave! ...Is this a good idea?';
cave.levelUnlock = 'den';
cave.unlockSave = function() { stuffToShow.den = true };
cave.ascii = '                    _______________________\n\
    _______________________________\\          ____\n\
___/                                         /\=\=\=\=\\\n\
____                ----                _____\|_dR_\|___.^._\n\
    \\_______       /_dB_\\      ___dB___/\n\
            \\__dB_____________/\n\
_________                                -----\n\
  -----  \\_________                     /_____\\\n\
 /_B_B_\\           \\                  ________________\n\
__,o________________\\________________/_______,o_______\___\n\
\n\
\<p class \= "level"\>\n\ ';

var den = new levelInfo();
den.name = 'den';
den.monster = druid;
den.monsterNum = 3;
den.specialMonster = elderDruid;
den.levelLength = 36;
den.more = false;
den.text = 'The heart of the bears den! Whats that house doing here?';
den.specialMonsterNum = 1;
den.monsterNum = 2;
den.levelUnlock = 'wizard_button';
den.unlockSave = function() { stuffToShow.wizard_button = true;
                              stuffToShow.wizard_home = true;
                              $('#wizard_home').show();
                              stuffToShow.castle = true;
                              $('#castle').show(); };
den.ascii = '\n\
                                 /            \\\n\
                               _/              \\\n\
                              /                 \|\n\
__                           /                   \\\n\
  \\____/----\\_______________/                     \\\n\
                                                   \\___\n\
                                                       \\\n\
                                          *             \|\n\
                                              *          \\\n\
                                           ____[]         \\\n\
                                          /\\     \\         \|\n\
                                         /__\\_____\\       /\n\
                                         \|\|\|\|[] []\|      /\n\
\<p class \= "level"\>\</p\>\n\ ';

var gate = new levelInfo();
gate.name = 'gate';
gate.monster = skeleton;
gate.specialMonster = undeadKnight;
gate.levelLength = 40;
gate.text = 'gatestuff';
gate.specialMonsterNum = 3;
gate.monsterNum = 10;
gate.levelUnlock = 'armory';
gate.unlockSave = function() { stuffToShow.armory = true };
gate.ascii = '\n\
\n\
\n\
\n\
                          =o==o=       =o==o=\n\
                          |    |-------|    |\n\
                          | [] |=======| [] |\n\
                          |    |=======|    |\n\
                          | || |=======| || |\n\
<p class \= \"level\"></p>\n\ ';

var armory = new levelInfo();
armory.name = 'armory';
armory.monster = undeadKnight;
armory.specialMonster = warlock;
armory.levelLength = 40;
armory.text = 'armory stuff';
armory.specialMonsterNum = 2;
armory.monsterNum = 4;
armory.levelUnlock = 'throne';
armory.unlockSave = function() { stuffToShow.throne = true };
armory.ascii = '\n\
--------------------------------------------------\n\
\n\
   I        ___       I        ___    \n\
  _|_      [===]     _|_      [===]   \n\
  | |      | $ |     | |      | $ | \n\
  |\'|      \\___/     |\'|      \\___/  \n\
  \\_/                \\_/             \n\
\n\
<p class = "level"></p>\n\ ';

var throne = new levelInfo();
throne.name = 'throne';
throne.monster = undeadKnight;
throne.specialMonster = castleTroll;
throne.levelLength = 35;
throne.text = 'throne stuff';
throne.specialMonsterNum = 1;
throne.monsterNum = 5;
throne.levelUnlock = 'lich';
throne.unlockSave = function() { stuffToShow.lich = true };
throne.ascii = '\n\
===================================================\n\
        |           |           |           |      \n\
     ^__^__^     ^__^__^     ^__^__^     ^__^__^   \n\
       ===         ===         ===         ===     \n\
                                                   \n\
            .___.       .___.       .___.          \n\
            [===]       [===]       [===]          \n\
       	    | $ |       | $ |       | $ |          \n\
            [===]       [===]       [===]     +****+\n\
             \\_/         \\_/         \\_/     |      |\n\
                                            (+)----(+)\n\
                                             ]\'\'\'\'\'\'[ \n\
<p class = "level"></p>==============\n\ ';


var underwater = new levelInfo();
underwater.monster = fish;
underwater.monsterNum = 1;
underwater.specialMonster = shark;
underwater.specialMonsterNum = 1;
underwater.levelLength = 40;
underwater.name = 'underwater';
underwater.text = 'These fish have some sharp looking teeth!';
underwater.ascii = '\n\
~^~^~^~^~^~^~^~^~^~^~^^~^~^~^~^~^~~^~^~^~^~^~^~^~^~^~^~^^~^~^~^~^~^~\n\
\n\
\n\
\n\
<p class = "level"></p>\n\
\n\
\n\
\n\
 \n\
                 ~          )   )           )   )\n\
  }     ~              (    (   (      (    (   (\n\
 {                      )    )   )     )    )   )\n\
  }  }         .       (    (   (     (    (   (\n\
 {  {               /^^^^^^^^^^^^jgs^^^^^^^^^^^^\\\n\
^^^^^^^^^\\         /                            ^^^^^^^^^^^^^^^^^^\n\
          ^^^^^^^^^\'\n\ ';


var woods = new levelInfo();
woods.monster = undeadWolf;
woods.monsterNum = 4;
woods.specialMonster = undeadBear;
woods.specialMonsterNum = 1;
woods.levelLength = 55;
woods.text = 'These trees are gigantic! And there are lich controlled monsters in here..'
woods.name = 'woods';
woods.levelUnlock = 'cabin';
woods.unlockSave = function() { stuffToShow.cabin = true };
woods.ascii = '\n\
       |  |   \\\\|.\'    |  |    \\\\|.\'   |  |     \\\\|.\'  |  |\n\
       | ||   \\\\` /   _.| ||,!  \\` /   _| ||\\,!  \\` /   | ||\n\
       ||||`. f |_.-\'.\'||||\\`. f |_.-\'.|||| \\`. f |_.-\'||||\n\
       | ||\\ \\|! ,-\'   | || \\ \\|! ,-\'M | ||  \\ \\|! ,-\' | ||\n\
       || |W`. ||  N   || |  `. ||   N || |   `. ||    || |\n\
       ||||H `. |  W   ||||  H`. |   W ||||    `. |    ||||\n\
       || |N  |L|  M   || |  N |L|   M || |    N|L|    || |\n\
       | ||W  ||]  H   | ||  W ||]   H | ||    W||]    | ||\n\
       ||||M  [ I  W   ||||  M [ I   W ||||    M[ I    ||||\n\
       || |H  I |  M   || |  H I |   M || |    HI |    || |\n\
       | [|N, !l| ,H\  | [| /N,!l|  ,H\| [|   /N!l|    | [|\n\
       || |   \'-`      || |    \'-`     || |     \'-`    || |\n\
      / \'| \\          / \'| \\          / \'| \\          / \'| \\ \n\
      <p class = "level"></p> \n\ ';

var cabin = new levelInfo();
cabin.monster = undeadBear;
cabin.monsterNum = 0;
cabin.specialMonster = undeadWizard;
cabin.specialMonsterNum = 1;
cabin.text = 'Theres the cabin! Looks like an Undead Wizard was squatting there';
cabin.name = 'cabin';
cabin.levelUnlock = 'cabin_map'
cabin.unlockSave = function() { stuffToShow.cabin_map = true };
cabin.more = false;
cabin.ascii = '\n\
       |  |   \\\\|.\'    |  |    \\\\|.\'   |  |     \\\\|.\'        |  |\n\
       | ||   \\\\` /   _.| ||,!  \\` /   _| ||\\,!  \\` /  -.____| ||\n\
       ||||`. f |_.-\'.\'||||\\`. f |_.-\'.|||| \\`. f |_.-\'----._||||\n\
       | ||\\ \\|! ,-\'   | || \\ \\|! ,-\'M | ||  \\ \\|! ,-\'       | ||\n\
       || |W`. ||  N   || |  `. ||   N || |   `. ||          || |\n\
       ||||H `. |  W   ||||  H`. |   W ||||    `. |          ||||\n\
       || |N  |L|  M   || |  N |L|   M || |    N|L|          || |\n\
       | ||W  ||]  H   | ||  W ||]   H | ||    W||]          | ||\n\
       ||||M  [ I  W   ||||  M [ I   W ||||    M[ I          ||||\n\
       || |H  I |  M   || |  H I |   M || |    HI |    T     || |\n\
       | [|N, !l| ,H\  | [| /N,!l|  ,H\| [|   /N!l|   /\\- --\\  | [|\n\
       || |   \'-`      || |    \'-`     || |     \'-`/  \\ -  \\ || |\n\
      / \'| \\          / \'| \\          / \'| \\       |[]| [] |/ \'| \\ \n\
      <p class = "level"></p> \n\ ';


var sewer = new levelInfo();
sewer.name = 'sewer';
sewer.text = 'This place is sick';
sewer.levelLength = 46;
sewer.monster = turtle;
sewer.monsterNum = 3;
sewer.more = false;
sewer.specialMonster = rat;
sewer.specialMonsterNum = 1;
sewer.ascii = '\n\
_________________________________________________...______\n\
    ""                             ""             =\n\
                    `     $$$$                    =     $$\n\
   ` <strike>L!(|-|</strike>               OBEY                    =     OB\n\
      <strike>5ux</strike>                 LICH                    =     LI\n\
--------------------------------------------------=-------\n\
__________________________________________________=_______\n\
|-|-|-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-|-|-||-|-|-|\\ \\|-|-|-|\n\
<p class = "level"></p>\\\n\ ';

var inside = new levelInfo();
inside.levelUnlock = 'sewer';
inside.unlockSave = function() { stuffToShow.sewer = true };
inside.text = 'This place is sick';
inside.levelLength = 35;
inside.monster = turtle;
inside.monsterNum = 2;
inside.specialMonster = slime;
inside.specialMonsterNum = 1;
inside.ascii = '\n\
__________________________________________________________\n\
    ""                             ""              \n\
                 `   $$$$         `             $$$$\n\
   `                 OBEY          `            OBEY\n\
                     LICH            -          LICH\n\
----------------------------------------------------------\n\
__________________________________________________________\n\
|-|-|-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-|-|-||-|-|-||-|-|-|-|\n\
<p class = "level"></p>\n\ ';

var entrance = new levelInfo();
entrance.levelUnlock = 'prison';
entrance.unlockSave = function() { stuffToShow.prison = true };
entrance.text = 'No backing out now!';
entrance.levelLength = 33;
entrance.monster = undeadKnight;
entrance.monsterNum = 1;
entrance.specialMonster = scientist;
entrance.specialMonsterNum = 3;
entrance.ascii = '\n\
--|------|------------|-------|------------|-------|-----------|-------|-\n\
  ========            =========            =========           =========\n\
\n\
     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                                 \n\
     $ REMEMBER: LICH IS WATCHING $                   [ Hanger -> ]\n\
     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                                \n\
                                                                      _-`\n\
                                                                   _-`\n\
                                                                _-`\n\
                                                             _-`  \n\
<p class = "level"></p>________________________-`     \n\
                                  `-_                                  \n\
                                     `-_         ____  ____  ____  ____\n\
                                        `-_      ||||  ||||  ||||  ||||\n\
                                           `-____||||__||||__||||__||||\n\
                                                                  \n\ ';

var prison = new levelInfo();
prison.levelUnlock = 'tunnel';
prison.unlockSave = function() { stuffToShow.tunnel = true };
prison.text = 'Wonder what these guys did';
prison.levelLength = 40;
prison.monster = scientist;
prison.monsterNum = 1;
prison.specialMonster = jailer;
prison.specialMonsterNum = 3;
prison.ascii = '\n\
-----------------------------------------------\n\
                                               \n\
            $$$$$$$$      $$$$$$$$\n\
              LICH          LICH  \n\
            IS  LOVE      IS  LIFE\n\
            $$$$$$$$      $$$$$$$$\n\
                                       \n\
____  ____  ____  ____  ____  ____  ____\n\
||||  ||||  ||||  ||||  ||||  ||||  ||||\n\
||||__||||__||||__||||__||||__||||__||||_______\n\
                                          __________\n\
                                          |--|------\n\
<p class = "level"></p>|  |$$$$$$$\n\
------------------------------------------------\n\ ';


var tunnel = new levelInfo();
tunnel.levelUnlock = 'danger';
tunnel.unlockSave = function() { stuffToShow.danger = true };
tunnel.text = 'A giant Jail Ogre is here!';
tunnel.levelLength = 28;
tunnel.monster = jailer;
tunnel.monsterNum = 2;
tunnel.specialMonster = jailOgre;
tunnel.specialMonsterNum = 1;
tunnel.ascii = '\n\
----------------------------------------------\n\
   $$$$$$$$$$$$$$$$$$$$                    \n\
   $ LICH IS WATCHING $                    \n\
   $ BECAUSE HE CARES $                    \n\
   $$$$$$$$$$$$$$$$$$$$  [DANGER]          \n\
      ____      ____      O====O     ____   \n\
      ||||      ||||      |    |     ||||  \n\
______||||______||||______|----|_____||||______\n\
\n\
<p class = "level"></p>_____________________\n\
---------------------------------------------------\n\ ';

var hanger = new levelInfo();
hanger.levelUnlock = 'laboratory';
hanger.unlockSave = function() { stuffToShow.laboratory = true };
hanger.text = 'Finally! The rockets!';
hanger.levelLength = 45;
hanger.monster = rocketScientist;
hanger.specialMonster = astronaut;
hanger.specialMonsterNum = 4;
hanger.more = false;
hanger.ascii = '\n\
------|--------|------|--------|------|--------|------\n\
      ==========      ==========      ==========\n\
\n\
\n\
\n\
          A             A             A\n\
         / \\           / \\           / \\\n\
         |=|           |=|           |=|\n\
         | |           | |           | |\n\
         | |           | |           | |\n\
        _|=|_         _|=|_         _|=|_\n\
_______/ | | \\_______/ | | \\_______/ | | \\_________\n\
       | \\,/ |       | \\,/ |       | \\,/ |\n\
       |/\" \"\\|       |/\" \"\\|       |/\" \"\\| \n\
\n\
<p class = "level"></p>_______ \n\ ';


var danger = new levelInfo();
danger.levelUnlock = 'hanger';
danger.unlockSave = function() { stuffToShow.hanger = true };
danger.levelLength = 40;
danger.monster = beast;
danger.text = 'some kind of arena... A giant beast is in the center!';
danger.monsterNum = 0;
danger.specialMonster = rock;
danger.more = false;
danger.ascii = '\n\
 ------------------------------------------------------------------------------------------------\n\
/               ................       $-$$$$$$$$$-$     ......................                  \\\n\
   ^----^       $FIGHT  BRAVELY$       $ ^-------^ $     $ THE LICH BELIEVES  $   ^----^          |\n\
   |    |       $ FOR THE LICH $       $ |       | $     $  IN YOUR STRENGTH  $   |    |          |\n\
   \\====/       ................         \\=======/       ......................   \\====/          |\n\
                                        _                                                         |\n\
                                       \\`*-.                                                      |\n\
|-_-_-_-_-|==|-_-_-_-_-|==|-_-_-_-_-|   )  _`-.    |-_-_-_-_-|==|-_-_-_-_-|==|-_-_-_-_-|          |\n\
          |==|         |==|             .  : `.`.            |==|         |==|                    |\n\
|-_-_-_-_-|==|-_-_-_-_-|==|-_-_-_-_-|   : _   \'  \\ |-_-_-_-_-|==|-_-_-_-_-|==|-_-_-_-_-|          |\n\
          |==|         |==|             ; *` _.   `*-._      |==|         |==|                    |\n\
|-_-_-_-_-|==|-_-_-_-_-|==|-_-_-_-_-|    `-.-\'          `-._-|==|-_-_-_-_-|==|-_-_-_-_-|          |\n\
                                           ;       `       `.                                     |\n\
-------------------------------------------:.       .        \\------------------------------------|\n\
                                           . \\  .   :   .-\'  .                                    |\n\
                                           \'  `+.;  ;  \'      :  [bug]                            |\n\
                                           :  \'  |    ;       ;-.                                 |\n\
                                           ; \'   : :`-:     _.`* ;                                |\n\
                                         .*\' /  .*\' ; .*`- +\'  `*\'                                |\n\
<p class = "level"></p>*-*   `*-*  `*-*                                       |\n\ ';       

var finish = new levelInfo();
finish.levelLength = 46;
finish.levelUnlock = 'end_button';
finish.unlockSave = function() { stuffToShow.end_button = true;
                                 stuffToShow.badEnd_button = true;
                                 $('#badEnd_button').show();  }
finish.text = 'The final battle!';
finish.monster = lich;
finish.monsterNum = 0;
finish.more = false;
finish.specialMonster = rock;
finish.ascii = '\n\
\n\
     .                                       /,\\\n\
                                   .         \\|/\n\
       *          .                           |     ___\n\
                                       .     (=\\.  /-. \\\n\
                                              |\\/\\_| |  |\n\
    .                *                        |_\\ |;-|  ;\n\
                               .              | / \\| |_/ \\\n\
                  .                           | )/\\/      \\\n\
         .                                    | ( \'|  \\   |\n\
   .                              .           |    \\_ /   \\\n\
                     .                        |    /  \\_.--\\\n\
                                              \\    |    (|\\`\n\
                                               |   |     \\\n\
               .                               |   |      \'.\n\
                                               |  /         \\\n\
<p class = "level"></p>  \\.__.__.-._)\n\ ';
var levelObject = {
	approach: approach,
	cavern: cavern,
	den: den,
	cave: cave,
	top: top,
	upper: upper,
	base: base,
	depths: depths,
	mine: mine,
	gate: gate,
	armory: armory,
	throne: throne,
	underwater: underwater,
	woods: woods,
	cabin: cabin,
	sewer: sewer,
	inside: inside,
  entrance: entrance,
  prison: prison,
  tunnel: tunnel,
  danger: danger,
  hanger: hanger,
  finish: finish
}