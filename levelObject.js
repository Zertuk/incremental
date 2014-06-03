function levelInfo() {
	this.name = 'none',
	this.monsterNum = 5,
	this.specialMonsterNum = 0,
	this.levelLength = 50

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

var mine = new levelInfo();
mine.name = 'mine';
mine.monster = goblinMiner;
mine.specialMonster = demon;
mine.specialMonster = 5;
mine.specialMonster = 'Goblin miners are flooding the halls';
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
gate.monster = demon;
gate.specialMonster = demon;
gate.levelLength = 40;
gate.text = 'gatestuff';
gate.specialMonsterNum = 1;
gate.monsterNum = 1;
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
armory.monster = demon;
armory.specialMonster = demon;
armory.levelLength = 40;
armory.text = 'armory stuff';
armory.specialMonsterNum = 1;
armory.monsterNum = 1;
armory.ascii = '
              
 
_____________________________________________________________________---
'

var throne = new levelInfo();
throne.name = 'throne';
throne.monster = demon;
throne.specialMonster = demon;
throne.levelLength = 40;
throne.text = 'throne stuff';
throne.specialMonsterNum = 1;
throne.monsterNum = 1;
throne.ascii = '
					      
					     
_____________________________';



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
	// armory: armory,
	// throne: throne
}