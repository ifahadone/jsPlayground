// var year, yearFahad, yearFaisal;
// now= 2020;
// ageFahad = 25;
// ageFaisal = 31;

// // Math Operator
// yearFaisal = now- ageFaisal;
// yearFahad = now - ageFahad;

// console.log(yearFaisal);
// console.log(yearFahad);

// console.log(now/2);
// console.log(now*2);



// // Logical Operator
// var faisalOlder = ageFaisal > ageFahad;
// var fahadOlder = ageFaisal < ageFahad;

// console.log(faisalOlder);
// console.log(fahadOlder);



// // typeof Operator
// console.log(typeof fahadOlder);
// console.log(typeof ageFahad);
// console.log(typeof 'Faisal is Older than Fahad');

// var x;
// console.log(typeof x);



// // Operator Precedence
// var now= 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now-yearJohn >= fullAge;


// // challange 1
// var heightFhd = 1.74; // cm
// var heightFsl = 1.75;

// var massFhd = 79; //kg
// var massFsl = 75;

// var BMIFhd = massFhd/(heightFhd*heightFhd);
// var BMIFsl = massFsl/(heightFsl*heightFsl);
// console.log(BMIFhd, BMIFsl);

// var fahadHeigherBMI = BMIFhd > BMIFsl;
// console.log('is Fahad\'s BMI heigher than faisal\'s ' + fahadHeigherBMI);


// if else statements
var firstName = 'fahad';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married! ');
} else {
    console.log(firstName + ' will hopefully marry soon :) ');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married! ');
} else {
    console.log(firstName + ' will hopefully marry soon :) ');
}


var heightFhd = 1.74; // cm
var heightFsl = 1.75;
    var massFhd = 79; //kg
    var massFsl = 75;
var BMIFhd = massFhd/(heightFhd*heightFhd);
var BMIFsl = massFsl/(heightFsl*heightFsl);

if (BMIFhd>BMIFsl) {
    console.log('Fahad\'s BMI is higher than Faisal')
} else {
    console.log('Faisal\'s BMI is higher than Fahad')
}
