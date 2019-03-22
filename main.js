<script>

// console


console.log(20);
console.log(7);

// comments


console.log('Hi '); // opening line

/*console.log();*/


// Data type

console.log("JavaScript");
console.log(2011);
console.log("Hi");
console.log(20.49);

// Arthimetic operator

console.log(3.5+20);
console.log(2018 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

// string concatenation

console.log('Hello' + 'World' );
console.log('Hello' +' '+ 'World' );

// .lenght property

console.log('Hello' + 'World' );
console.log('Hello' +' '+ 'World' );

// .trim .uppercase Methods
console.log('Hello'.toUpperCase());
console.log('    Remove whitespace   '.trim());

// bulid in objects

console.log(Math.random()*100 );
console.log(Math.floor(Math.random()*100 ));
console.log(Math.ceil(2<=43.8));
console.log(Number.isInteger(2017));

// variables
var favoriteFood ="pizza";
var numOfSlices = 8;
console.log(numOfSlices);
console.log(favoriteFood);

// let variables

let changeMe =true;
changeMe = false;
console.log(changeMe);

// const variables
const entree = "Enchiladas";
console.log(entree);
entree = "Tacos";

// Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
levelUp +=5;
powerLevel -=100
multiplyMe *=11
quarterMe /=4
 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

// increment and decrement operator
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++
console.log(gainedDollar++);
lostDollar--
console.log("hiiii",lostDollar--);

  // String Concatenation with Variables

var favoriteAnimal = "dog";
console.log('My favorite animal:' +favoriteAnimal );

// String Interpolation

var myName =`aa`;
var myCity=   `bb`;
console.log(`My name is ${myName}.My favorite city is ${myCity}`);


// typeof operator

let newVariable = 'Playing around with typeof.';
console.log(typeof(newVariable));
newVariable = 1;
console.log(typeof(newVariable));

// conditional statements

  // if statements
    let sale=true;
    sale=false;
    if(sale){
      console.log('Time to buy!');
    }

// if else

    let sale = true;

    sale = false;

    if(sale) {
      console.log('Time to buy!');
    }
    else{
      console.log('Time to wait for a sale.');
    }

  // Comparison Operators
    let hungerLevel=7;
      if(hungerLevel>7){
        console.log('Time to eat!');
      }
      else{
        console.log('We can eat later!');
      }

// Logical Operators
let mood = 'sleepy';
let tirednessLevel = 6;
if(mood==='sleepy' && tirednessLevel>8){
  console.log('time to sleep');
  
}
else{
  console.log('not bed time yet');
}


// Ternary Operator

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect? console.log('Correct!'):
  console.log('Incorrect!')

let favoritePhrase = 'like That!';

favoritePhrase === 'like That!'?console.log('I like that!'):console.log("I don't like that!");

// else if statements

let season = '';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if(season ==='winter'){
  console.log('It\'s winter! Everything is covered in snow.');
}
else if(season ==='fall'){
  console.log('It\'s fall! Leaves are falling!');
}
else if(season ==='summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid season.');
}

// The switch keyword

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
    case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
    
}


// Function Declarations

function getReminder(){
  console.log('Water the plants.');
}
function greetInSpanish(){
  console.log('Buenas Tardes.');
}

// Calling a Function

function sayThanks(){
 console.log('Thank you for your purchase! We appreciate your business.'); 
}
sayThanks();
sayThanks();
sayThanks();

// Parameters and Arguments

function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');

// Default Parameters

function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// Return

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

// Helper Functions

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
 return monitorCount(rows, columns)  * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);


// Function Expressions

const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater());




// Arrow Functions




const plantNeedsWater = (day) =>{
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};


// Concise Body Arrow Functions

const plantNeedsWater = day =>  day === 'Wednesday' ?
 true : false;

 // Blocks and Scope

 const city = 'New York City';
function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
  
}
console.log(logCitySkyline());

// Global Scope

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
  
}
console.log(callMyNightSky());


// Block Scope

function logVisibleLightWaves(){
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
  
}
logVisibleLightWaves();
 console.log(lightWaves);

// Scope Pollution

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
  
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

// Good Scoping

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if( region === 'The Arctic' ){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
    
  }
  
  console.log(lightWaves);
};

logVisibleLightWaves();


// Arrays

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

// Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
var  listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);


// Update Elements

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1]=  'avocados';

// Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
utensils[3] = 'Spoon';
console.log(utensils);

// The .length property

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);


// The .push() Method


const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('1', '2');
console.log(chores);

// The .pop() Method

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);


// More Array Methods


const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);



console.log(groceryList.slice(1,4));
groceryList.indexOf('pasta');
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// Arrays and Functions

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
   
}

changeArr(concept);
console.log(concept);
function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);


// Nested Arrays

var numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];


// Repeating Tasks Manually

var vacationSpots = ['home','office','hostel'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


// The For Loop

for (let i=5;i<=10;i++){
console.log(i);
}



// Looping in Reverse


for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}


// Looping through Arrays

const vacationSpots = ['Bali', 'Paris', 'Tulum'];


for ( let i=0;i< vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i] }`);
  
}


// Nested Loops

var bobsFollowers = ['a' ,'b' ,'c','d'];
var tinasFollowers = ['a','b','ee'];
var mutualFollowers = [];
for (let i= 0; i<bobsFollowers.length; i++){
  for (let j=0 ; j<tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[i]);
      console.log(tinasFollowers[i]);
      
    }
  }
}


// The While Loop

const cards = ['diamond', 'spade', 'heart', 'club'];
let  currentCard =0;
while (currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  
    currentCard ++;
  console.log(currentCard);
}


// do while

var cupsOfSugarNeeded = 0;
var cupsAdded =0;
do{
  cupsAdded ++;
}while(cupsAdded < cupsOfSugarNeeded);


// The break Keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for(let i=0;i<rapperArray.length;i++){
console.log(rapperArray[i]);
  if(rapperArray[i] === 'Notorious B.I.G.' ){
  break;
  }
}
console.log("And if you don't know, now you know.");





// higher order functions
// Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);


// Functions as Parameters


const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);


// ITERATORS

// map,foreach,filter
// foreach Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(element =>
  console.log('I want to eat a ' + element));


// map Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)

// filter Method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
  return word.length > 7;
})

// findIndex Method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});
 // .reduce
 const newNumbers = [1, 3, 5, 7];
const newSum  = newNumbers.reduce((accumulator , currentValue ) =>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10);
console.log(newSum);


// Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some(word => {
  return word.length < 6;
}));

const interestingWords = words.filter((word) => {return word.length > 5});

console.log(interestingWords.every((word) => {return word.length > 5}));

// Choose the Right Iterator
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];
cities.forEach(city => console.log('Have you visited ' + city + '?'));
const longCities = cities.filter(city => city.length > 7);
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)
const smallerNums = nums.map(num => num - 5);
nums.every(num => num < 0);


// Creating Object Literals

let fasterShip = {
  color:'silver',
  'Fuel Type':'Turbo Fuel'
}
</script>































































