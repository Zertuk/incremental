function levelInfo() {
	this.name = 'none'
}

var approach = new levelInfo();
approach.name = 'approach';
approach.monster = demon;
approach.specialMonster = demonWizard;

var cavern = new levelInfo();
cavern.name = 'cavern';
cavern.monster = rock;

var mine = new levelInfo();
mine.name = 'mine';
mine.monster = goblinMiner;
mine.specialMonster = demon;

var depths = new levelInfo();
depths.name = 'depths';
depths.monster = demon;
depths.specialMonster = demonWizard;

var base = new levelInfo();
base.name = 'base';
base.monster = bat;
base.specialMonster = vampire;

var upper = new levelInfo();
upper.name = 'base';
upper.monster = skeleton;
upper.specialMonster = vampire;

var top = new levelInfo();
top.name = 'top';
top.monster = skeleton;
top.specialMonster = reaper;

var cave = new levelInfo();
cave.name = 'cave';
cave.monster = bear;
cave.specialMonster = dropBear;

var den = new levelInfo();
den.name = 'den';
den.monster = druid;
den.specialMonster = elderDruid;

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