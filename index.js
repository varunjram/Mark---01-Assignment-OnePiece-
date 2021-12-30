 
var readlineSync = require("readline-sync");

score = 0;

console.log("Welcome to ONE-PIECE Quiz");
console.log("*************************");

console.log("\n");

var userName = readlineSync.question("Can I know Your Name ");

var interest = readlineSync.question("Hi " + userName + ` are you interested in playing ONE-PIECE Quiz!!! 
type 'y' for yes and 'n' for no
y: Yes
n: NO\n`);

//High score data

var highScore = [
  {
    name : "Varun J",
    score: 10
  },
  {
    name : "Karan",
    score: 10
  },
  {
    name : "Puttu",
    score: 10
  },
  {
    name : "empty",
    score: 0
  },
  {
    name : "empty",
    score: 0
  },
  {
    name : "empty",
    score: 0
  },
  {
    name : "empty",
    score: 0
  },
  {
    name : "empty",
    score: 0
  },
  {
    name : "empty",
    score: 0
  },
  {
    name : "empty",
    score: 0
  },
]
 
if (interest === "y"){
  //  play function

function play (question,answer){
var useranswer = readlineSync.question(question);
 if (useranswer === answer){
   console.log("You are Right ✔")
   score = score + 1;
 } else {
   console.log("You are Wrong X")
  //  score = score - 1;
 }
  console.log("current score = " ,  score);

  console.log("----------------------------------------------------")
}

var questions = [
  {
  question: `
  1.Where was Gol D. Roger born?
   a: North-Blue
   b: South-Blue
   c: East-Blue
   d: West-Blue\n`,
  answer  :  "c"
}, {
  question:`
  2.Who is Luffy's first main opponent?
  a: Buggy
  b: Captain Kuro
  c: Alvida
  d: Ax-Hand Morgan\n`,
  answer  :  "c"
}, {
  question:`
  3.What is the name of the zombie that Moria let possess Brooke's shadow in the Thriller Bark Arc? "
  a: Inuppe
  b: Ryuma
  c: Kumashi
  d: Unigaro\n`,
  answer  :  "b"
}, {
  question: `
  4.What is Luffy's idol's name?
  a: Gol D. Roger
  b: Ivanka
  c: ACE
  d: Shanks\n`,
  answer  :  "d"
}, {
  question: `
  5.What name does Luffy uses to enter the Colosseum in Dressrosa ?
  a: Fluffy
  b: Lucy 
  c: Puffy
  d: Mucy\n`,
  answer  :  "b"
}, {
  question:`
  6.From which type of wood did Franky make Thousand Sunny?
  a: Pitch Pine
  b: Ohara(Tree of Knowledge) 
  c: Kuuigosu
  d: Adam Wood\n`,
  answer  :  "d"
}, {
  question: `
  7.What was the first part of his body that Luffy stretched?
  a: Left arm
  b: Legs
  c: Right cheek
  d: Neck\n`,
  answer  :  "a"
},{
  question: `
  8.What was used as a weapon by Cabaji while fighting Zoro?
  a: Whip
  b: Rubber Bands
  c: Water Gun
  d: Spinning Tops\n`,
  answer  :  "d"
},{
  question: `
  9.What was the bounty of the mountain bandit that entered Makino's bar and threatened Shanks?
  a: 18.000.000 Beli
  b: 80.000 Beli
  c: 1.800.000 Beli
  d: 8.000.000 Beli\n`,
  answer  :  "d"
},{
  question: `
  10.In Syrup Village, what was Onion's weapon of choice?
  a: Slingshot
  b: Shovel
  c: Shotgun
  d: Stone axe\n`,
  answer  :  "b"
},{
  question: `
  11.Which event was triggered by mistake?
  a: Buster call on Enies Lobby
  b: Execution of Gol D. Roger
  c: Buster call on Ohara
  d: Declaration of war to the World Govt\n`,
  answer  :  "a"
},{
  question: `
  12.Instead of Nico Robin, all that Aokiji took with him from Water 7 was...
  a: A pet hamster
  b: A shish Kebab
  c: The plan for an ancient wepon
  d: A book about gardening\n`,
  answer  :  "b"
},{
  question: `
  13.Which Channel of the Thousand Sunny's Soldier Dock System contains the Mini Merry II?
  a: 4
  b: 3
  c: 2
  d: 1\n`,
  answer  :  "c"
},{
  question: `
  14.Who held the key to Robin's sea stone handcuffs?
  a: Lucci
  b: Blueno
  c: kaku
  d: Spandam\n`,
  answer  :  "c"
},{
  question: `
  15.How many bottles of cola were consumed by Franky's strongest Coup de Vent?
  a: 2
  b: 1
  c: 1.5
  d: 2.5\n`,
  answer  :  "c"
},
];

for (var i = 0; i<questions.length; i ++) {
//  var currentQuestions = questions[i];
 play(questions[i].question,questions[i].answer)
}

console.log("Awesome!!! Your Final score is " + score);
  
} else {
  console.log("OK Bye ta ta " + userName)
}

console.log("High score data ")
for (var i = 0; i < highScore.length; i++){
  
console.log(i+1 + ". " + highScore[i].name,highScore[i].score)
console.log("\n")

}


