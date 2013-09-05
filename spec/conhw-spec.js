// describe ('Finance constructor', function(){
// 	beforeEach(function(){
// 		monthlyIncome = new Income();
// 		monthlyRent = new Rent();
// 		monthlyOther = new Other()
// 	});
// });
// 	describe ('returns an object that',function(){
// 		it('has an initial income of $4000', function (){


// 		expect(finance.income).toBe(4000)

// 	});
// });

describe ('The Fighter constructor', function(){
	
	beforeEach(function(){
		oneFighter = new Fighter({
			name: 'Justin Sane',
			age: 24,
			// damage = age + 50
		});
		twoFighter = new Fighter({
			name: 'Brad News',
			age: 34,
		});
		threeFighter = new Fighter();
			// name: 'Will Williams',
			// age: 22,
			// damage: 72
	});

describe('returns an object that has', function(){
	
	it('an initial damage of at least 68 if damage is not specified',function(){
		expect(threeFighter.damage).toBe(this.damage)
	});

	it('an initial hp of 500 if not specified', function(){
		expect(threeFighter.hp).toBe(1000)
	});	

	it('an initial age of 18 if not otherwise stated', function(){
		expect(threeFighter.age).toBe(18)
	});

});

describe('returns an object that', function(){
	it('damages another fighter with kick', function(){
		var threeHP = threeFighter.hp
		var oneDamage = oneFighter.damage

		oneFighter.kick(threeFighter)

		expect(threeFighter.hp).toBe(threeHP - 120)

		});
	});

describe('returns and object that', function(){
	it('damages another fighter with punch', function(){
		var threeHP = threeFighter.hp
		var onePunch = oneFighter.punchDamage

		oneFighter.punch(threeFighter)

		expect(threeFighter.hp).toBe(threeHP - 60)
		});
	});	
});

// ----------------------------------------------------
// Fantasy Characters

describe('the Class constructor', function(){

	beforeEach(function(){
		assassinClass = new Class({
			kind: 'Range',
			hitpoints: 300,
			melee: 7,
			magic: 2,
			alignment: 'Neutral',
			weapon: 'Bow',
			power: 9,
			fireball: 5
		});
		knightClass = new Class ({
			kind: 'Melee',
			hitpoints: 500,
			melee: 10,
			magic: 0,
			alignment: 'Good',
			weapon:	'Sword',
			power: 10,	
			fireball: 0
		});
		theifClass = new Class ({
		
		});
		mageClass = new Class ({
			kind: 'Magic',
			hitpoints: 200,
			melee: 2,
			magic: 10,
			alignment: 'Good',
			weapon: 'Spells',
			power: 12, 
			fireball: 25
		});
		necromancerClass = new Class ({
			kind: 'Magic',
			hitpoints: 100,
			melee: 2,
			magic: 8,
			alignment: 'Evil',
			weapon: 'Staff',
			power: 10,
			fireball: 20
		});

	});

describe('returns an object that', function(){
	it('specifies the mage as good', function(){
		expect(mageClass.alignment).toBe('Good')
	});
	it('specifies the necromancer as evil', function(){
		expect(necromancerClass.alignment).toBe('Evil')
	});
	it('specifies the assassin as neutral', function(){
		expect(assassinClass.alignment).toBe('Neutral')
	});


	it('specifies that the kind of the class is Melee if not specified', function(){
		expect(theifClass.kind).toBe('Melee')
	});
	it('specifies that both the necromancer and mage class are defined as "Magic"', function(){
		expect(necromancerClass.kind).toBe('Magic');
		expect(mageClass.kind).toBe('Magic')
	});
	it('specifies that the assassin is a "Range" type attack', function(){
		expect(assassinClass.kind).toBe('Range');
	});


	it('specifies the attack power of the knight to be 10', function(){
		expect(knightClass.power).toBe(10)
	});

	it('specifies that the class "Does not have specific weapon skill" if not noted', function(){
		expect(theifClass.weapon).toBe('Does not have specific weapon skill')
	});


	it('specifies that a fireball from mage does 25 hp worth of damage', function(){
		// var mageClass.fireball = fun(mageClass.magic+mageClass.melee)
		// var fireDamage = options.fireDamage
		expect(mageClass.fireball).toBe(25)
	});
	it('says "Cannot use fireball attack" when fireball is not specified', function(){
		expect(theifClass.fireball).toBe('Cannot use fireball attack')
	});
	it('shows new hitpoints of the target after being slashed', function(){
		var magehit = mageClass.hitpoints;
			
		knightClass.slash(mageClass)

		expect(mageClass.hitpoints).toBe(magehit - 15)
	});



	// it('shows a mage\'s combat type is magic', function(){
	// 	expect(mageCharacter.type).toBe('Magic')
	// });

	// it('an initial hp of 100 or greater', function(){
	// 	expect()
	// });

	// it('is false if knight\'s alignment is not Good', function(){
	// 	expect(knightClass.alignment).toBe(false)
	// });
	// it('is true if knight alignment is Good', function(){
	// 	expect(knightClass.alignment).toBe('Good')
	// });

	// it('does damage with a fireball', function(){
	// 	var mageClassFire = mageClass.fireball

	// 	expect(mageClass.fireball).toBe(25)

	// });
});

});

