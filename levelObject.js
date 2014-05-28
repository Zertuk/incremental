function levelInfo() {
	this.name = 'none',
	this.monsterNum = 5,
	this.specialMonsterNum = 0,
	this.levelLength = 50

}

var approach = new levelInfo();
approach.name = 'approach';
approach.monster = demon;
approach.specialMonster = demonWizard;
approach.levelLength = 60;
approach.specialMonsterNum = 3;
approach.text = 'There are demons everywhere!';

var cavern = new levelInfo();
cavern.name = 'cavern';
cavern.monster = rock;
cavern.text = 'Wow it is a mess in here, rocks laying in the path';

var mine = new levelInfo();
mine.name = 'mine';
mine.monster = goblinMiner;
mine.specialMonster = demon;
mines.specialMonster = 5;
mines.specialMonster = 'Goblin miners are flooding the halls'

var depths = new levelInfo();
depths.name = 'depths';
depths.monster = demon;
depths.specialMonster = demonWizard;
depths.specialMonsterNum = 1;
depths.text = 'The bottom of the mine';
depths.levelLength = 60;

var base = new levelInfo();
base.name = 'base';
base.monster = bat;
base.specialMonster = vampire;
base.levelLength = 55;
base.specialMonsterNum = 1;
base.text = 'The base of the tower';


var upper = new levelInfo();
upper.name = 'base';
upper.monster = skeleton;
upper.specialMonster = vampire;
upper.levelLength = 53;
upper.specialMonsterNum = 1;
upper.text = 'The upper level of the tower, the top is near!';


var top = new levelInfo();
top.name = 'top';
top.monster = skeleton;
top.specialMonster = reaper;
top.specialMonsterNum = 1;
top.levelLength = 55;
top.text = 'The sun is rising in the distance'

var cave = new levelInfo();
cave.name = 'cave';
cave.monster = bear;
cave.specialMonster = dropBear;
cave.monsterNum = 2;
cave.text = 'Inside a bears cave! ...Is this a good idea?'

var den = new levelInfo();
den.name = 'den';
den.monster = druid;
den.specialMonster = elderDruid;
den.levelLength = 36;
den.text = 'The heart of the bears den! Whats that house doing here?';
den.specialMonsterNum = 1;
den.monsterNum = 2;


var levelObject = {
	approach: approach,
	cavern: cavern,
	den: den,
	cave: cave,
	top: top,
	upper: upper,
	base: base,
	depths: depths,
	mine: mine
}