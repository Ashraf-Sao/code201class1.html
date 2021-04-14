'use strict';
let score =0;

{
  const userName = prompt('introduce your name please');
  alert('Welcome to my guessing game ' + userName);
  console.log(userName);
}



let student = prompt('Do I study at LTUC?', 'Yes or NO').toLowerCase();
while (student !== 'yes' && student !== 'no') {
  student = prompt('acceptable answers are yes or no only' , 'Yes or No').toLowerCase();
//console.log('yes');
}
alert('correct answer is yes');
score++;

let beginner = prompt('Do you think I am still a beginner?', 'Yes or NO').toLowerCase();
while (beginner !== 'yes' && beginner !== 'no') {
  student = prompt('acceptable answers are yes or no only' , 'Yes or No').toLowerCase();
//console.log('yes');
}

alert('correct answer is yes');
score++;

let chef = prompt('Was I a chef before?', 'Yes or NO').toLowerCase();
while (chef !== 'yes' && chef !== 'no') {
  student = prompt('acceptable answers are yes or no only' , 'Yes or No').toLowerCase();
//console.log('yes');
}

alert('correct answer is yes');
score++;

let language = prompt('Do I speak Spanish?', 'Yes or NO').toLowerCase();
while (language !== 'yes' && language !== 'no') {
  student = prompt('acceptable answers are yes or no only' , 'Yes or No').toLowerCase();
//console.log('yes');
}

alert('correct answer is yes');
score++;

let live = prompt('Do I live in Irbid?', 'Yes or NO').toLowerCase();
while (live !== 'yes' && live !== 'no') {
  student = prompt('acceptable answers are yes or no only' , 'Yes or No').toLowerCase();
//console.log('no');
}
alert('correct answer is no');
score++;

const hiddenGuess=8;
let attempts=0;
let guessing=prompt('Guess the Number');

while (attempts<3){
  ++attempts;
  if (parseInt(guessing)<hiddenGuess){guessing=prompt('Too Low');}
  else if (parseInt(guessing)>hiddenGuess) {guessing=prompt('Too high');}
  else if (parseInt(guessing)===hiddenGuess) break;
}
alert ('Right Answer is ' + hiddenGuess);
score++;


let favCloros = ['red' , 'green' ,'blue' , 'yellow'];
let chances = 0;
while (chances<=6){
  let userGuess= prompt('can you guess one of my favorite colors?');
  for (let i=0; i<favCloros.length; i++)
  {
    if (userGuess===favCloros[i]){
      alert ('you are correct');
      score++;
      chances = 8;
      break;
    }

  }
  if (chances<= 6){
    alert ('you are wrong');
  }

  chances ++ ;
}

alert ('your score is ' + score);
