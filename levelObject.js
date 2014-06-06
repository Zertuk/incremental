function levelInfo() {
	this.name = 'none',
	this.monsterNum = 5,
	this.specialMonsterNum = 0,
	this.levelLength = 50
	this.levelFinished = false;

}

//all level info storage, accessed with the levelObject via key
/*
----------REFERENCE ASCII.TXT TO SEE UNESCAPED ASCII----------
*/
var approach = new levelInfo();
approach.name = 'approach';
approach.monster = demon;
approach.specialMonster = demonWizard;
approach.levelLength = 60;
approach.specialMonsterNum = 3;
approach.text = 'There are demons everywhere!';
approach.levelUnlock = 'figure';
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

var mine = new levelInfo();
mine.name = 'mine';
mine.monster = goblinMiner;
mine.specialMonster = demon;
mine.specialMonster = 5;
mine.specialMonster = 'Goblin miners are flooding the halls';
mine.levelUnlock = 'depths';
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
depths.monster = demon;
depths.specialMonster = demonWizard;
depths.specialMonsterNum = 1;
depths.text = 'The bottom of the mine';
depths.levelLength = 60;
depths.ascii = '\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
\|                                                                  \'\=\|\n\
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
top.specialMonsterNum = 1;
top.levelLength = 55;
top.text = 'The sun is rising in the distance';
top.levelUnlock = 'monk';
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
den.specialMonster = elderDruid;
den.levelLength = 36;
den.text = 'The heart of the bears den! Whats that house doing here?';
den.specialMonsterNum = 1;
den.monsterNum = 2;
den.levelUnlock = 'wizard';
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
underwater.specialMonster = demon;
underwater.levelLength = 40;
underwater.name = 'underwater';
underwater.ascii = '\n\
~^~^~^~^~^~^~^~^~^~^~^^~^~^~^~^~^~~^~^~^~^~^~^~^~^~^~^~^^~^~^~^~^~^~\n\
\n\
\n\
\n\
\n\
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
	underwater: underwater
}