// Fighter constructor

function Fighter (options){
	
	options = options || {};

	this.age = options.age || 18;
		// will give specified age or age of 18 if age is no given
	
	this.hp = options.hp || 1000;

	this.kick = function kick (target){
		var kickDamage = Math.floor((this.age / 2) * 10);
		target.hp -= kickDamage;
		return kickDamage; 
	};

	this.punch = function punch (target){
		var punchDamage = Math.floor((this.age / 2) * 5);
		target.hp -= punchDamage;
		return punchDamage; 
	};
};

// Character constructor

function Class (options){

	options = options || {};

	this.kind = options.kind || 'Melee';

	this.hitpoints = options.hitpoints || 100;

	this.alignment = options.alignment || 'Neutral';

	// var evil = options.alignment(evil) || false;
	// var good = options.alignment || true;
	this.power = (options.melee + options.magic);

	this.magic = options.magic || 0;

	this.weapon = options.weapon || 'Does not have specific weapon skill';

	this.fireball = ((this.magic * 5) / 2) || 'Cannot use fireball attack';

	this.slash = function slash (target){
		var slash = ((this.melee / 2) * 3);
		target.hitpoints -= slash;
		return slash;
	};

	// this.smash = function smash (target){
	// 	var power = (options.melee + options.magic);
		
	// 	return power;

	// 	var power = this.power || 5;

	// };

	

	
	// this.fire = options.fireDamage;
	// 	options.fireDamage = function fireball (target){((this.magic * 5) / 2);};
	// 	var fire = options.fireDamage 


	// this.fireball = 
	// 	optionDamage = ((this.magic * 5) / 2);
	// 	target.hitpoints -= fireDamage;
	// 	return fireDamage;
	// 	// target.hitpoints -= fireDamage;
	// 	// return fireDamage;
	// };
	
};

// Student constructor

function Student (options){

	options = options || {};

	this.firstName = options.firstName || 'First name unavailable';
	this.lastName = options.lastName || 'Last name unavailable'; 

	this.full = (options.firstName + " " + options.lastName);

	this.age = options.age || 'Age Unknown';

	this.favoriteSubject = options.favoriteSubject || 'No favorite'
	this.favoriteSport = options.favoriteSport || 'No favorite sport'

	this.passSchool = 69 <= this.averageGrade;
	this.failSchool = 69 > this.averageGrade;

	this.passMath = 69 <= options.gradeMath < 100;
	this.failMath = 69 > options.gradeMath;

	this.passReading = 69 <= options.gradeReading < 100;
	this.failReading = 69 > options.gradeReading;

	this.passHistory = 69 <= options.gradeHistory < 100;
	this.failHistory = 69 > options.gradeHistory;

	options.CurrentYear = 2013;
	this.birthyear = (options.CurrentYear - options.age);

	// this.rank = options.rank || 'Not ranked';
	// 	highestRank = if (this.rank = 1);
	// 	lowestRank = if (this.rank = 5);

	this.averageGrade = Math.floor((options.gradeMath + options.gradeReading + options.gradeHistory) / 3); 
	;
};