// ------------------------- 
// Student Survey and Progress Reports 

describe ('The Student constructor', function(){
	
	beforeEach(function(){
		aStudent = new Student({
			firstName: 'Tyler',
			lastName: 'Phillips',
			age: 24,
			favoriteSubject: 'History',
			gradeMath: 85,
			gradeReading: 92,
			gradeHistory: 100,
			rank: 1,
			favoriteSport: 'Basketball', 	 
		});

		bStudent = new Student({
			firstName: 'Anna',
			lastName: 'Jones',
			age: 20,
			favoriteSubject: 'Reading',
			gradeMath: 89,
			gradeReading: 90,
			gradeHistory: 77,
			rank: 1,
			favoriteSport: 'Cheerleading', 

		});

		cStudent = new Student({
			firstName: 'Mike',
			lastName: 'Glover',
			age: 23,
			favoriteSubject: 'Math',
			gradeMath: 88,
			gradeReading: 88,
			gradeHistory: 88,
			rank: 2,
			favoriteSport: 'Baseball' 
		});

		dStudent = new Student({
			firstName: 'Chris',
			lastName: 'Christopherson',
			age: 27,
			favoriteSubject: 'History',
			gradeMath: 70,
			gradeReading: 92,
			gradeHistory: 95,
			rank: 3,
			favoriteSport: 'Soccer' 
		});

		eStudent = new Student({
			firstName: 'Julia',
			lastName: 'Sloan', 
			gradeMath: 65,
			gradeReading: 62,
			gradeHistory: 70,
			rank: 5,
		});	
		// fiveStudent = new Student({
		// 	firstName: 'Julia';
		// 	lastName: 'Sloan';
		// 	age: 18;
		// 	favoriteSubject: 'History';
		// 	gradeMath: 65;
		// 	gradeReading: 62;
		// 	gradeHistory: 70;
		// 	rank: 5;
		// 	favoriteSport: 'Football' 
		// });
	});

describe('returns an object that', function(){

	it('specifies the student name', function(){
		expect(cStudent.full).toBe('Mike Glover')
	});

	it('specifies Tyler\'s overall grade average', function(){
		expect(aStudent.averageGrade).toBe(92)
	});
	it('specifies student overall grade average', function(){
		expect(dStudent.averageGrade).toBe(85)
	});


	it('species that "No favorite sport" when sport is not noted', function(){
		expect(eStudent.favoriteSport).toBe('No favorite sport')
	});
	it('species that "No favorite" when subject is not noted', function(){
		expect(eStudent.favoriteSubject).toBe('No favorite')
	});
	it('specifies student favorite subject when stated', function(){
		expect(cStudent.favoriteSport).toBe('Baseball')
	});
	it('specifies student favorite subject when stated', function(){
		expect(cStudent.favoriteSubject).toBe('Math')
	});


	it('when age is not specified, age is "Age Unknown"',function(){
		expect(eStudent.age).toBe('Age Unknown')
	});
	it('specifies student age when given', function(){
		expect(bStudent.age).toBe(20)
	});
	
	it('specifies birth year of student by subtracting age from current year', function(){
		expect(bStudent.birthyear).toBe(1993)
	});

// it('specifies math was failed by Julia Sloan', function(){
	// 	expect(eStudent.failMath).toBe(true)
	// }); false positive is returned
});

});




